const express = require("express");
const router = express.Router();
const offreService = require("../services/offreService");

// Créer une offre
router.post("/", async (req, res) => {
  try {
    const offre = await offreService.createOffre(req.body);
    res.status(201).json(offre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Lire toutes les offres
router.get("/", async (req, res) => {
  try {
    const offres = await offreService.getAllOffres();
    res.json(offres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Mettre à jour une offre
router.put("/:id", async (req, res) => {
  try {
    const offre = await offreService.updateOffre(req.params.id, req.body);
    res.json(offre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Supprimer une offre
router.delete("/:id", async (req, res) => {
  try {
    await offreService.deleteOffre(req.params.id);
    res.json({ message: "Offre supprimée" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; // Copyright 2025 alpha
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
