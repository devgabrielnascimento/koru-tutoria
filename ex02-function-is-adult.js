//Crie uma função que recebe um objeto person e retorna um novo objeto, com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)

const person = {
  name: "Gabriel",
  age: 22,
};

function isAdult(person) {
  const newPerson = { ...person, isAdult: person.age >= 18 ? true : "This person is not adult" };
  return newPerson;
}

console.log(isAdult(person));


// 1. Use map para criar um array de strings formatadas como
//    "Nome do produto - Categoria" para cada produto
// 2. Use map para criar um array com os preços de todos os produtos com impostos (15% a mais)
// 3. Combine forEach com um acumulador externo para calcular o valor total de todos os produtos

const products = [
  { name: "Product 1", category: "Category 1", price: 10, tax: 0.15},
  { name: "Product 2", category: "Category 2", price: 20 },
  { name: "Product 3", category: "Category 3", price: 30 },
];

products.map(product => console.log(`${product.name} - ${product.category}`));

const taxedProducts = products.map(product.tax >= 0.15).map(product => console.log(`${product.name} - ${product.category}`));

console.log(taxedProducts);


// 1. Use filter para encontrar estudantes inativos
// 2. Use find para encontrar o estudante com id = 3
// 3. Use filter para encontrar estudantes que tiraram pelo menos uma nota abaixo de 70
// 4. Combine filter e map para obter apenas os nomes dos estudantes com média > 85