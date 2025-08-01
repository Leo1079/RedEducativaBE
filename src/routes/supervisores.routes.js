import express from "express";
import {
  obtenerSupervisores,
  obtenerSupervisor,
  crearSupervisor,
  actualizarSupervisor,
  eliminarSupervisor,
} from "../controllers/supervisorController.js";

const router = express.Router();

router
  .get("/", obtenerSupervisores)
  .get("/id", obtenerSupervisor)
  .post("/", crearSupervisor)
  .put("/", actualizarSupervisor)
  .delete("/:id", eliminarSupervisor);

export default router;
