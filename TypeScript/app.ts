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

let distancia= 13
console.log(`A Velocidade de ${distancia} Km é suficiente para bater uma aeronave? ${shoteStrun(distancia) ? 'Claro que Sim': 'Não Consegue'} `)

let Chamada = (name: string) => console.log(`Qual o seu nome, ${name}?`)
Chamada('dudu')

function inc( speed: number , inc: number = 1) :number {

    return speed + inc
}

console.log(`inc (5,1) = ${inc(5,1)}`)
console.log(`inc (5) = ${inc(5)}`)
