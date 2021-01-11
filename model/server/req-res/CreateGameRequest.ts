export default class CreateGameRequest {
    private gameData:any;

    constructor(gameData:any) {
        this.gameData = gameData;
    }

    public getData():any {
        return this.gameData;
    }

}