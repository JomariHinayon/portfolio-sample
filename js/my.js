
//Navbar fixed top

var myNav = "#navbar_top";
var nav_fixed = "fixed-top"

$(document).ready(function() {

    $('body').scrollspy({target: "#navbar_top", offset: 180});

    $("#navbarSupportedContent a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
      
          // Prevent default anchor click behavior
          event.preventDefault();
      
          // Store hash
          var hash = this.hash;
      
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
      
          // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
      
        } // End if
    });



    $(window).scroll(function() {
        
        if((window).scrollY > 133) {
            
            $(myNav).addClass("fixed-top")

            $(myNav).animate({
                backgroundColor : 'rgba(85, 85, 85, 1)',
              })

            $(myNav).css("box-shadow", '0 2px 4px 10px rgba(0,0,0,.2)')  

                        console.log((window).scrollY)
        } else {
            $(myNav).removeClass("fixed-top")

            $(myNav).animate({
                backgroundColor : 'rgba(85, 85, 85, 0)',
              },100)

            $(".main-navbar").css("margin", '0')   

            $(myNav).css("box-shadow", '0 2px 4px 10px rgba(0,0,0,0)')  
        

        }

    })
})

