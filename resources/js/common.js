// ---------------------BACK-TO-TOP-BUTTON-JQUERY-CODE--------------------------------------------

$(window).scroll(function() {
  var height = $(window).scrollTop();
  if (height > 500) {
    $('#back2Top').fadeIn();
  } else {
    $('#back2Top').fadeOut();
  }
});
$(document).ready(function() {
  $("#back2Top").click(function(event) {
    event.preventDefault();
    $("html, body").animate({
      scrollTop: 0
    }, "slow");
    return false;
  });

});


// ----------------------REACH-TO-DIV-ARROW-JQUERY-CODE------------------------------------------------
$(document).ready(function() {
  $(".img-scroll").hover(function() {
    $(this).toggleClass("animated infinite bounce");
  });

  $(document).on('click', 'a[href^="."]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
      return;
    }
    e.preventDefault();
    var pos = $id.offset().top-100;

    $('body, html').animate({
      scrollTop: pos
    });
  });
});
