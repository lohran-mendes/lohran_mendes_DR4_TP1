// Exercício 8: Ordenando arrays - parte 2.
// Execute os passos definidos abaixo:

// Crie um array com os itens: 78, 96, 34, 57, 81, 25, 14, 60 e 29.
// Exiba o array resultante com alert.
// Ordene o array de forma ascendente.
// Exiba o array resultante com alert.
// Ordene o array de forma descendente.
// Exiba o array resultante com alert.
// Observações:

// Implemente da forma mais simples e objetiva possível.
// Não use estruturas de controle de repetição.
const numeros = [78, 96, 34, 57, 81, 25, 14, 60, 29];
alert('Exibindo os números do array: \n' + numeros);
numeros.sort((a,b) => a - b)
alert('Exibindo os números do array ordenados de forma ascendente: \n' + numeros);
numeros.sort((a,b) => b - a)
alert('Exibindo os números do array ordenados de forma descendente: \n' + numeros);