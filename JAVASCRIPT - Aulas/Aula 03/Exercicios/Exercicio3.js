//APLICANDO METODOS



//Crie uma variável com o seu nome;
let nomeCompleto = "Sarah Santiago";



//Depois utilizando o método Replace troque o seu nome do meio pelo último sobrenome;
let novoNome = nomeCompleto.replace(/(Sarah) (Santiago)/, '$2 $1');
console.log(novoNome); 



//Crie uma string para apresentar o resultado. 
alert(`${novoNome}`)
