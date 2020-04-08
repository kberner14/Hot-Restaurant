const express = require("express");
const path = require("path");
// import data from a separate file
//const characters = require("./data");
const reservation = require("./data/reservation.js");
const waitlist = require("./data/waitlist.js")
const app = express();
const PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//Default display hompage route
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "homepage.html"));
  });
app.get("/tables", (req, res) => {
    res.sendFile(path.join(__dirname, "tables.html"));
  });
app.get("/makeres", (req, res) => {
    res.sendFile(path.join(__dirname, "makeres.html"));
  }); 
//Display reservation route
app.get("/api/waitlist", (req, res) => {
    return res.json(waitlist);
})
app.get("/api/tables", (req, res) => {
    return res.json(reservation);
})
//Display Waitlist route
app.get("/data/waitlist", (req, res) => {
    return res.json(waitlist);
})

app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });