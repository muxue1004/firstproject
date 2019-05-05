$(document).ready(function () {
    var mode , mode2
    $(".area").attr("disabled", true);
    $('.area').removeAttr('onclick');
    $(".area").on("dragstart" , ".square" , function() {
        mode = $(this)
        console.log (mode2) 
    })
    $("body").on("dragover" , ".area" , function (ev) {
        ev.preventDefault();
    })
    $("body").on("drop" , ".area" , function () {
        $(this).append(mode)
        mode = []
    })
    function test() {
        $("#square5").after("<div></div>")
        $("#area3").children().addClass("square")
        $('.square').attr('draggable', true)
    }
    var setinter = setInterval(test,2000);
    $("#stop").on("click" , function() {
        clearInterval(setinter)
        $("#square5").remove()
    })
})