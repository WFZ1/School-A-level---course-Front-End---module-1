function jqInputAnything(res, person, save, reset) 
{
    var form = $("<form>").attr("onsubmit", "return false");

    for (var i = 0; i < person.length; i++)
    {    
        var label = $("<label>").text(person[i].prompt);
        var input = $("<input>").attr({
            value: person[i].default_,
            placeholder: person[i].placeholder,
            type: person[i].type
        });
        form.append($("<div>").append(label, input));
    }

    var button = $("<input>").attr({
        type: "submit",
        value: save
    });
    var button2 = $("<input>").attr({
        type: "reset",
        value: reset
    });

    $("body").append(form.append(button, button2));

    $(button).click(function() {
        var inputs = $("input");

        for (var i = 0; i < person.length; i++)
            res[person[i].field] = $(inputs[i]).val();

        alert(JSON.stringify(res));
    });

// CSS

    $("div input").css("margin-left", "10px");
}

var inputStructure = [
    {
        prompt: "Введите Фамилию",
        default_: "Скуменко",
        field: "surname",
        placeholder: "surname",
        type: "text"
    },
    {
        prompt: "Введите Имя",
        default_: "Павел",
        field: "name",
        placeholder: "name",
        type: "text"
    },
    {  
        prompt: "Введите Отчество",
        default_: "Сергеевич",
        field: "fatherName",
        placeholder: "father name",
        type: "text"
    },
    {
        prompt: "Введите возраст",
        default_: "20",
        field: "age",
        placeholder: "age",
        type: "number"
    }
];

var result = {};
jqInputAnything(result, inputStructure, "Сохранить", "Сбросить");