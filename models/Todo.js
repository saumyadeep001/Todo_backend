const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            maxLength: 50,
        },
        description: {
            type: String,
            required: true,
            maxLength: 50,
        },
        createdAT: {
            type: Date,
            required: true,
            default: Date.now,
        },
        updatedAT: {
            type: Date,
            required: true,
            default: Date.now,
        },
    }
);

module.exports = mongoose.model("Todo", todoSchema);
