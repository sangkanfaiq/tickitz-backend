const db = require("../helper/db_connection");

module.exports = {
  get: (req, res) => {
    // get done
    return new Promise((resolve, reject) => {
      //   const { title = "", director = "" } = req.query;
      const sql = `SELECT * FROM booking 
      LEFT JOIN schedule on booking.scheduleID = schedule.scheduleID
      LEFT JOIN movies on schedule.movieID = movies.movieID
      LEFT JOIN cinema on schedule.cinemaID = cinema.cinemaID
      LEFT JOIN location on schedule.locationID = location.locationID
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
  getById: (req, res) => {
    return new Promise((resolve, reject) => {
      const {bookingID} = req.params
      const sql = `SELECT * FROM movies WHERE bookingID=${bookingID}`;

      db.query(sql, (err, results) => {
        if (err) {
          reject({
            message: "Something wrong",
          });
        }
        resolve({
          message: "Get booking by id success",
          status: 200,
          data: results,
        });
      });
    });
  },
  add: (req, res) => {
    // add done
    return new Promise((resolve, reject) => {
      const { scheduleID, user_id, seats, selected_time } = req.body;

      db.query(
        `INSERT INTO booking(scheduleID, user_id, seats) VALUES('${scheduleID}', '${user_id}', '${seats}', '${selected_time}')`,
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
          }) 
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
        const { scheduleID, cinemaID, user_id, playDate, seats, selected_time } =
          previousData;

        db.query(
          `UPDATE booking SET scheduleID='${scheduleID}', cinemaID='${cinemaID}', user_id='${user_id}',playDate='${playDate}', seat='${seats}', selected_time='${selected_time}' WHERE bookingID='${bookingID}'`,
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
