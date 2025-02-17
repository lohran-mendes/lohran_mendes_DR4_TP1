// Exercício 13: Funções primeiros e últimos.
// Crie duas funções que recebam um array e um número: a primeira retorna os primeiros n elementos do array e a segunda os n últimos elementos do array.

// Observações:

// Implemente da forma mais simples e objetiva possível.
// Não use estruturas de controle de repetição.
// Implemente um script demonstre a implementação.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

alert("retorna os cinco primeiros:\n" + retornaPrimeiros(numeros, 5));
alert("retorna os cinco ultimos:\n" + retornaUltimos(numeros, 5));

alert("retorna os três primeiros:\n" + retornaPrimeiros(numeros, 3));
alert("retorna os três ultimos:\n" + retornaUltimos(numeros, 3));

function retornaPrimeiros(array, quantidade) {
  if (Array.isArray(array) && Number.isInteger(quantidade)) {
    let arrayRetornado = [...array];
    return arrayRetornado.slice(0, quantidade);
  }
  return "Os argumentos dessa função não foram satisfeitos, é necessário entrar com um array e um número inteiro!";
}
function retornaUltimos(array, quantidade) {
  if (Array.isArray(array) && Number.isInteger(quantidade)) {
    let arrayRetornado = [...array];
    return arrayRetornado.slice(array.length - quantidade, array.length);
  }
  return "Os argumentos dessa função não foram satisfeitos, é necessário entrar com um array e um número inteiro!";
}
