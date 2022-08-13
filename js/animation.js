
$(document).ready(function () {


    $(".nav-item").show("slide", {
        direction: "up"
    }, 1200);


    $(".cartoon").show("slide", {
        direction: "right"
    }, 1200);

    $(".intro-resume").slideDown(1500);


// animation if scrolled

$(window).scroll(function(event){
   var scrolledTop = $(this).scrollTop();
   var scrolledBottom = $(this).scrollTop() + $(this).height();

   var positionAbout = $("#section-about").offset().top + $("#section-about").width() / 2 - 300;
   var positionProjects = $("#section-portfolio").offset().top + $("#section-portfolio").width() / 2 - 200;
   var positionSkills = $("#section-skills").offset().top + $("#section-skills").width() / 2 - 300;
   var positionContact = $("#section-contact").offset().top + $("#section-contact").width() / 2 - 350;

   if (scrolledTop > 0){
      $(".navbar").animate({
        backgroundColor: "#e8e8e8",
        boxShadow: "0 2px 4px 4px rgba(0,0,0,1)"
      }, 500).addClass("fixed-top");

    //   console.log("Position scroll: "+ scrolledBottom);
    //   console.log("Position: "+ positionContact);


    //   if the scrollebar bottom reach the about
    if(scrolledBottom >= positionAbout){
        $(".my-pic-container").show("slide", {
            direction: "down"
        }, 1200);
       $(".about-me-text").show("slide", {
            direction: "up"
        }, 1200); 
    }

     //   if the scrollebar bottom reach the projects section
    if(scrolledBottom >= positionProjects){
        $(".carousel").show("slide", {
            direction: "right"
        }, 1000);    
    }

     //   if the scrollebar bottom reach the projects section
    if(scrolledBottom >= positionSkills){
        $(".container-skill").show("slide", {
            direction: "down"
        }, 1000);    
    }

    //   if the scrollebar bottom reach the projects section
    if(scrolledBottom >= positionContact){
        $("#section-contact a").show("slide", {
            direction: "up"
        }, 1000);    
    }





   } else {
     $(".navbar").animate({
        backgroundColor: "transparent"
      }, 1000);
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