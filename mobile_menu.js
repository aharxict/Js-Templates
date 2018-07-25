(function($) {
    var menu_button = $ ('#top-menu > .menu-button');
    var mega_toggle_button = $('#mega-menu-wrap-header-menu .mega-toggle-block');
    //console.log(mega_toggle_button);
    menu_button.on('click', function() {
        mega_toggle_button.trigger('click');
    } );
    // var mega_menu_link = $('#mega-menu-header-menu > li.mega-menu-item-has-children >a.mega-menu-link');
    setTimeout(function () {
        var li_menu_link = $('body #top-menu #mega-menu-header-menu > li.mega-menu-item-has-children');
        // var before_menu_link = $('body #top-menu #mega-menu-header-menu > li.mega-menu-item-has-children > a.mega-menu-link');
        // before_menu_link.removeClass('submenu-button');
        // before_menu_link.addClass('before-link');
        li_menu_link.prepend("<div class='before-link'> </div>");
        var before_menu_link = $('.before-link');
        //console.log(before_menu_link);
        before_menu_link.on('click', function(event){
            // event.preventDefault();
            // event.stopPropagation();
            // event.cancelBubble = true;
           var aHref = $(this).parent().find('>a');
           var link = aHref.attr('href');
            console.log('link to go-> ', link, aHref );
            window.location.href = link;
        });
    },200);


})(jQuery);
