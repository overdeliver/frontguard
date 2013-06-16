(function() {
  define(['app/helpers/underscore_mixin'], function(_) {
    return describe('Test Underscore mixin', function() {
      it('Underscore is defined', function() {
        return expect(_).not.to.be(void 0);
      });
      it('isUsable mixin', function() {
        return expect(_.isUsable).to.be.a('function');
      });
      return it('usable mixin', function() {
        return expect(_.usable).to.be.a('function');
      });
    });
  });

}).call(this);
