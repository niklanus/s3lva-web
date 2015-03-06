$(window).on("load resize",function(e){
	viewportHeight = $(window).height();
	$('.intro-1').height(viewportHeight);
	$('.intro-2').height(viewportHeight);

	$('.intro-2-msg').css('top', viewportHeight);
	// $('.mundo').css('top', viewportHeight);

	/*
	if($(window).width() <= 680){
		$('.nav-side-items').height(viewportHeight - 230)
	} else {
		$('.nav-side-items').height(viewportHeight - 76)
	}*/
});

$( document ).ready(function() {
	/*$("#introText").Morphext({
		animation: "",
		separator: ",",
		speed: 300
	});*/

	$('.smooth').smoothScroll({
		speed: 1500,
		easing: 'easeInOutQuart'
	});

	$('.work-slider').slick({
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
		fade: true
	});

	$('#bgvideo').coverVid(1920, 1080);
});

$(".nav-btn").click(function() {
	if ( $('body').hasClass('nav-visible') ) {
		$('body').removeClass('nav-visible').css('overflow-y', 'auto');
		$(".nav-main li")
		  .velocity("transition.fadeOut", {
		    duration: 150,
		    stagger: 0,
		    delay: 0
		});
	} else {
		$('body').addClass('nav-visible').css('overflow-y', 'hidden');
		$(".nav-main li").css('opacity', '0');
	 	$(".nav-main li")
		  .velocity("transition.slideUpIn", {
		    duration: 600,
		    stagger: 100,
		    delay: 300
		});
	}
});

$(".nav-main a").click(function() {
	$('body').removeClass('nav-visible');
	$(".nav-main li")
	  .velocity("transition.fadeOut", {
	    duration: 150,
	    stagger: 0,
	    delay: 0
	});
});

vh = $(window).height();

var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var month = date.getMonth();
var day = date.getDate();
var year = date.getFullYear();
var dayname = date.getDay();
var week=["domingo","lunes","martes","miércoles","jueves","viernes","sábado"]; 
var monthNames = [ "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre" ]; 
document.getElementById("date").innerHTML = week[dayname]+"<br>"+day+" de <br>"+monthNames[month]+"<br>de<br>"+year;

var headerWaypoint = $('#mundo').waypoint(function(direction) {
	$('.header-fixed').toggleClass("visible");
}, {
  offset: 0
})

var controller = new ScrollMagic.Controller();





/* ---------------------------------------------- */
/*          ELEMENTOS VARIOS / PARALLAX           */
/* ---------------------------------------------- */

var scene = new ScrollMagic.Scene({triggerElement: "#intro-1", triggerHook: "0", offset: 0, duration: vh})
	.setTween(TweenMax.to('#intro-1', 0.5, {
    opacity: 0.2,
    scale: 1
	}))
	// .addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo", triggerHook: "0.8", offset: 200, duration: 400})
	.setTween(TweenMax.from('#mundo-parallax-2', 0.5, {
		opacity: 0,
    	left: -50,
    	scale: 0.9
	}))
	// .addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo-parallax-2", triggerHook: "0.5", offset: -100, duration: 400})
	.setTween(TweenMax.from('#mundo-parallax-3', 0.5, {
		opacity: 0,
    	left: -100
	}))
	// .addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo-parallax-2", triggerHook: "0.5", offset: -100, duration: 400})
	.setTween(TweenMax.from('#mundo-parallax-3 .number', 0.5, {
		scale: 4
	}))
	// .addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo-parallax-2", triggerHook: "0.5", offset: 100, duration: 400})
	.setTween(TweenMax.from('#mundo-parallax-4', 0.5, {
		opacity: 0,
    	right: -100
	}))
	// .addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo-parallax-2", triggerHook: "0.5", offset: 100, duration: 400})
	.setTween(TweenMax.from('#mundo-parallax-4 .number', 0.5, {
		scale: 4
	}))
	// .addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo-parallax-2", triggerHook: "0.5", offset: 300, duration: 400})
	.setTween(TweenMax.from('#mundo-parallax-5', 0.5, {
		opacity: 0,
    	left: -100
	}))
	// .addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo-parallax-2", triggerHook: "0.5", offset: 300, duration: 400})
	.setTween(TweenMax.from('#mundo-parallax-5 .number', 0.5, {
		scale: 4
	}))
	// .addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo-parallax-2", triggerHook: "0.5", offset: 500, duration: 400})
	.setTween(TweenMax.from('#mundo-parallax-6', 0.5, {
		opacity: 0,
    	right: -100
	}))
	// .addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo-parallax-2", triggerHook: "0.5", offset: 500, duration: 400})
	.setTween(TweenMax.from('#mundo-parallax-6 .number', 0.5, {
		scale: 4
	}))
	// .addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo-parallax-2", triggerHook: "0.5", offset: 700, duration: 400})
	.setTween(TweenMax.from('#mundo-parallax-7', 0.5, {
		opacity: 0,
    	left: -100
	}))
	// .addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo-parallax-2", triggerHook: "0.5", offset: 700, duration: 400})
	.setTween(TweenMax.from('#mundo-parallax-7 .number', 0.5, {
		scale: 4
	}))
	// .addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo-parallax-2", triggerHook: "0.5", offset: 700, duration: 400})
	.setTween(TweenMax.from('#mundo-parallax-7 .number', 0.5, {
		scale: 4
	}))
	// .addIndicators()
	.addTo(controller);



/* ---------------------------------------------- */
/*					TITULOS .title                */
/* ---------------------------------------------- */


var scene = new ScrollMagic.Scene({triggerElement: "#mundo", triggerHook: "1", offset: 200, duration: 400})
	.setTween(TweenMax.from('#title-1-1', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#mundo", triggerHook: "1", offset: 280, duration: 400})
	.setTween(TweenMax.from('#title-1-2', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#mundo", triggerHook: "1", offset: 330, duration: 400})
	.setTween(TweenMax.from('#title-1-3', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#aboutus", triggerHook: "1", offset: 200, duration: 400})
	.setTween(TweenMax.from('#title-2-1', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#aboutus", triggerHook: "1", offset: 280, duration: 400})
	.setTween(TweenMax.from('#title-2-2', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#aboutus .points-container", triggerHook: "1", offset: 0, duration: 400})
	.setTween(TweenMax.from('#aboutus-parallax-1', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#aboutus .points-container", triggerHook: "1", offset: 500, duration: 400})
	.setTween(TweenMax.from('#aboutus-parallax-2', 0.5, {
		opacity: 0,
		right: -70
	}))
	.addTo(controller);


var scene = new ScrollMagic.Scene({triggerElement: "#proyects", triggerHook: "1", offset: 200, duration: 400})
	.setTween(TweenMax.from('#title-3-1', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#proyects", triggerHook: "1", offset: 280, duration: 400})
	.setTween(TweenMax.from('#title-3-2', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);


/* ---------------------------------------------- */
/*                   PROYECTS                     */
/* ---------------------------------------------- */

var scene = new ScrollMagic.Scene({triggerElement: "#proyects", triggerHook: "1", offset: 0, duration: vh*2})
	.setTween(TweenMax.from('.proyects .featured-title', 0.5, {
    	backgroundPosition: '-500px -2000px'
	}))
	.addTo(controller);

/* TWITTER */

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-1", triggerHook: "1", offset: 200, duration: 400})
	.setTween(TweenMax.from('#title-4-1', 0.5, {
		opacity: 0,
		left: -150
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-1", triggerHook: "1", offset: -200, duration: vh})
	.setTween(TweenMax.from('#proyects-parallax-1-1', 0.5, {
    	top: -250
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-1", triggerHook: "1", offset: 320, duration: 400})
	.setTween(TweenMax.from('#proyects-parallax-1-2', 0.5, {
		opacity: 0,
		right: -70
	}))
	.addTo(controller);




/* ---------------------------------------------- */
/*					WAYPOINTS                     */
/* ---------------------------------------------- */


var waypoint1 = $('.intro-2-msg').waypoint(function(direction) {
	$('.intro-2-msg p').blast({ delimiter: "word" }).velocity("transition.slideDownIn", {
	    duration: 1600,
	    stagger: 50,
	    delay: 0
	});
	//waypoint1.destroy();
}, {
  offset: '90%'
})

var waypoint2 = $('#mundo-parallax-1').waypoint(function(direction) {
	$('#mundo-parallax-1 .title').blast({ delimiter: "letter" }).velocity("transition.slideDownIn", {
	    duration: 2000,
	    stagger: 80,
	    delay: 0
	});
	//waypoint2.destroy();
}, {
  offset: '95%'
})
