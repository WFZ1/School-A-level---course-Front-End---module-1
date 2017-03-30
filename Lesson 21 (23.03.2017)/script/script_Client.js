$(document).ready(function(){
    var nextMessageId = 0;

    function sendData(data, callback){
        $.post("http://students.a-level.com.ua:8070",JSON.stringify(data),callback, "json");
    }

    function sendMessage(nick, message){
        var data    = {func: "addMessage", nick: nick, message: message};
        sendData(data, function(data){
            getMessages();
        });
    }

    function getMessages(){
        var data    = {func: "getMessages", messageId: nextMessageId};
        sendData(data, function(data){
            for (msgIndex in data.data){
                msg     = data.data[msgIndex];
                $msgDiv = $("<div>").html("<b>" + msg.nick + "</b>:" + msg.message);
                $("#chat").prepend($msgDiv);
            }
            nextMessageId = data.nextMessageId;
        });
    }

    $("#send").click(function(){
        var nick    = $('#nick').val();
        var message = $('#msg').val();
        sendMessage(nick, message);
    });

    $(document.body).on("click", "b", function(){
        $("#msg").val( $(this).text() + ", " );
    });

    setInterval(getMessages,2000);
});

// Задание: при клике на ник, писать его в поле сообщения и ставить запятую,
//          если сообщение написано мне, то выводить сообщение другим цветом.