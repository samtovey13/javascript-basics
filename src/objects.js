const createPerson = (name, age) => {
  const person = { name: name, age: age };
  return person;
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  return person.age > 65;
};

const getAges = people => {
  const ages = [];
  for (let i=0; i<people.length; i++) {
    ages.push(people[i].age);
  }
  return ages;
};

const findByName = (name, people) => {
  for (let i=0; i<people.length; i++) {
    if (people[i].name === name) {
      return people[i];
    }
  }
};

const findHondas = cars => {
  const hondas = [];
  for (let i=0; i<cars.length; i++) {
    if (cars[i].manufacturer === "Honda") {
      hondas.push(cars[i]);
    }
  }
  return hondas;
};

const averageAge = people => {
  let total = 0;
  for (let i=0; i<people.length; i++) {
    total += people[i].age;
  }
  return total / people.length;
};

const createTalkingPerson = (name, age) => {
  const talkingPerson = {
    name: name,
    age: age,
    introduce(friend) {
      return "Hi " + friend + ", my name is " + this.name + " and I am " + this.age + "!";
    }
  }
  return talkingPerson;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
