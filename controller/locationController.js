const Location = require("../model/Location");

module.exports = {
  getAllLocation: async (req, res) => {
    try {
      const results = await Location.get(req, res);
      return res.status(200).send(results);
    } catch (error) {
      return res.send(error);
    }
  },
  addNewLocation: async (req, res) => {
    try {
      const results = await Location.add(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  updateLocation: async (req, res) => {
    try {
      const results = await Location.update(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  deleteLocation: async (req, res) => {
    try {
      const results = await Location.remove(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
