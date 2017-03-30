var structure = {
    tagName: "body",
    subTags: [
        {
            tagName: "div",
            subTags: [
                {
                    tagName: "span",
                    text: "Enter a data please:"
                },
                {
                    tagName: "br"
                },
                {
                    tagName: "input",
                    attrs: {
                        type: "text",
                        id: "name"
                    }
                },
                {
                    tagName: "input",
                    attrs: {
                        type: "text",
                        id: "surname"
                    }
                }
            ]
        },
        {
            tagName: "div",
            subTags: [
                {
                    tagName: "button",
                    text: "OK",
                    attrs: {
                        id: "ok"
                    }
                },
                {
                    tagName: "button",
                    text: "Cancel",
                    attrs: {
                        id: "ok"
                    }
                }
            ]
        }
    ]
}

// Вывести значение текста во второй кнопке:
alert(structure.subTags[1].subTags[1].text);

// Вывести значение атрибута id во втором input:
alert(structure.subTags[0].subTags[3].attrs.id);