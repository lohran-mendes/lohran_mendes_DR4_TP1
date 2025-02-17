// Exercício 4: Combinação e exclusão de elementos de arrays.
// Execute os passos definidos abaixo:

// Crie um array com os itens: "Mercúrio", "Vênus", "Terra", “Marte” e “Júpiter”. 
// Crie um outro array com os itens: “Saturno”, “Urano” e “Netuno”.
// Junte os dois arrays em um terceiro.
// Exiba o array resultante com alert.
// Exclua o primeiro e o último elemento deste novo array.
// Exiba o array resultante com alert.
// Observações:

// Implemente da forma mais simples e objetiva possível.
// Não use estruturas de controle de repetição.
const planetasIniciais = ["Mercúrio", "Vênus", "Terra", "Marte", "Júpiter"]
const planetasRestantes = ["Saturno", "Urano", "Netuno"]
const todosPlanetas = planetasIniciais.concat(planetasRestantes);
alert("Array dos planetas:\n" + todosPlanetas)
todosPlanetas.shift()
todosPlanetas.pop()
alert("Array dos planetas restantes:\n" + todosPlanetas)