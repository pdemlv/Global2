 $(document).ready(function(){
  $('.main__slider').slick({
    infinite: true,
	speed: 300,
    slidesToShow: 1,
    prevArrow: '<button class="main__control-left" type="button"><img src="img/arrow-left.png"></button>',
	nextArrow: '<button class="main__control-right" type="button"><img src="img/arrow-right.png"></button>',
    adaptiveHeight: true
  });

  $('.news__slider').slick({
    infinite: true,
	speed: 300,
    slidesToShow: 5,
  	slidesToScroll: 1,
    prevArrow: '<button class="news__control-left" type="button"><img src="img/news__arrow-left.png"></button>',
	nextArrow: '<button class="news__control-right" type="button"><img src="img/news__arrow-right.png"></button>',
    adaptiveHeight: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
       }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
  });
 //init map

 

 //language on change
 $('.language li').on('click', function(){
 	$('.language li').removeClass('active-lang');
 	$(this).toggleClass('active-lang');
 });
 // Bootstrap smooth dropdown
 $('.navigation__dropdown').on('show.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
  });

 $('.navigation__dropdown').on('hide.bs.dropdown', function() {
    $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
  });

 //mobile button
 $('.mobile-nav').on('click', function(){
 	$('.mobile-nav__item').toggleClass('active-btn');
 	$('.header__links-cont').toggleClass('open_container');
 });

 //button More
 $('.about__btn').on('click', function(){
 	$('.about__workers').toggleClass('open_info');
 });

 //button View all
 $('.portfolio__btn-all').on('click', function(){
 	$('.portfolio__cont2').toggleClass('open_info');
 });

 $('.news__btn-view-all').on('click', function(){
 	$('.news__row2').toggleClass('open_info');
 });

});