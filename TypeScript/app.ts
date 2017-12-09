let message:string = "help me"
console.log(message)

let episodio: number = 4


console.log("Este é o episodio = " + episodio)
episodio = episodio + 1
console.log("O proximo é o episodio = " + episodio)

let favoriteDroid: string
favoriteDroid = "BB-08"

console.log("Meu Droid Favorito = " + favoriteDroid)

let  shoteStrun = function (nrEntrada:number):boolean {
    if (nrEntrada >= 12  ) {
        return true        
    }
    else
    {
        return false
    }
}


let nrSaida:number
nrSaida = 12

console.log("O Numero " + nrSaida +" é maior que 12 Verdade = " + shoteStrun(nrSaida) )