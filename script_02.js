// Exercício 2: Substituição de elementos de um Array.
// Execute os passos definidos abaixo:

// Crie um array com os itens: "Martelo", "Chave de Fenda", "Serrote", “Alicate” e “Formão”.
// Exiba o array com alert.
// Substitua o primeiro item por “Chave Inglesa” e o último item por “Trena”.
// Exiba o array com alert.
// Observações:

// Implemente da forma mais simples e objetiva possível.
// Não use estruturas de controle de repetição.
const itens = ["Martelo", "Chave de Fenda", "Serrote", "Alicate", "Formão"]
alert('Exibindo os itens do array:\n' + itens)
itens[0] = "Chave Inglesa";
itens[itens.length - 1] = "Trena";
alert('Exibindo os itens do array:\n' + itens)