const express = require('express');
const jwt = require("jsonwebtoken");
const User = require('../models/User');
const router = express.Router();
const crypto = require('crypto');

router.post('/', async (req, res) => {
    try {
        const user = { "username": req.body.username, 
        "password": req.body.password}
        const userFound = await User.findOne(user);

        if(!userFound){
            // console.log("user not fond");
            res.status(400).json({ message: "Utilisateur introuvable" });
        } else if (userFound){
            const payload = {
                nom: userFound.nom, 
                prenom: userFound.prenom, 
                email: userFound.email,
                role: userFound.role,
            };
            
            const token = jwt.sign(payload, "SECRET_KEY", { expiresIn: '1h' });
            res.status(201).json({ 
                token: token,
                role: userFound.role,
                identifiant: userFound._id
            });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});



function cryptMDP(mdp){
    const hash = crypto.createHash('sha256');
    hash.update(mdp);
    const hashHex = hash.digest('hex');
    return hashHex;
}

module.exports = router;
