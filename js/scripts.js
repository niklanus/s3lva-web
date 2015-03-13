$(window).on("load resize",function(e){
	viewportHeight = $(window).height();
	intropt2height = $('#intro-anchor').height();
	$('.intro-1').height(viewportHeight);
	$('.clear-0').height(viewportHeight);
	$('#intro-2-msg').height(viewportHeight);


	// $('.intro-2').height(viewportHeight);

	// $('.intro-2-msg').css('top', viewportHeight);
	// $('.mundo').css('top', viewportHeight);

	/*
	if($(window).width() <= 680){
		$('.nav-side-items').height(viewportHeight - 230)
	} else {
		$('.nav-side-items').height(viewportHeight - 76)
	}*/

	$('.smooth').smoothScroll({
		speed: 1500,
		easing: 'easeInOutQuart'
	});

	$('.intro-smooth').smoothScroll({
		speed: 1500,
		easing: 'easeInOutQuart',
		offset: viewportHeight
	});

	$('.nav-main a').smoothScroll({
		speed: 1500,
		easing: 'easeInOutQuart',
		offset: -100
	});
});

$( document ).ready(function() {
	/*$("#introText").Morphext({
		animation: "",
		separator: ",",
		speed: 300
	});*/

	/*
	$('.work-slider').slick({
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
		fade: true
	});*/

	$('#bgvideo').coverVid(1920, 1080);

    $(".fancybox").fancybox({
    	type: 'iframe',
    	padding: 0,
    	autoHeight: true
    });
});



$("#intro-main-btn").hover(function() {
    $(this).text('¿Cómo estás?');
  }, function() {
    $(this).text('Hola persona');
  }
);

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
	/*$('body').removeClass('nav-visible');
	$(".nav-main li")
	  .velocity("transition.fadeOut", {
	    duration: 150,
	    stagger: 0,
	    delay: 0
	});*/

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
document.getElementById("theDate").innerHTML = week[dayname]+"<br>"+day+" de<br>"+monthNames[month]+"<br>de "+year;

setInterval(function() {
	function r(el, deg) {
	el.setAttribute('transform', 'rotate('+ deg +' 50 50)')
	}
	var d = new Date()
	r(sec, 6*d.getSeconds())
	r(min, 6*d.getMinutes())
	r(hour, 30*(d.getHours()%12) + d.getMinutes()/2)
}, 1000)

var headerWaypoint = $('#mundo').waypoint(function(direction) {
	$('.header-fixed').toggleClass("visible");
}, {
  offset: 0
})

var controller = new ScrollMagic.Controller();





/* ---------------------------------------------- */
/*          ELEMENTOS VARIOS / PARALLAX           */
/* ---------------------------------------------- */


var scene = new ScrollMagic.Scene({triggerElement: "#intro-2-2-msg", triggerHook: "1", offset: 400, duration: vh*0.6})
	.setTween(TweenMax.to('#intro-2-2-msg', 0.5, {
    	paddingBottom: 296
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo", triggerHook: "0.8", offset: 200, duration: 400})
	.setTween(TweenMax.from('#mundo-parallax-2', 0.5, {
		opacity: 0,
    	left: -50,
    	scale: 0.9
	}))
	// .addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo-parallax-2", triggerHook: "0.5", offset: -100, duration: 200})
	.setTween(TweenMax.from('#mundo-parallax-3', 0.5, {
		opacity: 0,
    	left: -40
	}))
	// .addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo-parallax-2", triggerHook: "0.5", offset: 100, duration: 200})
	.setTween(TweenMax.from('#mundo-parallax-4', 0.5, {
		opacity: 0,
    	right: -60
	}))
	// .addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo-parallax-2", triggerHook: "0.5", offset: 300, duration: 200})
	.setTween(TweenMax.from('#mundo-parallax-5', 0.5, {
		opacity: 0,
    	left: -20
	}))
	// .addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo-parallax-2", triggerHook: "0.5", offset: 500, duration: 200})
	.setTween(TweenMax.from('#mundo-parallax-6', 0.5, {
		opacity: 0,
    	right: -90
	}))
	// .addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo-parallax-2", triggerHook: "0.5", offset: 700, duration: 200})
	.setTween(TweenMax.from('#mundo-parallax-7', 0.5, {
		opacity: 0,
    	left: 60
	}))
	// .addIndicators()
	.addTo(controller);
/*
var scene = new ScrollMagic.Scene({triggerElement: "#mundo", triggerHook: "1", offset: 0, duration: vh*3})
	.setTween(TweenMax.from('#mundo-pov', 0.5, {
		top: 2000
	}))
	.addTo(controller);
*/

var tween15 = new TimelineMax ()
	.add([
		TweenMax.fromTo("#mundo-pov", 1, {top: 1400}, {top: 0, ease: Linear.easeNone})
	]);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo-parallax-2", triggerHook: "1", offset: 400, duration: vh*0.6})
				.setTween(tween15)
				.addTo(controller);


/* ---------------------------------------------- */
/*					TITULOS .title                */
/* ---------------------------------------------- */


var scene = new ScrollMagic.Scene({triggerElement: "#mundo", triggerHook: "1", offset: 200, duration: 250})
	.setTween(TweenMax.from('#title-1-1', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#mundo", triggerHook: "1", offset: 280, duration: 250})
	.setTween(TweenMax.from('#title-1-2', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#mundo", triggerHook: "1", offset: 330, duration: 250})
	.setTween(TweenMax.from('#title-1-3', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#aboutus", triggerHook: "1", offset: 200, duration: 250})
	.setTween(TweenMax.from('#title-2-1', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#aboutus", triggerHook: "1", offset: 280, duration: 250})
	.setTween(TweenMax.from('#title-2-2', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#aboutus .points-container", triggerHook: "1", offset: 0, duration: 250})
	.setTween(TweenMax.from('#aboutus-parallax-1', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#aboutus .points-container", triggerHook: "1", offset: 500, duration: 250})
	.setTween(TweenMax.from('#aboutus-parallax-2', 0.5, {
		opacity: 0,
		right: -70
	}))
	.addTo(controller);


var scene = new ScrollMagic.Scene({triggerElement: "#proyects", triggerHook: "1", offset: 200, duration: 250})
	.setTween(TweenMax.from('#title-3-1', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);
/*
var scene = new ScrollMagic.Scene({triggerElement: "#proyects", triggerHook: "1", offset: 280, duration: 250})
	.setTween(TweenMax.from('#title-3-2', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);
*/

/* ---------------------------------------------- */
/*                   PROYECTS                     */
/* ---------------------------------------------- */
/*
var scene = new ScrollMagic.Scene({triggerElement: "#proyects", triggerHook: "1", offset: 0, duration: vh*2})
	.setTween(TweenMax.from('.proyects .featured-title', 0.5, {
    	backgroundPosition: '-500px -2000px'
	}))
	.addTo(controller);
*/




/* TWITTER */

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-1", triggerHook: "1", offset: 200, duration: 250})
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

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-1", triggerHook: "1", offset: 320, duration: 250})
	.setTween(TweenMax.from('#proyects-parallax-1-2', 0.5, {
		opacity: 0,
		right: -70
	}))
	.addTo(controller);






/* APPTISTA */

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-2", triggerHook: "1", offset: 200, duration: 250})
	.setTween(TweenMax.from('#title-5-1', 0.5, {
		opacity: 0,
		right: -150
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-2", triggerHook: "1", offset: 0, duration: vh*1.5})
	.setTween(TweenMax.from('#proyects-parallax-2-1', 0.5, {
    	top: 400
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-2", triggerHook: "1", offset: 320, duration: 250})
	.setTween(TweenMax.from('#proyects-parallax-2-2', 0.5, {
		opacity: 0,
		right: -70
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-2", triggerHook: "1", offset: -200, duration: vh+300})
	.setTween(TweenMax.from('#proyects-parallax-2-4', 0.5, {
    	bottom: -350
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-2", triggerHook: "1", offset: 300, duration: vh})
	.setTween(TweenMax.to('#proyects-parallax-2-5', 0.5, {
    	bottom: -140
	}))
	.addTo(controller);






/* TROVA */

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-3", triggerHook: "1", offset: 200, duration: 250})
	.setTween(TweenMax.from('#title-6-1', 0.5, {
		opacity: 0,
		left: -150
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-3", triggerHook: "1", offset: 0, duration: vh*1.5})
	.setTween(TweenMax.from('#proyects-parallax-3-1', 0.5, {
    	top: 400
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-3", triggerHook: "1", offset: 320, duration: 250})
	.setTween(TweenMax.from('#proyects-parallax-3-2', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);









/* RED LIGHT CINEMA */

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-4", triggerHook: "1", offset: 160, duration: 250})
	.setTween(TweenMax.from('#title-7-1', 0.5, {
		opacity: 0,
		left: -150
	}))
	.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: ".proyect-4", triggerHook: "1", offset: 240, duration: 250})
	.setTween(TweenMax.from('#title-7-2', 0.5, {
		opacity: 0,
		left: -150
	}))
	.addTo(controller);


var scene = new ScrollMagic.Scene({triggerElement: ".proyect-4", triggerHook: "1", offset: 0, duration: vh})
	.setTween(TweenMax.from('#proyects-parallax-4-1', 0.5, {
    	top: 300
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-4", triggerHook: "1", offset: 300, duration: 250})
	.setTween(TweenMax.from('#proyects-parallax-4-2', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);

var tween10 = new TimelineMax ()
	.add([
		TweenMax.fromTo("#proyects-parallax-4-4", 1, {top: 400}, {top: 240, ease: Linear.easeNone})
		//,TweenMax.fromTo("#proyects-parallax-4-3", 1, {top: 350}, {top: 25, ease: Linear.easeNone})
	]);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-4", triggerHook: "1", duration: vh*1.5})
				.setTween(tween10)
				.addTo(controller);





/* SUPER APP */

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-5", triggerHook: "1", offset: 160, duration: 250})
	.setTween(TweenMax.from('#title-8-1', 0.5, {
		opacity: 0,
		left: -150
	}))
	.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: ".proyect-5", triggerHook: "1", offset: 240, duration: 250})
	.setTween(TweenMax.from('#title-8-2', 0.5, {
		opacity: 0,
		left: -150
	}))
	.addTo(controller);


var scene = new ScrollMagic.Scene({triggerElement: ".proyect-5", triggerHook: "1", offset: 0, duration: vh*1.5})
	.setTween(TweenMax.from('#proyects-parallax-5-1', 0.5, {
    	top: 200
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-5", triggerHook: "1", offset: 300, duration: 250})
	.setTween(TweenMax.from('#proyects-parallax-5-2', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-5", triggerHook: "1", offset: 0, duration: vh*0.75})
	.setTween(TweenMax.from('#proyects-parallax-5-3', 0.5, {
    	top: -100
	}))
	.addTo(controller);







/* SUPER APP */

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-6", triggerHook: "1", offset: 160, duration: 250})
	.setTween(TweenMax.from('#title-9-1', 0.5, {
		opacity: 0,
		left: -150
	}))
	.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: ".proyect-6", triggerHook: "1", offset: 240, duration: 250})
	.setTween(TweenMax.from('#title-9-2', 0.5, {
		opacity: 0,
		left: -150
	}))
	.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: ".proyect-6", triggerHook: "1", offset: 300, duration: 250})
	.setTween(TweenMax.from('#title-9-3', 0.5, {
		opacity: 0,
		left: -150
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-6", triggerHook: "1", offset: 0, duration: vh*1.5})
	.setTween(TweenMax.from('#proyects-parallax-6-1', 0.5, {
    	top: 200
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-6", triggerHook: "1", offset: 380, duration: 250})
	.setTween(TweenMax.from('#proyects-parallax-6-2', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-6", triggerHook: "1", offset: 0, duration: vh*2})
	.setTween(TweenMax.from('#proyects-parallax-6-4', 0.5, {
    	top: 1000
	}))
	.addTo(controller);








/* AXE PLAY */

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-7", triggerHook: "1", offset: 160, duration: 250})
	.setTween(TweenMax.from('#title-10-1', 0.5, {
		opacity: 0,
		left: -150
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-7", triggerHook: "1", offset: 0, duration: vh*1.5})
	.setTween(TweenMax.from('#proyects-parallax-7-1', 0.5, {
    	top: 200
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-7", triggerHook: "1", offset: 260, duration: 250})
	.setTween(TweenMax.from('#proyects-parallax-7-2', 0.5, {
		opacity: 0,
		left: -70
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-7", triggerHook: "1", offset: 0, duration: vh*2})
	.setTween(TweenMax.to('#proyects-parallax-7-3', 0.5, {
    	top: 0
	}))
	.addTo(controller);






/* EL OSO */

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-8", triggerHook: "1", offset: 160, duration: 250})
	.setTween(TweenMax.from('#title-11-1', 0.5, {
		opacity: 0,
		right: -150
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-8", triggerHook: "1", offset: 0, duration: vh*1.5})
	.setTween(TweenMax.from('#proyects-parallax-8-1', 0.5, {
    	top: 300
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: ".proyect-8", triggerHook: "1", offset: 260, duration: 250})
	.setTween(TweenMax.from('#proyects-parallax-8-2', 0.5, {
		opacity: 0,
		right: -70
	}))
	.addTo(controller);










/* CONTACTO */

var scene = new ScrollMagic.Scene({triggerElement: "#contact", triggerHook: "1", offset: 160, duration: vh*1.5})
	.setTween(TweenMax.from('#title-12-1', 0.5, {
		top: 400
	}))
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#contact", triggerHook: "1", offset: 0, duration: vh*1.5})
	.setTween(TweenMax.from('#contact-parallax-3', 0.5, {
    	top: -300
	}))
	.addTo(controller);






/* ---------------------------------------------- */
/*					WAYPOINTS                     */
/* ---------------------------------------------- */

/*
var waypoint1 = $('.intro-2-msg').waypoint(function(direction) {
	$('.intro-2-msg p').blast({ delimiter: "word" }).velocity("transition.slideDownIn", {
	    duration: 1600,
	    stagger: 50,
	    delay: 0
	});
}, {
  offset: '90%'
})*/

var waypoint2 = $('#mundo-parallax-1').waypoint(function(direction) {
	$('#mundo-parallax-1 .title').blast({ delimiter: "letter" }).velocity("transition.slideDownIn", {
	    duration: 2000,
	    stagger: 80,
	    delay: 0
	});
}, {
  offset: '95%'
});

var waypoint3 = $('#intro-1').waypoint(function(direction) {
	$(".typed").typed({
	    strings: ["innovación.", "estrategia.", "viralización.", "storytelling.", "geek.", "branded content.", "posicionamiento.", "aplicaciones multiplataforma.", "marketing estratégico.", "consultoría.", "comunicación sostenible.", "impacto social."],
	    typeSpeed: 0,
	    loop: true,
	    startDelay: 0,
	    // backspacing speed
	    backSpeed: 0,
	    // time before backspacing
	    backDelay: 500,
	});
}, {
  offset: -vh*0.6
});

var waypoint4 = $('#intro-2-2-msg').waypoint(function(direction) {
	$("#intro-2-msg .part-1").toggleClass('hidden');
}, {
  offset: 250
});





/* ---------------------------------------------- */
/*                 CUBE PORTFOLIO                 */
/* ---------------------------------------------- */





(function ($, window, document, undefined) {

    var gridContainer = $('#grid-container')

    // init cubeportfolio
    gridContainer.cubeportfolio({

        animationType: 'fadeOutTop',
        gapHorizontal: 10,
        gapVertical: 10,
        gridAdjustment: 'responsive',
        caption: 'zoom',
        displayType: 'lazyLoading',
        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxShowCounter: true,

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageShowCounter: true,
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
        },

        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'above',
        singlePageInlineShowCounter: true,
        singlePageInlineCallback: function(url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
        }
    });

	$('#grid-container').addClass('proyects-more-hidden');
	
})(jQuery, window, document);

$("#proyects-more-show").click(function() {
	$('#grid-container').toggleClass('proyects-more-hidden');
});












/* ETC */

$( document ).ready(function() {
	$(window).trigger('resize');
});