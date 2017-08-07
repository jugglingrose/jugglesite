/* NAV BAR SHOW/HIDE */
$(document).ready(function(){
  $('.push').hide();
});

$(document).ready(function(){
  $(".icon-menu").click(function(){
    $(".push").animate({width:'toggle'},350);
});
});


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
