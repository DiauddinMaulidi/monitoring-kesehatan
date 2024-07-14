const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "apk_sehat",
});

app.get("/", (req, res) => {
  res.json("berhasil");
});

app.post("/savedata", (req, res) => {
  const { temperature, humidity, bodyTemperature } = req.body;

  const sql = "REPLACE INTO suhu (id, temperature, humidity, bodyTemperature) VALUES (?, ?, ?, ?)";
  const values = [1, temperature, humidity, bodyTemperature];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting data:", err);
      res.status(500).send("Error inserting data");
      return;
    }
    res.send("Data added to database");
  });
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
