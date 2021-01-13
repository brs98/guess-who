const DummyServerFacade = require("../server/DummyServerFacade.js");

module.exports = class CreateGameService {
    createGame(req) {
        return this.getServerFacade().createGame(req)
    }

    getServerFacade() {
        return new DummyServerFacade();
    }
}