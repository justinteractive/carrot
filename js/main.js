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

	$('.people ul.team a').on('click', function() {
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

	// function renderMap() {
 //        var mapElement = document.getElementById('map'),
 //        	lat = 39.749203,
 //        	lng = -104.99113;

	// 	var	mapOptions = {
	//             zoom: 				15,
	//             center: 			new google.maps.LatLng(lat, lng),
	//             mapTypeControl: 	false,
	//             navigationControl: 	true,
	//             zoomControl: 		true,
	//             scrollwheel: 		false,
	//             draggable: 			false,
	//             streetViewControl: 	false,
	//             mapTypeId: 			google.maps.MapTypeId.ROADMAP
	//         };
 //        map = new google.maps.Map( mapElement, mapOptions );
 //        console.log('render map');
 //    }

 //    renderMap();

});
