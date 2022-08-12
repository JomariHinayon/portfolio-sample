
$(document).ready(function () {


// animation if scrolled

$(window).scroll(function(event){
   var top = $(this).scrollTop();
   if (top > 0){
      $(".navbar").animate({
        backgroundColor: "#e8e8e8",
        boxShadow: "0 2px 4px 4px rgba(0,0,0,1)"
      }, 500);
   } else {
     $(".navbar").animate({
        backgroundColor: "transparent"
      }, 500);
   }
});


    //ANIMATE WHEN NAVLINK IS CLICK
    
    // HOME
    $(".home").on("click", function () {
        
        var position = $("#section-home").offset().top;

        $("HTML, BODY").animate({
            scrollTop: position
        }, 500)
    });



    // About
    $(".about").on("click", function () {
        
        var position = $("#section-about").offset().top;

        $("HTML, BODY").animate({
            scrollTop: position
        }, 500)
    });

    // Projects
    $(".projects").on("click", function () {
        
        var position = $("#section-portfolio").offset().top;

        $("HTML, BODY").animate({
            scrollTop: position
        }, 500)
    });

    // Skills
    $(".skills").on("click", function () {
        
        var position = $("#section-skills").offset().top;

        $("HTML, BODY").animate({
            scrollTop: position
        }, 500)
    });

    // Contact
    $(".contacts").on("click", function () {
        
        var position = $("#section-contact").offset().top;

        $("HTML, BODY").animate({
            scrollTop: position
        }, 500)
    });



});