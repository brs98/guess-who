module.exports = class GameData {
    constructor(id,tree) {
        this.id = id;
        this.tree = tree;
        this.secretPids = new Map() // Map<PlayerCode,pid>
    }

    setSecretPid(playerCode,pid) {
        this.secretPids.set(playerCode,pid)
    }
}