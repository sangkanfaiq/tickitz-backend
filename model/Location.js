const db = require("../helper/db_connection");

module.exports = {
  get: (req, res) => {
    // get done
    return new Promise((resolve, reject) => {
      //   const { title = "", director = "" } = req.query;
      const sql = `SELECT * FROM location`;
      db.query(sql, (err, results) => {
        if (err) {
          reject({
            message: "Something wrong",
          });
        }
        resolve({
          message: "Get all from location success",
          status: 200,
          data: results,
        });
      });
    });
  },
  add: (req, res) => {
    // add done
    return new Promise((resolve, reject) => {
      const { locationName } = req.body;
      const sql = `INSERT INTO location(locationName) VALUES ('${locationName}')`;

      db.query(sql, (err, results) => {
        if (err) {
          console.log(err);
          reject({ message: "Something error" });
        }
        resolve({
          message: "Add new location success",
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
      const { locationID } = req.params;
      db.query(
        `SELECT * FROM location WHERE locationID=${locationID}`,
        (err, results) => {
          if (err) {
            res.send({ message: "Something error" });
          }

          const previousData = {
            ...results[0],
            ...req.body,
          };
          const { locationName } = previousData;

          db.query(
            `UPDATE location SET locationName='${locationName}' WHERE locationID='${locationID}'`,
            (err, results) => {
              if (err) {
                console.log(err);
                reject({ message: "Something wrong" });
              }
              resolve({
                message: "Update location success",
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
      const { locationID } = req.params;
      db.query(
        `DELETE FROM location WHERE locationID=${locationID}`,
        (err, results) => {
          if (err) {
            reject({ message: "Something wrong" });
          }
          resolve({
            message: "Delete location success",
            status: 200,
            data: results,
          });
        }
      );
    });
  },
};
