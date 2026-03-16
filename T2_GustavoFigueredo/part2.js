
// ======================================
// Parte 2 – Objeto nomeObjeto
// ======================================

let DescComputadores = {
  nome: "Notebook Dell Inspiron",
  cor: "Prata",
  preco: 4500,
  estoque: 15
};

// A. Como acessar o nome do objeto?
console.log("Nome do produto:", DescComputadores.nome);

// B. Como acessar o preço usando colchetes?
console.log("Preço do produto:", DescComputadores["preco"]);

// C. Atualize o estoque para 80
DescComputadores.estoque = 80;
console.log("Novo estoque:", DescComputadores.estoque);

// D. Imprima todas as propriedades no console
console.log("Objeto completo:", DescComputadores);