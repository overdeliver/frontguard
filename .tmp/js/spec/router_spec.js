(function() {
  define(['app/router'], function(router) {
    return describe('Test router', function() {
      return it('Router is defined', function() {
        return expect(router).not.to.be(void 0);
      });
    });
  });

}).call(this);
