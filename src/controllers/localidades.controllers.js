import { pool } from "../db.js";

export const obtenerLocalidades = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM departamentos");
    res.json(rows[0]);
  } catch (error) {
    console.error(error);
  }
};

export const obtenerLocalidad = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM supervisores WHERE id_localidad = ?",
      [req.params.id]
    );

    if (rows.lenght < 0) {
      res.status(404).json({
        message: "la localidad no fue encontrada",
      });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error(error);
  }
};

export const crearLocalidad = async (req, res) => {
  const { id, nombre, esComuna, idDepartamento } = req.body;
  try {
    const [rows] = await pool.query(
      "SELECT localidad_SPI(?, ?, ?, ?) AS resultado",
      [id, nombre, esComuna, idDepartamento]
    );
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ message: "Error al crear localidad" });
  }
};

export const actualizarLocalidad = async (req, res) => {
  const { id, nombre, esComuna, idDepartamento } = req.body;
  try {
    const [rows] = await pool.query(
      "SELECT localidad_SPU(?, ?, ?, ?) AS resultado",
      [id, nombre, esComuna, idDepartamento]
    );
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ message: "Error al actualizar localidad" });
  }
};

export const eliminarLocalidad = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query("SELECT localidad_SPD(?) AS resultado", [
      id,
    ]);
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ message: "Error al eliminar localidad" });
  }
};
