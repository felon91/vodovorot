  if($("input").is(".form__mask")) {
  $(".form input").mask("+7 (999) 999-99-99");
}

  $(document).ready(function() {

    var isAnimated = false;
    $(".faq__element a").on("click", function(e) {
      e.preventDefault();
      if(isAnimated === false) {
        isAnimated = true;
        if($(this).parent().hasClass("faq__element-active")) {
          $(this).next('p').slideUp(300);
          $(this).parent('.faq__element').removeClass('faq__element-active');
          setTimeout(function(){
            isAnimated = false;
          }, 300);
        } else {
          isAnimated = true;
          $(this).parent('.faq__element').addClass('faq__element-active');
          $(this).next('p').slideDown(300);
          setTimeout(function(){
            isAnimated = false;
          }, 300);

        }
        
      }

    });

});

var Menu = {

  el: {
    ham: $('.hamburger'),
    menuTop: $('.hamburger__top'),
    menuMiddle: $('.hamburger__middle'),
    menuBottom: $('.hamburger__bottom'),
    menuHeader: $('.menu .menu__nav')
  },
  
  init: function() {
    Menu.bindUIactions();
  },
  
  bindUIactions: function() {
    Menu.el.ham
        .on(
          'click',
        function(event) {
        Menu.activateMenu(event);
        event.preventDefault();
      }
    );
  },
  
  activateMenu: function() {
    Menu.el.menuTop.toggleClass('hamburger__top-click');
    Menu.el.menuMiddle.toggleClass('hamburger__middle-click');
    Menu.el.menuBottom.toggleClass('hamburger__bottom-click');
    if(Menu.el.menuHeader.hasClass('menu-active')) {
    	Menu.el.menuHeader.slideUp(550);
    	Menu.el.menuHeader.removeClass('menu-active');
    } else {
    	Menu.el.menuHeader.slideDown(550);
    	Menu.el.menuHeader.addClass('menu-active');
    }
  }
};

Menu.init();

$(window).resize(function(){

	if(window.innerWidth >= 780) {
		Menu.el.menuHeader.removeAttr('style');
		Menu.el.menuHeader.removeClass('menu-active');
		Menu.el.menuTop.removeClass('hamburger__top-click');
    	Menu.el.menuMiddle.removeClass('hamburger__middle-click');
    	Menu.el.menuBottom.removeClass('hamburger__bottom-click');
	}

});