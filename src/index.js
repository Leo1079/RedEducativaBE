import express from "express";
import cors from "cors";

import supervisoresRoutes from "./routes/supervisores.routes.js";
import circuitosRoutes from "./routes/circuitos.routes.js";
import departamentosRoutes from "./routes/departamentos.routes.js";
import localidadesRoutes from "./routes/localidades.routes.js";
import institucionesRoutes from "./routes/instituciones.routes.js";
import ofertasformRoutes from "./routes/ofertasform.js";
import morgan from "morgan";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/supervisores", supervisoresRoutes);
app.use("/api/circuitos", circuitosRoutes);
app.use("/api/departamentos", departamentosRoutes);
app.use("/api/localidades", localidadesRoutes);
app.use("/api/instituciones", institucionesRoutes);
app.use("/api/ofertas", ofertasformRoutes);

app.listen(3000, () => {
  console.log("Servidor corriendo en http://localhost:3000");
});
