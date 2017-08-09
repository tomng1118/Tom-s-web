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

var screenW = $(window).width();
var screenH = $(window).height();
//scroll left hover
$(".slide").mousemove(function(event) {
  var mousex = event.clientX;
  var persentage = mousex / screenW;
  var contentW = $(".slide")[0].scrollWidth;
  $(this).scrollLeft(persentage * contentW - 700);
});



//dynamic bg
var srcImg = "";
$(".item").mouseenter(function() {
  if ($(this).find("img").attr('src') != srcImg) {
    srcImg = $(this).find("img").attr('id');
    $(".portfolio").css("background-image", "url('assets/" + srcImg + "')");
    $("#gg").text(srcImg);
  }
  if ($(this).find("img").attr('id') == "bg-illu2.jpg") {
    $(".doc").css("transform", "scaleY(1)");
    $("#d1").css("transform", "scaleY(2)");
  }
  if ($(this).find("img").attr('id') == "bg-illu1.jpg") {
    $(".doc").css("transform", "scaleY(1)");
    $("#d2").css("transform", "scaleY(2)");
  }
  if ($(this).find("img").attr('id') == "bg-pos1.jpg") {
    $(".doc").css("transform", "scaleY(1)");
    $("#d3").css("transform", "scaleY(2)");
  }
  if ($(this).find("img").attr('id') == "bg-int1.jpg") {
    $(".doc").css("transform", "scaleY(1)");
    $("#d4").css("transform", "scaleY(2)");
  }
});
