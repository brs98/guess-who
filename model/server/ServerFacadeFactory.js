import ProdServerFacade from "./ProdServerFacade";
import DummyServerFacade from "./ProdServerFacade";

module.exports = class ServerFacadeFactory {
    constructor() {}

    getServerFacade() {
        if (process.env.DEV || process.env.NODE_ENV === "development") return new DummyServerFacade();
        else return new ProdServerFacade();
    }
}