//Crie uma função que recebe um objeto person e retorna um novo objeto, com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)

const person = {
  name: "Gabriel",
  age: 20,
};

function isAdult(person) {
  const newPerson = { ...person, isAdult: person.age >= 18 };
  return newPerson;
}

console.log(isAdult(person));
