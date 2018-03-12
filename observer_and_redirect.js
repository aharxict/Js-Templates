<script>
    $(function () {
        var submit = $("input.wpcf7-submit");
        var form = $("form.wpcf7-form");
        var link = '/blog';
        var timer = null;

        submit.click(function (e) {
            observer(form);
        });

        function observer(form) {
            if(timer) { clearInterval(timer); }
            timer = setInterval(function() {
                if(form.hasClass('sent')) {
                    setTimeout(function(){
                        window.location.href = link;
                    }, 1000);
                    clearInterval(timer);
                } else if(form.hasClass('invalid')) {
                    clearInterval(timer);
                }
            }, 200);
        }

    });
</script>