$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});

$(document).ready(function(){
    
  //navbar toggler
  $('.navbar-toggler').click(function(){
    $('.navbar-toggler').toggleClass('change')
  });
    
    
  //window scroll
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 550) {
      $('.navbar').addClass('navbar-background')
      $('.navbar').addClass('fixed-top');
      $('.navbar').removeClass('navbar-initial');
      $('.navbar').removeClass('d-none');
    } else {
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
      $('.navbar').addClass('navbar-initial');
    }
  });
 
  
  // typed js
  var typed = new Typed('#typed', {
          stringsElement: '#typed-strings',
          typeSpeed: 40,
          backSpeed: 30,
          loop: true,
          loopCount: Infinity,
          showCursor:false
        });
  
    //smooth scroll
    $('.nav-item a').click(function(link){
      link.preventDefault();
      
      let target = $(this).attr('href');
      $('html, body').stop().animate({
        scrollTop:$(target).offset().top
      },3000);
    });
    
   
    
});
