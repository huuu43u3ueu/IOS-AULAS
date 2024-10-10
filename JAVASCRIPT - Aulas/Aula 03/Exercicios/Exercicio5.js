//Utilizando os conceitos apresentados, desenvolva um programa que faça o seguinte:
//Pergunte ao usuário os valores da primeira prova (N1) e da segunda prova (N2).
let nome = prompt("Qual seu nome?");
let N1 = parseFloat(prompt("Qual sua nota na prova 1?"));
let N2 = parseFloat(prompt("Qual sua nota na prova 2?"));



//Calcule a média do aluno.
let mediaDesejada = 6;
let media =  (N1 + N2) / 2;
let resultado = (media >= mediaDesejada) ? "Aprovado" : "Reprovado"

//Utilize o operador ternário para informar se o aluno está aprovado ou reprovado, considerando que a nota mínima para aprovação é 6.
alert(`Olá, ${nome}, sua média final é ${media.toFixed(2)}.\nVocê está ${resultado}!`)