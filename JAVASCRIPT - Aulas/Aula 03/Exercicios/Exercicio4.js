
// Crie um variável preço e atribua a ela um valor numérico.
let preço = 2000;



//Em seguida, crie um variável desconto e atribua a ela um valor 0.2, 
//representando a porcentagem (20%) de desconto que você deseja aplicar.
let desconto = 0.2;



//Por fim, crie uma variável Preço final que use as variáveis 
//preço e desconto para calcular o preço com desconto e imprima o resultado no console.
let preçoFinal = preço * (1 - desconto);
console.log(preçoFinal);

alert(`Preço original: ${preço} reais\nDesconto aplicado: ${desconto * 100}%\nPreço com desconto: ${preçoFinal} reais`)
