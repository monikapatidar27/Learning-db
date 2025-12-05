const express = require("express");
const app = express();
require("dotenv").config();

const pool = require("./database/dbConnection");

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

pool.connect()
  .then(() => console.log("PostgreSQL connected..."))
  .catch(err => console.error("Connection error:", err.stack));

const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// const express = require("express");
// const app = express();
// require("dotenv").config();

// const dbConnect = require("./database/dbConnection");
// const User = require("./models/user");


// // Database connection
// dbConnect.authenticate()
//     .then(() => console.log("Database connected..."))
//     .catch(err => console.log("Error: " + err));

// // Sync models
// dbConnect.sync({ alter: true }) 
//     .then(() => console.log("Database synced..."))
//     .catch(err => console.log("Sync error: " + err));

// const PORT = process.env.PORT || 8085;


// app.get('/', function(req, res) {
//     res.send("<p>Hello world</p>");
// });

// app.listen(PORT, function() {
//     console.log(`Server is listening at port ${PORT}`);
// });
