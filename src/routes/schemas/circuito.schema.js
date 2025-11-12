import * as z from "zod";

const User = z.object({
  nombre: z.string({
    required_error: "El campo 'nombre' es obligatorio",
    invalid_type_error: " debe ser una cadena de texto",
  }),
  descripcion: z.string({
    required_error: "el campo de 'descripcion'  es requerido",
    invalid_type_error: " debe ser una cadena de texto",
  }),
  id_supervisor: z.number({
    required_error: "el campo de 'id_supervisor'  es requerido",
    invalid_type_error: " debe ser una cadena de texto",
  }),
});
