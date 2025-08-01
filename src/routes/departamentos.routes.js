import express from "express";
import {
  obtenerDepartamentos,
  obtenerDepartamento,
  crearDepartamento,
  actualizarDepartamento,
  eliminarDepartamento,
} from "../controllers/departamentoController.js";

const router = express.Router();

router
  .get("/", obtenerDepartamentos)
  .get("/:id", obtenerDepartamento)
  .post("/", crearDepartamento)
  .put("/", actualizarDepartamento)
  .delete("/:id", eliminarDepartamento);

export default router;
