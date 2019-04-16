$(document).ready(function(){
    let Temporaryid1 , Temporaryid2
    $("#image_1").on('dragstart' , function(){
        Temporaryid1 = $(this)
        $("#div-2").on('drop' , function(){
            $("#image_1").remove
            $(this).append(Temporaryid1)
            console.log("Temporaryid1")
        })
        $("#div-1").on('drop' , function(){
            console.log("Temporaryid1.1")
            $("#image_1").remove
            $(this).append(Temporaryid1)
            
        })
    })
    $("#image_2").on('dragstart' , function(){
        Temporaryid2 = $(this)
        $("#div-2").on('drop' , function(){
            console.log("Temporaryid2")
            $("#image_2").remove
            $(this).append(Temporaryid2)
            
        })
        $("#div-1").on('drop' , function(){
            console.log("Temporaryid2.1")
            $("#image_2").remove
            $(this).append(Temporaryid2)
            
        })
    })

    $(".box").on('dragover', function (ev){
        ev.preventDefault();
    })
})
// function handledrop(ev){
//     ev.preventDefault()
// }
// function allowDrop(ev){
//   ev.preventDefault();
// }





//$(document).ready(function(){
//    let Temporaryid1 , Temporaryid2 ,Temporaryid3
//   $("#image_1").on('dragstart' , function(){
//       console.log("drag")
//       Temporaryid3 = $(this).attr('id')
//    })
//    $("#div-2").on('drop' , function(){
//        console.log("fir")
//        Temporaryid2 = $(this).attr('id')
//        $(this).append('#'+Temporaryid3)
//    }) 
//})
//function handledrop(ev){
//   ev.preventDefault()
//    console.log("drop")
//}
//function allowDrop(ev){
// ev.preventDefault();
//}
