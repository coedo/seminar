$(function() {
  'use strict';

  // $('section#reserve').scrollspy({
  //   onEnter: function () {
  //     console.log('wtf');
  //     $('#ressys-frame').attr('src', $('#ressys-frame').data('src'));
  //     $('#ressys-frame').toggle(true);
  //   }
  // });
  $(window).scroll(function(){
    var $target = $('section#reserve')
    var bottom_of_object = $target.offset().top + $target.outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();  
    if( bottom_of_window > bottom_of_object && $('#ressys-frame').is(':hidden')){       
       $('#ressys-frame').attr('src', $('#ressys-frame').data('src'));
      $('#ressys-frame').toggle(true);
    }
  });
});