console.log('TypeScript')

function soma(a: number, b: number){
    return a + b
}

soma(5, 7)

//types
//interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'áquatico';
    
    executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

animal.executarRugido(10)

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

felino.executarRugido(10)