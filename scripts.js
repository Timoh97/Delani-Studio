$(document).ready(function(){


$("#img-design").click(function(){
    $("#img-descr").toggle()
    $("#img-design").toggle()
})

$("#img-dev").click(function(){
    $("#dev-descr").toggle()
    $("#img-dev").toggle()
})

$("#img-service").click(function(){
    $("#service-descr").toggle()
    $("#img-service").toggle()
})

$("#work1").mouseover(function(){
  $("#best-theme").show()
})

$("#work1").mouseleave(function(){
    $("#best-theme").hide()
  })

$("#work2").mouseover(function(){
    $("#mighty-ontario").show()
  })

  $("#work2").mouseleave(function(){
    $("#mighty-ontario").hide()
  })

  $("#work3").mouseover(function(){
    $("#theme-section").show()
  })

  $("#work3").mouseleave(function(){
    $("#theme-section").hide()
  })

  $("#work4").mouseover(function(){
    $("#jim-carrey").show()
  })

  $("#work4").mouseleave(function(){
    $("#jim-carrey").hide()
  })

  $("#work5").mouseover(function(){
    $("#salutations").show()
  })

  $("#work5").mouseleave(function(){
    $("#salutations").hide()
  })

  $("#work6").mouseover(function(){
    $("#stereo").show()
  })

  $("#work6").mouseleave(function(){
    $("#stereo").hide()
  })

  $("#work7").mouseover(function(){
    $("#banned-logo").show()
  })

  $("#work7").mouseleave(function(){
    $("#banned-logo").hide()
  })

  $("#work8").mouseover(function(){
    $("#bailey-monger").show()
  })

  $("#work8").mouseleave(function(){
    $("#bailey-monger").hide()
  })

$("#mc-embedded-subscribe").click(function() {
    var fName = $("input#mce-FNAME").val()

    alert (fName + " we have received your message. Thank you for reaching out to us.");
})

})