# Who's Your Daddy?

## Project setup
- Clone the repo
- cd into the directory
- Run ```git pull``` to make sure you are running the latest version of the app
- ```npm install```

### Compiles and hot-reloads for development
```
npm run serve
```
- Go to localhost:8080

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# How it works
- Who's Your Daddy uses Vue as its framework and Vuex to manage state.

### Views


###### Login
- Contains the login button that redirects to the FamilySearch site to finish the authentication process.
- The view that is rendered depends on a token set in sessionStorage if authentication is successful.

###### Home
- Displays the board which contains the cards and preselection cards of the user alongside their 14 closest ancestors.
- When the board is created, it tells Vuex to load the ancestors of the current user.

###### HowToPlay
- Shows the instructions to the game like the "Object of the Game", "Game Play" and "Guessing the Ancestor".

### Components


###### Board
- Displays are determined by v-if conditions.
- First displays PreselectionCards until the user chooses their Mystery Ancestor. Once the Mystery Ancestors have been chosen, the normal Cards are displayed instead and the game begins.
- When a user clicks on the "Make a guess" button, the Cards are hidden, and a list of the guessable ancestors are displayed.

###### Cards and PreselectionCards
- Cards are flippable due to v-bind:styles. PreselectionCards are not.
- Cards display information the following about each ancestor when not flipped: "gender", "lifespan", "place of birth" and "place of death".
- PreselectionCards don't flip, but set who the Mystery Ancestor will be.
