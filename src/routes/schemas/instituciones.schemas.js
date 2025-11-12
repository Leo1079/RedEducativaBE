import * as z from "zod";

const User = z.object({
  nombre: z.string({
    required_error: "El campo 'nombre' es obligatorio",
    invalid_type_error: " debe ser una cadena de texto",
  }),
  contacto: z.string({
    required_error: "el campo del 'contacto' es requerido",
    invalid_type_error: " debe ser una cadena de texto",
  }),
  personaACargo: z.string({
    required_error: "el campo del 'personaACargo' es requerido",
    invalid_type_error: " debe ser una cadena de texto",
  }),
  idLocalidad: z.number({
    required_error: "el campo del 'idLocalidad' es requerido",
    invalid_type_error: " debe ser una cadena de texto",
  }),
});
