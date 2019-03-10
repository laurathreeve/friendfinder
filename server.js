var express = require("express");
var path = require("path");
var app = express();
var friends = require('./app/data/friends')

var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
    });

app.get("/quiz", function(req, res) {
    res.sendFile(path.join(__dirname, "quiz.html"));
    });

    app.post("/api/quiz", function(req, res) {
        var quizResults = req.body;
        
        quizResults.routeName = quizResults.name.replace(/\s+/g, "").toLowerCase();
        
        console.log(quizResults);
            
        reservations.push(quizResults);
        
        res.json(quizResults);
        });

        // Starts the server to begin listening
        app.listen(PORT, function() {
        console.log("App listening on PORT " + PORT);
        });