require('dotenv').config()
const express = require("express");
const app = express();
const port = process.env.PORT || 3006;
const bodyParser = require("body-parser");
const router = require("./routes");
const cors = require("cors");
const paginate = require('express-paginate');
const path = require('path')

app.use(cors());
app.use(paginate.middleware(10, 50));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/v1", router);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.listen(port, () => {
  console.log(`Tickitz Backend listening on port ${port}`);
});
