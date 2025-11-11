import { pool } from "../db.js";

export const obtenerOfertasForm = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM ofertasform");
    res.json(rows);
  } catch (error) {
    console.error(error);
  }
};



export const crearOfertaForm = async (req, res) => {
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

export const actualizarOfertaForm = async (req, res) => {
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

export const eliminarOfertaForm = async (req, res) => {
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
