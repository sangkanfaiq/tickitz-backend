const db = require("../helper/db_connection");
const fs = require("fs");
const moment = require('moment')

module.exports = {
  get: (req, res) => {
    return new Promise((resolve, reject) => {
      const { title = "", genre= "" } = req.query
      const limit = req.query.limit
      const page  = req.query.page
      const offset = (page - 1) * limit;

      const sql = `SELECT * FROM movies
      WHERE title LIKE '%${title}%'
      ${genre ? `AND genre LIKE '%${genre}%'` : ""}
      ORDER BY created_at ASC
      LIMIT ${limit} 
      OFFSET ${offset}`;

      // ${title ? `WHERE title LIKE '%${title}%'`: ""}

      db.query(sql, (err, results) => {
        if (err) {
          console.log(err)
          reject({
            message: "Something wrong",
          });
        } else {
          db.query(`SELECT movieID from movies`, (err, result) => {
            if(err) {
              console.log(err)
              reject({
                message: "Something wrong"
              })
            } else {
              totalPage = Math.ceil(result.length/limit)
              if(page > totalPage) {
                reject({
                  message: "Page not found!",
                  status: 404,
                  data: []
                })
              }
              resolve({
                message: "Get all from movies success",
                status: 200,
                data: {
                  totalRow: results.length,
                  totalPage: totalPage,
                  results: results.map(result => {
                    return {
                        ...result,
                        releaseDate: moment(result.releaseDate).format('YYYY-MM-DD')
                    }
                }),
                },
              });
            }
          })
        }
      });
    });
  },
  getById: (req, res) => {
    return new Promise((resolve, reject) => {
      const {movieID} = req.params
      const sql = `SELECT * FROM movies WHERE movieID=${movieID}`;

      db.query(sql, (err, results) => {
        if (err) {
          reject({
            message: "Something wrong",
          });
        }
        resolve({
          message: "Get movies by id success",
          status: 200,
          data: results,
        });
      });
    });
  },
  add: (req, res) => {
    return new Promise((resolve, reject) => {
      const {
        title,
        genre,
        durationHours,
        durationMinute,
        rating,
        director,
        writer,
        releaseDate,
        cast,
        description,
        cover,
      } = req.body;

      const sql = `INSERT INTO movies(title, genre, durationHours, durationMinute, rating, director, writer, releaseDate, cast, description, cover) VALUES('${title}','${genre}','${durationHours}','${durationMinute}',${rating},'${director}','${writer}','${releaseDate}','${cast}', '${description}', '${cover}')`;

      db.query(sql, (err, results) => {
        if (err) {
          console.log(err);
          reject({ message: "ada error" });
        }
        resolve({
          message: "Add new movies success",
          status: 201,
          data: {
            id: results.insertId,
            ...req.body,
          },
        });
      });
    });
  },
  update: (req, res) => {
    return new Promise((resolve, reject) => {
      const { movieID } = req.params;
      db.query(
        `SELECT * FROM movies where movieID=${movieID}`,
        (err, results) => {
          if (err) {
            res.send({ message: "ada error" });
          }

          const previousData = {
            ...results[0],
            ...req.body,
          };
          
          const {
            title,
            genre,
            durationHours,
            durationMinute,
            rating,
            director,
            writer,
            releaseDate,
            cast,
            description,
            cover,
          } = previousData;

          const tempImg = results[0].cover;
          if (req.body.cover) {
            fs.unlink(`uploads/${tempImg}`, function (err) {
              if (err) {
                console.log(err);
                reject({
                  message: "Something wrong",
                });
              }
            });
          }

          db.query(
            `UPDATE movies SET title='${title}', genre='${genre}', durationHours='${durationHours}', durationMinute='${durationMinute}', rating='${rating}', director='${director}', writer='${writer}', releaseDate='${releaseDate}', cast='${cast}', description='${description}', cover='${cover}' WHERE movieID='${movieID}'`,
            (err, results) => {
              if (err) {
                console.log(err);
                reject({ message: "Something wrong" });
              }
              resolve({
                message: "Update movies success",
                status: 201,
                data: results,
                changed: { ...req.body }
              });
            }
          );
        }
      );
    });
  },
  remove: (req, res) => {
    return new Promise((resolve, reject) => {
      const { movieID } = req.params;
      db.query(
        `SELECT cover FROM movies WHERE movieID=${movieID}`,
        (err, results) => {
          if (!results.length) {
            reject({
              message: "Data id not found",
            });
          } else {
            const tempImg = results[0].cover;
            db.query(
              `DELETE FROM movies WHERE movieID=${movieID}`,
              (err, results) => {
                if (err) {
                  console.log(err);
                  reject({ message: "Something wrong" });
                }
                fs.unlink(`uploads/${tempImg}`, function (err) {
                  if (err) {
                    resolve({
                      message: "Delete movies success",
                      status: 201,
                      data: results,
                    });
                  }
                  resolve({
                    message: "Delete movies success",
                    status: 201,
                    data: results,
                  });
                });
              }
            );
          }
        }
      );
    });
  },
};
