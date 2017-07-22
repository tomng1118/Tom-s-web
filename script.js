//hover show tag functions

$('.work_item').mouseover(function() {
  $(this).children('.tag').addClass('hover');
  $(this).children('.overlay').addClass('hover');
});
$('.work_item').mouseout(function() {
  $(this).children('.tag').removeClass('hover');
  $(this).children('.overlay').removeClass('hover');
});




$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    $('.nav-desk').addClass('scrolled');
  };
  if ($(window).scrollTop() < 100) {
    $('.nav-desk').removeClass('scrolled');
  }
});

if ($(window).width() <= 768) {
  $(".work_item").children('.tag').addClass('hover');
  $(".work_item").children('.overlay').addClass('hover');
};
