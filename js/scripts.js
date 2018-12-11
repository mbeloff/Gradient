$(window).scroll(()=>{
  parallax();
})

function parallax() {
  var wScroll = $(window).scrollTop();

  $('.parallax').css('background-position', 
  'center ' +(wScroll / 2)+'px')
}