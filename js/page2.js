$(function() {
  var showed = false;

  $(window).scroll(function() {
    if ($(document).scrollTop() >= $('#page2').position().top - 50 && $(document).scrollTop() < $('#page3').position().top && !showed) {
      showed = true;

      $('#page2 .history-amount').addClass("animated bounceInLeft").show();

      setTimeout(function() {
        $('#page2 .equal').addClass("animated flipInY").show();
      }, 800);

      setTimeout(function() {
        $('#page2 .square').addClass("animated tada").show();
        $('#page2 .years-amount').addClass("animated bounceInRight").show();
        yearsIncrement();
      }, 1500);
    }
  });

  var yearsIncrement = function() {
    var years = 1;
    var yearsInterval = setInterval(function() {
      (function(_years) {
        setTimeout(function() {
          $('#page2 .years').html("0" + _years);
        }, 550);
      })(years);
      $('#page2 .book-' + years).addClass("animated zoomInUp").show();

      years++;
      if (years > 7) {
        clearInterval(yearsInterval);
        $('#page2 .time').typed({strings: ['Tempo suficiente para lermos 364 livros numa velocidade de 1 livro por semana!'], typeSpeed: 10, showCursor: false});
      }
    }, 400);
  }
});
