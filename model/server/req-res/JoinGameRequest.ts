export default class JoinGameRequest {
    private gameId:string;

    constructor(gameId:string) {
        this.gameId = gameId;
    }

    public getData():string {
        return this.gameId;
    }

}