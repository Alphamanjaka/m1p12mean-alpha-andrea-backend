const mongoose = require('mongoose');

// Modèle Utilisateur
const UserSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    role: String, // "admin", "client", "employe"
  });

const User = mongoose.model("User", UserSchema);

module.exports = User;