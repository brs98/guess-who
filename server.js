var createError = require('http-errors');
var path = require('path');
var bodyParser = require('body-parser');
var lt = require("localtunnel");
var open = require("open");

var express = require('express');
var app = express();
var server = require('http').createServer(app);

var cors = require('cors')

let port = 5000;
server.listen(port);

// let dev = false;

// if (!dev) {
//   (async () => {
//     const tunnel = await lt({
//       port,
//       subdomain: "whos-your-daddy"
//     });

//     // the assigned public url for your tunnel
//     console.log("App on network: " + tunnel.url);
//     open(tunnel.url)

//     tunnel.on('close', () => {
//       // tunnels are closed
//       console.log(`Network tunnel to port ${port} was closed.`)
//     });
//   })();
// }

var corsOptions = {
}

app.use(cors(corsOptions))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist')));

function randomString(length) {
  let string = "";
  while (string.length < length) {
    let char;
    do {
      char = String.fromCharCode(97 + Math.floor(Math.random() * 26))
    } while ('aeiou'.lastIndexOf(char) >= 0)
    string += char;
  }
  return string;
}

// ROOMS
const GameData = require("./model/entities/GameData.js")
let games = new Map(); //Map<gameId,gameData>
let gameDeleteDelay = 1000 * 60 * 10;


function createGame(tree) {
  let newGameId;
  do {
    newGameId = randomString(5);
  } while (games.has(newGameId))

  games.set(newGameId, new GameData(newGameId,tree))

  setTimeout(() => deleteGame(newGameId), gameDeleteDelay)
  return games.get(newGameId);
}

function deleteGame(gameId) {
  let gameMatch = games.get(gameId);
  if (gameMatch) {
    games.delete(gameMatch.id)
    console.log('Deleting game ' + gameMatch.id)
    return true;
  }
  else {
    console.log("Could not find game: " + gameMatch.id)
    return false;
  }
}



// ROUTES
app.get('/api/games/', (req, res) => {
  return res.json(games.values())
})

app.post('/api/newgame', (req, res) => {
  let tree = req.body.tree
  let newGame = createGame(tree);
  console.log("Created new game: " + newGame.id)
  res.json({ ok: true, game: newGame })
})


app.get('/api/games/:id', (req, res) => {
  let gameMatch = games.get(req.params.id)

  if (gameMatch) {
    console.log('Found requested game ' + gameMatch.id)
    res.json({ ok: true, game: gameMatch })
  }
  else res.json({ ok: false })
})


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  console.log(err)
  res.status(err.status || 500);
  res.send(err);
});
