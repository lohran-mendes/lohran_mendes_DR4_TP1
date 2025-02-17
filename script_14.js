// Exercício 14: Função que remove duplicatas.
// Crie uma função que receba um array e retorna um outro array, removendo os elementos duplicados.

// Observações:

// Implemente da forma mais simples e objetiva possível.
// Não use estruturas de controle de repetição.
// Use somente as funções aprendidas nas etapas 1 e 2.
// Implemente um script demonstre a implementação.
const numerosComDuplicatas = [1, 2, 2, 3, 3, 4, 5, 6, 7, 4, 5, 6, 6, 8, 10];
const numerosSemDuplicatas = removeDuplicatas(numerosComDuplicatas);

alert("Demonstrando o array original \n" + numerosComDuplicatas);
alert("Demonstrando o array sem as duplicatas \n" + numerosSemDuplicatas);

function removeDuplicatas(array) {
  if (Array.isArray(array)) {
    let arrayRetornado = array.filter((elemento, indice, lista) => {
      if (lista.indexOf(elemento) == indice) return elemento;
    });
    return arrayRetornado;
  } else
    return "Os argumentos dessa função não foram satisfeitos, é necessário entrar com um array";
}
