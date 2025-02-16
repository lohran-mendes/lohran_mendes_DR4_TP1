// Exercício 11: Achando os números máximo e o mínimo em um array.
// Execute os passos definidos abaixo:

// Crie um array com os itens: 123, 765, 876, 345, 908, 432, 789, 654 e 234.
// Exiba o valor máximo e o valor mínimo do array.
// Observações:

// Implemente da forma mais simples e objetiva possível.
// Não use estruturas de controle de repetição.
const numeros = [123, 765, 876, 345, 908, 432, 789, 654, 234];
alert('O valor máximo dentro do array é ' + Math.max(...numeros) + ' e o seu menor valor é ' + Math.min(...numeros))