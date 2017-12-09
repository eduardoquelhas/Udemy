var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var NaveEspacial = /** @class */ (function () {
    function NaveEspacial(Propulsor) {
        this.Propulsor = Propulsor;
    }
    NaveEspacial.prototype.puloParaHyperSpaco = function () {
        console.log("Vamos LA Entrando no HyperSpaco com " + this.Propulsor);
    };
    return NaveEspacial;
}());
var SpaccoNave = new NaveEspacial('HyperDrive');
SpaccoNave.puloParaHyperSpaco();
var MillenniumFlacon = /** @class */ (function (_super) {
    __extends(MillenniumFlacon, _super);
    function MillenniumFlacon() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.numeroContatiner = 4;
        return _this;
    }
    MillenniumFlacon.prototype.puloParaHyperSpaco = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.puloParaHyperSpaco.call(this);
        }
        else {
            console.log('Falha para fazer o Pulo para o HiperSpaco.');
        }
    };
    return MillenniumFlacon;
}(NaveEspacial));
var falcon = new MillenniumFlacon();
falcon.puloParaHyperSpaco();
var boaParaCarga = function (espaconave) { return espaconave.numeroContatiner > 2; };
console.log("A Falcon \u00E9 boa para Caraga ? " + (boaParaCarga(falcon) ? 'Sim muito Boa' : 'Não poucos Containers') + " ");
