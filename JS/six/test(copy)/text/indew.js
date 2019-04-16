$(document).ready(function(){
  let Temoraryid1 ,Temoraryid2
  Temoraryid2 = $(".image")[0].outerHTML
  console.log(typeof Temoraryid2)
  $(".image:first").attr("id","well")
  setTimeout(function(){
    $("body").children("div:first").append(
      $(Temoraryid2).attr("id","cell")
    )
  }, 3000)
  setTimeout(function(){
    $("body").children("div:last").append(
      $(Temoraryid2).attr("id","can")
    )
  }, 5000)
  $(".box").on('dragstart' , '.image' , function(){
    Temoraryid1 = this
    console.log(Temoraryid1)
  })
  $('body').on('dragover' , '.box' , function(ev){
    ev.preventDefault()
    console.log('dragover')
  })
  $('body').on('drop' , '.box' , function(){
    $(this).append(Temoraryid1)
    console.log('drop')
    console.log($(this).index())
  })
})