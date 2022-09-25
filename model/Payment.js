const db = require("../helper/db_connection");

module.exports = {
  get: (req, res) => {
    // get done
    return new Promise((resolve, reject) => {
      //   const { title = "", director = "" } = req.query;
      const sql = `SELECT * FROM payment 
      LEFT JOIN booking on payment.id_booking = booking.id_booking
      ORDER BY payment.created_at DESC`;
      db.query(sql, (err, results) => {
        if (err) {
          reject({
            message: "Something wrong",
          });
        }
        resolve({
          message: "Get all from payment success",
          status: 200,
          data: results,
        });
      });
    });
  },
  getById: (req, res) => {
    return new Promise((resolve, reject) => {
      const {paymentID} = req.params
      const sql = `SELECT * FROM movies WHERE paymentID=${paymentID}`;

      db.query(sql, (err, results) => {
        if (err) {
          reject({
            message: "Something wrong",
          });
        }
        resolve({
          message: "Get payment by id success",
          status: 200,
          data: results,
        });
      });
    });
  },
  add: (req, res) => {
    // add done
    return new Promise((resolve, reject) => {
      const { id } = req.body;

      db.query(
        `INSERT INTO payment(id) VALUES('${id}')`,
        (err, results) => {
          if (err) {
            console.log(err);
            reject({ message: "Something wrong" });
          }
          resolve({
            message: "Add new payment success",
            status: 200,
            data: {
              id: results.insertId,
              ...req.body,
            },
          });
        }
      );
    });
  },
  update: (req, res) => {
    // update done
    return new Promise((resolve, reject) => {
      const { paymentID } = req.params;
      db.query(
        `SELECT * FROM payment WHERE paymentID=${paymentID}`,
        (err, results) => {
          if (err) {
            res.send({ message: "Something error" });
          }

          const previousData = {
            ...results[0],
            ...req.body,
          };
          const { movieID, userID, bookingID, paymentMethodID } = previousData;

          db.query(
            `UPDATE payment SET movieID='${movieID}', userID='${userID}', bookingID='${bookingID}', paymentMethodID='${paymentMethodID}' WHERE paymentID='${paymentID}'`,
            (err, results) => {
              if (err) {
                console.log(err);
                reject({ message: "Something wrong" });
              }
              resolve({
                message: "Update payment success",
                status: 200,
                data: results,
              });
            }
          );
        }
      );
    });
  },
  remove: (req, res) => {
    // delete done
    return new Promise((resolve, reject) => {
      const { paymentID } = req.params;
      db.query(
        `DELETE FROM payment WHERE paymentID=${paymentID}`,
        (err, results) => {
          if (err) {
            reject({ message: "Something wrong" });
          }
          resolve({
            message: "Delete payment success",
            status: 200,
            data: results,
          });
        }
      );
    });
  },
};
