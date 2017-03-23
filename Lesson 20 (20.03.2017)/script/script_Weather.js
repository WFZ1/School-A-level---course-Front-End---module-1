var gl_data;

$.getJSON("https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json", function(data) {
    gl_data = data;

    for (var key in data)
        $("#country").append($("<option>").text(key));

    citys( $("#country").val() );
    weather( $("#city").val() );
});

function citys(country) {
    for (var i = 0; i < gl_data[country].length; i++) 
        $("#city").append( $("<option>").text(gl_data[country][i]) );
}

function weather(city) {
    $.get("https://query.yahooapis.com/v1/public/yql", {q: "select * from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'", format: "json"}, function(data) {
        var item = data.query.results.channel.item; // для сокращения записи
        console.log(item);

        $("#date").text(item.forecast[0].date);
        $("#aura").text(item.condition.text);
        $("#high").text("↑" + item.forecast[0].high + "°");
        $("#low").text("↓" + item.forecast[0].low + "°");
        $("#temp").text(item.condition.temp + "°C");

        $("table").empty();
        for (var i = 0; i < 7; i++) {
            var tr = $("<tr>");
            $(tr).append( $("<td>").text(item.forecast[i].day) );
            $(tr).append( $("<td>").text(item.forecast[i].text) );
            $(tr).append( $("<td>").text(item.forecast[i].high) );
            $(tr).append( $("<td>").text(item.forecast[i].low) );
            $("table").append(tr);
        }
    });
}

$("#country").change(function() {
    $("#city").empty(); // очищает выпадающий список с городами
    citys( $(this).val() );
    weather( $("#city").val() );
});

$("#city").change(function() {
    weather( $(this).val() );
});