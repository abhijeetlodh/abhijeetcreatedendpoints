const express = require("express");
const app = express();
const importD = require("./data.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hie Abhijeet Lodh");
});

app.get("/developers", (req, res) => {
    res.send(importD);
})

app.listen(port, () => {
    console.log(`Serving Port: ${port}`);
})