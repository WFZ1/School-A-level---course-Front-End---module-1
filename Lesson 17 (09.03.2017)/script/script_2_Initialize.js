function Person(name, surname, age, sex, salary, married) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.sex = sex;
    this.salary = salary;
    this.married = married;
}

var person1 = new Person("Ivan", "Petroff", 32, "male", 5000, "yes");
var person2 = new Person("Pasha", "Skumenko", 20, "male", 1000, "no");

console.log(person1, person2);