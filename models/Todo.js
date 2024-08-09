const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    item: { type: String, required: true },
    checked: { type: Boolean, default: false },
});

module.exports = mongoose.model('Todo', todoSchema);
