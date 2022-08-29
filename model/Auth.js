// model = tempat dimana kita meletakkan data yang berhubungan dengan database
const db = require("../helper/db_connection");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

// login and register
// hashing password
module.exports = {
  login: (req, res) => {
    const { email, password } = req.body;
    return new Promise((resolve, reject) => {
      db.query(
        `SELECT userID, password, role FROM users WHERE email='${email.toLowerCase()}'`,
        (err, results) => {
          if (err) {
            console.log(err)
            reject({ message: "Something wrong" });
          }else {
            if(!results.length) {
              reject({message: "Invalid Email/Password"})
            } else {
              bcrypt.compare(password, results[0].password, (errHashing, successHashing) => {
                if(errHashing) {
                  reject({
                    message: "Ada Masalah Saat Login, Harap coba lagi."
                  })
                }
                if(successHashing) {
                  const token = jwt.sign({ user_id: results[0].userID, role: results[0].role}, process.env.JWT_SECRET_KEY, {expiresIn: '1 day'});
                  resolve({
                    message: "Login success",
                    status: 200,
                    data: {
                      token,
                      user_id: results[0].userID,
                      email: email,
                      role: results[0].role
                    },
                  });
                }else {
                  reject({ 
                    message: "Invalid Email/Password" 
                  })
                }
              });
            }
          }
        }
      );
    });
  },
  register: (req, res) => {
    const { firstName, lastName, phoneNumber, email, password, image } = req.body;
    return new Promise((resolve, reject) => {
      bcrypt.hash(password, 10, function (err, hashedPassword) {
        if (err) {
          reject({ message: "Something wrong" });
        } else {
          db.query(
            `INSERT INTO users(firstName, lastName, phoneNumber, email, password, image) VALUES('${firstName}', '${lastName}', '${phoneNumber}', '${email}', '${hashedPassword}', '${image}')`,
            (err, results) => {
              if (err) {
                reject({ message: "Email already used" });
              }
              resolve({
                message: "Register success",
                status: 201,
                data: results,
              });
            }
          );
        }
      });
    });
  },
};