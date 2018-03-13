// store.js for Bellissima
if (store_id) {

    // addEventListener support for IE8
function bindEvent(element, eventName, eventHandler) {
    if (element.addEventListener){
        element.addEventListener(eventName, eventHandler, false);
    } else if (element.attachEvent) {
        element.attachEvent('on' + eventName, eventHandler);
    }
}
var iframeSource = 'https://dev.bellissima.io/store/' + store_id + '/catalog' ;
// Create the iframe
var iframe = document.createElement('iframe');
iframe.setAttribute('src', iframeSource);
iframe.setAttribute('id', 'the_iframe');
iframe.style.width = 100 + '%';
iframe.style.height = 1000 + 'px';
iframe.style.border = 0;
iframe.style.transition = 0.5 + 's';
document.body.appendChild(iframe);

// Listen to message from child window
bindEvent(window, 'message', function (e) {
    iframe.style.height = e.data + 100 + 'px';
});
}
