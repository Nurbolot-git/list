
$(document).ready(function(){
    var token = "47433724f1f5ddea94033f50833f3a6d7cd593a9"
$(".address").suggestions({
    token:token,
        type: "ADDRESS",
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function(suggestion) {
        console.log(suggestion);
        }
    });
    $(".job").suggestions({
        token: token,
        type:"PARTY",
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function (suggestion) {
            console.log(suggestion);
        }
    });
    $(".fio").suggestions({
        token: token,
        type: "NAME",
        /* Вызывается, когда пользователь выбирает одну из подсказок */
        onSelect: function (suggestion) {
            console.log(suggestion);
        }
    });
});
