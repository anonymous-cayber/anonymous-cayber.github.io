$(window).load(function () {
  $(".before-after").twentytwenty({
    before_label: "Без скинали",
    after_label: "Со скинали",
  });
  $(".before-slider").slick({
    draggable: false,
    dots: true,
    dotsClass: "before-slider__dots",
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right"),
  });
  $('.menu-button').on('click', function () {
    $('.menu').toggleClass('menu_active');
  });

  // Настройка Select

  $('.select').on('click', function(){
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });
  $('.select__option').on('click', function(){
    var value = $(this).attr('data-value');
    $('#select-type').val(value);
    $('.select_checked').text(value);
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });
  $("a[href^='#']").click(function (){
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top -120 + "px"});
    return false;
  });
  $('input[type="tel"]').mask("+7 (999) 999-99-99");
  // показывать карты только тогда докрутили до неё
  var reviews = $('.reviews');
  var reviewsTop = reviews.offset().top;
  $(window).bind('scroll', function(){
    var windowTop = $(this).scrollTop();
    if (windowTop > reviewsTop) {
      $('#map').html('<script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3Af7da640d6a19b561081df03f4ca5b107fca087e993eb25bf2245ee37d171686f&amp;width=100%25&amp;height=410&amp;lang=ru_RU&amp;scroll=false" ></script>')
      $(window).unbind('scroll')
    }
  });
});