/* app.js
* main script file for our little application
* */

"use strict";

jQuery(document).ready(function() {
    jQuery('p a[href!="#top"]').attr('target', '_blank');
    jQuery('section').hide().fadeIn(1000);

    jQuery('nav a, p a[href="#top"]').click(function(eventObject) {
        //console.log(this.hash);
        var targetElement = jQuery(this.hash);
        jQuery('html,body').animate({scrollTop: targetElement.offset().top - navHeight}, 700);

        eventObject.preventDefault();
    });

    var nav = $('nav');
    var navTop = nav.offset().top; //returns location of top of navbar
    var navHeight = nav.outerHeight(); //returns height of nav bar
    var navPlaceholder = $('.nav-placeholder'); //placeholder so that when nav is removed from pageflow we don't jump
    navPlaceholder.height(navHeight);

    $(window).scroll(function() {
        var scrollPos = $(this).scrollTop(); //returns scroll position of this (which is the current window)
        //console.log(scrollPos);

        //once the nav bar's top is off the screen...
        if(scrollPos > navTop) {
            //...fix it to the window
            nav.addClass('nav-fixed');
            navPlaceholder.show();
        } else {
            nav.removeClass('nav-fixed');
            navPlaceholder.hide();
        }
    });

    $('#exit-button').click(function() {
        $('#confirm-exit-modal').modal();
    });

    $('#confirm-exit-button').click(function() {
        window.location = 'http://www.google.com';
    });
});