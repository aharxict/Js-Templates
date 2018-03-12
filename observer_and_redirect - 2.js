    <script>
        $(function () {
            var submit = $("button.yikes-easy-mc-submit-button");
           // var form = $("p.yikes-easy-mc-hidden");
            var link = '/thank-you-for-signing-up';
            var timer = null;

            var element = {instance: null};

            submit.click(function (e) {
                console.log(submit);
                waitForElement('p.yikes-easy-mc-hidden', element);
            });

            function waitForElement(selector, element) {
                element.instance = null;
                var timerId = null;
                timerId = setInterval(function(){
                    var p = $("p.yikes-easy-mc-hidden");
                    if(p.length > 0) {
                        element.instance = p;
                       clearInterval(timerId);
                        observer(p);
                        console.log(p);
                    }
                }, 200);
            }

            function observer(form) {
                if(timer) { clearInterval(timer); }
                timer = setInterval(function() {
                    console.log(form);
                    if(form.hasClass('yikes-easy-mc-success-message')) {
                        setTimeout(function(){
                            window.location.href = link;
                        }, 1000);
                        clearInterval(timer);
                    } else if(form.hasClass('yikes-easy-mc-error-message')) {
                        clearInterval(timer);
                    }
                }, 200);
            }

        });
    </script>