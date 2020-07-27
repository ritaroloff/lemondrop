(function ($) {
  'use strict';

  Noty.overrideDefaults({
    layout: 'bottomCenter',
    theme: 'bootstrap-v4',
    timeout: 2000,
    closeWith: ['click'],
    animation: {
      open: 'animate__animated animate__fadeInUp', // Animate.css class names
      close: 'animate__animated animate__fadeOutDown', // Animate.css class names
    },
  });

  jQuery(document).ready(function ($) {
    $('.embed-responsive iframe').addClass('embed-responsive-item');
    $('.carousel-inner .item:first-child').addClass('active');

    $('[data-toggle="tooltip"]').tooltip();

    $('#mobile-menu-active').meanmenu({
      meanScreenWidth: '767',
      meanMenuContainer: '.menu-prepent',
    });

    $('.menu-open').click(function () {
      $('.body-left-bar').toggleClass('activee');
      $('.menu-open').toggleClass('toggle');
    });

    $('.testimonial-blk').owlCarousel({
      items: 5,
      nav: false,
      dot: false,
      loop: true,
      margin: 20,
      autoplay: true,
      autoplayTimeout: 3000,
      smartSpeed: 1000,
      responsiveClass: true,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });
  });

  jQuery(window).load(function () {
    // You can also pass an optional settings object
    // below listed default settings
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 400, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });
  });
})(jQuery);
