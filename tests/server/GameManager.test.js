const {test,expect} = require("oliver-test")
const GameManager = require("../../server/GameManager")

test('constructor', ()=>{
    const man = new GameManager();
    expect.equal(man.games.size,0)
})


test('create gameIds', ()=>{
    const man = new GameManager();
    
    let id = man.newGameId();
    expect.true(id != null);
    expect.equal(id.length,man.idLength);
})

test('create game', ()=>{
    const man = new GameManager();

    let data = {};

    let id = man.createGame(data);

    expect.true(id != null);
    expect.equal(man.games.get(id),data);
})

test('unique gameIds', ()=>{
    const man = new GameManager();

    let data = {};
    let ids = [];
    
    for (let i = 0; i < 1000; i++){
        let newId = man.createGame(data);
        expect.equal(ids.lastIndexOf(newId),-1)
        ids.push(newId);
    }
})