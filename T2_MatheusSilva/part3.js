// ======================================
// Parte 3 – Array de Objetos
// ======================================

let Frutas = [
  { nome: "Maçã", preco: 5, estoque: 50 },
  { nome: "Banana", preco: 3, estoque: 80 },
  { nome: "Laranja", preco: 4, estoque: 60 },
  { nome: "Uva", preco: 12, estoque: 30 },
  { nome: "Manga", preco: 6, estoque: 40 },
  { nome: "Abacaxi", preco: 7, estoque: 20 },
  { nome: "Melancia", preco: 15, estoque: 10 },
  { nome: "Morango", preco: 10, estoque: 35 },
  { nome: "Pera", preco: 6, estoque: 25 },
  { nome: "Kiwi", preco: 9, estoque: 18 }
];


// A. Qual é o preço do segundo objeto?
console.log("Preço do segundo objeto:", Frutas[1].preco); // 3


// B. Qual é o nome do terceiro objeto?
console.log("Nome do terceiro objeto:", Frutas[2].nome); // Laranja


// C. Quantos itens existem no array?
console.log("Quantidade de objetos no array:", Frutas.length); // 10


// D. Imprima o nome de todos os objetos
console.log("Nomes das frutas:");

for (let i = 0; i < Frutas.length; i++) {
  console.log(Frutas[i].nome);
}


// E. Some o total de estoque de todos os objetos
let totalEstoque = 0;

for (let i = 0; i < Frutas.length; i++) {
  totalEstoque += Frutas[i].estoque;
}

console.log("Total de estoque:", totalEstoque);


// F. Qual objeto possui maior estoque?
let maiorEstoque = Frutas[0];

for (let i = 1; i < Frutas.length; i++) {
  if (Frutas[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = Frutas[i];
  }
}

console.log("Fruta com maior estoque:", maiorEstoque.nome, "-", maiorEstoque.estoque);
