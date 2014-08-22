$(function(){

$('.nav ul li').on('click', function() { $('ul').children().removeClass('active'); $(this).addClass('active'); });

$('#instructie').on('click', function () { $(this).height('205px'); $('#submenu').show(); });
$('#instructie').on('mouseleave', function () { $(this).height('50px'); $('#submenu').hide();});

$('.bt-icon').on('click', function() { $('.bt-menu').removeClass('bt-menu-open'); });

		$(function () {
			if (window.location.hash){contentload(window.location.hash);}

			$('a').click(function() {
				fragment = this.hash;
				contentload(fragment);
			});

		});

		function contentload(fragment) {
			fragment = fragment.slice(1).replace('!', '');
			$('#view').load('partials/'+fragment + '.html');
		}

});
