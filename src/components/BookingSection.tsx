"use client";

import { useState, useEffect, useMemo } from "react";
import Calendar from "react-calendar";
import { addDays, isWeekend, startOfDay } from "date-fns";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { submitBooking } from "@/app/actions/booking";

const TIMEZONE_OPTIONS = [
  { value: "Europe/London", label: "🇬🇧 London (GMT / BST)" },
  { value: "Europe/Madrid", label: "🇪🇸 Madrid / Barcelona (CET / CEST)" },
  { value: "Europe/Berlin", label: "🇩🇪 Berlin / Frankfurt (CET / CEST)" },
  { value: "Europe/Paris", label: "🇫🇷 Paris (CET / CEST)" },
  { value: "Europe/Rome", label: "🇮🇹 Rome (CET / CEST)" },
  { value: "Europe/Amsterdam", label: "🇳🇱 Amsterdam (CET / CEST)" },
  { value: "Europe/Brussels", label: "🇧🇪 Brussels (CET / CEST)" },
  { value: "Europe/Zurich", label: "🇨🇭 Zurich (CET / CEST)" },
  { value: "Europe/Lisbon", label: "🇵🇹 Lisbon (WET / WEST)" },
  { value: "Europe/Athens", label: "🇬🇷 Athens (EET / EEST)" },
  { value: "America/Guayaquil", label: "🇪🇨 Ecuador (Quito, Guayaquil) (GMT-5)" },
  { value: "America/Bogota", label: "🇨🇴 Colombia (Bogotá) (GMT-5)" },
  { value: "America/Lima", label: "🇵🇪 Peru (Lima) (GMT-5)" },
  { value: "America/Mexico_City", label: "🇲🇽 Mexico City (GMT-6)" },
  { value: "America/New_York", label: "🇺🇸 US Eastern (New York, Miami) (EST / EDT)" },
  { value: "America/Chicago", label: "🇺🇸 US Central (Chicago, Dallas) (CST / CDT)" },
  { value: "America/Denver", label: "🇺🇸 US Mountain (Denver) (MST / MDT)" },
  { value: "America/Los_Angeles", label: "🇺🇸 US Pacific (Los Angeles) (PST / PDT)" },
  { value: "America/Santiago", label: "🇨🇱 Chile (Santiago) (CLT)" },
  { value: "America/Argentina/Buenos_Aires", label: "🇦🇷 Argentina (Buenos Aires) (ART)" },
  { value: "America/Sao_Paulo", label: "🇧🇷 Brazil (São Paulo) (BRT)" },
  { value: "Asia/Dubai", label: "🇦🇪 UAE (Dubai) (GST)" },
  { value: "Asia/Singapore", label: "🇸🇬 Singapore (SGT)" },
  { value: "Australia/Sydney", label: "🇦🇺 Australia (Sydney) (AEST)" },
];

function getCountryCodeFromTimezone(tz: string): any {
  if (!tz) return "GB";
  if (tz.includes("Guayaquil") || tz.includes("Galapagos")) return "EC";
  if (tz.includes("Madrid") || tz.includes("Canary") || tz.includes("Ceuta")) return "ES";
  if (tz.includes("London")) return "GB";
  if (tz.includes("Berlin")) return "DE";
  if (tz.includes("Paris")) return "FR";
  if (tz.includes("Rome")) return "IT";
  if (tz.includes("Amsterdam")) return "NL";
  if (tz.includes("Brussels")) return "BE";
  if (tz.includes("Zurich")) return "CH";
  if (tz.includes("Lisbon")) return "PT";
  if (tz.includes("Athens")) return "GR";
  if (tz.includes("Bogota")) return "CO";
  if (tz.includes("Lima")) return "PE";
  if (tz.includes("Mexico")) return "MX";
  if (tz.includes("Santiago")) return "CL";
  if (tz.includes("Buenos_Aires")) return "AR";
  if (tz.includes("Sao_Paulo")) return "BR";
  if (tz.includes("New_York") || tz.includes("Chicago") || tz.includes("Denver") || tz.includes("Los_Angeles")) return "US";
  if (tz.includes("Dubai")) return "AE";
  if (tz.includes("Singapore")) return "SG";
  if (tz.includes("Sydney") || tz.includes("Melbourne") || tz.includes("Brisbane")) return "AU";
  
  return "GB";
}

// Form Validation Schema
const bookingSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  question: z.string().min(2, "This field is required"),
  termsAccepted: z.literal(true, {
    message: "You must accept the terms and conditions",
  }),
});

type BookingFormData = z.infer<typeof bookingSchema>;

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function BookingSection() {
  const currentLocale = 'es';
  const [isMounted, setIsMounted] = useState(false);
  const [date, setDate] = useState<Value>(null);
  const [availableSlots, setAvailableSlots] = useState<Date[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<Date | null>(null);
  const [userTimezone, setUserTimezone] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: "success" | "error", text: string} | null>(null);
  const [bookingResult, setBookingResult] = useState<{ zoomLink?: string; meetingTime?: string } | null>(null);

  const { register, handleSubmit, control, formState: { errors } } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    mode: "all",
  });

  useEffect(() => {
    setIsMounted(true);
    const detected = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setUserTimezone(detected || "America/Guayaquil");
  }, []);

  const effectiveTimezones = useMemo(() => {
    if (!userTimezone) return TIMEZONE_OPTIONS;
    const exists = TIMEZONE_OPTIONS.some((tz) => tz.value === userTimezone);
    if (!exists) {
      return [{ value: userTimezone, label: `🌐 Detected (${userTimezone.replace(/_/g, " ")})` }, ...TIMEZONE_OPTIONS];
    }
    return TIMEZONE_OPTIONS;
  }, [userTimezone]);

  const minDate = startOfDay(new Date());
  
  // Calculate max date (5 working days from now)
  let maxDate = new Date();
  let addedDays = 0;
  while (addedDays < 5) {
    maxDate = addDays(maxDate, 1);
    if (!isWeekend(maxDate)) {
      addedDays++;
    }
  }

  // Handle Date Selection
  const handleDateChange = async (value: Value) => {
    setDate(value);
    setSelectedSlot(null);
    
    if (value instanceof Date) {
      // Generate slots for 08:00 to 13:00 Ecuador Time (GMT-5)
      const year = value.getFullYear();
      const month = String(value.getMonth() + 1).padStart(2, '0');
      const day = String(value.getDate()).padStart(2, '0');
      
      const slots = [];
      const now = new Date();
      const bufferMs = 30 * 60 * 1000; // 30 minutes

      // Fetch booked slots for this day from server
      let bookedIsoStrings: string[] = [];
      try {
        const { getAvailableSlots } = await import("@/app/actions/booking");
        const dateString = `${year}-${month}-${day}T00:00:00-05:00`;
        bookedIsoStrings = await getAvailableSlots(dateString);
      } catch (err) {
        console.error("Failed to fetch booked slots", err);
      }

      for (let hour = 8; hour <= 13; hour++) {
        // Create an ISO string with the fixed -05:00 offset for Ecuador
        const isoString = `${year}-${month}-${day}T${String(hour).padStart(2, '0')}:00:00-05:00`;
        const slotDate = new Date(isoString);

        // Only add slot if it's at least 30 minutes in the future AND not booked
        const isBooked = bookedIsoStrings.includes(slotDate.toISOString());
        
        if (slotDate.getTime() - now.getTime() >= bufferMs && !isBooked) {
          slots.push(slotDate);
        }
      }
      setAvailableSlots(slots);
    } else {
      setAvailableSlots([]);
    }
  };

  function getGoogleCalendarUrl(meetingTimeStr?: string, zoomLinkStr?: string) {
    if (!meetingTimeStr) return "#";
    const start = new Date(meetingTimeStr);
    const end = new Date(start.getTime() + 60 * 60 * 1000);
    const formatGCal = (d: Date) => d.toISOString().replace(/-|:|\.\d\d\d/g, "");
    
    const title = "Consultation with Kevin Easter - Intra Systems";
    const details = `Consultation meeting with Kevin Easter.\n\nJoin Zoom Meeting: ${zoomLinkStr || ""}`;
    
    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: title,
      dates: `${formatGCal(start)}/${formatGCal(end)}`,
      details: details,
      location: zoomLinkStr || "",
    });
    
    return `https://calendar.google.com/calendar/render?${params.toString()}`;
  }

  const onSubmit = async (data: BookingFormData) => {
    if (!selectedSlot) return;
    setIsSubmitting(true);
    setSubmitMessage(null);
    setBookingResult(null);
    
    const payload = {
      ...data,
      meeting_time: selectedSlot.toISOString(),
      language: currentLocale,
    };
    
    console.log("Sending payload:", payload);
    const result = await submitBooking(payload);
    setIsSubmitting(false);

    if (result.success) {
      setSubmitMessage({ type: "success", text: "Booking confirmed! We have saved your slot." });
      setBookingResult({ zoomLink: result.zoomLink, meetingTime: result.meetingTime });
      // Optionally reset form here, but showing success is good enough for now.
    } else {
      setSubmitMessage({ type: "error", text: result.error || "An error occurred." });
    }
  };

  return (
    <section id="booking" className="w-full bg-[#0A0F24] px-4 py-24 flex flex-col items-center relative overflow-hidden">
      {/* Dynamic background lighting */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#00F2FE]/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl w-full text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-extrabold text-white mb-8 tracking-tight drop-shadow-lg">
          AGENDA UNA LLAMADA
        </h2>
        
        <div className="text-left max-w-3xl mx-auto space-y-6 mb-16 glass-card p-8 md:p-10 rounded-2xl">
          <div className="flex items-start gap-4">
            <span className="text-[var(--color-accent-cyan)] text-2xl font-black">✓</span>
            <p className="text-lg md:text-xl text-gray-200">
              <span className="font-bold text-white">Descubra cómo ahorrar tiempo y dinero:</span> Con soluciones técnicas rápidas y garantizadas para sus equipos dentales.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[var(--color-accent-cyan)] text-2xl font-black">✓</span>
            <p className="text-lg md:text-xl text-gray-200">
              <span className="font-bold text-white">Acceda a repuestos originales/alternos y atención especializada:</span> Sin tener que buscar entre múltiples proveedores.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[var(--color-accent-cyan)] text-2xl font-black">✓</span>
            <p className="text-lg md:text-xl text-gray-200">
              <span className="font-bold text-white">Evite interrupciones en su clínica:</span> Con nuestro servicio puerta a puerta y soporte técnico certificado a nivel nacional.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-[0_20px_60px_rgba(0,242,254,0.1)] rounded-3xl flex flex-col items-center max-w-2xl mx-auto border-4 border-[var(--color-light-bg)]">
          
          <div className="relative w-64 h-24 mb-8">
            <Image src="/LogoDenteq.jpeg" alt="Denteq Logo" fill className="object-contain" />
          </div>

          <h3 className="text-2xl font-bold mb-8">Selecciona una Hora</h3>

          <div className="flex flex-col md:flex-row gap-12 w-full justify-center">
            
            {/* Calendar - Only render when mounted to prevent hydration errors */}
            <div className="flex-1 flex flex-col items-center">
              {isMounted ? (
                <>
                  <Calendar 
                    onChange={handleDateChange} 
                    value={date} 
                    minDate={minDate}
                    maxDate={maxDate}
                    tileDisabled={({ date }) => isWeekend(date)}
                    locale="en-GB"
                    className="shadow-sm border border-gray-100 rounded-lg"
                  />
                  <div className="mt-4 flex flex-col items-center w-full max-w-[320px]">
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 font-semibold mb-1.5 uppercase tracking-wider">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Tu Zona Horaria:</span>
                    </div>
                    <select
                      value={userTimezone}
                      onChange={(e) => setUserTimezone(e.target.value)}
                      className="w-full bg-gray-50 border border-gray-300 text-gray-800 text-xs font-medium rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none shadow-sm cursor-pointer hover:bg-white transition-colors"
                    >
                      {effectiveTimezones.map((tz) => (
                        <option key={tz.value} value={tz.value}>
                          {tz.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              ) : (
                <div className="w-[350px] h-[300px] bg-gray-100 animate-pulse rounded-lg flex items-center justify-center text-gray-400">
                  Loading Calendar...
                </div>
              )}
            </div>

            {/* Time Slots & Form */}
            <div className="flex-1 w-full flex flex-col items-center md:items-start">
              {isMounted && date instanceof Date && availableSlots.length > 0 && !selectedSlot && (
                <div className="w-full">
                  <h4 className="font-bold mb-4">Selecciona una Hora</h4>
                  <div className="grid grid-cols-2 gap-3 w-full">
                    {availableSlots.map((slot, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedSlot(slot)}
                        className="p-3 border-2 border-blue-500 text-blue-600 font-bold rounded-lg hover:bg-blue-50 transition-colors shadow-sm"
                      >
                        {slot.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit',
                          timeZone: userTimezone || undefined
                        })}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {isMounted && selectedSlot && (
                <form className="w-full text-left space-y-4" onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg border border-blue-100 mb-6">
                    <div>
                      <p className="text-sm text-gray-500 font-bold">Hora Seleccionada</p>
                      <p className="font-bold text-blue-700">
                        {selectedSlot.toLocaleDateString([], { timeZone: userTimezone || undefined })} at {selectedSlot.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', timeZone: userTimezone || undefined })}
                      </p>
                    </div>
                    <button type="button" onClick={() => setSelectedSlot(null)} className="text-sm underline text-blue-600 font-bold">Cambiar</button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Nombre *</label>
                      <input 
                        {...register("firstName")}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                        placeholder="John"
                      />
                      {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Apellido *</label>
                      <input 
                        {...register("lastName")}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                        placeholder="Doe"
                      />
                      {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Correo Electrónico *</label>
                    <input 
                      {...register("email")}
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" 
                      placeholder="john@dental.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Número de Teléfono *</label>
                    <Controller
                      name="phone"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <PhoneInput
                          key={userTimezone}
                          international
                          defaultCountry={getCountryCodeFromTimezone(userTimezone)}
                          value={value}
                          onChange={onChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 bg-white"
                        />
                      )}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                    <style jsx global>{`
                      .PhoneInputInput {
                        border: none;
                        outline: none;
                        background: transparent;
                        margin-left: 10px;
                        width: 100%;
                      }
                    `}</style>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">¿Qué problema técnico o repuesto necesita para su clínica? *</label>
                    <textarea 
                      {...register("question")}
                      rows={3} 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    ></textarea>
                    {errors.question && <p className="text-red-500 text-xs mt-1">{errors.question.message}</p>}
                  </div>

                  <div className="flex items-start gap-3 mt-4">
                    <input 
                      type="checkbox" 
                      id="terms"
                      {...register("termsAccepted")}
                      className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="terms" className="text-sm text-gray-600">
                      Acepto los términos y condiciones proporcionados por la empresa. Al proporcionar mi número de teléfono, acepto recibir mensajes de texto de la empresa.
                    </label>
                  </div>
                  {errors.termsAccepted && <p className="text-red-500 text-xs">{errors.termsAccepted.message}</p>}

                  {submitMessage && (
                    <div className={`p-4 rounded-lg font-bold text-center ${submitMessage.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      <p>{submitMessage.type === "success" ? "¡Gracias! Tu cita ha sido confirmada. Por favor revisa tu correo para obtener el enlace de Zoom." : submitMessage.text}</p>
                      {submitMessage.type === "success" && bookingResult && (
                        <a
                          href={getGoogleCalendarUrl(bookingResult.meetingTime, bookingResult.zoomLink)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 w-full bg-[#4285F4] text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors shadow-md mt-4 text-sm uppercase tracking-wide"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                          </svg>
                          Añadir a Google Calendar
                        </a>
                      )}
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={isSubmitting || submitMessage?.type === "success"}
                    className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "PROCESANDO..." : (submitMessage?.type === "success" ? "CONFIRMADO!" : "CONFIRMAR CITA")}
                  </button>
                </form>
              )}

              {isMounted && !(date instanceof Date) && (
                <div className="h-full flex items-center justify-center text-gray-400 font-medium text-center">
                  Por favor, selecciona una fecha en el calendario para ver los horarios disponibles.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
