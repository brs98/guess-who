import GameData from "../entities/GameData";
import CreateGameRequest from "./req-res/CreateGameRequest";
import CreateGameResponse from "./req-res/CreateGameResponse";
import JoinGameRequest from "./req-res/JoinGameRequest";
import JoinGameResponse from "./req-res/JoinGameResponse";
import ServerFacade from "./ServerFacade";

export default class DummyServerFacade implements ServerFacade {
    gameId:string = "testGame";
    gameData:GameData = new GameData();

    createGame(req: CreateGameRequest): CreateGameResponse {
        return new CreateGameResponse(this.gameId);
    }
    joinGame(req: JoinGameRequest): JoinGameResponse {
        return new JoinGameResponse(this.gameData);
    }
}