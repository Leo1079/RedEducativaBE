import express from "express";
import cors from "cors";

import supervisoresRoutes from "./routes/supervisores.js";
import circuitosRoutes from "./routes/circuitos.js";
import departamentosRoutes from "./routes/departamentos.js";
import localidadesRoutes from "./routes/localidades.js";
import institucionesRoutes from "./routes/instituciones.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/supervisores", supervisoresRoutes);
app.use("/api/circuitos", circuitosRoutes);
app.use("/api/departamentos", departamentosRoutes);
app.use("/api/localidades", localidadesRoutes);
app.use("/api/instituciones", institucionesRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
