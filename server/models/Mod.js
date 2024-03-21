const mongoose = require('mongoose');

const modSchema = new mongoose.Schema({
    name: String,
    author: String,
    description: String,
});

const Mod = mongoose.model('Mod', modSchema);

module.exports = Mod;
