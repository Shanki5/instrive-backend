const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const model = require("./model/model");
const { required } = require("nodemon/lib/config");
const upload = multer({ dest: "uploads/" });
const readXlsxFile = require("read-excel-file/node");

require("dotenv").config();

const schema = {
    College: {
        prop: "College",
        type: String,
    },
    University: {
        prop: "University",
        type: String,
    },
};

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const router = express.Router();

router.post("/post", upload.single("file"), async (req, res) => {
    readXlsxFile(req.file.path, { schema }).then(({ rows, errors }) => {
        const validatedRows = rows.filter((value) => {
            return value.College && value.University;
        });
        const data = new model({
            first_name: req.body.firstName,
            last_name: req.body.lastName,
            email: req.body.email,
            message: req.body.message,
            file: validatedRows,
        });
        try {
            const dataToSave = data.save();
            res.status(200).json(dataToSave);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    });
});

app.use("/api", router);
app.listen(8080, () => {
    console.log("Server started!!");
});
