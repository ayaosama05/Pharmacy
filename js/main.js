new WOW().init();

$(document).ready(function(){
  
  $('.owl-carousel').owlCarousel({
    items:6,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true
  });

  // Button to go back up to page
  //Get the button:
  mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }


    /*  function navbarFixed(){
        if($('.header_area').length){
          $(window).scroll(function(){
            let scroll = $(window).scrollTop();
            if(scroll >= nav_offset_top){
              $('.header_area .main-menu').addClass('navbar_fixed');
            }else{
              $('.header_area .main-menu').removeClass('navbar_fixed');
            }
          })
        }
      }

      navbarFixed();*/
      
});


  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }