const Payment = require("../model/Payment");

module.exports = {
  getAllPayment: async (req, res) => {
    try {
      const results = await Payment.get(req, res);
      return res.status(200).send(results);
    } catch (error) {
      return res.send(error);
    }
  },
  addNewPayment: async (req, res) => {
    try {
      const results = await Payment.add(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  updatePayment: async (req, res) => {
    try {
      const results = await Payment.update(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  deletePayment: async (req, res) => {
    try {
      const results = await Payment.remove(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
