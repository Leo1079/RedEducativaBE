import express from "express";
import {
  obtenerOfertasForm,
  crearOfertaForm,
  actualizarOfertaForm,
  eliminarOfertaForm,
} from "../controllers/ofertasform.controllers.js";

const router = express.Router();

router
  .get("/", obtenerOfertasForm)
  .post("/", crearOfertaForm)
  .put("/:id", actualizarOfertaForm)
  .delete("/:id", eliminarOfertaForm);

export default router;
