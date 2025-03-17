const express = require("express");
const router = express.Router();
const articleService = require("../services/articleService");

// Créer un article
router.post("/", async (req, res) => {
  try {
    const article = await articleService.createArticle(req.body);
    res.status(201).json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Lire tous les articles
router.get("/", async (req, res) => {
  try {
    const articles = await articleService.getAllArticles();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mettre à jour un article
router.put("/:id", async (req, res) => {
  try {
    const article = await articleService.updateArticle(req.params.id, req.body);
    res.json(article);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Supprimer un article
router.delete("/:id", async (req, res) => {
  try {
    await articleService.deleteArticle(req.params.id);
    res.json({ message: "Article supprimé" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
