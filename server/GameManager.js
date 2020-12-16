class GameManager {
    constructor() {
        this.games = new Map(); // Map<string,gameData>
        this.gameLifespan = (1000*60) * 30 // x mins
        this.idLength = 5;
    }

    newGameId() {
        function randomString(length) {
            let string = "";
            while (string.length < length) {
            let char;
            do {
                char = String.fromCharCode(97+Math.floor(Math.random()*26))
            } while ('aeiou'.lastIndexOf(char) >= 0) 
            string += char;
            }
            return string;
        }

        let newId;
        do {
            newId = randomString(this.idLength);
        } while ( this.games.has(newId) )

        return newId;
    }

    createGame(gameData) {
        let gameId = this.newGameId();
        this.games.set(gameId,gameData)

        let ctx = this;
        // setTimeout(() => console.log("hello"), timeout);
        return gameId;
    }

    requestGame(id) {
        if (this.games.has(id)) return this.games.get(id);
        else return null;
    }

    removeGame(id) {
        this.games.delete(id);
    }
}

module.exports = GameManager;