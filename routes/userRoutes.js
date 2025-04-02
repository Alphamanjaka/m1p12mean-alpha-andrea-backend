const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10; // Coût du traitement
const mailerService = require('../services/MailerService');

// Créer un user
router.post('/', async (req, res) => {
    try {
        // Hacher le mot de passe
        const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
        const userData = {
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            lastname: req.body.lastname,
            firstname: req.body.firstname,
            role: req.body.role
        };
        const user = new User(userData);
        await user.save();
        await mailerService.sendSuccessRegistrationNotification(userData);
        res.status(201).json(user);
    } catch (error) {
        console.error(error);
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

// Pour enregistrer un utilisateur
async function hashPassword(password) {
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(password, salt);
      return hash;
    } catch (err) {
      throw err;
    }
  }
  
  // Pour vérifier un mot de passe
  async function comparePassword(plainPassword, hashedPassword) {
    try {
      const match = await bcrypt.compare(plainPassword, hashedPassword);
      return match;
    } catch (err) {
      throw err;
    }
  }

module.exports = router;