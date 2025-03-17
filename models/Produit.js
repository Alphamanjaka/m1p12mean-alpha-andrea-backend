const mongoose = require("mongoose");

const ProduitSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    prix: { type: Number, required: true },
    nombre: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Produit", ProduitSchema);
