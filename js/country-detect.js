$(function() {
  var params = (function() {

      var str = window.location.search;
      var objURL = {};

      str.replace(
          new RegExp("([^?=&]+)(=([^&]*))?", "g"),
          function( $0, $1, $2, $3 ){
              objURL[ $1 ] = $3;
          }
      );
      return objURL;
  })();

  $("body").addClass(params["pais"])
});
