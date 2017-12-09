
import {NaveEspacial, NaveCarga } from './NaveBase'
import {MillenniumFlacon} from './ComecarLuta'

import * as _ from 'lodash'

//Comando abaixo Criado pelo LoDash (  _.pad  )
//npm install --save lodash@4.14
//npm install --save-dev @types/lodash@4.14

console.log( _.pad( "Examplos de TypeScript",80,"*") )

let SpaccoNave = new NaveEspacial('HyperDrive')
SpaccoNave.puloParaHyperSpaco()

let falcon = new MillenniumFlacon()
falcon.puloParaHyperSpaco()

let boaParaCarga = (espaconave:NaveCarga) => espaconave.numeroContatiner > 2

console.log( _.pad( "Falcon",60,":-)") )
console.log(`A Falcon é boa para Caraga ? ${boaParaCarga (falcon) ? 'Sim muito Boa':'Não poucos Containers'} `)
