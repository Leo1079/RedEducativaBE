import { pool } from "../db.js";

export const obtenerDepartamentos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM departamentos");
    res.json(rows);
  } catch (error) {
    console.error(error);
  }
};

export const obtenerDepartamento = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM supervisores WHERE id_institucion = ?",
      [req.params.id]
    );

    if (rows.lenght < 0) {
      res.status(404).json({
        message: "la institucion no fue encontrada",
      });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error(error);
  }
};

export const crearDepartamento = async (req, res) => {
  const {  nombre, id_circuito } = req.body;
  try {
    const [rows] = await pool.query(
      "SELECT departamento_SPI(?, ?) AS resultado",
      [ nombre, id_circuito]
    );
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ e });
  }
};

export const actualizarDepartamento = async (req, res) => {
  const { nombre, idCircuito } = req.body;
  try {
    const [rows] = await pool.query(
      "SELECT departamento_SPU(?, ?) AS resultado",
      [ nombre, idCircuito]
    );
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ message: "Error al actualizar departamento" });
  }
};

export const eliminarDepartamento = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query("SELECT departamento_SPD(?) AS resultado", [
      id,
    ]);
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ message: "Error al eliminar departamento" });
  }
};
