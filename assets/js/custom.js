(function($) {
  $(document).ready(function() {
    $("html").niceScroll();
  });
  $(".btn_mnu").click(function() {
    $(this).toggleClass("active");
    $('.header-menu__list').toggleClass('active');
  });
})(jQuery);

