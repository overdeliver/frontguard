(function() {
  define(['app/views/app_view'], function(App) {
    return describe('Test App View', function() {
      return it('App is defined', function() {
        return expect(App).not.to.be(void 0);
      });
    });
  });

}).call(this);
