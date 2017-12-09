"use strict";
exports.__esModule = true;
var NaveEspacial = /** @class */ (function () {
    function NaveEspacial(Propulsor) {
        this.Propulsor = Propulsor;
    }
    NaveEspacial.prototype.puloParaHyperSpaco = function () {
        console.log("Vamos LA Entrando no HyperSpaco com " + this.Propulsor);
    };
    return NaveEspacial;
}());
exports.NaveEspacial = NaveEspacial;
