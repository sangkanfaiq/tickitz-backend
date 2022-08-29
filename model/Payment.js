const db = require("../helper/db_connection");

module.exports = {
  get: (req, res) => {
    // get done
    return new Promise((resolve, reject) => {
      //   const { title = "", director = "" } = req.query;
      const sql = `SELECT * FROM payment`;
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
  add: (req, res) => {
    // add done
    return new Promise((resolve, reject) => {
      const { movieID, userID, bookingID, paymentMethodID } = req.body;
      const sql = `INSERT INTO payment(movieID, userID, bookingID, paymentMethodID) VALUES ('${movieID}', '${userID}','${bookingID}','${paymentMethodID}')`;

      db.query(sql, (err, results) => {
        if (err) {
          console.log(err);
          reject({ message: "Something error" });
        }
        resolve({
          message: "Add new payment success",
          status: 200,
          data: {
            id: results.insertId,
            ...req.body,
          },
        });
      });
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
