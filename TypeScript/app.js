var message = "help me";
console.log(message);
var episodio = 4;
console.log("Este é o episodio = " + episodio);
episodio = episodio + 1;
console.log("O proximo é o episodio = " + episodio);
var favoriteDroid;
favoriteDroid = "BB-08";
console.log("Meu Droid Favorito = " + favoriteDroid);
var shoteStrun = function (nrEntrada) {
    if (nrEntrada >= 12) {
        return true;
    }
    else {
        return false;
    }
};
var nrSaida;
nrSaida = 12;
console.log("O Numero " + nrSaida + " é maior que 12 Verdade = " + shoteStrun(nrSaida));
var distancia = 13;
console.log("A Velocidade de " + distancia + " Km \u00E9 suficiente para bater uma aeronave? " + (shoteStrun(distancia) ? 'Claro que Sim' : 'Não Consegue') + " ");
var Chamada = function (name) { return console.log("Qual o seu nome, " + name + "?"); };
Chamada('dudu');
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
