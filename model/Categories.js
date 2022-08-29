const db = require("../helper/db_connection");

module.exports = {
  get: (req, res) => { // get done
    return new Promise((resolve, reject) => {
      //   const { title = "", director = "" } = req.query;
      const sql = `SELECT * FROM categories`;
      db.query(sql, (err, results) => {
        if (err) {
          reject({
            message: "Something wrong",
          });
        }
        resolve({
          message: "Get all from categories success",
          status: 200,
          data: results,
        });
      });
    });
  },
  add: (req, res) => { // add done
    return new Promise((resolve, reject) => {
      const { categoryName } = req.body;
      const sql = `INSERT INTO categories(categoryName) VALUES ('${categoryName}')`;

      db.query(sql, (err, results) => {
        if (err) {
          console.log(err);
          reject({ message: "Something error" });
        }
        resolve({
          message: "Add new movies success",
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
      const { categoryID } = req.params;
      db.query(`SELECT * FROM categories WHERE categoryID=${categoryID}`, (err, results) => {
        if (err) {
          res.send({ message: "Something error" });
        }

        const previousData = {
          ...results[0],
          ...req.body,
        };
        const {
          categoryName
        } = previousData;

        db.query(
          `UPDATE categories SET categoryName='${categoryName}' WHERE categoryID='${categoryID}'`,
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
      const { categoryID } = req.params;
      db.query(`DELETE FROM categories WHERE categoryID=${categoryID}`, (err, results) => {
        if (err) {
          reject({ message: "Something wrong" });
        }
        resolve({
          message: "Delete categories success",
          status: 200,
          data: results,
        });
      });
    });
  },
};
