var notebook = {
    brand: prompt("Enter brand notebook") || "HP",
    type: prompt("Enter type notebook") || "440 G4",
    model: prompt("Enter model notebook") || "Y7Z75EA",
    ram: +prompt("Enter ram notebook") || 4,
    size: prompt("Enter size notebook") || "14",
    weight: +prompt("Enter weight notebook") || 1.8,
    resolution: {
        width: +prompt("Enter width resolution of notebook") || 1920,
        height: +prompt("Enter height resolution of notebook") || 1080
    },
    // owner: person    <= новые поля
};

var phone = {
    brand: prompt("Enter brand phone") || "meizu",
    model: prompt("Enter model phone") || "m2",
    ram: +prompt("Enter ram phone") || 2,
    color: prompt("Enter color phone") || "black",
    // owner: person   <= новые поля
};

var person = {
    name: prompt("Enter a name") || "Donald",
    surname: prompt("Enter a surname") || "Trump",
    married: confirm("Have you married?"),
    // smartphone: phone,    <= новые
    // laptop: notebook				поля
};

person.smartphone = phone;
person.laptop = notebook;
phone.owner = person;
notebook.owner = person;