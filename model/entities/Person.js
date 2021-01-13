module.exports = class Person {
    constructor(props) {
        let {name,pid,photoUrl,birth,birthPlace,death,deathPlace} = props;
        this.name = name;
        this.pid = pid;
        this.photoUrl = photoUrl;
        this.birth = birth;
        this.birthPlace = birthPlace;
        this.death = death;
        this.deathPlace = deathPlace;
    }
}