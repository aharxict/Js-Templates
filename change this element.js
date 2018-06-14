    function tab_menu_activation(e) {
        var profile_tabs = $('.profile-tabs>a');
        profile_tabs.removeClass('active');
        var _this = $(e);
        _this.addClass('active');

        // var tab_pane_profile = $('#profile.tab-pane');
        // var tab_pane_pictures = $('#pictures.tab-pane');
        // _this.addClass('123');
        // console.log(_this.attr("href"));
        // if (_this.attr("href") )

    }
    function profile_menu_click() {
        var profile_tabs = $('.profile-tabs>a');
        profile_tabs.on('click', function () {
            tab_menu_activation(this);
        });

    }