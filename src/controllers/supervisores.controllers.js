import { pool } from "../db.js";

export const obtenerSupervisores = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM supervisores");
    res.json(rows[0]);
  } catch (error) {
    console.error(error)
  }
};

export const obtenerSupervisor = async (req,res) => {
try {
    const [rows] = await pool.query(
      "SELECT * FROM supervisores WHERE id_supervisor = ?"
    ,[req.params.id]);

    if (rows.lenght < 0 ) {
        res.status(404).json({
            message: "el supervisor no fue encontrado"
        })
    }

    res.json(rows[0])
} catch (error) {
    console.error(error)
}
}


export const crearSupervisor = async (req, res) => {
  const { id, apeyNombre, gmail, telefono, sede } = req.body;
  try {
    const [rows] = await pool.query(
      "SELECT supervisor_SPI(?, ?, ?, ?, ?) AS resultado",
      [id, apeyNombre, gmail, telefono, sede]
    );
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ message: "Error al crear supervisor" });
  }
};

export const actualizarSupervisor = async (req, res) => {
  const { id, apeyNombre, gmail, telefono, sede } = req.body;
  try {
    const [rows] = await pool.query(
      "SELECT supervisor_SPU(?, ?, ?, ?, ?) AS resultado",
      [id, apeyNombre, gmail, telefono, sede]
    );
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ message: "Error al actualizar supervisor" });
  }
};

export const eliminarSupervisor = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query("SELECT supervisor_SPD(?) AS resultado", [
      id,
    ]);
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ message: "Error al eliminar supervisor" });
  }
};
