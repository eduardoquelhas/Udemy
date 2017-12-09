class NaveEspacial {
    constructor (public Propulsor: string) {}

    puloParaHyperSpaco() {
        console.log(`Vamos LA Entrando no HyperSpaco com ${this.Propulsor}`)
    }
}

interface NaveCarga {
    numeroContatiner: number
}

export{ NaveEspacial ,  NaveCarga}