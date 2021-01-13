import CreateGameResponse from "./req-res/CreateGameResponse";
import JoinGameResponse from "./req-res/JoinGameResponse";
import ServerFacade from "./ServerFacade";

module.exports = class DummyServerFacade extends ServerFacade {
    constructor() {
        super();
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