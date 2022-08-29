const db = require("../helper/db_connection");

module.exports = {
  get: (req, res) => { // get done
    return new Promise((resolve, reject) => {
      //   const { title = "", director = "" } = req.query;
      const sql = `SELECT * FROM payment_method`;
      db.query(sql, (err, results) => {
        if (err) {
          reject({
            message: "Something wrong",
          });
        }
        resolve({
          message: "Get all from payment method success",
          status: 200,
          data: results,
        });
      });
    });
  },
  add: (req, res) => { // add done
    return new Promise((resolve, reject) => {
      const { paymentName } = req.body;
      const sql = `INSERT INTO payment_method(paymentName) VALUES ('${paymentName}')`;

      db.query(sql, (err, results) => {
        if (err) {
          console.log(err);
          reject({ message: "Something error" });
        }
        resolve({
          message: "Add new payment method success",
          status: 200,
          data: {
            id: results.insertId,
            ...req.body,
          },
        });
      });
    });
  },
  update: (req, res) => { // update done
    return new Promise((resolve, reject) => {
      const { paymentMethodID } = req.params;
      db.query(`SELECT * FROM payment_method WHERE paymentMethodID=${paymentMethodID}`, (err, results) => {
        if (err) {
          res.send({ message: "Something error" });
        }

        const previousData = {
          ...results[0],
          ...req.body,
        };
        const {
          paymentName
        } = previousData;

        db.query(
          `UPDATE payment_method SET paymentName='${paymentName}' WHERE paymentMethodID='${paymentMethodID}'`,
          (err, results) => {
            if (err) {
              console.log(err);
              reject({ message: "Something wrong" });
            }
            resolve({
              message: "Update movies success",
              status: 200,
              data: results,
            });
          }
        );
      });
    });
  },
  remove: (req, res) => { // delete done
    return new Promise((resolve, reject) => {
      const { paymentMethodID } = req.params;
      db.query(`DELETE FROM payment_method WHERE paymentMethodID=${paymentMethodID}`, (err, results) => {
        if (err) {
          reject({ message: "Something wrong" });
        }
        resolve({
          message: "Delete payment method success",
          status: 200,
          data: results,
        });
      });
    });
  },
};
