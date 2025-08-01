import express from "express";
import {
  obtenerCircuitos,
  obtenerCircuito,
  crearCircuito,
  actualizarCircuito,
  eliminarCircuito,
} from "../controllers/circuitoController.js";

const router = express.Router();

router
  .get("/", obtenerCircuitos)
  .get("/:id ", obtenerCircuito)
  .post("/", crearCircuito)
  .put("/", actualizarCircuito)
  .delete("/:id", eliminarCircuito);

export default router;
