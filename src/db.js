import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "Leoo1073122",
  port: 3306,
  database: "redEducativa",
});
