const mongoose = require("mongoose");

const PieceSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: false , default: 0},
    ref: { type: String, required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Piece", PieceSchema);