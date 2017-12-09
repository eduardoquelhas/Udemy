import { NaveEspacial, NaveCarga} from './NaveBase'

export class MillenniumFlacon extends NaveEspacial implements NaveCarga {
    
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
