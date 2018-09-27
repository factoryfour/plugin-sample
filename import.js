(function(w, d, f) {
    function l() {
        var s = d.createElement('script');
        s.type = 'text/javascript';
        s.async = true;
        s.src = f;
        var x = d.getElementsByTagName('script')[0];
        x.parentNode.insertBefore(s, x);
    }
    if (w.attachEvent) {
        w.attachEvent('onload', l);
    } else {
        w.addEventListener('load', l, false);
    } 
    // Add the event listener for the cast_button click
    w.addEventListener('click', (event) => {
        if (event.srcElement.className === 'cast_button') {
            // Open the plugin based on the config
            w.openPlugin(w.castSettings);
        }
    });
})(window, document, 'https://plugin.factoryfour.com/factoryfour-orders-plugin.min.js');

