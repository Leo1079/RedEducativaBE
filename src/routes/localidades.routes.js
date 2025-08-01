import express from "express";
import {
  obtenerLocalidades,
  obtenerLocalidad,
  crearLocalidad,
  actualizarLocalidad,
  eliminarLocalidad,
} from "../controllers/localidades.controllers.js";

const router = express.Router();

router
  .post("/", crearLocalidad)
  .get("/", obtenerLocalidades)
  .get("/:id", obtenerLocalidad)
  .put("/", actualizarLocalidad)
  .delete("/:id", eliminarLocalidad);

export default router;
