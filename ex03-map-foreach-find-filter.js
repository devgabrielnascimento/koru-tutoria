// 1. Use map para criar um array de strings formatadas como
//    "Nome do produto - Categoria" para cada produto
// 2. Use map para criar um array com os preços de todos os produtos com impostos (15% a mais)
// 3. Combine forEach com um acumulador externo para calcular o valor total de todos os produtos

const products = [
  { name: "Milk", category: "Lactose", price: 10 },
  { name: "Bread", category: "Grain", price: 20 },
  { name: "Chicken", category: "Meat", price: 30 },
];

tax = 0.15;

// 1
const formattedProducts = products.map(
  (product) => `${product.name} - ${product.category}`
);

//2
const taxedProducts = products.map(
  (product) =>
    `name: ${product.name}, price: ${product.price.toFixed(2) * (1 + tax)},`
);

let totalPrice = 0;
products.forEach((product) => {
  totalPrice += product.price;
});
console.log("Formatted products: ", formattedProducts);
console.log("Taxed products: ", taxedProducts);
console.log("Total price of all products: ", totalPrice);

// 1. Use filter para encontrar estudantes inativos
// 2. Use find para encontrar o estudante com id = 3
// 3. Use filter para encontrar estudantes que tiraram pelo menos uma nota abaixo de 70
// 4. Combine filter e map para obter apenas os nomes dos estudantes com média > 85

const students = [
  { id: 1, name: "Alice", isActive: true, grade: 95 },
  { id: 2, name: "Bob", isActive: false, grade: 75 },
  { id: 3, name: "Charlie", isActive: true, grade: 15 },
  { id: 4, name: "David", isActive: false, grade: 25 },
];

const findedStudent = students.find((student) => student.id === 3);

const inativedStudents = students.filter(
  (student) => student.isActive == false
);
const lowGradeStudents = students.filter((student) => student.grade < 70);
const studentsWithHighGrade = students
  .filter((student) => student.grade > 85)
  .map((student) => student.name);
console.log("All inatived students",inativedStudents);
console.log("Finded student",findedStudent);
console.log("All low grade students with 70 or below", lowGradeStudents);
console.log("All high grade students with 85 or above", studentsWithHighGrade);
