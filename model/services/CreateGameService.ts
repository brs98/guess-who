import CreateGameRequest from "../server/req-res/CreateGameRequest";
import CreateGameResponse from "../server/req-res/CreateGameResponse";
import ServerFacadeFactory from "../server/ServerFacadeFactory";

export default class CreateGameService {
    constructor() {}

    public createGame(req:CreateGameRequest):CreateGameResponse {
        return this.getServerFacade().createGame(req)
    }

    private getServerFacade() {
        return ServerFacadeFactory.getServerFacade();
    }
}