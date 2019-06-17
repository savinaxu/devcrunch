(function () {
    'use strict';

    const isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
    };

    //loading page
    const loader = () => {
        $(".loader").fadeOut("slow");
    }

    //parallax
    const counter = () => {
        $('.js-counter').countTo({
            formatter: function (value, options) {
         return value.toFixed(options.decimals);
       },
       });
    }

    const direct = direction => {
        if( direction === 'down' && !$(this.element).hasClass('animated') ) {
            setTimeout(counter, 400);					
            $(this.element).addClass('animated');
        }
    }

    const counterWayPoint = () => {
        if ($('#counter').length > 0 ) {
			$('#counter').waypoint(direct(direction), {offset: '90%'});
		}
    }

    const parallax = () => {
        if (!isMobile.any()) {
            $(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true
			});
        }
    }

    //go to top
    const goToTopEvent = event => {
        event.preventDefault();
		$('html, body').animate({
			scrollTop: $('html').offset().top
		}, 500, 'easeInOutExpo');
		return false;
    }
    const goToTopWindow = () => {
        const $win = $(window)
        $win.scrollTop() > 200 ? 
        $('.js-top').addClass('active') : 
        $('.js-top').removeClass('active');
    }
    const goToTop = () => {
		$('.js-gotop').on('click', goToTopEvent(event));
		$(window).scroll(goToTopWindow());
	};

    //jQuery call
    $(function() {
        loader();
        goToTop();
        counterWayPoint();
		counter();
		parallax();
    });
}());