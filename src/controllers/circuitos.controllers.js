import { pool } from "../db.js";

export const obtenerCircuitos = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM circuitos");
    res.json(rows);
  } catch (error) {
    console.error(error);
  }
};

export const obtenerCircuito = async (req, res) => {
  try {
    console.log(req.params.id);

    const [rows] = await pool.query(
      "SELECT * FROM circuitos WHERE id_circuito = ?",
      [req.params.id]
    );

    if (rows.lenght < 0) {
      res.status(404).json({
        message: "el circuito no fue encontrado",
      });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error(error);
  }
};

export const crearCircuito = async (req, res) => {
  const {nombre,descripcion,id_supervisor} = req.body;
  try {
    const [rows] = await pool.query(
      "SELECT circuito_SPI(?, ?, ?) AS resultado",
      [nombre,descripcion,id_supervisor]
    );
    res.json(rows);
  } catch (e) {console.log(e)
    res.status(500).json({ message: "Error al crear circuito" });
  }
};

export const actualizarCircuito = async (req, res) => {
  const { nombre, descripcion, id_supervisor } = req.body;
  try {
    const [rows] = await pool.query(
      "SELECT circuito_SPU(?, ?, ?, ?) AS resultado",
      [req.params.id, nombre, descripcion, id_supervisor]
    );
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ message: "Error al actualizar circuito" });
  }
};

export const eliminarCircuito = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query("SELECT circuito_SPD(?) AS resultado", [
      id,
    ]);
    console.log(rows);
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ e });
  }
};
