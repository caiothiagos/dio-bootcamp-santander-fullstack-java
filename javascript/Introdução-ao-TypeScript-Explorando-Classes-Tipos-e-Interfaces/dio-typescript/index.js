"use strict";
/*
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


type IAnimal = {
    nome: string;
    tipo: 'terrestre' | 'áquatico';
    executarRugido(alturaEmDecibeis: number): void;
}


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
*/
/*
const input = document.getElementById('input') as HTMLInputElement;

//input.value;

input.addEventListener('input', (event) => {
    const i = document.getElementById('input') as HTMLInputElement;
    console.log(i.value)
})
*/
exports.__esModule = true;
/*
//Generic types

function adicionaApendiceALista <T>(array: T[], valor: T){
    return array.map( () => valor)
}

adicionaApendiceALista([1, 2, 3], 1)
*/
/*
interface IUsuario{
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: 'gerente' | 'coordenador' | 'supervisor'
}

function redirecione(usuario: IUsuario | IAdmin){
    if('cargo' in usuario){
        //redireciona para a área de administração
    }

    //redireciona para a área do usuário
}
*/
/*
interface IUsuario{
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario'
}


function redirecione(usuario: IUsuario){
    if(usuario.cargo){
        //redirecionar(usuario.cargo)
    }
    // redirecionar para a área do usário
}
*/
/*
interface Cachorro{
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    readonly[K in keyof Cachorro]: Cachorro[K];
}

const meuCachorro: Cachorro = {
    nome: 'Apolo',
    idade: 14
}

class MeuCachorro implements Cachorro{
    idade = 14;
    nome = 'Apolo';

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}


class MeuCachorroLeitura implements CachorroSomenteLeitura{
    idade;
    nome;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorroLeitura('Apolo', 14)

cao.idade = 8;

console.log(cao)
*/
/*
interface Estudante {
    nome: string;
    idade: number;
}

interface Estudante{

}


import $ from 'jquery';

$.fn.extend({
    novaFuncao(){
        console.log('Chamou nova função');
    }
});

$('input').novaFuncao();

*/
exports.numero = 2;
