import CreateGameRequest from "./req-res/CreateGameRequest";
import CreateGameResponse from "./req-res/CreateGameResponse";
import JoinGameRequest from "./req-res/JoinGameRequest";
import JoinGameResponse from "./req-res/JoinGameResponse";

export default interface ServerFacade {
    createGame(req:CreateGameRequest):CreateGameResponse;
    joinGame(req:JoinGameRequest):JoinGameResponse;
}