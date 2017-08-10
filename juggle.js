/* NAV BAR SHOW/HIDE */
var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.icon-menu').click(function() {
    $('.menu').animate({
      right: "0"
    }, 200);

    $('body').animate({
      right: "300px"
    }, 200);
  });

  /* Then push them back */
  $('.icon-close').click(function() {
    $('.menu').animate({
      right: "-1500px"
    }, 200);

    $('body').animate({
      right: "0px"
    }, 200);
  });
};


$(document).ready(main);


/*LANDING PAGE PANELS */
$(document).ready(function(){
  $("#LPanel").mouseenter(function(){
    $("#RPanel").hide();
  });
  $("#LPanel").mouseleave(function(){
    $("#RPanel").show();
  });
  });

$(document).ready(function(){
  $("#RPanel").mouseenter(function(){
    $("#LPanel").hide();
  });
  $("#RPanel").mouseleave(function(){
    $("#LPanel").show();
  });
});
