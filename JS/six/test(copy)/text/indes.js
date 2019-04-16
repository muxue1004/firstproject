$(document).ready(function(){
  let Temoraryid
  $(".image").on('dragstart' , function(){
    Temoraryid = $(this)
    console.log(Temoraryid)
    $(this).remove
  })

  $('.box').on('dragover' , function(ev){
    ev.preventDefault()
    console.log('dragover')
  })
  
  $('.box').on('drop' , function(){
    $(this).append(Temoraryid)
    console.log('drop')
  })
})
