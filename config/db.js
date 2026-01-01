import mysql from 'mysql2/promise';

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "next_db",
});

export default db;

const connection= db.getConnection();
connection.then(conn => {
  console.log("Database connected successfully.");
  conn.release();
}).catch(err => {
  console.error("Database connection failed:", err);
});