import JoinGameRequest from "../server/req-res/JoinGameRequest";
import JoinGameResponse from "../server/req-res/JoinGameResponse";
import ServerFacadeFactory from "../server/ServerFacadeFactory";

export default class JoinGameService {
    constructor() {}

    public joinGame(req:JoinGameRequest):JoinGameResponse {
        return this.getServerFacade().joinGame(req)
    }

    private getServerFacade() {
        return ServerFacadeFactory.getServerFacade();
    }
}