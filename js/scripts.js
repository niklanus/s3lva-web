$(window).on("load resize",function(e){
	viewportHeight = $(window).height();
	$('.intro-1').height(viewportHeight);
	$('.intro-2').height(viewportHeight);

	$('.intro-2-msg').css('top', viewportHeight);
	$('.mundo').css('top', viewportHeight);

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
		speed: 1000,
		easing: 'easeInOutQuart'
	});

	$('.work-slider').slick({
		autoplay: true,
		autoplaySpeed: 1000,
		arrows: false,
		fade: true
	});
});

$(".nav-btn").click(function() {
	if ( $('body').hasClass('nav-visible') ) {
		$('body').removeClass('nav-visible');
		$(".nav-main li")
		  .velocity("transition.fadeOut", {
		    duration: 150,
		    stagger: 0,
		    delay: 0
		});
	} else {
		$('body').addClass('nav-visible');
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
var monthNames = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ]; 
document.getElementById("date").innerHTML = day+" de "+monthNames[month]+" de "+year;
document.getElementById("year").innerHTML = year;

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#intro-1", triggerHook: "0", offset: 0, duration: vh})
	.setTween(TweenMax.to('#intro-1', 0.5, {
    opacity: 0.5,
    scale: 0.85
	}))
	.addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#intro-2", triggerHook: "0", offset: 0, duration: vh*2})
	.setPin(".intro-2-bg")
	.addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo", triggerHook: "0.8", offset: 0, duration: 193})
	.setTween(TweenMax.from('#mundo-parallax-1', 0.5, {
   		paddingTop: 20
	}))
	.addIndicators()
	.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#mundo", triggerHook: "0.8", offset: 200, duration: 400})
	.setTween(TweenMax.from('#mundo-parallax-2', 0.5, {
		opacity: 0,
    	left: -50,
    	scale: 0.9
	}))
	.addIndicators()
	.addTo(controller);


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
