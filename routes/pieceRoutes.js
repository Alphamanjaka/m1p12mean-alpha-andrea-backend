const express = require("express");
const router = express.Router();
const pieceService = require("../services/pieceService");

// Créer un piece
router.post("/", async (req, res) => {
  try {
    console.log("body",req.body);
    const piece = await pieceService.createPiece(req.body);
    res.status(201).json(piece);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Lire tous les pieces
router.get("/", async (req, res) => {
  try {
    const pieces = await pieceService.getAllPieces();
    res.json(pieces);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mettre à jour un piece
router.put("/:id", async (req, res) => {
  try {
    const piece = await pieceService.updatePiece(req.params.id, req.body);
    res.json(piece);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Supprimer un piece
router.delete("/:id", async (req, res) => {
  try {
    await pieceService.deletePiece(req.params.id);
    res.json({ message: "Piece supprimé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
