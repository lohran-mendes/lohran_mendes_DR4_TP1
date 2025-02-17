// Exercício 10: Embaralhando arrays.
// Execute os passos definidos abaixo:

// Crie um array com os itens: “justiça”, “persistência”, “otimismo”, “humildade”, “bondade”, “compaixão”, “empatia”, “perdão”, “honestidade”, “disciplina” e “coragem”.
// Exiba uma frase padrão que use a palavra que está no índice 2.
// Embaralhe o array usando a função sort.
// Exiba novamente a mesma frase padrão que use a palavra que está no índice 2.
// Observações:

// Implemente da forma mais simples e objetiva possível.
// Não use estruturas de controle de repetição.
const qualidades = [
  "justiça",
  "persistência",
  "otimismo",
  "humildade",
  "bondade",
  "compaixão",
  "empatia",
  "perdão",
  "honestidade",
  "disciplina",
  "coragem",
];

exibirFrasePadrao(qualidades);
qualidades.sort(() => Math.random() - 0.5);
exibirFrasePadrao(qualidades);

function exibirFrasePadrao(entrada) {
  if (Array.isArray(entrada) && entrada.length >= 3 && entrada[2] && typeof entrada[2] === 'string') {
    alert(
      `${entrada[2]} é uma qualidade muito boa para qualquer tipo de pessoa`
    );
  } else if (Array.isArray(entrada) && entrada.length >= 3) {
    alert(`A palavra no índice 2 do array não é válida`);
  } else if (Array.isArray(entrada) && entrada.length < 3) {
    alert(
      `A entrada não tem pelo menos 3 itens para usar a palavra que está no índice 2.`
    );
  } else alert(`A entrada não é um Array`);
}
