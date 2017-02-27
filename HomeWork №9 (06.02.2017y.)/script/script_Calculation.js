$("#do").click(function() {
    var literWater = $("#literWater").val(); // стоимость 1л. Роганской воды в автомате
    var coffee = $("#coffee").val(); // ёмкость чашки кофе

    // Стоимость 6 литров воды
    $("#cost_6L").val((literWater * 6).toFixed(2));
    var cost_6L = $("#cost_6L").val();

    $("#cupsCoffee").val((cost_6L / coffee).toFixed(0)); // сколько выйдет чашек кофе из 6л. воды
    $("#cost").val(+cost_6L + 80); // общая сумма баклажки воды и 220г. кофе Якобс Монарх
});