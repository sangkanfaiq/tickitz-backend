const Schedule = require("../model/Schedule");

module.exports = {
  getAllSchedule: async (req, res) => {
    try {
      const results = await Schedule.get(req, res);
      return res.status(200).send(results);
    } catch (error) {
      return res.send(error);
    }
  },
  addNewSchedule: async (req, res) => {
    try {
      const results = await Schedule.add(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  updateSchedule: async (req, res) => {
    try {
      const results = await Schedule.update(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  deleteSchedule: async (req, res) => {
    try {
      const results = await Schedule.remove(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
