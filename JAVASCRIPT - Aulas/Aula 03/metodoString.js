let nome = 'Ren';
let idade = 14;
let matriculaAtiva = true;

let res = idade >= 18 ? 'pode fazer o curso' :  'não pode fazer o curso';



console.log(`============`)
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof matriculaAtiva);
console.log(`============`)



// Crie uma variável chamada aluno. Peça ao usuário para informar se ele é aluno (sim ou não) e armazene essa informação na variável.
let aluno = 'não'
let matricula = aluno == 'sim' ? 'O aluno está matrículado' : 'O aluno não está matrículado';
console.log(`${nome} ${res}`)
console.log(matricula);



//Conteúdo pág. 41
console.log('============');
let nNome = 'Ren'
let novoNome = nome.charAt(2);

console.log(nNome);
console.log(novoNome);
console.log(nome.length);