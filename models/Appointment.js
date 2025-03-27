const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
  {
    expectedDate: { type: String, required: true },
    clientID: { type: String, required: true },
    carInfo: { type: {}, required: true },
    serviceList: { type: [], required: true },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Appointment", AppointmentSchema);