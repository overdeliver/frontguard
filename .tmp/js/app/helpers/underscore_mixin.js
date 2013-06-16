(function() {
  define(['underscore'], function(_) {
    _.mixin({
      isUsable: function(obj) {
        return !_.isNull(obj) && !_.isUndefined(obj) && obj !== "";
      },
      usable: function(obj, value) {
        if (!_.isNull(obj) && !_.isUndefined(obj) && obj !== "") {
          return obj;
        } else {
          if (_(value).isUsable()) {
            return value;
          } else {
            return null;
          }
        }
      }
    });
    return _;
  });

}).call(this);
