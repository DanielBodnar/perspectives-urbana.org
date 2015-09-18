var init = function() {


    /** *************Init JS*********************
        
        TABLE OF CONTENTS
        ---------------------------
        1. Preloader
        2. Ready Function
           a) Auto height for the home page
           b) Smooth Scroll
           c) 3d gallery
           d) Vimeo Video
           e) Schedule Accordian
           f) Speaker Slider
           g) Animation
           h) Registration Form
           i) Subscribe
           j) Nice Scroll
           h) Placeholder for ie9
        3.Landing Slider Js

    /*************************************/

    /* "use strict";*/

    /*************************************/
    /* Preloader */
    /**************************************/
        // will first fade out the loading animation
        jQuery(".status").fadeOut();
        // will fade out the whole DIV that covers the website.
        jQuery(".preloader").delay(100).fadeOut("slow");
        jQuery("body").css('overflow-y', 'visible');


    /*************************************/
    /* Ready Function */
    /**************************************/

    /*******Smooth scroll***********/

    /*** 3D Gallery *********/
    new CBPGridGallery(document.getElementById('grid-gallery'));
    new CBPFWTabs(document.getElementById('tabs-ui'));

    /********Vimeo Video*****************/




    /*******Schedule Accordion *************/

    jQuery('.accordion .item .heading').click(function() {
        var a = jQuery(this).closest('.item');
        var b = jQuery(a).hasClass('open');
        var c = jQuery(a).closest('.accordion').find('.open');

        if (b != true) {
            jQuery(c).find('.content').slideUp(500);
            jQuery(c).removeClass('open');
        }

        jQuery(a).toggleClass('open');
        jQuery(a).find('.content').slideToggle(500);

    });

    jQuery('.nav_slide_button').click(function() {
        jQuery('.pull').slideToggle();
    });

    /******* Speakers Slider *************/

    jQuery('#portfolioSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: false,
        pauseOnHover: true,

    });

    jQuery('#servicesSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: true,
        pauseOnHover: true,

    });

    jQuery('#teamSlider').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        touch: true,
        pauseOnHover: true,

    });

    /* Overlay */
    if (Modernizr.touch) {
        // show the close overlay button
        jQuery(".close-overlay").removeClass("hidden");
        // handle the adding of hover class when clicked
        jQuery(".img").click(function(e) {
            if (!jQuery(this).hasClass("hover")) {
                jQuery(this).addClass("hover");
            }
        });
        // handle the closing of the overlay
        jQuery(".close-overlay").click(function(e) {
            e.preventDefault();
            e.stopPropagation();
            if (jQuery(this).closest(".img").hasClass("hover")) {
                jQuery(this).closest(".img").removeClass("hover");
            }
        });
    } else {
        // handle the mouseenter functionality
        jQuery(".img").mouseenter(function() {
                jQuery(this).addClass("hover");
            })
            // handle the mouseleave functionality
            .mouseleave(function() {
                jQuery(this).removeClass("hover");
            });
    }

    /***************** Animation ******************/
    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: false, // trigger animations on mobile devices (default is true)
        live: true // act on asynchronously loaded content (default is true)
    });

    wow.init();



    /** Subscribe JS **/
    jQuery("#notifyMe").notifyMe(); // Activate notifyMe plugin on a '#notifyMe' element 


    /*** Overlay close*********/
    jQuery('.md-overlay').click(function(e) {
        jQuery("#modal-10").removeClass("md-show");
        jQuery("#modal-11").removeClass("md-show");
    });

    /**********Menu Close Logic***************/

    jQuery('.navbar-collapse.in').niceScroll({
        cursorcolor: "#c8bd9f"
    });
    jQuery('.nav li a').click(function() {
        jQuery('.navbar-collapse.collapse').toggleClass('in');
    });

    /******* Nice Scroll *******/

    jQuery("html").niceScroll();

    /** Placeholder JS call **/
    jQuery('input[type=text], textarea').placeholder();

    panel();
    /*************************************/
    /* Landing Slider Js */
    /**************************************/

    var $slides = jQuery('#slides');

    // Hammer($slides[0]).on("swipeleft", function(e) {
    //     $slides.data('superslides').animate('next');
    // });

    // Hammer($slides[0]).on("swiperight", function(e) {
    //     $slides.data('superslides').animate('prev');
    // });

    $slides.superslides({
        hashchange: false
    });
    // jQuery(".home-bg").swiperight(function() {
    //     $slides.data('superslides').animate('prev');
    // });
    // jQuery(".home-bg").swipeleft(function() {
    //     $slides.data('superslides').animate('next');
    // });
    // jQuery(".landing-text-pos").swiperight(function() {
    //     $slides.data('superslides').animate('prev');
    // });
    // jQuery(".landing-text-pos").swipeleft(function() {
    //     $slides.data('superslides').animate('next');
    // });

    
    /*** Auto height function ***/
    // var setElementHeight = function() {
    //     var height = jQuery(window).height();
    //     jQuery('.autoheight').css('min-height', (height));
    // };

    // jQuery(window).on("resize", function() {
    //     setElementHeight();
    // }).resize();

    function panel() {

        jQuery('.show-panel').click(function() {
            jQuery('.panel').slideToggle();
        });
    }


}
