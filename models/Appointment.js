const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema(
  {
    expectedDate: { type: String, required: true },
    clientID: { type: String, required: true },
    carInfo: { type: {}, required: true },
    serviceList: { type: [], required: true },
    serviceStartedAt: {type : Date},
    serviceExpectedEndAt: {type : Date},
    employeeId: {type: String, require: false}
  },
  { timestamps: true }
);
module.exports = mongoose.model("Appointment", AppointmentSchema);