import GameData from "../../entities/GameData";

export default class JoinGameResponse {
    private gameData:GameData;

    constructor(gameData:GameData) {
        this.gameData = gameData;
    }

    public getData():GameData {
        return this.gameData;
    }

}