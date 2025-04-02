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

router.get("/unassigned", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const startIndex = (page - 1) * limit;

    const total = await Appointment.countDocuments();
    const items = await Appointment.find({
      $or: [
        { employeeId: null },
        { employeeId: { $exists: false } }
      ]
    })
      .sort({ expectedDate: +1 })
      .skip(startIndex)
      .limit(limit);
    
    const results = {
      totalItems: total,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      items: items
    };
    
    if (startIndex + limit < total) {
      results.nextPage = page + 1;
    }
    
    if (startIndex > 0) {
      results.previousPage = page - 1;
    }
    
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;