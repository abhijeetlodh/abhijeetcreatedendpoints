// import { firstname } from './index.js'
const express = require("express");
const app = express();
const importD = require("./data.json");
let port = process.env.PORT || 3000;

app.get("/", function (request, response){
    response.sendFile(__dirname+"/views/index.html");
});

app.get("/getemail", function (request, response){
    var firstname = request.query.fname;

    if (firstname != "") {
        response.send("Weclome to Accenture    " + firstname);
    } else {
        response.send("Please provide us first name");
    }
});

app.listen(port, () => {
    console.log(`Serving Port: ${port}`);
})