//In this function is defined the behaviour of scrolling using onepage-scroll.js
$(document).ready(function(){
  $(".main").onepage_scroll({
   sectionContainer: "section",
   easing: "ease-in-out",
   animationTime: 500,
   pagination: true,
   updateURL: true,
   beforeMove: function(index) { $(window).hashchange(); }, //Checking hash change on before moving to next section
   loop: true,
   keyboard: true,
   responsiveFallback: 1200 //Changing layout on 1200px width
  });
});

//Placing apes in the galleries
$(function(){
  var count=1;
  $('.ape').each(function(){
      count++;
      var source = 'url(http://placeape.com/400/400';
      var random = '?='+count+')'; //There is only 15 apes in placeape.com so this is enough randomness.
      $(this).css('background',source+random);
      $(this).addClass("addape");
  });
});

//Tracking hash change on url and binding actions on those sections.
//Actions include animations of bios, adding bg layer and menu bg
$(function(){
  $(window).hashchange( function(){
    var url = $(location).attr('href');
    var hash = url.substring(url.indexOf("#")+1);
    if (hash == 2) {
    $(".bio1").addClass("addfall");
    $(".layer").addClass("showlayer");
    $(".onepage-pagination").addClass("nobgonmenu");
    $(".bio2").removeClass("addfall");
    }
    else if (hash == 3) {
    $(".bio1").removeClass("addfall");
    $(".bio2").addClass("addfall");
    $(".layer").addClass("showlayer");
    $(".onepage-pagination").addClass("nobgonmenu");
    $(".bio3").removeClass("addfall");
    }
    else if (hash == 4) {
    $(".bio3").addClass("addfall");
    $(".layer").addClass("showlayer");
    $(".onepage-pagination").addClass("nobgonmenu");
    $(".bio2").removeClass("addfall");
    $(".bio4").removeClass("addfall");
    }
    else if (hash == 5) {
    $(".bio4").addClass("addfall");
    $(".layer").addClass("showlayer");
    $(".onepage-pagination").addClass("nobgonmenu");
    $(".bio3").removeClass("addfall");
    $(".bio5").removeClass("addfall");
    }
    else if (hash == 6) {
    $(".bio5").addClass("addfall");
    $(".layer").addClass("showlayer");
    $(".onepage-pagination").addClass("nobgonmenu");
    $(".bio4").removeClass("addfall");
    }
    else if (hash == 0) {
    $(".bio5").addClass("addfall");
    $(".layer").addClass("showlayer");
    $(".onepage-pagination").addClass("nobgonmenu");
    }
    else if (hash == 7) {
    $(".bio1").removeClass("addfall");
    $(".layer").removeClass("showlayer");
    $(".onepage-pagination").removeClass("nobgonmenu");
    $(".bio5").removeClass("addfall");
    }
    else if (hash == 1) {
    $(".bio1").removeClass("addfall");
    $(".layer").removeClass("showlayer");
    $(".onepage-pagination").removeClass("nobgonmenu");
    $(".bio5").removeClass("addfall");
    }
  });
});
