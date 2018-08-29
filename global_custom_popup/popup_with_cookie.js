(function ($) {
    $(function () {
        var body = $('body');
        //Global Custom Popup
        function gcp_init() {
            var global_custom_popup = $('.global-custom-popup');
            var gcp_wrap = $('.gcp-wrap');
            var gcp_overlay = $('.gcp-overlay');
            var gcp_close = $('.gcp-close');
            // console.log('global_custom_popup', global_custom_popup);
            global_custom_popup.css('display', 'block');

            setTimeout(function () {
                    gcp_wrap.toggleClass('gcp-hide gcp-show');

                    gcp_overlay.on('click', function () {
                        gcp_close_popup();
                    });
                    gcp_close.on('click', function () {
                        gcp_close_popup();
                    });
                }
                ,10000);
            function gcp_close_popup() {
                gcp_wrap.toggleClass('gcp-show gcp-hide');
                // document.cookie = "global_popup=1; expires=Thu, 18 Dec 2013 12:00:00 UTC";
                setCookie('global_popup','1',7);
            }
        }
        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            // d.setTime(d.getTime() + (exdays*60*1000));
            d.setTime(d.getTime() + (exdays*24*60*60*1000));
            var expires = "expires="+ d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires;
            // document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        if ((!getCookie('global_popup')) && (!body.hasClass('page-id-7422')) && (!body.hasClass('page-id-7503'))) {
            gcp_init();
            console.log('show_popup');
        }
    });


})(jQuery);