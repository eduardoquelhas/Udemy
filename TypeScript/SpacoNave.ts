class NaveEspacial {
    constructor (public Propulsor: string) {}

    puloParaHyperSpaco() {
        console.log(`Vamos LA Entrando no HyperSpaco com ${this.Propulsor}`)
    }
}

let SpaccoNave = new NaveEspacial('HyperDrive')
SpaccoNave.puloParaHyperSpaco()

class MillenniumFlacon extends NaveEspacial implements NaveCarga {
    
    numeroContatiner:number

    constructor() { 
        super('hyperdrive')        
        this.numeroContatiner = 4
    }
    puloParaHyperSpaco(){
        if(Math.random() >= 0.5){
            super.puloParaHyperSpaco()            
        }
        else
        {
            console.log('Falha para fazer o Pulo para o HiperSpaco.')
        }
    }
}

let falcon = new MillenniumFlacon()
falcon.puloParaHyperSpaco()

interface NaveCarga {
    numeroContatiner: number
}

let boaParaCarga = (espaconave:NaveCarga) => espaconave.numeroContatiner > 2

console.log(`A Falcon é boa para Caraga ? ${boaParaCarga (falcon) ? 'Sim muito Boa':'Não poucos Containers'} `)