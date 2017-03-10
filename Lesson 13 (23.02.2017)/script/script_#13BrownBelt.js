function inputAnything(person) 
{    
    var result = {};

    for(var i = 0; i < person.length; i++) {
        result[person[i].field] = prompt(person[i].prompt, person[i].default_);
    }
    
    return result; // для проверки
};

var inputStructure = [
    {
        prompt: "Введите Фамилию",
        default_: "Скуменко",
        field: "surname"
    },
    {   
        prompt: "Введите Имя",
        default_: "Павел",
        field: "name"
    },
    {
        prompt: "Введите Отчество",
        default_: "Сергеевич",
        field: "fatherName"
    },
    {
        prompt: "Введите возраст",
        default_: 20,
        field: "age"
    }
];

var res = inputAnything(inputStructure);