$(document).ready(function(){


$("#img-design").click(function(){
    $("#img-descr").toggle()
})

$("#img-dev").click(function(){
    $("#dev-descr").toggle()
})

$("#img-service").click(function(){
    $("#service-descr").toggle()
})




$("#mc-embedded-subscribe").click(function() {
    var fName = $("input#mce-FNAME").val()

    alert (fName + " we have received your message. Thank you for reaching out to us.");
})

})