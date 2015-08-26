$(function() {
  var showed = false;

  $(window).scroll(function() {
    if ($(document).scrollTop() >= $('#page3').position().top - 1 && $(document).scrollTop() < $('#page4').position().top && !showed) {
      showed = true;

      $('#page3 .hours-amount').addClass("animated bounceInRight").show();
      $('#page3 .hours').addClass("animated bounceInRight").show();
      $('#page3 .write').addClass("animated bounceInRight").show();
      hoursIncrement();

      setTimeout(function() {
        $('#page3 .clock').addClass("animated bounceInDown").show();
        $('#page3 .minutes-pointer').addClass("animated bounceInDown").show();
        $('#page3 .hours-pointer').addClass("animated bounceInDown").show();
      }, 500);

      setTimeout(function() {
        minutesClock();
        hoursClock();
      }, 1100);
    }
  });

  var minutesClockInterval, hoursClockInterval;

  var minutesClock = function() {
    var minutes = 0;
    minutesClockInterval = setInterval(function() {
      $('#page3 .minutes-pointer').removeClass('animated bounceInDown').css('transform', 'rotate(' + minutes + 'deg)');
      minutes += 10;
    }, 1);
  }

  var hoursClock = function() {
    var hours = 0;
    hoursClockInterval = setInterval(function() {
      $('#page3 .hours-pointer').removeClass('animated bounceInDown').css('transform', 'rotate(' + hours + 'deg)');
      hours += 10;
    }, 60);
  }

  var hoursIncrement = function() {
    var hours = 1;
    var hoursInterval = setInterval(function() {
      (function(_hours) {
        setTimeout(function() {
          var text = "00" + _hours;
          $('#page3 .hours-amount').html(text.substring(text.length - 3));
        }, 550);
      })(hours);

      hours++;
      if (hours > 269) {
        clearInterval(hoursInterval);
        setTimeout(function() {
          clearInterval(minutesClockInterval);
          clearInterval(hoursClockInterval);
          $('#page3 .dumbo-peeing').addClass("animated bounceInRight").show();
          setTimeout(function() {
            $('#page3 .pee').addClass("animated infinite tada").show();
          }, 1000);
        }, 550);

        setTimeout(function() {
          $('#page3 .equivalent').typed({strings: ['o equivalente a <span class="numbers">30.000</span>"mijadinhas" do Dumbo'], typeSpeed: 50, showCursor: false});
        }, 1200);
      }
    }, 15);
  }
});
