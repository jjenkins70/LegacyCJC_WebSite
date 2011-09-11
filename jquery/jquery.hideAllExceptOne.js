/* http://github.com/enure/Hide-All-Except-One */

(function($){
  $.hideAllExcept = function(){
    function init() {
      var hash = window.location.hash;

      // make it bookmarkable/refreshable. but, no history.
      (!hash) ? hideShow('#' + $('#toggleThis > div:first').attr('id')) : hideShow(window.location.hash);

      // add click handler.
      $('a.toggle').click(function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        hideShow(href);
      });
    }
    function hideShow(el) {
      $(el).show().siblings().hide();

      $('a.toggle').removeClass('active');
      $('a[href="' + el + '"]').addClass('active');
    }
    init();
  };
})(jQuery);