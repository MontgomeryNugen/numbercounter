
$().ready(function() {
    var number = 0;
    
    $("#minus").click(function() {
        number = number - 1;
        $("label").text(number);
    })

    $("#plus").click(function() {
        number = number + 1;
        $("label").text(number);
    })

});
