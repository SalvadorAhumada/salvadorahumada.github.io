
function toggleClass(){
    var element = document.getElementById("one");
    var elementTwo = document.getElementById("two");
    var elementThree = document.getElementById("three");
    var elementFour = document.getElementById("main-menu");
    element.classList.toggle("cross");
    elementTwo.classList.toggle("crosstwo");
    elementThree.classList.toggle("hidden");
    elementFour.classList.toggle('menu-main-show');
}

function Animations() {
var element = document.getElementById("icons");
    element.classList.toggle("icons-hidden");
    element.classList.toggle("icons-show");

}

//change background color on scroll
$(window).scroll(function() {    
var scroll = $(window).scrollTop();
if (scroll >= 200) {
    $("body").addClass("white");
    $('.color-text').addClass('black'); 
    $('.one').addClass('black-bc'); 
    $('.two').addClass('black-bc-2');  
    $('.three').addClass('black-bc-3');
    $('.three').addClass('black-bc-3');
    $('.main-menu').addClass('white-menu');
    $('.main-menu').addClass('black-text');
    $('.contact-me').addClass('black-text');
    $('#footer-menu').addClass('black-text');
} else {
    $("body").removeClass("white");
    $(".color-text").removeClass("black");
    $(".one").removeClass("black-bc");
    $(".two").removeClass("black-bc-2");
    $(".three").removeClass("black-bc-3");
    $('.main-menu').removeClass('white-menu');
    $('.main-menu').removeClass('black-text');
    $('.contact-me').removeClass('black-text');
    $('#footer-menu').removeClass('black-text');
}
});

//add class when a div is in screen

(function($) {

/**
* Copyright 2012, Digital Fusion
* Licensed under the MIT license.
* http://teamdf.com/jquery-plugins/license/
*
* @author Sam Sehnert
* @desc A small plugin that checks whether elements are within
*     the user visible viewport of a web browser.
*     only accounts for vertical position, not horizontal.
*/

$.fn.visible = function(partial) {

var $t            = $(this),
    $w            = $(window),
    viewTop       = $w.scrollTop(),
    viewBottom    = viewTop + $w.height(),
    _top          = $t.offset().top,
    _bottom       = _top + $t.height(),
    compareTop    = partial === true ? _bottom : _top,
    compareBottom = partial === true ? _top : _bottom;

return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

};

})(jQuery);

$(window).scroll(function(event) {

$("#selector, #selectorTwo, #selectorThree").each(function(i, el) {
var el = $(el);
if (el.visible(true)) {
el.addClass("pop"); 
} else {
el.removeClass("pop");
}
});

});

//div following pointer

$('.selector').bind('mousemove', function(e){
$('#tail_one').css({
   left:  e.clientX + 20,
   top:   e.clientY
});
});

$('.selector').bind('mouseleave', function(e){
$('#tail_one').css({
   display:  'none'
});
});
$('.selector').bind('mouseenter', function(e){
$('#tail_one').css({
   display:  'block'
});
});

//section-two

$('#selectorTwo').bind('mousemove', function(e){
$('#tail_two').css({
   left:  e.clientX + 20,
   top:   e.clientY
});
});

$('#selectorTwo').bind('mouseleave', function(e){
$('#tail_two').css({
   display:  'none'
});
});
$('#selectorTwo').bind('mouseenter', function(e){
$('#tail_two').css({
   display:  'block'
});
});

$('#selectorThree').bind('mousemove', function(e){
   $('#tail_three').css({
      left:  e.clientX + 20,
      top:   e.clientY
   });
   });
   
   $('#selectorThree').bind('mouseleave', function(e){
   $('#tail_three').css({
      display:  'none'
   });
   });
   $('#selectorThree').bind('mouseenter', function(e){
   $('#tail_three').css({
      display:  'block'
   });
});
