import { pool } from "../db.js";

export const employeesGet = async (req, res) => {
  console.log("Obteniendo todos");
  try {
    const [rows] = await pool.query("select * from supervisores");
    res.json(rows);
  } catch (e) {
    return res.status(500).json({
      message: "something goes wrong",
    });
  }
};

export const getEmployee = async (req, res) => {
  try {
    const [rows] = await pool.query("select * from supervisores where id = ?", [
      req.params.id,
    ]);
    if (rows.length <= 0) {
      res.status(404).json({
        message: "employee not found",
      });
    }
    res.json(rows[0]);
  } catch (e) {
    return res.status(500).json({
      message: "something goes wrong",
    });
  }
};

export const createEmployee = async (req, res) => {
  console.log("intentando grabar");
  const { apellido, nombre } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO supervisores(apellido,nombre) VALUES (?,?)",
      [apellido, nombre]
    );
    res.send({
      id: rows.insertId,
      apellido,
      nombre,
    });
  } catch (e) {
    return res.status(500).json({
      message: "something goes wrong",
    });
  }
};

export const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { apellido, nombre } = req.body;

    const [result] = await pool.query(
      "UPDATE supervisores SET apellido = IFNULL(?,apellido), nombre = IFNULL(?,nombre )  where id = ?",
      [apellido, nombre, id]
    );
    console.log(result);
    if (result.affectedRows <= 0) {
      res.status(404).json({
        message: "not found employee",
      });
    }

    const [rows] = await pool.query("SELECT * from supervisores WHERE id = ?", [
      id,
    ]);

    res.json(rows[0]);
  } catch (e) {
    return res.status(500).json({
      message: "something goes wrong",
    });
  }
};

export const employeeDel = async (req, res) => {
  try {
    const [result] = await pool.query("delete from employee where id = ?", [
      req.params.id,
    ]);
    if (result.affectedRows <= 0) {
      res.status(404).json({
        message: "the employee does not exist",
      });
    }
    res.sendStatus(204);
  } catch (e) {
    return res.status(500).json({
      message: "something goes wrong",
    });
  }
};

export const pruebaFuncion = async (req, res) => {
  console.log("Probando la funcion");
  console.log(req.body) 
  const { num1, num2 } = req.body;
  try {
    const [rows] = await pool.query("select pruebaFuncion(?,?) as resultado", [
      num1,
      num2,
    ]);
    res.json(rows);
    console.log(rows);
    let resultado = rows[0].resultado
    console.log(resultado)
  } catch (e) {
    return res.status(500).json({
      message: "something goes wrong",
    });
  }
};
