
// ======================================
// Parte 2 – Objeto nomeObjeto
// ======================================

let DescFruta = {
  nome: "Melão,
  cor: "Amarelo",
  preco: 5,
  estoque: 20
};

// A. Como acessar o nome do objeto?
console.log("Nome do produto:", DescFruta.nome);

// B. Como acessar o preço usando colchetes?
console.log("Preço do produto:", DescFruta["preco"]);

// C. Atualize o estoque para 80
DescComputadores.estoque = 80;
console.log("Novo estoque:", DescFruta.estoque);

// D. Imprima todas as propriedades no console
console.log("Objeto completo:", DescFruta);
