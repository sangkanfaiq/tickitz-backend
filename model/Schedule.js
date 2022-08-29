const db = require("../helper/db_connection");

module.exports = {
  get: (req, res) => { // get done
    return new Promise((resolve, reject) => {
      //   const { title = "", director = "" } = req.query;
      const sql = `SELECT * FROM schedule
      LEFT JOIN movies on schedule.movieID = movies.movieID
      LEFT JOIN cinema on schedule.cinemaID = cinema.cinemaID
      LEFT JOIN location on schedule.locationID = location.locationID
      ORDER BY schedule.created_at DESC`
      
      db.query(sql, (err, results) => {
        if (err) {
          reject({
            message: "Something wrong",
          });
        }
        resolve({
          message: "Get all from schedule success",
          status: 200,
          data: results,
        });
      });
    });
  },
  add: (req, res) => { // add done
    return new Promise((resolve, reject) => {
      const {
        movieID,
        cinemaID,
        locationID,
        dateStart,
        dateEnd,
        time,
      } = req.body;

      db.query(
        `INSERT INTO schedule(movieID, cinemaID, locationID, dateStart, dateEnd, time) VALUES('${movieID}','${cinemaID}','${locationID}','${dateStart}','${dateEnd}','${time}')`,
        (err, results) => {
          if (err) {
            console.log(err);
            reject({ message: "Something wrong" });
          }
          resolve({
            message: "Add new schedule success",
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
  update: (req, res) => { // update done
    return new Promise((resolve, reject) => {
      const { scheduleID } = req.params;
      db.query(`SELECT * FROM schedule where scheduleID=${scheduleID}`, (err, results) => {
        if (err) {
          res.send({ message: "ada error" });
        }

        const previousData = {
          ...results[0],
          ...req.body,
        };
        const {
          movieID,
          cinemaID,
          locationID,
          dateStart,
          dateEnd,
          time,
        } = previousData;

        db.query(
          `UPDATE schedule SET movieID='${movieID}', cinemaID='${cinemaID}', locationID='${locationID}', dateStart='${dateStart}', dateEnd='${dateEnd}', time='${time}' WHERE id='${id}'`,
          (err, results) => {
            if (err) {
              console.log(err);
              reject({ message: "Something wrong" });
            }
            resolve({
              message: "Update schedule success",
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
      const { scheduleID } = req.params;
      db.query(`DELETE FROM schedule WHERE scheduleID=${scheduleID}`, (err, results) => {
        if (err) {
          reject({ message: "Something wrong" });
        }
        resolve({
          message: "Delete schedule success",
          status: 200,
          data: results,
        });
      });
    });
  },
};
