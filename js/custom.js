$(document).bind("mobileinit", function(){
                 $.extend(  $.mobile , {
                          defaultPageTransition: 'none'
                          });
                 });
$( document ).bind( "mobileinit", function() {
                   // Make your jQuery Mobile framework configuration changes here!
                   
                   $.mobile.allowCrossDomainPages = true;
                   });
document.documentElement.addEventListener('touchmove',
                                          function(e) {
                                          e.preventDefault();
                                          });