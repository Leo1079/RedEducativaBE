import express from "express";
import {
  crearInstitucion,
  actualizarInstitucion,
  eliminarInstitucion,
  obtenerInstituciones,
  obtenerInstitucion,
} from "../controllers/instituciones.controllers.js";

const router = express.Router();

router
  .post("/", crearInstitucion)
  .get("/", obtenerInstituciones)
  .get("/:id", obtenerInstitucion)
  .put("/", actualizarInstitucion)
  .delete("/:id", eliminarInstitucion);

export default router;
