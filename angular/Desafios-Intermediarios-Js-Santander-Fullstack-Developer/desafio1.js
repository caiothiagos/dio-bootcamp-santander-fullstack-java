// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades: 
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente;
// Abaixo segue o template de código para este desafio, o qual pode ou não utilizar tais funções

let lines = gets().split("\n");

let N = parseInt(lines.shift());
//TODO: Complete os espaços em branco com uma possível solução para o desafio
let resposta = ((N -  3)*   N) / 2; 
print(    resposta    );

/*



Guilherme adora brincar com pipas, pipas de várias cores, formas e tamanhos. Ele tem percebido que para as pipas possuírem maior estabilidade, e dessa forma voarem mais alto, elas devem possuir um barbante bem esticado ligando todos os pares de pontas não vizinhas.

Apesar de ser uma criança bastante criativa e astuta, Guilherme não sabe como determinar a quantidade de barbantes que ele terá que utilizar para tornar uma pipa de n lados, estável. Você pode ajudá-lo?.
Entrada

A entrada será composta por uma única linha, que contém um inteiro 3 ≤ n ≤ 105, representando o número de lados da pipa.
Saída

Imprima um número inteiro, que será a quantidade de barbantes que Guilherme terá que utilizar para tornar a pipa de n lados estável.
 
Exemplos de Entrada 	Exemplos de Saída
4 	2
10 	35
11 	44
 
Homenagem ao meu irmão Guilherme, ele adora pipas.

Tapioca's Round I, 2015
*/