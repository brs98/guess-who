import CreateGameResponse from "./req-res/CreateGameResponse";
import JoinGameResponse from "./req-res/JoinGameResponse";

module.exports = class DummyServerFacade {
    constructor() {
        this.gameId = "testGame";
        this.gameData = new GameData();
    }

    createGame(req) {
        return new CreateGameResponse(this.gameId);
    }
    joinGame(req) {
        return new JoinGameResponse(this.gameData);
    }
}