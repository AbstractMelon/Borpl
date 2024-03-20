// server/models/Mod.js
const mongoose = require('mongoose');

const modSchema = new mongoose.Schema({
    name: String,
    author: String,
    description: String,
    // Add more fields as needed
});

const Mod = mongoose.model('Mod', modSchema);

module.exports = Mod;
