import { pool } from "../db.js";

export const obtenerofertasform = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM ofertasform");
    res.json(rows);
  } catch (error) {
    console.error(error);
  }
};

export const obtenerofertaform = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM ofertasform WHERE id_ofertasfrom = ?",
      [req.params.id]
    );

    if (rows.lenght < 0) {
      res.status(404).json({
        message: " error al encontrar oferta ",
      });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error(error);
  }
};

export const crearofertasform = async (req, res) => {
  const { id, titulo, descripcion, duracion, cantidadDeModulo, PorcHsPractica, requicitos, tipoDeOferta,modalidad } = req.body;
  try {
    const [rows] = await pool.query(
      "SELECT * ofertasform_SPI( ?, ?, ?, ?, ?, ?, ?, ?, ? ) AS resultado",
      [ id, titulo, descripcion, duracion, cantidadDeModulo, PorcHsPractica, requicitos, tipoDeOferta,modalidad]
    );
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ message: "Error al crear oferta" });
  }
};

export const actualizarofertasform = async (req, res) => {
  const { id, titulo, descripcion, duracion, cantidadDeModulo, PorcHsPractica, requicitos, tipoDeOferta,modalidad } = req.body;
  try {
    const [rows] = await pool.query(
      "SELECT * ofertasform_SPU(?, ?, ?, ?, ?, ?, ?, ?, ? ) AS resultado",
      [id, titulo, descripcion, duracion, cantidadDeModulo, PorcHsPractica, requicitos, tipoDeOferta,modalidad]
    );
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ message: "Error al actualizar oferta" });
  }
};

export const eliminarofertasform = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query(
      "SELECT * ofertasform_SPD( ?, ?, ?, ?, ?, ?, ?, ?, ? ) AS resultado",
       [ id, titulo, descripcion, duracion, cantidadDeModulo, PorcHsPractica, requicitos, tipoDeOferta,modalidad]);
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ message: "Error al eliminar oferta" });
  }
};
