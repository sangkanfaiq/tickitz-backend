const db = require("../helper/db_connection");

module.exports = {
  get: (req, res) => {
    // get done
    return new Promise((resolve, reject) => {
      //   const { title = "", director = "" } = req.query;
      const sql = `SELECT * FROM cinema`;
      db.query(sql, (err, results) => {
        if (err) {
          reject({
            message: "Something wrong",
          });
        }
        resolve({
          message: "Get all from cinema success",
          status: 200,
          data: results,
        });
      });
    });
  },
  add: (req, res) => {
    // add done
    return new Promise((resolve, reject) => {
      const { cinemaName, price, cinemaShortname, cinemaPlace, cinemaAddress, cinemaCover } = req.body;
      const sql = `INSERT INTO cinema(cinemaName, cinemaShortname, cinemaPlace, cinemaAddress, price, cinemaCover) VALUES ('${cinemaName}', '${cinemaShortname}', '${cinemaPlace}','${cinemaAddress}', '${price}', '${cinemaCover}')`;

      db.query(sql, (err, results) => {
        if (err) {
          console.log(err);
          reject({ message: "Something error" });
        }
        resolve({
          message: "Add new cinema success",
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
      const { cinemaID } = req.params;
      db.query(
        `SELECT * FROM cinema WHERE cinemaID=${cinemaID}`,
        (err, results) => {
          if (err) {
            res.send({ message: "Something error" });
          }

          const previousData = {
            ...results[0],
            ...req.body,
          };
          const { cinemaName, cinemaShortname, cinemaPlace, cinemaAddress, price, cinemaCover } = previousData;

          db.query(
            `UPDATE cinema SET cinemaName='${cinemaName}', cinemaShortname='${cinemaShortname}', cinemaPlace='${cinemaPlace}',cinemaAddress='${cinemaAddress}', price='${price}', cinemaCover='${cinemaCover}' WHERE cinemaID='${cinemaID}'`,
            (err, results) => {
              if (err) {
                console.log(err);
                reject({ message: "Something wrong" });
              }
              resolve({
                message: "Update cinema success",
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
      const { cinemaID } = req.params;
      db.query(
        `DELETE FROM cinema WHERE cinemaID=${cinemaID}`,
        (err, results) => {
          if (err) {
            reject({ message: "Something wrong" });
          }
          resolve({
            message: "Delete cinema success",
            status: 200,
            data: results,
          });
        }
      );
    });
  },
};
