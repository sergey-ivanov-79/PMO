(function($) {

  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true,
    scrollContainer: null,
    });
  wow.init();

  $(document).ready(function() {
    $('.menu-toggle').click(function() {
      $('.header').toggleClass('menu-open');
      $('body').toggleClass('hidden');
      $('.overlay').toggleClass('active');
      $('.menu_big').toggleClass('visible');
    });
  });

  $(window).bind('scroll', function() {
    var navHeight = $(window).height() - 180;
      if ($(window).scrollTop() > navHeight) {
          $('.header').addClass('on');
      } else {
          $('.header').removeClass('on');
    }
  });

  // var scrollPosition = window.scrollY;
  // var header = document.getElementsByClassName('header')[0];
  // window.addEventListener('scroll', function () {
  //   scrollPosition = window.scrollY;
  //   if (scrollPosition >= 10) {
  //     header.classList.add('sticky');
  //   } else {
  //     header.classList.remove('sticky');
  //   }
  // });

  $(document).ready(function() {
    $('.toggleButton').click(function() {
      var textBlocks = $('.textBlock');
      textBlocks.each(function() {
        if ($(this).hasClass('hidden')) {
          $(this).removeClass('hidden').css({
            'opacity': '1',
            'transform': 'translate3d(0px, 0%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            'transform-style': 'preserve-3d',
            'transition': 'transform 2s ease'
          });
        } else {
          $(this).css({
            'opacity': '0',
            'transform': 'translate3d(0px, 130%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)',
            'transform-style': 'preserve-3d',
            'transition': 'transform 2s ease'
          }).addClass('hidden');
        }
      });
    });
  });

  $(document).ready(function(){
    let flag = false;
    $(".toggleButton").click(function(){
      if (!flag) {
        $(".textBlock").addClass("animate");
        flag = true;
      } else {
        $(".textBlock").removeClass("animate");
        flag = false;
      }
    });
  });

})(jQuery);