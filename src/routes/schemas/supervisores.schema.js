import * as z from "zod";

const User = z.object({
  ApeyNomb: z.string({
    required_error: "El campo 'ApeyNomb' es obligatorio",
    invalid_type_error: " debe ser una cadena de texto",
  }),
  gmail: z.email({
    required_error: "el campo del 'gmail' es requerido",
    invalid_type_error: " debe ser una cadena de texto",
  }),
  telefono: z.string({
    required_error: "el campo del 'telefono' es requerido",
    invalid_type_error: " debe ser una cadena de texto",
  }),
  sede: z.string({
    required_error: "el campo de 'sede' es requerido",
    invalid_type_error: " debe ser una cadena de texto",
  }),
});
