const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // untuk meng-handle request yang mengirimkan Content-Type: application/json

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
  const { temperature, humidity, bodyTemperature, myBpm } = req.body;

  if (temperature !== undefined && humidity !== undefined && bodyTemperature !== undefined) {
    const sql = "UPDATE data SET temperature = ?, humidity = ?, bodyTemperature = ? WHERE id = ?";
    const values = [temperature, humidity, bodyTemperature, 1];

    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        res.status(500).send("Error inserting data");
        return;
      }
    });
  }

  if (myBpm !== undefined) {
    const sql = "UPDATE data SET myBpm = ? WHERE id = ?";
    const values = [myBpm, 1];
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error("Error updating data:", err);
        res.status(500).send("Error updating data");
        return;
      }
    });
  }
  res.send("Data berhasil ditambahkan");
});

app.get("/data", (req, res) => {
  const sql = `SELECT * FROM data ORDER BY id DESC LIMIT 1;`;
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data[0]);
  });
});

app.listen(8000, () => {
  console.log("berhasil berjalan di port 8000");
});
