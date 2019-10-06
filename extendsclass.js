class Human{
    speccies = 'human';
}

class Person extends Human{

    name = 'bear';
    printName = () =>{
        console.log(this.name);
    }
   
}
const person = new Person();
person.printName();
console.log(person.speccies);