$(document).ready(function () {
    let mode
    $("body").on("dragstart" , ".square" , function() {
        mode = $(this)
        console.log (mode) 
    })
    $("body").on("dragover" , ".area" , function (ev) {
        ev.preventDefault();
        console.log (this)
    })
    $("body").on("drop" , ".area" , function () {
        $(this).append(mode)
        console.log (this)
    })
    $("#square1").on("dblclick" , function () {
        $("#square1").text("傻")
    })
})