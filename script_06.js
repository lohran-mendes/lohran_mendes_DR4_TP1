// Exercício 6: Encontrando o elemento que atende a uma condição.
// Execute os passos definidos abaixo:

// Crie um array com os itens: “Jazz”, “Samba”, “Rock”, “Sertanejo”, “Bossa Nova”, “Pagode” e “Funk”.
// Exiba o array resultante com alert.
// Exiba o primeiro elemento que tiver 9 ou mais letras e seu índice.
// Crie um novo array com os elementos que tiverem 9 ou mais letras.
// Exiba o array resultante com alert.
// Observações:

// Implemente da forma mais simples e objetiva possível.
// Não use estruturas de controle de repetição.
const estilosMusicais = [
  "Jazz",
  "Samba",
  "Rock",
  "Sertanejo",
  "Bossa Nova",
  "Pagode",
  "Funk",
];
alert("Exibindo os itens do array:\n" + estilosMusicais);
alert(
  "O primeiro elemento do array que tem 9 ou mais letras é:\n" +
    estilosMusicais.find((estilo) => estilo.trim().length >= 9) +
    " e o seu índice é : " +
    estilosMusicais.findIndex((estilo) => estilo.trim().length >= 9)
);
const novaListaEstilosMusicais = estilosMusicais.filter(
  (estilo) => estilo.trim().length >= 9
);
alert(
  "Exibindo a lista de estilos musicais que tem 9 letras ou mais:\n" +
    novaListaEstilosMusicais
);
