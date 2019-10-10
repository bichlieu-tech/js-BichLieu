const num1 = 1;
const num2 = num1;
num1 = 2;

console.log(num1);

console.log(num2);

const person1 = {
    name: 'bich lieu',
    age: 20
};

const person2 = person1;

person1.name = 'van long';
person1.age = 21;

console.log(person2);

console.log(person1);

const person1 = {
    name: 'bich lieu',
    age: 20
};

const person2 = {
    ...person1
};

person1.name = 'van long';
person1.age = 21;
console.log(person2);