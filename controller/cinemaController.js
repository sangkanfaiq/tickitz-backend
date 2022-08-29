const Cinema = require("../model/Cinema");

module.exports = {
  getAllCinema: async (req, res) => {
    try {
      const results = await Cinema.get(req, res);
      return res.status(200).send(results);
    } catch (error) {
      return res.send(error);
    }
  },
  addNewCinema: async (req, res) => {
    try {
      const results = await Cinema.add(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  updateCinema: async (req, res) => {
    try {
      const results = await Cinema.update(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  deleteCinema: async (req, res) => {
    try {
      const results = await Cinema.remove(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
