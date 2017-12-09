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
