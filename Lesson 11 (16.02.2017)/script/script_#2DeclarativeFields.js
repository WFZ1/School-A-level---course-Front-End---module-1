var notebook = {
    brand: prompt("Enter brand notebook"),
    type: prompt("Enter type notebook"),
    model: prompt("Enter model notebook"),
    ram: +prompt("Enter ram notebook"),
    size: prompt("Enter size notebook"),
    weight: +prompt("Enter weight notebook"),
    resolution: {
        width: +prompt("Enter width resolution of notebook"),
        height: +prompt("Enter height resolution of notebook")
    }
};

var phone = {
    brand: prompt("Enter brand phone"),
    model: prompt("Enter model phone"),
    ram: +prompt("Enter ram phone"),
    color: prompt("Enter color phone")
};

var person = {
    name: prompt("Enter a name"),
    surname: prompt("Enter a surname"),
    married: confirm("Have you married?")
};