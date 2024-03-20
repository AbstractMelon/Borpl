// server/index.js
const express = require('express');
const multer = require('multer');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/modrinth', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Set up multer storage for handling file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

// Define routes for uploading mods
app.post('/upload', upload.single('modFile'), (req, res) => {
    // Logic for handling mod file upload
});

// Define other routes as needed

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
