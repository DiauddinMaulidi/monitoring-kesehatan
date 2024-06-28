const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "apk_sehat",
});

app.get("/", (req, res) => {
  res.json("berhasil");
});

app.get("/suhu", (req, res) => {
  const sql = `SELECT * FROM suhu ORDER BY id DESC LIMIT 1;`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
});

app.listen(8000, () => {
  console.log("berhasil berjalan di port 8000");
});
