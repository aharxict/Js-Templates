(function ($) {
   $(function () {
       function infoBarSupport() {
           var cp_info_bar_body = $('.cp-info-bar-body');
           var header_outer = $('#header-outer');
           var header_space = $('#header-space');
           if (cp_info_bar_body.length > 0) {
               var menu_observer = setInterval(heightChecker,200);
               setTimeout(stopObserver,10000);
               console.log('Start observer');
               var close_btn = $('.ib-close');
               close_btn.on('click', function () {
                   header_outer.css('margin-top', '0px');
                   header_space.css('margin-top', '0px');
                   console.log('Close info bar');
               });
           }

           function heightChecker() {
               var margin_top = cp_info_bar_body.height() + 'px';
               console.log('Margin top', margin_top);
               header_outer.css('margin-top', margin_top);
               header_space.css('margin-top', margin_top);
           }
           function stopObserver() {
               console.log('Stop observer');
               clearInterval(menu_observer);
           }
       }
       infoBarSupport();
   });
})(jQuery);
