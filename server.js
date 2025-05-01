import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mysql from "mysql2";

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "appuser", // replace with your MySQL username
  password: "your_password", // replace with your MySQL password
  database: "navkaran", // replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL database");
});

// API endpoint for sign-in
app.post("/signin", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  const query = "SELECT * FROM users WHERE email = ? AND password = ?";
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error("Error querying database:", err);
      return res.status(500).json({ message: "Internal server error" });
    }

    if (results.length > 0) {
      // User found, sign-in successful
      res.json({ message: "Sign-in successful", user: results[0] });
    } else {
      // User not found or wrong credentials
      res.status(401).json({ message: "Invalid email or password" });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
