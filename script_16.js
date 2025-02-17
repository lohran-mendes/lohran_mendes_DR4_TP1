// Exercício 16: Função que acha o enésimo maior número em um array.
// Crie uma função que receba um array e um número inteiro e retorne o enésimo maior elemento do array. Por exemplo, se passar um array com 10 números e o número 4, a função deve retornar o quarto maior número desse array.

// Observações:

// Implemente da forma mais simples e objetiva possível.
// Não use estruturas de controle de repetição.
// Use somente as funções aprendidas nas etapas 1 e 2.
// Implemente um script demonstre a implementação.
// Assim que terminar, salve seu trabalho em PDF nomeando o arquivo conforme a regra “nome_sobrenome_DR4_TP1.PDF” e poste como resposta a este TP.
const numerosComDuplicatas = [1, 2, 2, 3, 3, 4, 5, 6, 7, 4, 5, 6, 6, 8, 10];

function retornaEnesimo(array, posicao) {
  if (Array.isArray(array) && Number.isInteger(posicao)) {
    arrayOrdenado = array.filter((elemento, indice, lista) => {
      if (lista.indexOf(elemento) == indice) {
        return elemento;
      }
    });
    arrayOrdenado.sort((a, b) => b - a);
    if (posicao <= 0 || posicao > arrayOrdenado.length) {
      return `Não existe a posição ${posicao} dentro do array ordenado`;
    }
    return arrayOrdenado[posicao - 1];
  } else
    return "Os argumentos dessa função não foram satisfeitos, é necessário entrar com um array e um número inteiro";
}
alert("Demonstrando o array:\n" + numerosComDuplicatas);
alert("O quarto maior número desse array é :\n" + retornaEnesimo(numerosComDuplicatas, 4));
