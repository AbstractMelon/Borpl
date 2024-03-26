const mongoose = require('mongoose');

// Define the schema for the File model
const fileSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true
    },
    filePath: {
        type: String,
        required: true
    },
    fileSize: {
        type: Number,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
    uploadDate: {
        type: Date,
        default: Date.now
    }
});

// Create the File model based on the schema
const File = mongoose.model('File', fileSchema);

module.exports = File;
