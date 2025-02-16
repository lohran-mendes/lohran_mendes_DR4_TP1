// Exercício 9: Ordenando arrays - parte 3.
// Execute os passos definidos abaixo:

// Crie um array com os itens: “Javascript”, “Kotlin”, “C”, “Rust”, “Python”, “Go” e “Basic”.
// Exiba o array resultante com alert.
// Ordene o array de forma ascendente, criando um novo array.
// Exiba o array resultante com alert.
// Ordene o array de forma descendente, criando um novo array.
// Exiba o array resultante com alert.
// Junte o array ascendente com o descendente.
// Exiba o array resultante com alert.
// Observações:

// Implemente da forma mais simples e objetiva possível.
// Não use estruturas de controle de repetição.
const linguagens = [
  "JavaScript",
  "Kotlin",
  "C",
  "Rust",
  "Python",
  "Go",
  "Basic",
];
alert("Exibindo array de linguagens: \n" + linguagens.join(", "));
const linguagensAscendente = [...linguagens];
linguagensAscendente.sort();
alert(
  "Exibindo o novo array ascendente de linguagens: \n" +
    linguagensAscendente.join(", ")
);
const linguagensDescendente = [...linguagensAscendente];
linguagensDescendente.reverse();
alert(
  "Exibindo o novo array descendente de linguagens: \n" +
    linguagensDescendente.join(", ")
);
const juncaoDosArrays = [...linguagensAscendente, ...linguagensDescendente];
alert(
  "Exibindo o array concatenado com as formas ascendente e descendente:\n" +
    juncaoDosArrays.join(", ")
);