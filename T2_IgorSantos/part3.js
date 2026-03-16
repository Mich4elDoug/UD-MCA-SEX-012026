
// ======================================
// Parte 3 – Array de Objetos
// ======================================

let Celulares = [
  { nome: "iPhone 15", preco: 7200, estoque: 18 },
  { nome: "Samsung Galaxy S24", preco: 5800, estoque: 95 },
  { nome: "Xiaomi Redmi Note 13", preco: 2100, estoque: 55 },
  { nome: "Motorola Edge 40", preco: 3200, estoque: 25 },
  { nome: "Samsung Galaxy A54", preco: 2400, estoque: 40 },
  { nome: "iPhone 13", preco: 5200, estoque: 35 },
  { nome: "Xiaomi Poco X5", preco: 2100, estoque: 10 },
  { nome: "Motorola G84", preco: 1900, estoque: 8 },
  { nome: "Samsung Galaxy S22", preco: 4500, estoque: 20 },
  { nome: "iPhone SE", preco: 3800, estoque: 200 }
];


// A. Qual é o preço do segundo objeto?
console.log("Preço do segundo objeto:", Celulares[1].preco);


// B. Qual é o nome do terceiro objeto?
console.log("Nome do terceiro objeto:", Celulares[2].nome);


// C. Quantos itens existem no array?
console.log("Quantidade de objetos no array:", Celulares.length);


// D. Imprima o nome de todos os objetos
console.log("Nomes dos produtos:");

for (let i = 0; i < Celulares.length; i++) {
  console.log(Celulares[i].nome);
}


// E. Some o total de estoque de todos os objetos
let totalEstoque = 0;

for (let i = 0; i < Celulares.length; i++) {
  totalEstoque += Celulares[i].estoque;
}

console.log("Total de estoque:", totalEstoque);


// F. Qual objeto possui maior estoque?
let maiorEstoque = Celulares[0];

for (let i = 1; i < Celulares.length; i++) {
  if (Celulares[i].estoque > maiorEstoque.estoque) {
    maiorEstoque = Celulares[i];
  }
}

console.log("Produto com maior estoque:", maiorEstoque.nome, "-", maiorEstoque.estoque);