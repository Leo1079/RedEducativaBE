import express from "express";
import {
  obtenerofertaform,
  obtenerofertaform,
  crearofertaform,
  actualizarofertaform,
  eliminarofertaform,
} from "../controllers/ofertasform.controllers.js";

const router = express.Router();

router
  .get("/", obtenerofertaform)
  .get("/:id", obtenerofertaform)
  .post("/", crearofertaform)
  .put("/:id", actualizarofertaform)
  .delete("/:id", eliminarofertaform);

export default router;
