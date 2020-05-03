/*
//show description when image is clicked for deisgn
$(document).ready(function(){
    $(".image").click(function(){
        $(".image").toggle();
        $(".hidden-paragraph").show();
    })
})

//show image when paragraph is clickedfor design
$(".hidden-paragraph").click(function(){
    $(".image").show();
    $(".hidden-paragraph").hide();
})

//show description when image is clicked for dev
$(document).ready(function(){
    $(".image-dev").click(function(){
        $(".image-dev").toggle();
        $(".hidden-paragraph-dev").show();
    })
})

//show image when paragraph is clicked for dev
$(".hidden-paragraph-dev").click(function(){
    $(".image-dev").show();
    $(".hidden-paragraph-dev").hide();
}) 
*/
/**************what we do section*////////////////////////
$(document).ready(function(){
    $(".design").click(function(){
         $("#hidden-paragraph").toggle();
        $("#image").toggle();
       $("p#bolddesign").css("font-weight","bold");
    });
 
 $(".development").click(function(){
     $("#hide-paragraph").toggle();
     $("#willshow-paragraph").toggle();
     $("p#bolddesign-dev").css("font-weight","bold");
 });
 $(".contact-us").submit(function(event){
var inputtedName=$("#name").val();
var inputedEmail=$("#email").val();
alert("hey" + inputtedName + "we have recieved your message.Thank you for reaching out to us.")
     event.preventdefault();
 });
});

