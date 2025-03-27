const express = require("express");
const router = express.Router();
const appointmentService = require("../services/appointmentService");
const Appointment = require("../models/Appointment");

// Créer un Appointment
router.post("/", async (req, res) => {
  try {
    const appointment = await appointmentService.createAppointment(req.body);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Lire tous les appointment
router.get('/', async (req, res) => {
    try {
        const appointment = await Appointment.find();
        res.json(appointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// rechercher les rendez-vous d'un client
router.get("/search", async (req, res) => {
    try {
      const query = req.query.cid;
      const appointment = await appointmentService.getAppointmentsByIdClient(query);
      res.json(appointment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

// Mettre à jour un user
router.put('/:id', async (req, res) => {
    try {
        const appointment = await Appointment.findByIdAndUpdate(req.params.id,
            req.body, { new: true });
        res.json(appointment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;