(function() {
  define(['app/router', 'config'], function(Router) {
    var app, initialize;
    app = null;
    initialize = function() {
      return app = new Router();
    };
    return {
      router: app,
      initialize: initialize
    };
  });

}).call(this);
