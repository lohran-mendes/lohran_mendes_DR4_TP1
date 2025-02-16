// Exercício 3: Inclusão de elementos em Arrays.
// Execute os passos definidos abaixo:

// Crie um array com os itens: "Recife", "Belém", "Brasília", “Curitiba”, “Vitória” e “Rio de Janeiro”.
// Exiba o array com alert.
// Adicione os itens “São Paulo”, “Petrópolis” no final do array.
// Exiba o array com alert.
// Adicione os itens “Gramado”, “Cuiabá” depois do índice 2.
// Exiba o array com alert.
// Observações:

// Implemente da forma mais simples e objetiva possível.
// Não use estruturas de controle de repetição.
const itens = ["Recife", "Belém", "Brasília", "Curitiba", "Vitória", "Rio de Janeiro"]
alert('Exibindo os itens do array:\n' + itens)
itens.push("São Paulo", "Petrópolis")
alert('Exibindo os itens do array:\n' + itens)
itens.splice(3, 0, "Gramado", "Cuiabá");
alert('Exibindo os itens do array:\n' + itens)