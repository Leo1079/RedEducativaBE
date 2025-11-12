import { pool } from "../db.js";



export const obtenerInstituciones = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM instituciones");
    res.json(rows);
  } catch (error) {
    console.error(error);
  }
};

export const obtenerInstitucion = async (req, res) => {
  try {
    const [rows] = await pool.query(
      "SELECT * FROM instituciones WHERE id_departamento = ?",
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

export const crearInstitucion = async (req, res) => {
  const {  nombre, contacto, personaACargo, idLocalidad } = req.body;
  try {
    console.log(nombre, contacto, personaACargo, idLocalidad)
    const [rows] = await pool.query(
      "SELECT institucion_SPI(?, ?, ?, ?) AS resultado",
      [nombre, contacto, personaACargo, idLocalidad]
    );
    console.log('pasa la ejecucion')
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ message: "Error al crear institución" });
  }
};

export const actualizarInstitucion = async (req, res) => {
  const { id, nombre, contacto, personaACargo, idLocalidad} = req.body;
  try {
    const [rows] = await pool.query(
      "SELECT institucion_SPU(?, ?, ?, ?, ?) AS resultado",
      [id, nombre, contacto, personaACargo, idLocalidad]
    );
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ message: "Error al actualizar institución" });
  }
};

export const eliminarInstitucion = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query("SELECT institucion_SPD(?) AS resultado", [
      id,
    ]);
    res.json(rows[0]);
  } catch (e) {
    res.status(500).json({ message: "Error al eliminar institución" });
  }
};
