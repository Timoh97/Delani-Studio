



$(document).ready(function(){
    $(".work1").mouseenter(function(){
        $(".para").show()
        $(".work1").hide()
     })
      
    $(".para").mouseleave(function(){
          $(".para").hide()
          $(".work1").show()
    })


})