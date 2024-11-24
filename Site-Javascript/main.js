
class Warrior{
    constructor(vie, dégats, précision){
        this.dégats = dégats
        this.vie = vie
        this.précision = précision
    }

    getDégats(){
        return this.dégats
    }

    RollPrécision(){
        if(this.précision >= Math.random()){
            return true
        }
        else{
            return false
        }
    }
}

let Tank = new Warrior(50, 5, 0.90)
let Assassin = new Warrior(15, 20, 0.80)
let Mage = new Warrior(15, 50, 0.20)
let Guerrier = new Warrior(30, 15, 0.70)

function Combat(Warrior1, Warrior2){
    let Warrior1VieTotale = Warrior1.vie
    let Warrior2VieTotale = Warrior2.vie
    while(Warrior1.vie > 0 && Warrior2.vie > 0){
        if(Warrior1.RollPrécision() == true){
            Warrior2.vie -= Warrior1.getDégats()
            console.log(Warrior2.vie + ' de vie restante pour le deuxième combattant')
        }
        else{
            console.log('Le premier combattant a raté...')
        }
        if(Warrior2.vie <= 0){
            break;
        }
        if(Warrior2.RollPrécision() == true){
            Warrior1.vie -= Warrior2.getDégats()
            console.log(Warrior1.vie + ' de vie restante pour le premier combattant')
        }
        else{
            console.log('Le deuxième combattant a raté...')
        }

    }

    if(Warrior1.vie <= 0){
        Warrior1.vie = Warrior1VieTotale
        Warrior2.vie = Warrior2VieTotale
        return "Le deuxième combattant a gagné."
    }
    else{
        Warrior1.vie = Warrior1VieTotale
        Warrior2.vie = Warrior2VieTotale
        return "Le premier combattant a gagné."
    }

}
