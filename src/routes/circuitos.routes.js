import express from "express";
import {
  obtenerCircuitos,
  obtenerCircuito,
  crearCircuito,
  actualizarCircuito,
  eliminarCircuito,
} from "../controllers/circuitos.controllers.js";

const router = express.Router();

router
  .get("/", obtenerCircuitos)
  .get("/:id", obtenerCircuito)
  .post("/", crearCircuito)
  .put("/:id", actualizarCircuito)
  .delete("/:id", eliminarCircuito);

export default router;
