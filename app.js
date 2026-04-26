const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({
  user: "postgres",
  host: "db",
  database: "testdb",
  password: "postgres",
  port: 5432,
});

app.get("/", (req, res) => {
  res.send("Docker Node.js App Running 🚀");
});

app.get("/slow", async (req, res) => {
  // delay for 5 seconds
  await new Promise(resolve => setTimeout(resolve, 5000));

  res.json({
    message: "Response after 5 seconds ⏳"
  });
});

app.listen(3000, () => {
  console.log("Server running on port 8000");
});
