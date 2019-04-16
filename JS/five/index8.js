$(document).ready(function () {
    var turn = 1
    if (turn == 1) {
        $("#red").on("click",function(){
            $('#second').append($("#red"))
        })
        $("#blue").on("click",function(){
            $('#second').append($("#blue"))
        })
        $("#green").on("click",function(){
            $('#second').append($("#green"))
        })
    }else {
        $("#red").on("click",function(){
            $('#first').append($("#red"))
        })
        $("#blue").on("click",function(){
            $('#first').append($("#blue"))
        })
        $("#green").on("click",function(){
            $('#first').append($("#green"))
        })
    }
    // function dragStart(event) {
    //     event.dataTransfer.setData("Text", event.target.id);
    // }
    // function allowDrop(event) {
    //     event.preventDefault();
    // }
    // function drop(event) {
    //     event.preventDefault();
    //     var data = event.dataTransfer.getData("Text");
    //     event.target.appendChild(document.getElementById(data));
    // }
})