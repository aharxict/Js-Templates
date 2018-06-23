;(function($){
    $(function(){
        if($('body').hasClass('single-concert')) {
            alert(new Date().toUTCString());
        }
    });
})(jQuery);