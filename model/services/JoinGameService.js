import ServerFacadeFactory from "../server/ServerFacadeFactory";

module.exports = class JoinGameService {
    constructor() {}

    JoinGame(req) {
        return this.getServerFacade().joinGame(req)
    }

    getServerFacade() {
        return ServerFacadeFactory.getServerFacade();
    }
}