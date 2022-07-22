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
    domestico: boolean;
    // executarRugido(alturaEmDecibeis: number): void;
}

/*
type IAnimal = {
    nome: string;
    tipo: 'terrestre' | 'áquatico';
    executarRugido(alturaEmDecibeis: number): void;
}
*/

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande'
}

type IDomestico = IFelino | ICanino
//type IDomestico = IFelino & ICanino


const animal: IAnimal = {
    nome: 'Elefante',
    tipo: 'terrestre',
    domestico: false
    // executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

//animal.executarRugido(10)

const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    domestico: false,
    visaoNoturna: true,
    // executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

//felino.executarRugido(10)

const animalD: IDomestico = {
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre'
}