import * as z from "zod";

const User = z.object
  nombre: z.string({
    required_error: "El campo 'nombre' es obligatorio",
    invalid_type_error: " debe ser una cadena de texto",
  }),
  idCircuito; z.number({
    required_error: "el campo del 'idCircuito' es requerido",
    invalid_type_error: " debe ser una cadena de texto",

});
