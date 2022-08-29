const PaymentMethod = require("../model/PaymentMethod");

module.exports = {
  getAllPaymentMethod: async (req, res) => {
    try {
      const results = await PaymentMethod.get(req, res);
      return res.status(200).send(results);
    } catch (error) {
      return res.send(error);
    }
  },
  addNewPaymentMethod: async (req, res) => {
    try {
      const results = await PaymentMethod.add(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  updatePaymentMethod: async (req, res) => {
    try {
      const results = await PaymentMethod.update(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  deletePaymentMethod: async (req, res) => {
    try {
      const results = await PaymentMethod.remove(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
