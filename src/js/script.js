$(document).ready(function(){
$('.gift').click(function(valtable){
$('.gift').removeClass('active')
$(this).addClass('active');
}); 

function contH() {
var sbh = $('.sidebar').height();
$('.content').css({'min-height':sbh+'px'})
$('.game_week img').on("load", function() {
var sbh = $('.sidebar').height();
$('.content').css({'min-height':sbh+'px'})
});
}

$('.expander').click(function(){
$('.top_nav').stop(true).slideToggle()
});
$('.expander2').click(function(){
$('.nav_games').stop(true).slideToggle()
});
function expander() {
var hH = $('header').height();
var width = $(window).width();
if (width > 752) {
} else {
$('.bg_header').css({'height':50+1*hH+'px'});
}
}


$(window).scroll(function () {
if ($(this).scrollTop() > 0) {
$('.btn-to-top').show(); }
else {
$('.btn-to-top').hide();
}
});
$('.btn-to-top').click(function () {
$('body,html').animate({
scrollTop: 0
}, 400);
return false;
});

$('.redirect').click(function(){
document.location.href = 'https://ucmirror.com/';
});

});