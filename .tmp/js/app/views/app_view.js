(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['backbone', 'underscore', 'text!templates/app.html'], function(Bacbone, _, tpl) {
    var App, appView, _ref;
    App = (function(_super) {
      __extends(App, _super);

      function App() {
        _ref = App.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      App.prototype.el = "#total";

      App.prototype.events = {};

      App.prototype.initialize = function(options) {};

      App.prototype.render = function() {
        return this.$el.html(_.template(tpl, {}));
      };

      return App;

    })(Backbone.View);
    return appView = new App();
  });

}).call(this);
