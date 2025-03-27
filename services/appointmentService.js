const Appointment = require("../models/Appointment");

const createAppointment = async (data) => {
  const appointment = new Appointment(data);
  return await appointment.save();
};

const getAllAppointment = async () => {
    return await Appointment.find();
  };

const getAppointmentsByIdClient = async(clientId) =>{
    let allAppointments= await Appointment.find();
    return allAppointments.filter(item => item.clientID === clientId);
}

const updateAppointment = async (id, data) => {
    return await Appointment.findByIdAndUpdate(id, data, { new: true });
  };

module.exports = {
    createAppointment,
    getAppointmentsByIdClient,
    getAllAppointment,
    updateAppointment
  };