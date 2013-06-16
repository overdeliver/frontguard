(function() {
  define(['modernizr'], function(Modernizr) {
    return Modernizr.addTest('fullscreen', function() {
      var ancelFullScreen, pre, _i, _len, _ref;
      ancelFullScreen = 'ancelFullScreen';
      if (document.mozCancelFullScreen && !document.mozFullScreenEnabled) {
        return false;
      }
      _ref = Modernizr._domPrefixes;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        pre = _ref[_i];
        if (document[[pre.toLowerCase(), 'C', ancelFullScreen].join('')]) {
          return true;
        }
      }
      return !!document[['c', ancelFullScreen].join('')] || false;
    });
  });

}).call(this);
