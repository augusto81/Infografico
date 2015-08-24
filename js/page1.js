$(function() {
  var showed = false;

  $(window).scroll(function() {
    if ($(document).scrollTop() >= $('#page1').position().top - 1 && $(document).scrollTop() < $('#page2').position().top && !showed) {
      showed = true;

      $('#page1 .characters').typed({strings: ['190 personagens'], typeSpeed: 50, showCursor: false, callback: function() {
        $("#page1 .chart-men").addClass("animated bounceIn").show();
        menDashIncreaseHeight();

        setTimeout(function() {
          $("#page1 .chart-women").addClass("animated bounceIn").show();
          womenDashIncreaseWidth();
        }, 3000);

        setTimeout(function() {
          $("#page1 .chart-dumbo").addClass("animated bounceIn").show();
          dumboDashIncreaseHeight();
        }, 5500);
      }});
    }
  });

  var menDashIncreaseHeight = function() {
    var menDashHeight = 0;
    var menDashHeightInterval = setInterval(function() {
      $("#page1 .chart-men-dash").show().css("height", menDashHeight + "vw");
      menDashHeight++;
      if (menDashHeight > 4) {
        clearInterval(menDashHeightInterval);
        menDashIncreaseWidth();
      }
    }, 100);
  }

  var menDashIncreaseWidth = function() {
    var menDashWidth = 0;
    var menDashWidthInterval = setInterval(function() {
      $("#page1 .chart-men-dash").show().css("width", menDashWidth + "vw");
      menDashWidth++;
      if (menDashWidth > 8) {
        clearInterval(menDashWidthInterval);
        $("#page1 .chart-men-dash").addClass("done");
        $("#page1 .chart-men-label").addClass("animated flipInX").show();
        setTimeout(function() {
          $("#page1 .chart-men-icon").addClass("animated swing").show();
        }, 500);
      }
    }, 100);
  }

  var womenDashIncreaseWidth = function() {
    var womenDashWidth = 0;
    var womenDashWidthInterval = setInterval(function() {
      $("#page1 .chart-women-dash").show().css("width", womenDashWidth + "vw");
      womenDashWidth++;
      if (womenDashWidth > 10) {
        clearInterval(womenDashWidthInterval);
        $("#page1 .chart-women-dash").addClass("done");
        $("#page1 .chart-women-label").addClass("animated flipInX").show();
        setTimeout(function() {
          $("#page1 .chart-women-icon").addClass("animated swing").show();
        }, 500);
      }
    }, 100);
  }

  var dumboDashIncreaseHeight = function() {
    var dumboDashHeight = 0;
    var dumboDashHeightInterval = setInterval(function() {
      $("#page1 .chart-dumbo-dash").show().css("height", dumboDashHeight + "vw");
      dumboDashHeight++;
      if (dumboDashHeight > 7) {
        clearInterval(dumboDashHeightInterval);
        $("#page1 .chart-dumbo-dash").addClass("done");
        $("#page1 .chart-dumbo-label").addClass("animated flipInX").show();
        setTimeout(function() {
          $("#page1 .dumbo").addClass("animated bounceInRight").show();
        }, 800);
      }
    }, 100);
  }
});
