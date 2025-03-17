const mongoose = require("mongoose");

// Remplacez par votre URI MongoDB (Atlas ou local)
const uri =
  "mongodb+srv://mufasakinglion050:jHsavcfS1gnUextB@cluster0.8tekn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
