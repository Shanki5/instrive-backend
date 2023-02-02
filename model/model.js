const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    first_name: {
        required: true,
        type: String,
    },
    last_name: {
        required: true,
        type: String,
    },
    email: {
        required: true,
        type: String,
    },
    message: {
        required: true,
        type: String,
    },
    file: {
        required: true,
        type: [
            {
                College: {
                    required: true,
                    type: String,
                },
                University: {
                    required: true,
                    type: String,
                },
            },
        ],
    },
});

module.exports = mongoose.model("Data", dataSchema);
