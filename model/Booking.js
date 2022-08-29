const db = require("../helper/db_connection");

module.exports = {
  get: (req, res) => {
    // get done
    return new Promise((resolve, reject) => {
      //   const { title = "", director = "" } = req.query;
      const sql = `SELECT * FROM booking 
      LEFT JOIN movies on booking.movieID = movies.movieID 
      LEFT JOIN cinema on booking.cinemaID = cinema.cinemaID 
      ORDER BY booking.created_at DESC`;
      db.query(sql, (err, results) => {
        if (err) {
          reject({
            message: "Something wrong",
          });
        }
        resolve({
          message: "Get all from booking success",
          status: 200,
          data: results,
        });
      });
    });
  },
  add: (req, res) => {
    // add done
    return new Promise((resolve, reject) => {
      const { movieID, cinemaID, playDate, time, ticketPrice, seat } = req.body;

      db.query(
        `INSERT INTO booking(movieID, cinemaID, playDate, time, ticketPrice, seat) VALUES('${movieID}','${cinemaID}','${playDate}','${time}','${ticketPrice}','${seat}')`,
        (err, results) => {
          if (err) {
            console.log(err);
            reject({ message: "Something wrong" });
          }
          resolve({
            message: "Add new booking success",
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
      const { bookingID } = req.params;
      db.query(`SELECT * FROM booking WHERE bookingID=${bookingID}`, (err, results) => {
        if (err) {
          res.send({ message: "ada error" });
        }

        const previousData = {
          ...results[0],
          ...req.body,
        };
        const { movieID, cinemaID, playDate, time, ticketPrice, seat } =
          previousData;

        db.query(
          `UPDATE booking SET movieID='${movieID}', cinemaID='${cinemaID}', playDate='${playDate}', time='${time}', ticketPrice='${ticketPrice}', seat='${seat}' WHERE bookingID='${bookingID}'`,
          (err, results) => {
            if (err) {
              console.log(err);
              reject({ message: "Something wrong" });
            }
            resolve({
              message: "Update booking success",
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
      const { bookingID } = req.params;
      db.query(`DELETE FROM booking WHERE bookingID=${bookingID}`, (err, results) => {
        if (err) {
          reject({ message: "Something wrong" });
        }
        resolve({
          message: "Delete booking success",
          status: 200,
          data: results,
        });
      });
    });
  },
};
