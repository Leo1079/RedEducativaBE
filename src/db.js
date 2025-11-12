import { createPool } from "mysql2/promise";

export const pool = createPool({
  host: "192.168.100.5",
  user: "root",
  password: "admin1234",
  port: 3306,
  database: "rededucativa",
});
