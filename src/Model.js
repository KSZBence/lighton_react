export default class Model{
    SZINEK = []
    constructor(lampadb){
        this.szinekFeltolt(lampadb)
    }

    szinekFeltolt(hossz){
        for (let index = 0; index < hossz; index++) {
            this.SZINEK.push(this.randomszin())            
        }
    }

    randomszin(){
        let a = ""
        if (Math.floor(Math.random() * 2) === 0) {
            a = "p" 
        }else{a = "z"}
        return a;
    }

    getSzinek(){
        return this.SZINEK;
    }
}