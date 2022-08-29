const db = require("../helper/db_connection");

module.exports = {
  get: (req, res) => {
    // get done
    return new Promise((resolve, reject) => {
      //   const { title = "", director = "" } = req.query;
      const sql = `SELECT * FROM users ORDER BY created_at DESC`;
      db.query(sql, (err, results) => {
        if (err) {
          reject({
            message: "Something wrong",
          });
        }
        resolve({
          message: "Get all from users success",
          status: 200,
          data: results,
        });
      });
    });
  },
  add: (req, res) => {
    // add done
    return new Promise((resolve, reject) => {
      const { firstName, lastName, phoneNumber, email, password, image } = req.body;

      db.query(
        `INSERT INTO users(firstName, lastName, phoneNumber, email, password, image) VALUES('${firstName}','${lastName}','${phoneNumber}','${email}','${password}','${image}')`,
        (err, results) => {
          if (err) {
            console.log(err);
            reject({ message: "Something wrong" });
          }
          resolve({
            message: "Add new users success",
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
      const { userID } = req.params;
      db.query(`SELECT * FROM users WHERE userID=${userID}`, (err, results) => {
        if (err) {
          res.send({ message: "ada error" });
        }

        const previousData = {
          ...results[0],
          ...req.body,
        };
        const { firstName, lastName, phoneNumber, email, password, image } =
          previousData;

        db.query(
          `UPDATE users SET firstName='${firstName}', lastName='${lastName}', phoneNumber='${phoneNumber}', email='${email}', password='${password}', image='${image}' WHERE userID='${userID}'`,
          (err, results) => {
            if (err) {
              console.log(err);
              reject({ message: "Something wrong" });
            }
            resolve({
              message: "Update users success",
              status: 200,
              data: results,
            });
          }
        );
      });
    });
  },
  remove: (req, res) => {
    // delete done
    return new Promise((resolve, reject) => {
      const { userID } = req.params;
      db.query(`DELETE FROM users WHERE userID=${userID}`, (err, results) => {
        if (err) {
          reject({ message: "Something wrong" });
        }
        resolve({
          message: "Delete users success",
          status: 200,
          data: results,
        });
      });
    });
  },
};
