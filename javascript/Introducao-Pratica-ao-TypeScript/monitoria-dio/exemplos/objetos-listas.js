"use strict";
var pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
};
pessoa.idade = 25;
var andre = {
    nome: 'Andre',
    idade: 25,
    profissao: 'pintor'
};
var paula = {
    nome: 'Paula',
    idade: 25,
    profissao: 'Desenvolvedora'
};
var Profissao2;
(function (Profissao2) {
    Profissao2[Profissao2["Proesessora"] = 0] = "Proesessora";
    Profissao2[Profissao2["Atriz"] = 1] = "Atriz";
    Profissao2[Profissao2["Desenvolvedora"] = 2] = "Desenvolvedora";
    Profissao2[Profissao2["JogadoraDeFutebol"] = 3] = "JogadoraDeFutebol";
})(Profissao2 || (Profissao2 = {}));
var vanessa = {
    nome: 'Vanessa',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
var maria = {
    nome: 'Maria',
    idade: 23,
    profissao: Profissao.Desenvolvedora
};
var jessica = {
    nome: 'Jessica',
    idade: 28,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemátia discreta', 'programação']
};
var monica = {
    nome: 'Jessica',
    idade: 28,
    materias: ['Matemátia discreta', 'programação']
};
function listar(lista) {
    for (var _i = 0, lista_1 = lista; _i < lista_1.length; _i++) {
        var item = lista_1[_i];
        console.log('- ', item);
    }
}
listar(monica.materias);