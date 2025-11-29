
/**
 * @file
 * Global utilities.
 *
 */
//Código general de JS
(function ($, Drupal) {
  'use strict';

  Drupal.behaviors.bootstrap = {
    attach: function (context, settings) {
      var position = $(window).scrollTop();
      $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $('body').addClass('scrolled');
        } else {
          $('body').removeClass('scrolled');
        }
        var scroll = $(window).scrollTop();
        if (scroll > position) {
          $('body').addClass('scrolldown');
          $('body').removeClass('scrollup');
        } else {
          $('body').addClass('scrollup');
          $('body').removeClass('scrolldown');
        }
        position = scroll;
      });

      $('.dropdown-item a.dropdown-toggle').on('click', function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
      });
    },
  };
})(jQuery, Drupal);

/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  //Código para el cierre del mensaje del formulario de contacto
  Drupal.behaviors.bootstrap_sass = {
    attach: function (context, settings) {
      $("button.btn-close").on("click", function () {
        $(".highlighted .alert-wrapper").remove();
      })
      //Código para la funcionalidad del menú-hamburguesa
      $('nav .navbar-toggler').on("click", function () {
        if ($('.navbar-collapse').hasClass('show')) {
          $('.navbar-collapse').removeClass('show');
        } else {
          $('.navbar-collapse').addClass('show');
        }

      })
    }
  };

})(jQuery, Drupal);