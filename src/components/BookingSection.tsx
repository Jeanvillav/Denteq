"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { submitBooking } from "@/app/actions/booking";

// Form Validation Schema
const pickupSchema = z.object({
  firstName: z.string().min(2, "El nombre es requerido"),
  lastName: z.string().min(2, "El apellido es requerido"),
  email: z.string().email("Por favor ingresa un correo válido"),
  phone: z.string().min(10, "Por favor ingresa un teléfono válido"),
  city: z.string().min(2, "La ciudad es requerida"),
  mainStreet: z.string().min(2, "La calle principal es requerida"),
  crossStreet: z.string().min(2, "La calle transversal es requerida"),
  houseNumber: z.string().min(1, "El número de casa/consultorio es requerido"),
  openTime: z.string().min(1, "Apertura requerida"),
  closeTime: z.string().min(1, "Cierre requerido"),
  pickupDate: z.string().min(2, "Por favor selecciona un día de recolección"),
  question: z.string().min(2, "Por favor detalla el problema o las piezas"),
  termsAccepted: z.literal(true, {
    message: "Debes aceptar los términos y condiciones",
  }),
});

type PickupFormData = z.infer<typeof pickupSchema>;

export default function BookingSection() {
  const [isMounted, setIsMounted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: "success" | "error", text: string} | null>(null);

  const { register, handleSubmit, control, formState: { errors } } = useForm<PickupFormData>({
    resolver: zodResolver(pickupSchema),
    mode: "all",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubmit = async (data: PickupFormData) => {
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    const payload = {
      ...data,
      businessHours: `${data.openTime} a ${data.closeTime}`
    };
    
    console.log("Sending payload:", payload);
    const result = await submitBooking(payload);
    setIsSubmitting(false);

    if (result.success) {
      setSubmitMessage({ type: "success", text: "¡Solicitud recibida! Te llamaremos muy pronto para confirmar el envío del courier." });
    } else {
      setSubmitMessage({ type: "error", text: result.error || "Ocurrió un error. Inténtalo de nuevo." });
    }
  };

  return (
    <section id="booking" className="w-full bg-[#050D1F] px-4 py-24 flex flex-col items-center relative overflow-hidden" aria-label="Reserva tu recolección">
      {/* Background accents */}
      <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-[var(--color-accent-cyan)]/10 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-[10%] left-[-5%] w-[40%] h-[40%] bg-[#00D68F]/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      
      <div className="max-w-4xl w-full text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-serif font-extrabold text-[var(--color-accent-yellow)] mb-6 tracking-tight drop-shadow-md uppercase">
          Solicita tu recolección gratuita
        </h2>
        
        <div className="text-left max-w-2xl mx-auto space-y-4 mb-12 glass-card p-6 md:p-8 rounded-2xl border border-[var(--color-accent-cyan)]/20 shadow-lg">
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-accent-cyan)] text-xl font-black mt-0.5" aria-hidden="true">✓</span>
            <p className="text-base md:text-lg text-gray-300">
              <strong className="text-white">Servicio Puerta a Puerta:</strong> Vamos hasta tu clínica en todo el Ecuador para recoger tus piezas.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-[var(--color-accent-cyan)] text-xl font-black mt-0.5" aria-hidden="true">✓</span>
            <p className="text-base md:text-lg text-gray-300">
              <strong className="text-white">Presupuesto sin compromiso:</strong> Analizamos tus instrumentos y te damos la mejor opción de reparación.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] rounded-3xl flex flex-col items-center max-w-2xl mx-auto border-4 border-[var(--color-light-bg)] relative">
          
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#00D68F] text-white px-5 py-2 rounded-full font-bold text-sm shadow-md whitespace-nowrap flex items-center gap-2">
            <span aria-hidden="true">🔒</span> Tus datos son privados y seguros
          </div>

          <div className="relative w-48 h-16 mb-8 mt-4">
            <Image src="/LogoDenteq.jpeg" alt="Logo de Denteq" fill className="object-contain" />
          </div>

          <h3 className="text-xl md:text-2xl font-bold mb-8 text-[var(--color-primary-dark)] text-center w-full pb-4 border-b border-gray-100">
            Datos para la Recolección
          </h3>

          {isMounted && (
            <form className="w-full text-left space-y-5" onSubmit={handleSubmit(onSubmit)} noValidate>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-bold text-gray-700 mb-1">Nombre *</label>
                  <input 
                    id="firstName"
                    {...register("firstName")}
                    className="w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-accent-cyan)] focus:border-[var(--color-accent-cyan)] outline-none bg-gray-50 text-gray-800 transition-all shadow-sm" 
                    placeholder="Ej. Juan"
                    aria-invalid={!!errors.firstName}
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-bold text-gray-700 mb-1">Apellido *</label>
                  <input 
                    id="lastName"
                    {...register("lastName")}
                    className="w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-accent-cyan)] focus:border-[var(--color-accent-cyan)] outline-none bg-gray-50 text-gray-800 transition-all shadow-sm" 
                    placeholder="Ej. Pérez"
                    aria-invalid={!!errors.lastName}
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Correo Electrónico *</label>
                  <input 
                    id="email"
                    {...register("email")}
                    type="email"
                    className="w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-accent-cyan)] focus:border-[var(--color-accent-cyan)] outline-none bg-gray-50 text-gray-800 transition-all shadow-sm" 
                    placeholder="doctor@clinica.com"
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Teléfono Móvil *</label>
                  <Controller
                    name="phone"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <PhoneInput
                        international
                        defaultCountry="EC"
                        value={value}
                        onChange={onChange}
                        id="phone"
                        className="w-full p-3.5 border border-gray-200 rounded-xl focus-within:ring-2 focus-within:ring-[var(--color-accent-cyan)] focus-within:border-[var(--color-accent-cyan)] bg-gray-50 text-gray-800 transition-all shadow-sm [&_input]:w-full [&_input]:bg-transparent [&_input]:outline-none [&_input]:ml-3 [&_input]:text-gray-800 [&_input]:border-none"
                      />
                    )}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6 mt-6">
                <h4 className="font-bold text-[var(--color-primary-dark)] text-lg mb-4">Dirección de Recolección</h4>
                
                <div className="space-y-5">
                  <div>
                    <label htmlFor="city" className="block text-sm font-bold text-gray-700 mb-1">Ciudad *</label>
                    <input 
                      id="city"
                      {...register("city")}
                      className="w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-accent-cyan)] focus:border-[var(--color-accent-cyan)] outline-none bg-gray-50 text-gray-800 transition-all shadow-sm" 
                      placeholder="Ej. Quito, Guayaquil..."
                      aria-invalid={!!errors.city}
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.city.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="mainStreet" className="block text-sm font-bold text-gray-700 mb-1">Calle Principal *</label>
                      <input 
                        id="mainStreet"
                        {...register("mainStreet")}
                        className="w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-accent-cyan)] focus:border-[var(--color-accent-cyan)] outline-none bg-gray-50 text-gray-800 transition-all shadow-sm" 
                        aria-invalid={!!errors.mainStreet}
                      />
                      {errors.mainStreet && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.mainStreet.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="crossStreet" className="block text-sm font-bold text-gray-700 mb-1">Calle Transversal *</label>
                      <input 
                        id="crossStreet"
                        {...register("crossStreet")}
                        className="w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-accent-cyan)] focus:border-[var(--color-accent-cyan)] outline-none bg-gray-50 text-gray-800 transition-all shadow-sm" 
                        aria-invalid={!!errors.crossStreet}
                      />
                      {errors.crossStreet && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.crossStreet.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-end">
                    <div>
                      <label htmlFor="houseNumber" className="block text-sm font-bold text-gray-700 mb-1">Número de Casa / Consultorio *</label>
                      <input 
                        id="houseNumber"
                        {...register("houseNumber")}
                        className="w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-accent-cyan)] focus:border-[var(--color-accent-cyan)] outline-none bg-gray-50 text-gray-800 transition-all shadow-sm" 
                        placeholder="Ej. N45-12 o Piso 3"
                        aria-invalid={!!errors.houseNumber}
                      />
                      {errors.houseNumber && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.houseNumber.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Horario de Atención *</label>
                      <div className="flex items-center gap-2">
                        <div className="flex-1">
                          <input 
                            type="time"
                            {...register("openTime")}
                            className="w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-accent-cyan)] focus:border-[var(--color-accent-cyan)] outline-none bg-gray-50 text-gray-800 transition-all shadow-sm" 
                            aria-invalid={!!errors.openTime}
                            aria-label="Hora de apertura"
                          />
                        </div>
                        <span className="font-bold text-gray-400">a</span>
                        <div className="flex-1">
                          <input 
                            type="time"
                            {...register("closeTime")}
                            className="w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-accent-cyan)] focus:border-[var(--color-accent-cyan)] outline-none bg-gray-50 text-gray-800 transition-all shadow-sm" 
                            aria-invalid={!!errors.closeTime}
                            aria-label="Hora de cierre"
                          />
                        </div>
                      </div>
                      {(errors.openTime || errors.closeTime) && (
                        <p className="text-red-500 text-xs mt-1.5 font-medium">Ambos horarios son requeridos</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6 mt-6">
                <h4 className="font-bold text-[var(--color-primary-dark)] text-lg mb-4">Detalles Adicionales</h4>
                
                <div className="space-y-5">
                  <div>
                    <label htmlFor="pickupDate" className="block text-sm font-bold text-gray-700 mb-1">¿Qué día prefiere la recolección? *</label>
                    <select 
                      id="pickupDate"
                      {...register("pickupDate")}
                      className="w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-accent-cyan)] focus:border-[var(--color-accent-cyan)] outline-none bg-gray-50 text-gray-800 transition-all shadow-sm cursor-pointer"
                      aria-invalid={!!errors.pickupDate}
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Lo más pronto posible (Hoy/Mañana)">Lo más pronto posible (Hoy/Mañana)</option>
                      <option value="En 2 días laborables">En 2 días laborables</option>
                      <option value="La próxima semana">La próxima semana</option>
                      <option value="Te indico cuando me llames">Te indico cuando me llames</option>
                    </select>
                    {errors.pickupDate && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.pickupDate.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="question" className="block text-sm font-bold text-gray-700 mb-1">¿Qué piezas envía y cuál es el problema? *</label>
                    <textarea 
                      id="question"
                      {...register("question")}
                      rows={3} 
                      className="w-full p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-accent-cyan)] focus:border-[var(--color-accent-cyan)] outline-none bg-gray-50 text-gray-800 transition-all shadow-sm resize-y"
                      placeholder="Ej. Envío 2 piezas de mano que cabecean y no tienen fuerza."
                      aria-invalid={!!errors.question}
                    ></textarea>
                    {errors.question && <p className="text-red-500 text-xs mt-1.5 font-medium">{errors.question.message}</p>}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 mt-6 pt-2 bg-gray-50 p-4 rounded-xl border border-gray-100">
                <input 
                  type="checkbox" 
                  id="terms"
                  {...register("termsAccepted")}
                  className="mt-1 w-5 h-5 text-[var(--color-accent-cyan)] bg-white border-gray-300 rounded focus:ring-[var(--color-accent-cyan)] cursor-pointer"
                />
                <label htmlFor="terms" className="text-sm text-gray-700 font-medium cursor-pointer leading-tight">
                  Entiendo que Denteq me llamará para confirmar estos datos antes de enviar al courier.
                </label>
              </div>
              {errors.termsAccepted && <p className="text-red-500 text-xs font-medium">{errors.termsAccepted.message}</p>}

              {submitMessage && (
                <div 
                  className={`p-4 rounded-xl font-bold text-center mt-6 border-l-4 shadow-sm ${submitMessage.type === "success" ? "bg-green-50 text-green-800 border-green-500" : "bg-red-50 text-red-800 border-red-500"}`}
                  role="alert"
                >
                  <p>{submitMessage.text}</p>
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting || submitMessage?.type === "success"}
                className="w-full bg-[var(--color-accent-yellow)] text-[#B45309] border border-[#B45309]/20 font-extrabold py-6 rounded-2xl hover:scale-[1.01] hover:shadow-[0_10px_25px_rgba(253,243,84,0.3)] transition-all mt-8 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide text-lg relative overflow-hidden"
              >
                {/* Shine effect on button */}
                <div className="absolute top-0 -left-[100%] w-1/2 h-full bg-white/20 skew-x-[-20deg] hover:animate-shine pointer-events-none" />
                
                {isSubmitting ? "ENVIANDO..." : (submitMessage?.type === "success" ? "¡SOLICITUD ENVIADA!" : "SOLICITAR RECOLECCIÓN Y PRESUPUESTO")}
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
