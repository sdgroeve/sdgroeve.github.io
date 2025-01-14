(function($) {
    "use strict";
    
    // Window Load
    $(window).on('load', function() {
        // Preloader
        $('.preloader').fadeOut('slow');
    });
    
    // Document Ready
    $(document).ready(function() {
        
        // Sticky Header
        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 0) {
                $('#header').addClass('sticky-header');
            } else {
                $('#header').removeClass('sticky-header');
            }
        });
        
        // Smooth Scroll
        $('.smooth-scroll').on('click', function(event) {
            event.preventDefault();
            var sectionTo = $(this).attr('href');
            $('html, body').animate({
                scrollTop: $(sectionTo).offset().top - 70
            }, 1000, 'easeInOutExpo');
        });
        
        // Mobile Menu
        $('.navbar-toggler').on('click', function() {
            $(this).toggleClass('show');
            $('.navbar-overlay').toggleClass('show');
            $('#header-nav').toggleClass('show');
        });
        
        // Close mobile menu on click outside
        $(document).on('click', function(event) {
            if (!$(event.target).closest('.navbar-toggler, #header-nav').length) {
                $('.navbar-toggler').removeClass('show');
                $('.navbar-overlay').removeClass('show');
                $('#header-nav').removeClass('show');
            }
        });
        
        // Initialize WOW.js
        if (typeof WOW === 'function') {
            new WOW().init();
        }
        
        // Initialize Typed.js
        if ($(".typed").length > 0 && typeof Typed === 'function') {
            var typed = new Typed('.typed', {
                strings: $('.typed-strings').html().trim().split(/<\/?p>/i).filter(function(n){ return n.trim() !== "" }),
                typeSpeed: 100,
                backSpeed: 50,
                backDelay: 2000,
                loop: true
            });
        }
        
        // Owl Carousel - Testimonials
        if ($('.owl-carousel').length > 0) {
            $('.owl-carousel').owlCarousel({
                loop: true,
                margin: 30,
                nav: true,
                autoplay: true,
                autoplayTimeout: 5000,
                responsive: {
                    0: {
                        items: 1
                    },
                    576: {
                        items: 1
                    },
                    768: {
                        items: 1
                    }
                }
            });
        }
        
        // Portfolio Filter & Popup
        if ($('.portfolio-filter').length > 0) {
            // Initialize Isotope
            var $portfolioFilter = $('.portfolio-filter').isotope({
                itemSelector: '.portfolio-item',
                layoutMode: 'fitRows'
            });
            
            // Portfolio Filter
            $('.portfolio-menu').on('click', 'a', function(e) {
                e.preventDefault();
                $('.portfolio-menu a').removeClass('active');
                $(this).addClass('active');
                var filterValue = $(this).attr('data-filter');
                $portfolioFilter.isotope({ filter: filterValue });
            });
        }
        
        // Magnific Popup
        if (typeof $.fn.magnificPopup !== 'undefined') {
            // Image Popup
            $('.popup-img').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
            
            // YouTube/Vimeo Popup
            $('.popup-youtube, .popup-vimeo').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160
            });
        }
        
        // Parallax Background
        if (typeof $.fn.parallaxie !== 'undefined') {
            $('.parallax').parallaxie({
                speed: 0.5,
                offset: 0
            });
        }
        
        // Back to Top
        var $backToTop = $('#back-to-top');
        if ($backToTop.length > 0) {
            $(window).on('scroll', function() {
                if ($(this).scrollTop() > 100) {
                    $backToTop.fadeIn();
                } else {
                    $backToTop.fadeOut();
                }
            });
            
            $backToTop.on('click', function(e) {
                e.preventDefault();
                $('html,body').animate({
                    scrollTop: 0
                }, 700);
            });
        }
        
    });
    
})(jQuery);
