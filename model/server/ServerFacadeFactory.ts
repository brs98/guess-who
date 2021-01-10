import DummyServerFacade from "./ProdServerFacade";

export default class ServerFacadeFactory {
    constructor() {}

    public static getServerFacade() {
        if (process.env.DEV) return new DummyServerFacade();
        else return new DummyServerFacade();
    }
}