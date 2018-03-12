	  (function ($) {
		 setTimeout(function () {
			 var figure = $('.single-events__img figure');
			 if (figure.hasClass('img-square'))  {
				 figure.removeClass('img-square');
				 figure.addClass('img-landscape');
			 }
			 if (figure.hasClass('img-portrait'))  {
				 figure.removeClass('img-portrait');
				 figure.addClass('img-landscape');
			 }

			 },2000);
	  })(jQuery);