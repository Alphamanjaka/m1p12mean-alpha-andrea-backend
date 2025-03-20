const Offre = require("../models/Offre");

const createOffre = async (data) => {
  const offre = new Offre(data);
  return await offre.save();
};


const getAllOffres = async () => {
  return await Offre.find();
};

const updateOffre = async (id, data) => {
  return await Offre.findByIdAndUpdate(id, data, { new: true });
};

const deleteOffre = async (id) => {
  return await Offre.findByIdAndDelete(id);
};

module.exports = {
  createOffre,
  getAllOffres,
  updateOffre,
  deleteOffre,
};