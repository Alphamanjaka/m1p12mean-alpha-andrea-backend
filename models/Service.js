const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    id: {type: String},
    name: { type: String, required: true },
    categoryId: {type: String, require: false},
    status: {type:String},
}, { timestamps: true });

module.exports = mongoose.model('Service', ServiceSchema);