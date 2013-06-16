(function() {
  define(['app/helpers/modernizr_test'], function(Modernizr) {
    return describe('Test Modernizr mixin', function() {
      it('Modernizr is defined', function() {
        return expect(Modernizr).not.to.be(void 0);
      });
      return it('addTest fullscreen', function() {
        return expect(Modernizr.fullscreen).not.to.be(void 0);
      });
    });
  });

}).call(this);
