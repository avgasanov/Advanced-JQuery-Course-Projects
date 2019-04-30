$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  //$(".red-box").fadeTo(3000, 0.2);
  //$(".green-box").fadeTo(2000, 0.5);
  //$(".blue-box").fadeTo(1000, 0.8);
  //FADEIN, FADEOUT
  //FADETOGGLE
  // use FADETO 0 opacity to preserve element in layout
  // HIDE and SHOW can be used with timings
  // slide up, slide down
  // $(".blue-box").slideUp(2000);
  // $(".blue-box").slideDown(2000);
  // $("p").hide();
  // $("p").slideDown(1000);
  // slideToggle

  // $(".blue-box").animate({
  //   "margin-left": "+=200px"
  //    marginTop: "+=25px"
  // }, 1000, "linear");

  $(".blue-box").delay(1000).slideUp(2000).slideDown(2000, function() {
    alert('animation finished');
  });


});