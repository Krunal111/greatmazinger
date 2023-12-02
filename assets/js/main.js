// Hero Slider
$(".hero__slider").owlCarousel({
    nav: false,
    items: 1,
    animateOut: "fadeOut",
    autoplay: true,
    autoplayTimeout: 4000
});

// Testimonial Slider
$(".testimonial__slider").owlCarousel({
    loop: false,
    margin: 100,
    nav: true,
    responsiveClass: true,
    navText: ["<img src='./assets/images/icons/arrow-left.svg' width='48' height='49' loading='lazy' alt='Arrow Left'>","<img src='./assets/images/icons/arrow-right.svg' width='48' height='49' loading='lazy' alt='Arrow Right'>"],
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      768: {
        items: 2,
        margin: 50,
      },
      1200: {
        items: 2,
      },
    },
});

// Header Fixed
$(document).ready(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 200) {
        $(".header").addClass("fixed");
      } else {
        $(".header").removeClass("fixed");
      }
    });
});
  
// Mobile Menu JS
jQuery(".hamburger").on('click', function() {
  jQuery(this).toggleClass('active');
  jQuery(".header__menu").slideToggle();
});

// Tab JS
$(document).ready(function(){ 
  $('.tab-a').click(function(){  
    // Remove active classes from tabs and tab-a elements
    $(".tab").removeClass('tab-active');
    $(".tab-a").removeClass('active-a');

    // Add active classes to the clicked tab and tab-a
    var dataId = $(this).attr('data-id');
    $(".tab[data-id='"+dataId+"']").addClass("tab-active");
    $(this).addClass('active-a');

    // Change background image based on the active tab
    var backgroundImage = '';
    switch(dataId) {
      case 'tab1':
        backgroundImage = './assets/images/services/services_concierge.jpg';
        break;
      case 'tab2':
        backgroundImage = './assets/images/services/services_service.jpg';
        break;
      case 'tab3':
        backgroundImage = './assets/images/services/services_personalised.jpg';
        break;
      case 'tab4':
        backgroundImage = './assets/images/services/services_networking.jpg';
        break;
      case 'tab5':
        backgroundImage = './assets/images/services/services_employment.jpg';
        break;
      default:
        // Default background image if no match
        backgroundImage = './assets/images/services/services_concierge.jpg'; 
    }
    
    // Set the background image
    $(this).closest(".services__block").css('background-image', 'url(' + backgroundImage + ')');
  });
});

// Page Redirect To Section JS
$(document).ready(function () {
  $(document).on("scroll", onScroll);
  
  //smoothscroll
  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('.header__menu a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('.header__menu ul li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}
// Page Redirect To Section JS