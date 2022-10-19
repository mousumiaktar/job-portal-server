const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
require("dotenv").config();


//port
const port = process.env.PORT || 5000;




app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve("uploads")));


// DATABASE CONNECTION
const dbConnection = require("./utils/dbConnection")
dbConnection();


// INIT VERY FIRST ROUTE FOR APP
app.get("/", (req, res) => {
    res.sendFile(path.resolve("views/index.html"));
  });


// LISTEN APP  
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
  });
  
  
  
  module.exports = app;