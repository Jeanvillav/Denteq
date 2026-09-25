import { loadEnvConfig } from '@next/env';
loadEnvConfig(process.cwd());

import { submitBooking } from './src/app/actions/booking';

async function run() {
  console.log("Testing submitBooking...");
  const data = {
    firstName: "Doctor",
    lastName: "Prueba",
    email: "jean.villavicencio@example.com", // A safe email or denteq.ec@gmail.com
    phone: "0999999999",
    city: "Quito",
    mainStreet: "Av Principal",
    crossStreet: "Secundaria",
    houseNumber: "N32-14",
    businessHours: "09:00 - 18:00",
    pickupDate: "Lunes",
    question: "Test integration",
  };
  const result = await submitBooking(data);
  console.log("Result:", result);
}

run();
