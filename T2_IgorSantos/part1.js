// ======================================
// Parte 1 – Array Simples
// ======================================

let nomeDoArray = [
  "Brasil",
  "Argentina",
  "Chile",
  "Peru",
  "Colômbia",
  "México",
  "Canadá",
  "Estados Unidos",
  "França",
  "Alemanha",
  "Itália",
  "Portugal",
  "Espanha",
  "Japão",
  "China",
  "Coreia do Sul",
  "Índia",
  "Austrália",
  "África do Sul",
  "Noruega",
];

//    A. Qual elemento está na posição 0, 7, 11, 15, 18 e 20? ----------------------------

console.log("Elemento na posição 0:", nomeDoArray[0]);
console.log("Elemento na posição 7:", nomeDoArray[7]);
console.log("Elemento na posição 11:", nomeDoArray[11]);
console.log("Elemento na posição 15:", nomeDoArray[15]);
console.log("Elemento na posição 18:", nomeDoArray[18]);
console.log("Elemento na posição 20:", nomeDoArray[20]);

//    B. Qual elemento está na penúltima e última posição?  ------------------------------

console.log("Penúltimo elemento:", nomeDoArray[nomeDoArray.length - 2]);
console.log("Último elemento:", nomeDoArray[nomeDoArray.length - 1]);

//    C. Quantos elementos existem no array? ---------------------------------------------

console.log("Total de elementos no array:", nomeDoArray.length);

//    D. Adicione um novo elemento ao final do array. ------------------------------------

nomeDoArray.push("Uruguai");
console.log("Array após adicionar novo elemento:", nomeDoArray);

//    E. Imprima todos os elementos usando um for. ---------------------------------------

console.log("Lista completa de elementos:");

for (let i = 0; i < nomeDoArray.length; i++) {
  console.log(nomeDoArray[i]);
}