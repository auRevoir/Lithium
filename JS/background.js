$(function() {
  var body = $('body');
  var backgrounds = ['url(JS/green.png)', 'url(JS/orange.png)', 'url(JS/blue.png)'];
var current = 0;

function nextBackground() {
  body.css(
   'background',
    backgrounds[current = ++current % backgrounds.length]
 );

 setTimeout(nextBackground, 9000);
 }
 setTimeout(nextBackground, 9000);
   body.css('background', backgrounds[0]);
 });