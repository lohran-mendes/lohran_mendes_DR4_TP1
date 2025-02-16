// Exercício 5: Buscando e extraindo elementos de um array.
// Execute os passos definidos abaixo:

// Crie um array com os itens: "Machado de Assis", "Clarice Lispector", "Rubem Fonseca", “Rachel de Queiroz”, “Itamar Vieira Jr.” e “Cora Coralina”.
// Exiba o array resultante com alert.
// Exiba se “Rachel de Queiroz” pertence ao array.
// Exclua “Rachel de Queiroz” do array.
// Exiba o array resultante com alert.
// Observações:

// Implemente da forma mais simples e objetiva possível.
// Não use estruturas de controle de repetição.
const escritores = ["Machado de Assis", "Clarice Lispector", "Rubem Fonseca", "Rachel de Queiroz","Itamar Vieira Jr", "Cora Coralina"]
alert("Exibindo escritores no array:\n" + escritores)
contemNoArray('Rachel de Queiroz')
escritores.splice(escritores.indexOf('Rachel de Queiroz'), 1)
contemNoArray('Rachel de Queiroz')
alert("Exibindo escritores no array depois da remoção:\n" + escritores)

function contemNoArray(pessoa){
if(escritores.indexOf(pessoa) !== -1) {
    alert(`Sim, ${pessoa} pertence ao array!`)
} else alert(`Não, ${pessoa} não pertence ao array!`)
}