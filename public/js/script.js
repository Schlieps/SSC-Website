//YOUTUBE THUMBNAIL
    document.addEventListener("DOMContentLoaded",
        function() {
            var div, n,
                v = document.getElementsByClassName("youtube-player");
            for (n = 0; n < v.length; n++) {
                div = document.createElement("div");
                div.setAttribute("data-id", v[n].dataset.id);
                div.innerHTML = labnolThumb(v[n].dataset.id);
                div.onclick = labnolIframe;
                v[n].appendChild(div);
            }
        });

    function labnolThumb(id) {
        var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
            play = '<div class="play"></div>';
        return thumb.replace("ID", id) + play;
    }

    function labnolIframe() {
        var iframe = document.createElement("iframe");
        var embed = "https://www.youtube.com/embed/ID?autoplay=1";
        iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "1");
        this.parentNode.replaceChild(iframe, this);
    }

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
    } else {
      $('.navbar').removeClass('navbar-background');
      $('.navbar').removeClass('fixed-top');
      $('.navbar').addClass('navbar-initial');
    }
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
