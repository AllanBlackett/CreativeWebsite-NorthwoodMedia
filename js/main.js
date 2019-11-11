// Change .navbar property when scrolling down
$(function() {
  var header = $(".navbar");

  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 50) {
          header.addClass("nav_scrolled");
      } else {
          header.removeClass("nav_scrolled");
      }
  });

});

// Navbar scroll to an element
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});