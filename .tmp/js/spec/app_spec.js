(function() {
  define(['app/app'], function(app) {
    return describe('Test application', function() {
      return it('Application is defined', function() {
        return expect(app).not.to.be(void 0);
      });
    });
  });

}).call(this);
