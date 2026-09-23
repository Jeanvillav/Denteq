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
  businessHours: z.string().min(2, "El horario de atención es requerido"),
  pickupDate: z.string().min(2, "Por favor selecciona un día de recolección"),
  question: z.string().min(2, "Por favor detalla el problema o las piezas"),
  termsAccepted: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar los términos y condiciones" }),
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
    
    console.log("Sending payload:", data);
    const result = await submitBooking(data);
    setIsSubmitting(false);

    if (result.success) {
      setSubmitMessage({ type: "success", text: "¡Solicitud recibida! Te llamaremos muy pronto para confirmar el envío del courier." });
    } else {
      setSubmitMessage({ type: "error", text: result.error || "Ocurrió un error. Inténtalo de nuevo." });
    }
  };

  return (
    <section id="booking" className="w-full bg-[#0A0F24] px-4 py-24 flex flex-col items-center relative overflow-hidden">
      {/* Dynamic background lighting */}
      <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-[#00F2FE]/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-4xl w-full text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-serif font-extrabold text-white mb-8 tracking-tight drop-shadow-lg">
          SOLICITA TU COURIER GRATUITO
        </h2>
        
        <div className="text-left max-w-3xl mx-auto space-y-6 mb-16 glass-card p-8 md:p-10 rounded-2xl">
          <div className="flex items-start gap-4">
            <span className="text-[var(--color-accent-cyan)] text-2xl font-black">✓</span>
            <p className="text-lg md:text-xl text-gray-200">
              <span className="font-bold text-white">Servicio Puerta a Puerta:</span> Vamos hasta tu clínica en todo el Ecuador para recoger tus piezas.
            </p>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-[var(--color-accent-cyan)] text-2xl font-black">✓</span>
            <p className="text-lg md:text-xl text-gray-200">
              <span className="font-bold text-white">Presupuesto sin compromiso:</span> Analizamos tus instrumentos y te damos la mejor opción de reparación.
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-[0_20px_60px_rgba(0,242,254,0.1)] rounded-3xl flex flex-col items-center max-w-2xl mx-auto border-4 border-[var(--color-light-bg)]">
          
          <div className="relative w-64 h-24 mb-8">
            <Image src="/LogoDenteq.jpeg" alt="Denteq Logo" fill className="object-contain" />
          </div>

          <h3 className="text-2xl font-bold mb-8 text-gray-800">Datos para la Recolección</h3>

          {isMounted && (
            <form className="w-full text-left space-y-5" onSubmit={handleSubmit(onSubmit)}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Nombre *</label>
                  <input 
                    {...register("firstName")}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 text-gray-800" 
                    placeholder="Ej. Juan"
                  />
                  {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Apellido *</label>
                  <input 
                    {...register("lastName")}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 text-gray-800" 
                    placeholder="Ej. Pérez"
                  />
                  {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Correo Electrónico *</label>
                  <input 
                    {...register("email")}
                    type="email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 text-gray-800" 
                    placeholder="doctor@clinica.com"
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
                        international
                        defaultCountry="EC"
                        value={value}
                        onChange={onChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-500 bg-gray-50 text-gray-800 [&_input]:w-full [&_input]:bg-transparent [&_input]:outline-none [&_input]:ml-2 [&_input]:text-gray-800 [&_input]:border-none"
                      />
                    )}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="border-t border-gray-200 pt-5 mt-5">
                <h4 className="font-bold text-gray-800 mb-4">Dirección de Recolección</h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Ciudad *</label>
                    <input 
                      {...register("city")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 text-gray-800" 
                      placeholder="Ej. Quito, Guayaquil..."
                    />
                    {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city.message}</p>}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Calle Principal *</label>
                      <input 
                        {...register("mainStreet")}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 text-gray-800" 
                      />
                      {errors.mainStreet && <p className="text-red-500 text-xs mt-1">{errors.mainStreet.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Calle Transversal *</label>
                      <input 
                        {...register("crossStreet")}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 text-gray-800" 
                      />
                      {errors.crossStreet && <p className="text-red-500 text-xs mt-1">{errors.crossStreet.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Número de Casa / Consultorio *</label>
                      <input 
                        {...register("houseNumber")}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 text-gray-800" 
                      />
                      {errors.houseNumber && <p className="text-red-500 text-xs mt-1">{errors.houseNumber.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-1">Horario de Atención *</label>
                      <input 
                        {...register("businessHours")}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 text-gray-800" 
                        placeholder="Ej. 09:00 a 17:00"
                      />
                      {errors.businessHours && <p className="text-red-500 text-xs mt-1">{errors.businessHours.message}</p>}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-5 mt-5">
                <h4 className="font-bold text-gray-800 mb-4">Detalles Adicionales</h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">¿Qué día prefiere la recolección? *</label>
                    <select 
                      {...register("pickupDate")}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 text-gray-800"
                    >
                      <option value="">Selecciona una opción</option>
                      <option value="Lo más pronto posible (Hoy/Mañana)">Lo más pronto posible (Hoy/Mañana)</option>
                      <option value="En 2 días laborables">En 2 días laborables</option>
                      <option value="La próxima semana">La próxima semana</option>
                      <option value="Te indico cuando me llames">Te indico cuando me llames</option>
                    </select>
                    {errors.pickupDate && <p className="text-red-500 text-xs mt-1">{errors.pickupDate.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">¿Qué piezas envía y cuál es el problema? *</label>
                    <textarea 
                      {...register("question")}
                      rows={3} 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-gray-50 text-gray-800"
                      placeholder="Ej. Envío 2 piezas de mano que cabecean y no tienen fuerza."
                    ></textarea>
                    {errors.question && <p className="text-red-500 text-xs mt-1">{errors.question.message}</p>}
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 mt-4 pt-4">
                <input 
                  type="checkbox" 
                  id="terms"
                  {...register("termsAccepted")}
                  className="mt-1 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  Entiendo que Denteq me llamará para confirmar estos datos antes de enviar al courier.
                </label>
              </div>
              {errors.termsAccepted && <p className="text-red-500 text-xs">{errors.termsAccepted.message}</p>}

              {submitMessage && (
                <div className={`p-4 rounded-lg font-bold text-center ${submitMessage.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  <p>{submitMessage.text}</p>
                </div>
              )}

              <button 
                type="submit" 
                disabled={isSubmitting || submitMessage?.type === "success"}
                className="w-full bg-[var(--color-primary-dark)] text-[var(--color-accent-yellow)] border-2 border-[var(--color-accent-cyan)] font-extrabold py-5 rounded-xl hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,242,254,0.4)] transition-all mt-6 disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wider text-lg"
              >
                {isSubmitting ? "PROCESANDO..." : (submitMessage?.type === "success" ? "¡SOLICITUD ENVIADA!" : "SOLICITAR RECOLECCIÓN Y PRESUPUESTO")}
              </button>
            </form>
          )}

        </div>
      </div>
    </section>
  );
}
