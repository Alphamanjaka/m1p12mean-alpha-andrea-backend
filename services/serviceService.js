const Service = require("../models/Service");
const search = async (serviceName) => {
    let allService = await Service.find();
    serviceFond = allService.filter(service => service.name.toLowerCase().includes(serviceName.toLowerCase()));
    return serviceFond;
  };

  module.exports = {
    search
  };