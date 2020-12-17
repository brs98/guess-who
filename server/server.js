const express = require("express");
const GameManager = require("./GameManager");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

let port = 3000;
app.listen(port, () => {
    console.log("Listening on port "+port)
})

let gameMan = new GameManager();

app.post('/create', (req,res) => {
    console.log(req.body)
    let id = gameMan.createGame(req.body);
    if (id) {
        res.status(200);
        res.send({id})
    }
    else {
        res.status(500);
        res.send("Could not create game, sorry.")
    }
})


app.get('/join/:id', (req,res) => {
    let id = req.params.id;
    let data = gameMan.joinGame(id);
    if (data) {
        res.status(200);
        res.send({data})
    }
    else {
        res.status(404);
        res.send("Could not find game with id "+id)
    }
})