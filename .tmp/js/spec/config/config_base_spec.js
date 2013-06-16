(function() {
  define(['config'], function(config) {
    return describe('Test configuration', function() {
      return it('Configuration is defined', function() {
        return expect(config).not.to.be(void 0);
      });
    });
  });

}).call(this);
