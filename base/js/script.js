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

  // $(".blue-box").delay(1000).slideUp(2000).slideDown(2000, function() {
  //   alert('animation finished');
  // });

  // Section 3. Selectors---------------------------------------------------------
  // $("#list").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("h2, p, input").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("p:first").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("p:last").css("background-color", "rgba(180, 180, 30, 0.8)"); // also even and odd
  // $("input:text").css("background-color", "rgba(180, 180, 30, 0.8)"); // checkbox, password, selected, checked
  //----- Traversing document
  // $("#list"),find("li").css("background-color", "rgba(180, 180, 30, 0.8)"); // call children instead of find for direct subitems
  // similarly down hierarchy use parents. Ex: parents("div") - only div. For direct parent call parent() - you'll have only one element
  // you also have siblings: elements on the same level. Ex: siblings("p1") - only sibling p1 elements
  // you also could use prev() and next()
  //------ Filtering elements
  $("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#list").find("li").filter(function(index) {
    // index is element index for filtering
    // return true to make element pass the filter, false to filter element
    return index % 3 === 0;
  }).css("background-color", "rgba(180, 180, 30, 0.8)");
  
  //use first() with filter to get only first element ( same for last() )
  // if you want select element on index 5, use eq(5):
  $("#list").eq(5).css("background-color", "rgba(180, 180, 30, 0.8)");
  // eq could be also negative to traverse from back to front
  // with not function, you specify elements that you don't want:
  $("#list"),find("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8)");
  $("#list"),find("#list ul li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8)");
  // also could be used with function()

  
});