// Copyright 2025 alpha
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

const Produit = require("../models/Produit");

exports.createProduit = async (req, res) => {
    try {
        const produit = new Produit(req.body);
        await produit.save();
        res.status(201).json(produit);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getProduit = async (req, res) => {
    try {
        const produit = await Produit.findById(req.params.id);
        if (!produit) return res.status(404).json({ message: "Produit non trouvé" });
        res.json(produit);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateProduit = async (req, res) => {
    try {
        const produit = await Produit.findByIdAndUpdate
            (req.params.id, req.body, { new: true });
        if (!produit) return res.status(404).json({ message: "Produit non trouvé" });
        res.json(produit);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.deleteProduit = async (req, res) => {
    try {
        const produit = await Produit.findByIdAndDelete(req.params.id);
        if (!produit) return res.status(404).json({ message: "Produit non trouvé" });
        res.json({ message: "Produit supprimé" });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

exports.getAllProduits = async (req, res) => {
    try {
        const produits = await Produit.find();
        res.json(produits);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
