//hover show tag functions

$('.work_item').mouseover(function() {
  $(this).children('.tag').addClass('hover');
  $(this).children('.overlay').addClass('hover');
});
$('.work_item').mouseout(function() {
  $(this).children('.tag').removeClass('hover');
  $(this).children('.overlay').removeClass('hover');
});



if ($(window).width() <= 768) {
  $(".work_item").children('.tag').addClass('hover');
  $(".work_item").children('.overlay').addClass('hover');
  $("#logo").attr('src', 'logo-mobile.png');
};

$("#nav-home").click(function() {
  $('html,body').animate({
      scrollTop: $(".hero").offset().top
    },
    'slow');
});

$("#nav-about").click(function() {
  $('html,body').animate({
      scrollTop: $(".intro").offset().top
    },
    'slow');
});

$("#nav-works").click(function() {
  $('html,body').animate({
      scrollTop: $(".works").offset().top
    },
    'slow');
});

$("#nav-contact").click(function() {
  $('html,body').animate({
      scrollTop: $(".about").offset().top
    },
    'slow');
});
