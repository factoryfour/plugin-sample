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
})(window, document, 'https://plugin.factoryfour.com/plugin.min.js');

