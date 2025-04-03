const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
    id: {type: String},
    name: { type: String, required: true },
    categoryId: { type: String, require: false },
    short_description: { type: String, required: true, default: 'description courte par défaut' },
    description: { type: String, required: true, default: 'description par défaut' },
    price: { type: Number, required: true, default: 500 },
    status: {type:String, default: 'En attente'},

}, { timestamps: true });

module.exports = mongoose.model('Service', ServiceSchema);