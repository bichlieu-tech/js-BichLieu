const numbers = [1, 2, 3, 4, 5];
[num1, num2, , , num5] = numbers;

console.log(num1, num2);

const person = {
    name: 'bich lieu',
    age: 20
};

const { name, age } = person;
console.log(name);
console.log(age);