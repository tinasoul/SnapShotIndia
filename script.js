$(document).ready(function(){
$('a.author').click(function(){
$('html, body').animate({scrollTop: $('#chunkfour').offset().top -70}, 'slow');
 return false;
 });
});

$(document).ready(function(){
$('a.findout').click(function(){
$('html, body').animate({scrollTop: $('#chunkthree').offset().top -20}, 'slow');
 return false;
 });
});


$(document).ready(function(){
$("a[href='#skiptotop']").click(function() {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  return false;
});
});