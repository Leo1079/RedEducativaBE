import express from "express";
import {
  obtenerInstuciones,
  obtenerInstucion,
  crearInstitucion,
  actualizarInstitucion,
  eliminarInstitucion,
} from "../controllers/institucionController.js";

const router = express.Router();

router
  .post("/", crearInstitucion)
  .get("/", obtenerInstuciones)
  .get("/:id", obtenerInstucion)
  .put("/", actualizarInstitucion)
  .delete("/:id", eliminarInstitucion);

export default router;
