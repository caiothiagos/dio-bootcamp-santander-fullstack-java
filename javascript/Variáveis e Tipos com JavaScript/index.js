/*
numberOne = 1;
console.log(numberOne + 2);
var numberOne;
*/

/*
numberOne = 1;
console.log(numberOne + 2);
let numberOne;
*/

/*
var firstName = 'João';
var lastName = 'Souza';
if(firstName === 'João'){
    let lastName = 'Rodrigues';
    var firstName = 'Pedro';
    lastName = 'Silva';

    console.log(lastName);
}
console.log(firstName, lastName);
*/

/*
//não faz hoisting
FIRST_NAME = "Stephany";
console.log(FIRST_NAME);
const FIRST_NAME = "Stephany";


const FIRST_NAME = "Stephany";
console.log(FIRST_NAME);
*/

/*
                var                 const       let
escopo          global ou local     bloco       bloco
redeclarar      sim                 não         não
reatribuir      sim                 não         sim
hoisting        sim                 não         não
*/

/*
let um = "um";
um
typeof um

um = 1
typeof um
*/

let nome = "João"
nome

let sobrenome = "Pedro"
typeof nome

nome.concat(sobrenome)

let concatenado = nome.concat(sobrenome)

typeof concatenado

concatenado.length

let exemplo1 = "blablabla"
let exemplo2= new String("blablabla")

exemplo1.length

nome

nome[1]

nome.length

concatenado

concatenado = nome + " " + sobrenome

concatenado

concatenado = nome + "\n" + sobrenome

concatenado = `${nome} ${sobrenome}`

concatenado = `${nome}

${sobrenome}`


let frase = "Olá, tudo bem?"

frase.split("")

frase.includes("tudo")

frase.startsWith("O")

frase.startsWith("R")

frase.endsWith("?")

frase.replace(",", "!")

let stringModificada = frase.replace(",", "!")

frase

stringModificada
