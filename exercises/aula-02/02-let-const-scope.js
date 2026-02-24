// ===== 1) const vs let (reassign) =====

// Declara uma constante (não pode ser reatribuída)
const course = "js-ts-fundamentals";

// Declara uma variável que pode ser reatribuída
let lesson = 2;

// Imprime o valor da constante
console.log("course:", course);

// Imprime o valor inicial de lesson
console.log("lesson:", lesson);

// Reatribui o valor de lesson (permitido com let)
lesson = 3;

// Mostra o novo valor após reatribuição
console.log("lesson after reassign:", lesson);

// ===== 2) const NÃO é imutável (objetos podem ser mutados) =====

// Declara um objeto constante (referência não pode mudar)
const user = { name: "Thiago", points: 0 };

// Modifica uma propriedade interna do objeto (mutação permitida)
user.points += 10;

// Exibe o objeto após a mutação
console.log("user after mutate:", user);

// Reatribuir o objeto inteiro quebraria (não permitido com const)
// user = { name: "Thiago", points: 999 };

// ===== 3) Escopo de bloco =====

// Bloco condicional (escopo local)
if (true) {
  // Variável existe apenas dentro deste bloco
  const inside = "only here";

  // Imprime variável válida dentro do escopo
  console.log("inside block:", inside);
}

// Tentar acessar fora do bloco geraria erro (ReferenceError)
// console.log(inside);

// ===== 4) Exemplo prático: const por padrão =====

// Array constante (referência não muda)
const numbers = [1, 2, 3];

// Variável acumuladora (precisa ser let pois será reatribuída)
let sum = 0;

// Loop que percorre cada número do array
for (const n of numbers) {
  // Soma progressiva (reatribuição necessária)
  sum = sum + n;
}

// Exibe o resultado final da soma
console.log("sum:", sum);
