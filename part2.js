// ======================================
// Parte 2 – Objeto nomeObjeto
// ======================================

let DescCarros = {
  nome: "Toyota Corolla",
  cor: "Preto",
  preco: 120000,
  estoque: 15
};

// A. Como acessar o nome do objeto?
console.log("Nome do produto:", DescCarros.nome);

// B. Como acessar o preço usando colchetes?
console.log("Preço do produto:", DescCarros["preco"]);

// C. Atualize o estoque para 80
DescCarros.estoque = 80;
console.log("Novo estoque:", DescCarros.estoque);

// D. Imprima todas as propriedades no console
console.log("Objeto completo:", DescCarros);