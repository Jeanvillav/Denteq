"use server";

import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function submitBooking(data: any) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
    
    if (!supabaseServiceKey) {
       console.error("Missing SUPABASE_SERVICE_ROLE_KEY");
       return { success: false, error: "Server misconfiguration. Missing service key." };
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Guardar en Supabase
    const { data: insertedData, error: insertError } = await supabase
      .from("bookings")
      .insert([
        {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          phone: data.phone,
          city: data.city,
          main_street: data.mainStreet,
          cross_street: data.crossStreet,
          house_number: data.houseNumber,
          business_hours: data.businessHours,
          pickup_date: data.pickupDate,
          meeting_time: new Date().toISOString(), // Dummy para evitar error si la columna era NOT NULL
          question: data.question || null,
          language: data.language || 'es',
          status: 'pending'
        }
      ])
      .select()
      .single();

    if (insertError) {
      console.error("Supabase insert error:", insertError);
      return { success: false, error: "Error de base de datos. Por favor, asegúrate de haber actualizado las columnas en Supabase." };
    }

    // Enviar correos
    try {
      if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
        
        // 1. Correo al Doctor (Confirmación)
        await transporter.sendMail({
          from: `"Denteq" <${process.env.GMAIL_USER}>`,
          to: data.email,
          subject: "Hemos recibido tu solicitud de recolección - Denteq",
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0A0F24;">¡Hola Dr./Dra. ${data.lastName}!</h2>
              <p>Hemos recibido correctamente tu solicitud para recolectar tus piezas de mano.</p>
              <p>Nuestro equipo revisará la información y <strong>te llamaremos muy pronto al ${data.phone}</strong> para coordinar los detalles exactos con el servicio de courier.</p>
              <p>Gracias por confiar en Denteq.</p>
            </div>
          `,
        });

        // 2. Correo al Dueño (Tío Kevin)
        await transporter.sendMail({
          from: `"Denteq System" <${process.env.GMAIL_USER}>`,
          to: process.env.GMAIL_USER, // Notificación al dueño
          subject: `NUEVA RECOLECCIÓN: ${data.firstName} ${data.lastName} - ${data.city}`,
          html: `
            <div style="font-family: Arial, sans-serif;">
              <h2>Nueva Solicitud de Recolección de Piezas</h2>
              <p>Tienes un nuevo cliente que ha solicitado el courier gratuito:</p>
              <table border="1" cellpadding="8" style="border-collapse: collapse; width: 100%;">
                <tr><td><strong>Nombre:</strong></td><td>${data.firstName} ${data.lastName}</td></tr>
                <tr><td><strong>Teléfono:</strong></td><td>${data.phone}</td></tr>
                <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
                <tr><td><strong>Ciudad:</strong></td><td>${data.city}</td></tr>
                <tr><td><strong>Calle Principal:</strong></td><td>${data.mainStreet}</td></tr>
                <tr><td><strong>Calle Transversal:</strong></td><td>${data.crossStreet}</td></tr>
                <tr><td><strong>Nro. Casa/Consultorio:</strong></td><td>${data.houseNumber}</td></tr>
                <tr><td><strong>Horario de Atención:</strong></td><td>${data.businessHours}</td></tr>
                <tr><td><strong>Día Preferido:</strong></td><td>${data.pickupDate}</td></tr>
                <tr><td><strong>Problema/Piezas:</strong></td><td>${data.question || "No especificado"}</td></tr>
              </table>
              <br/>
              <p><strong>Acción requerida:</strong> Llama al doctor para confirmar los datos y avísale al courier.</p>
            </div>
          `,
        });
      } else {
        console.warn("Gmail credentials not provided, skipping email.");
      }
    } catch (e) {
      console.error("Email sending failed", e);
    }

    return { success: true };
  } catch (err: any) {
    console.error("Action error:", err);
    return { success: false, error: err.message || "Unknown error occurred" };
  }
}
