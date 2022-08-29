const Users = require("../model/Users");

module.exports = {
  getAllUsers: async (req, res) => {
    try {
      const results = await Users.get(req, res);
      return res.status(200).send(results);
    } catch (error) {
      return res.send(error);
    }
  },
  addNewUsers: async (req, res) => {
    try {
      const results = await Users.add(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  updateUsers: async (req, res) => {
    try {
      const results = await Users.update(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  deleteUsers: async (req, res) => {
    try {
      const results = await Users.remove(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
