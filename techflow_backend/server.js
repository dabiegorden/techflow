const express = require("express");
const multer = require("multer");
const cors = require("cors");
const { connectDB } = require("./models/db.js");

const app = express();
const upload = multer({ dest: "uploads/" });
let bodyParser = require("body-parser");

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the database
connectDB();

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
