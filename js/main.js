$(document).ready(function()  {
	
	console.log('jquery is wired up');
	$('.tooltip').tooltipster();

	$('body.company .subnav a').on('click', function() {
		if( !$(this).hasClass('active') ) {
			var team = $(this).attr('class');
			$( '.teams .team' ).hide();
			$( '.teams .'+team ).show();

			$('.subnav a').removeClass('active');
			$( this ).addClass('active');
		}
	});

	$('body.team .subnav a').on('click', function() {
		if( !$(this).hasClass('active') ) {
			var el = $(this).attr('class');
			$('.content').hide();
			$('.content.'+el).show();

			$('.subnav a').removeClass('active');
			$( this ).addClass('active');
		}
	});

	$('.people ul.team a .avatar').on('click', function() {
		$('.profile').slideDown();
		$('html, body').animate({
	        scrollTop: $("#subnav").offset().top
	    }, 200);
	});

	$('.profile .close').on('click', function() {
		$('.profile').slideUp();
	});

	$('.location').on('click', function() {
		$('.hero').toggleClass('map');
	});

	$('.coffee').on('click', function() {
		console.log('get a coffee');
		$('#lightbox').fadeIn('fast');
	});

	$('.modal .close, .modal .button.cancel').on('click', function() {
		$('#lightbox').fadeOut('fast');
	});
	$('.modal .button.send').on('click', function() {
		$('#lightbox').fadeOut('fast');
		$('#growl').show();
		setTimeout( function() {
			$('#growl').fadeOut('fast');
		}, 2500 );
	});

});
