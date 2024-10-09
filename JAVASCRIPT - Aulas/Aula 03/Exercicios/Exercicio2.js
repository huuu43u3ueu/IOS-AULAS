//UTILIZANDO OS CONCEITOS APRESENTADOS, PERGUNTE AO USUÁRIO:



//Nome, idade, bairro
let nome = prompt('Qual seu nome?');
let idade = prompt('Qual sua idade?');
let endereço = prompt('Em qual bairro mora?');



//Passe o nome do usuário para todas as letras maiúsculas
let res = nome.toUpperCase();
alert(`Seu nome é ${res}`)



//Crie um programa que solicite o usuário para digitar dois números inteiros, em seguida exiba a soma desses produtos na tela
let numero1 = prompt('Digite um número');
let numero2 = prompt('Digite outro número');
let soma = +numero1 + +numero2;
alert(`A soma entre o número ${numero1} mais ${numero2} é ${soma}`)