const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
var multer = require("multer");
var upload = multer();

require("dotenv").config();

const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error", (error) => {
    console.log(error);
});

database.once("connected", () => {
    console.log("Database Connected");
});

const app = express();

// app.use(express.json());
app.use(upload.array());

app.use("/api", routes);

app.listen(8080, () => {
    console.log("Server started!!");
});
