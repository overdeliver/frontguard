(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'app/views/app_view'], function(Backbone, appView) {
    var Router, _ref;
    return Router = (function(_super) {
      __extends(Router, _super);

      function Router() {
        _ref = Router.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Router.prototype.routes = {
        '*actions': 'defaultAction'
      };

      Router.prototype.initialize = function() {
        appView.render();
        return Backbone.history.start();
      };

      Router.prototype.defaultAction = function(actions) {
        return console.log("Unhandled route " + actions);
      };

      return Router;

    })(Backbone.Router);
  });

}).call(this);
