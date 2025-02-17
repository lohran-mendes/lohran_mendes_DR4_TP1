// Exercício 12: Função Clone.
// Crie duas versões de função que retorne o clone de um array.

// Observações:

// Implemente da forma mais simples e objetiva possível.
// Não use estruturas de controle de repetição
// Implemente um script demonstre a implementação.
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const clone1 = clonaArray1(numeros);
const clone2 = clonaArray2(numeros);

numeros.pop();
numeros.pop();
numeros.pop();
numeros.pop();
numeros.pop();

alert("Referência de números com os seus úlitmos 5 retirados \n" + numeros);
alert("clone 1 \n" + clone1);
alert("clone 2 \n" + clone2);

function clonaArray1(array) {
  if (Array.isArray(array)) {
    return [...array];
  } else return "Não foi passado um array como argumento.";
}
function clonaArray2(array) {
  if (Array.isArray(array)) {
    return array.map((item) => item);
  } else "Não foi passado um array como argumento.";
}
