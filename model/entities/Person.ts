export default class Person {
    name:string;
    pid:string;
    photoUrl?:string;
    birth?:number;
    birthPlace?:string;
    death?:number;
    deathPlace?:string;

    constructor(props: {
        name:string;
        pid:string;
        photoUrl?:string;
        birth?:number;
        birthPlace?:string;
        death?:number;
        deathPlace?:string;
    }) {
        let {name,photoUrl,birth,birthPlace,death,deathPlace} = props;
        this.name = name;
        this.photoUrl = photoUrl;
        this.birth = birth;
        this.birthPlace = birthPlace;
        this.death = death;
        this.deathPlace = deathPlace;
    }
}