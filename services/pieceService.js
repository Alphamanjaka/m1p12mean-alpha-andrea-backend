const Piece = require("../models/Piece");

const createPiece = async (data) => {
  const piece = new Piece(data);
  return await piece.save();
};

const getAllPieces = async () => {
  return await Piece.find();
};

const search = async (pieceName) => {
  let allPiece = await Piece.find();
  pieceFond = allPiece.filter(piece => piece.name.toLowerCase().includes(pieceName.toLowerCase()));
  return pieceFond;
};

const updatePiece = async (id, data) => {
  return await Piece.findByIdAndUpdate(id, data, { new: true });
};

const deletePiece = async (id) => {
  return await Piece.findByIdAndDelete(id);
};

module.exports = {
  createPiece,
  getAllPieces,
  updatePiece,
  deletePiece,
  search
};