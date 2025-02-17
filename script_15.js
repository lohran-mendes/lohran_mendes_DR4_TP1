// Exercício 15: Função que junta arrays e remove duplicatas.
// Crie uma função que receba dois arrays e retorne um outro array, juntando os dois arrays e removendo os elementos duplicados.

// Observações:

// Implemente da forma mais simples e objetiva possível.
// Não use estruturas de controle de repetição.
// Use somente as funções aprendidas nas etapas 1 e 2.
// Implemente um script demonstre a implementação.
const listaDuplicatas1 = [1, 2, 2, 3, 3, 4, 5, 6, 7, 4, 5, 6, 6, 8, 10];
const listaDuplicatas2 = [10, 20, 20, 30, 30, 40, 50, 60, 70, 40, 50, 60, 60, 80, 100];

function somaArraysSemDuplicatas(primeiroArray, segundoArray) {
  const arraysSomados = primeiroArray
    .concat(segundoArray)
    .filter((elemento, indice, lista) => {
      if (lista.indexOf(elemento) == indice) {
        return elemento;
      }
    });
  return arraysSomados;
}

alert(somaArraysSemDuplicatas(listaDuplicatas1, listaDuplicatas2));
