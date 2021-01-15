# Who's Your Daddy?

## Project setup
- Clone the repo
- cd into the directory
- Run ```git pull``` to make sure you are running the latest version of the app
- ```npm install```
- ```npm run build``` (The server currently serves the production build)
```
npm run serve
```
- Go to localhost:8080
- In a second window/tab of the command line, run
```
node server.js
```
- The server uses tunneling so the second player can join the game using the link it provides.

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# How it works
- Who's Your Daddy uses Vue as its framework and Vuex to manage state.

### Views


###### Start
- Contains buttons to start a new game or join a game. Handles part of the authentication process using sessionStorage.

###### Play
- This is where the flippable ancestor cards are displayed.

###### HowToPlay
- Shows the instructions to the game like the "Object of the Game", "Game Play" and "Guessing the Ancestor".

### Components


###### CardsList
- Displays the cards. Uses Vue props to make them flippable after selecting the Mystery Ancestor.

###### AncestorCards
- Includes functionality to display flippable cards of the ancestors and their info.
- Cards display the ancestors' "gender", "lifespan", "place of birth" and "place of death".

###### Spinner
- Only displayed while the game data is loading.
