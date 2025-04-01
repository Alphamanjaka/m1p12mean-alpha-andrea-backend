const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const envFile = `.env.${process.env.NODE_ENV || "development"}`;
dotenv.config({ path: envFile });

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
// Connexion à MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Temps limite de 5 secondes pour la sélection du serveur initial
  })
  .then(() => console.log("MongoDB connecté"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
// Routes
app.use("/articles", require("./routes/articleRoutes"));
app.use("/offres", require("./routes/offreRoutes"));
app.use("/produits", require("./routes/produitRoutes"));
app.use('/services', require("./routes/serviceRoutes"));
app.use('/login', require("./routes/authRoutes"));
app.use('/user', require("./routes/userRoutes"));
app.use('/stock/pieces', require("./routes/pieceRoutes"));
app.get("/", (req, res) => {
  res.send("Bienvenue sur le backend Node.js! 🚀");
});
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
