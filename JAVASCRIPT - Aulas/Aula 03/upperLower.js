//Conteúdo pág. 43  
//Principais funções toLocalLowerCase() - Minusculo e toUpperCase() - Maiusculo

let nome = prompt('Qual seu nome?');

let estaMatriculado = prompt('Está matriculado em algum curso: (SIM - NAO)');

let ra = estaMatriculado.toUpperCase == "SIM" ? "Aluno possui R.A" : "Aluno não possui R.A";

alert(`O ${nome} ${ra}`);