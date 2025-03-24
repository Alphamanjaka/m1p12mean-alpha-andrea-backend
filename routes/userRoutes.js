const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Créer un user
router.post('/', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Lire tous les services
router.get('/', async (req, res) => {
    try {
        const services = await User.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Mettre à jour un user
router.put('/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id,
            req.body, { new: true });
        res.json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Supprimer un user
router.delete('/:id', async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({ message: "User supprimé" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;