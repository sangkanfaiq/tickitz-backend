const Booking = require("../model/Booking");

module.exports = {
  getAllBooking: async (req, res) => {
    try {
      const results = await Booking.get(req, res);
      return res.status(200).send(results);
    } catch (error) {
      return res.send(error);
    }
  },
  getBookingById: async (req, res) => {
    try {
      const results = await Booking.getById(req, res);
      return res.status(200).send(results);
    } catch (error) {
      return res.send(error);
    }
  },
  addNewBooking: async (req, res) => {
    try {
      const results = await Booking.add(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  updateBooking: async (req, res) => {
    try {
      const results = await Booking.update(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  deleteBooking: async (req, res) => {
    try {
      const results = await Booking.remove(req, res);
      return res.status(201).send(results);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
