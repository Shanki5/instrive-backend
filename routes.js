const express = require("express");
const Model = require("./model/model");
const readXlsxFile = require("read-excel-file/node");

const router = express.Router();

module.exports = router;

router.post("/post", async (req, res) => {
    console.log(typeof req.body.file);
    // const data = new Model({
    //     first_name: req.body.firstName,
    //     last_name: req.body.lastName,
    //     email: req.body.email,
    //     message: req.body.message,
    //     file: readXlsxFile(req.body.file).then(rows),
    // });
    // console.log(data);

    // try {
    //     const dataToSave = await data.save();
    //     res.status(200).json(dataToSave);
    // } catch (error) {
    //     res.status(400).json({ message: error.message });
    // }
});
