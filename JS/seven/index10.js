$(document).ready(function(){
    var round = 1 

        function test() {
            console.log (round)
            round = round + 1
        }
    
    var setinter = setInterval(test,1000);
    $("#stop").on("click" , function() {
        clearInterval(setinter)
    })
})