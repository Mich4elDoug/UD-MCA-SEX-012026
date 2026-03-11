
// ======================================
// Parte 3 – Array de Objetos
// ======================================

let Gadgets = [
  { nome: "Notebook", preco: 4500, estoque: 15 },
  { nome: "Mouse", preco: 80, estoque: 120 },
  { nome: "Teclado", preco: 150, estoque: 60 },
  { nome: "Monitor", preco: 900, estoque: 25 },
  { nome: "Headset", preco: 200, estoque: 40 },
  { nome: "Webcam", preco: 130, estoque: 35 },
  { nome: "Impressora", preco: 700, estoque: 10 },
  { nome: "Cadeira Gamer", preco: 1200, estoque: 8 },
  { nome: "HD Externo", preco: 350, estoque: 20 },
  { nome: "Pen Drive", preco: 40, estoque: 200 }
];


// A. Qual é o preço do segundo objeto?
console.log("Preço do segundo objeto:", Gadgets[1].preco); // 80


// B. Qual é o nome do terceiro objeto?
console.log("Nome do terceiro objeto:", Gadgets[2].nome); // Teclado


// C. Quantos itens existem no array?
console.log("Quantidade de objetos no array:", Gadgets.length); // 10


// D. Imprima o nome de todos os objetos
console.log("Nomes dos produtos:");

for (let i = 0; i < Gadgets.length; i++) {
  console.log(Gadgets[i].nome);
}


// E. Some o total de estoque de todos os objetos
let totalEstoque = 0;

for (let i = 0; i < Gadgets.length; i++) {
  totalEstoque += Gadgets[i].estoque;
}

console.log("Total de estoque:", totalEstoque);


// F. Qual objeto possui maior estoque?
let maiorEstoque = Gadgets[0];

for (let i = 1; i < Gadgets.length; i++) {
  if (Gadgets[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = Gadgets[i];
  }
}

console.log("Produto com maior estoque:", maiorEstoque.nome, "-", maiorEstoque.estoque);