//Peça ao usuario para inserir seu nome, idade e gênero. Utilize operadores lógicos para verificar se o usuário é maior de idade e qual o gênero
let nome = prompt("Qual seu nome?")
let idade = prompt("Qual sua idade?")
let genero = prompt("Qual seu gênero?")

let maiorMenor = idade => 18;

if (maiorMenor) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
}

