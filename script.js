//hover show tag functions
$('.work_item').mouseover(function() {
  $(this).children('.tag').addClass('hover');
  $(this).children('.overlay').addClass('hover');
});
$('.work_item').mouseout(function() {
  $(this).children('.tag').removeClass('hover');
  $(this).children('.overlay').removeClass('hover');
});
