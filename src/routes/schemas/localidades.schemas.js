import * as z from "zod";

const User = z.object({
  nombre: z.string({
    required_error: "El campo 'nombre' es obligatorio",
    invalid_type_error: " debe ser una cadena de texto",
  }),
  esComuna: z.string({
    required_error: "el campo del 'esComuna' es requerido",
    invalid_type_error: " debe ser una cadena de texto",
  }),
  idDepartamento: z.number({
    required_error: "el campo del 'idDepartamento' es requerido",
    invalid_type_error: " debe ser una cadena de texto",
  }),
});
