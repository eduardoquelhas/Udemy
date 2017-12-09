"use strict";
exports.__esModule = true;
var NaveBase_1 = require("./NaveBase");
var ComecarLuta_1 = require("./ComecarLuta");
var _ = require("lodash");
//Comando abaixo Criado pelo LoDash
console.log(_.pad("Examplos de TypeScript", 80, "*"));
var SpaccoNave = new NaveBase_1.NaveEspacial('HyperDrive');
SpaccoNave.puloParaHyperSpaco();
var falcon = new ComecarLuta_1.MillenniumFlacon();
falcon.puloParaHyperSpaco();
var boaParaCarga = function (espaconave) { return espaconave.numeroContatiner > 2; };
console.log(_.pad("Falcon", 60, ":-)"));
console.log("A Falcon \u00E9 boa para Caraga ? " + (boaParaCarga(falcon) ? 'Sim muito Boa' : 'Não poucos Containers') + " ");
