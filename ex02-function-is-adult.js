//Crie uma função que recebe um objeto person e retorna um novo objeto, com todas as propriedades do original, mais uma propriedade "isAdult" (true se age >= 18)

const person = {
  name: "Gabriel",
  age: 22,
};

function isAdult(person) {
  const newPerson = {
    ...person,
    isAdult: person.age >= 18 ? true : "This person is not adult",
  };
  return newPerson;
}

console.log(isAdult(person));