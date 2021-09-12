$(document).ready(function(){


$("#img-design").click(function(){
    $("#img-descr").toggle()
    $("#img-design").hide()
})

$("#img-dev").click(function(){
    $("#dev-descr").toggle()
    $("#img-dev").hide()
})

$("#img-service").click(function(){
    $("#service-descr").toggle()
    $("#img-service").hide()
})

})




function subscriptionChimp(){
    var fName = document.getElementById("mce-FNAME").value;
    var email = document.getElementById("mce-EMAIL").value;
    var message = document.getElementById("mce-YOURMESSAG").value;

    if (isNaN(fNameame) && isNaN(email)) {
        alert (fName + "we have received your message. Thank you for reaching out to us.")
    }



}

// alert(fName + "we have received your message. Thank you fro reaching out to us. ")