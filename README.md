# Who's Your Daddy? <!-- omit in toc -->

A "Guess Who?" style game intended to help people get to know their anccestors better. Players will become more familiar with their Family History as they try to make connections between their ancestors in order to win the game.

<hr>

- [How it works](#how-it-works)
- [Project setup](#project-setup)
    - [Running for Development](#running-for-development)
    - [Running for Production](#running-for-production)
- [Vue Frontend](#vue-frontend)
  - [Views](#views)
    - [Start](#start)
    - [Play](#play)
    - [HowToPlay](#howtoplay)
  - [Components](#components)
    - [CardsList](#cardslist)
    - [AncestorCards](#ancestorcards)
    - [Spinner](#spinner)
  - [State](#state)
- [Express Server](#express-server)
  - [Routes](#routes)
  - [LocalTunnel](#localtunnel)

# How it works
- Who's Your Daddy uses Vue as its framework and Vuex to manage state.
- A simple express server is used to serve the prod build, create games, and disperse game data.


# Project setup
- Clone the repo
- cd into the directory
- Run `git pull` to make sure you are running the latest version of the app
- `npm install`
- `npm run build` (The server currently serves the production build)

### Running for Development

When developing, use Vue's dev server for hot reloading on the frontend, and run the express server for the backend.

To run the Vue dev server for the frontend:
```
npm run serve
```

This should serve the frontend at localhost:8080 unless their is something already there, in which case it tell give you a different port.

In a second window/tab of the command line, run
```
node server.js
```


### Running for Production

To build all of the Vue files into the static `dist` folder, run:
```
npm run build
```

The express server serves files from `dist` folder, so you only need to start the server and navigate to it in a browser to run the app in prod.
```
node server.js
```



**\*\*NOTE:**

If `dev` is set to `false` in `server.js` the server uses tunneling so the second player can join the game using the link it provides. If that is the case it will attempt to open a browser window to the url.

<br>

# Vue Frontend

## Views

### Start
- Contains buttons and methods to start a new game or join a game. Manages the logic for making sure a player is logged in before creating a game, downloading tree data from FS, and requesting game data from the server. It saves this info to state using Vuex.

### Play
- This is basically the game itself that shows a few different things based on the game state, but generally shows list of cards for the player to select their secret ancestor from and then to flip over as they guess their opponent's ancestor.

### HowToPlay
- Shows the instructions to the game like the "Object of the Game", "Game Play" and "Guessing the Ancestor".


## Components

### CardsList
- Generates a list `AncestorCard`s from the ancestor list in `state.game.tree`. Bubbles the `carcClick` event from those cards to the parent.


### AncestorCards
- Displays a card with data for a single ancestor, which is shown as flipped based on the ancestor's `flipped` property.
- `Width` and `Height` are set through props.
- The card acan be prevented from flipping with the `flippable` prop.

### Spinner
- Simple CSS loading div to use when loading data.

## State
State is managed with a Vuex Store which holds information about the player, the FS session, and the current game. Some helper functions are provided in `HelperFunctions.js` for loading FS data.

<br>

# Express Server
The express server is very simple, with only a few routes and a few helper functions.

## Routes

| Route | Method | Behavior |
| --- | --- | --- |
| `/` | `GET` | Serves the static site from `dist` |
| `/newgame` | `POST` | Creates and saves in memory a new `game` object with the provided list of ancestors. Returns the `id` of the new game. Also starts a timer to delete the game data after a while. |
| `/game/:id` | `GET` | Returns the game data for the given `id` |

## LocalTunnel

**THIS SHOULD NOT BE USED IN PRODUCTION!!!**

Currently the server uses a node module called `localtunnel` to expose itself to the web in order for people to play on seperate devices.

When the app is fully deployed to hosting service this functionality will not be needed and should be removed!