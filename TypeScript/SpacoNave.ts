
import {NaveEspacial, NaveCarga } from './NaveBase'
import {MillenniumFlacon} from './ComecarLuta'

let SpaccoNave = new NaveEspacial('HyperDrive')
SpaccoNave.puloParaHyperSpaco()

let falcon = new MillenniumFlacon()
falcon.puloParaHyperSpaco()

let boaParaCarga = (espaconave:NaveCarga) => espaconave.numeroContatiner > 2

console.log(`A Falcon é boa para Caraga ? ${boaParaCarga (falcon) ? 'Sim muito Boa':'Não poucos Containers'} `)
