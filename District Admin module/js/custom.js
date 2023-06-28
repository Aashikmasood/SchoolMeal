//sideSubmenu
  $('.multi_submenu a').click(function () {
    $('ul.submenu_bar').slideToggle();
    $('.multi_submenu').toggleClass('openActive');
  });