// Exercício 7: Ordenando arrays - parte 1.
// Execute os passos definidos abaixo:

// Crie um array com os itens: “Dinamarca”, “Inglaterra”, “Portugal”, “Noruega”, “Espanha”, “Alemanha”, “França” e “Itália”.
// Exiba o array resultante com alert.
// Ordene o array de forma ascendente.
// Exiba o array resultante com alert.
// Ordene o array de forma descendente.
// Exiba o array resultante com alert.
// Observações:

// Implemente da forma mais simples e objetiva possível.
// Não use estruturas de controle de repetição.
const paises = [
  "Dinamarca",
  "Inglaterra",
  "Portugal",
  "Noruega",
  "Espanha",
  "Alemanha",
  "França",
  "Itália",
];
alert("Exibindo a lista dos países:\n" + paises);
paises.sort();
alert("Exibindo a lista dos países ordenados de forma ascendente:\n" + paises);
paises.sort().reverse();
alert("Exibindo a lista dos países ordenados de forma descendente:\n" + paises);