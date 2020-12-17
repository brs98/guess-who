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

    createGame(gameData, timeout = this.gameLifespan) {
        let gameId = this.newGameId();
        console.log(gameData)
        this.games.set(gameId,gameData)
        console.log(this.games)
        return gameId;
    }

    joinGame(id) {
        console.log(id,this.games)
        if (this.games.has(id)) {
            let data = this.games.get(id);
            this.removeGame(id);
            return data;
        }
        else return null;
    }

    removeGame(id) {
        this.games.delete(id);
    }
}

module.exports = GameManager;