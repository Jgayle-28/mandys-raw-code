// ANIMATE ON SCROLL
///////////////////////////////////////
function handleNext(){var t=$('input[class*="slide-radio"]'),o=$('input[class*="slide-radio"]:checked'),n=o.index(),s=t.length;t.attr("checked",!1),s-1<=n?t.first().attr("checked",!0):o.next('input[class*="slide-radio"]').attr("checked",!0)}
/////////////////////////////////////////
// SERVICES
/////////////////////////////////////////
// CATERING
// OVERLAY
AOS.init({}),
/////////////////////////////////////////
// NAVIGATION
/////////////////////////////////////////
// Sticky Nav BG Change
function(o){"use strict";var n=o(".nav"),t=n.offset().top,s=n.height();
//scroll top 0 sticky
o(document).scroll(function(){var t;0<o(this).scrollTop()?n.addClass("sticky"):n.removeClass("sticky")})}(jQuery,void 0),
// CLOSE MENU ON HAMBURGER CLICK
$(".menu").click(function(){$("#nav").toggleClass("open")}),
// CLOSE MENU ON LINK CLICK
$(".scroll").click(function(){$("input[type=checkbox]").click()});
// SMOOTH SCROLL
var scrollLink=$(".scroll");
// Smooth scrolling
scrollLink.click(function(t){t.preventDefault(),$("body,html").delay(300).animate({scrollTop:$(this.hash).offset().top},1200)});
/////////////////////////////////////////
// SLIDER
/////////////////////////////////////////
var TIMEOUT=6e3,interval=setInterval(handleNext,TIMEOUT);$(".serv-box-content-btn-1").mouseover(function(){$(".serv-box-content-overlay-1").css({transform:"translateY(0)"})}).mouseout(function(){$(".serv-box-content-overlay-1").css({transform:"translateY(400px)"})}),
// IMAGE
$(".serv-box-content-btn-1").mouseover(function(){$(".bot-content-cat-img").css({transform:"scale(.2)",opacity:0})}).mouseout(function(){$(".bot-content-cat-img").css({transform:"scale(1)",opacity:1})}),
// SHOP
// OVERLAY
$(".serv-box-content-btn-2").mouseover(function(){$(".serv-box-content-overlay-2").css({transform:"translateY(0)"})}).mouseout(function(){$(".serv-box-content-overlay-2").css({transform:"translateY(400px)"})}),
// IMAGE
$(".serv-box-content-btn-2").mouseover(function(){$(".bot-content-shop-img").css({transform:"scale(.2)",opacity:0})}).mouseout(function(){$(".bot-content-shop-img").css({transform:"scale(1)",opacity:1})}),
// CLASSES
// OVERLAY
$(".serv-box-content-btn-3").mouseover(function(){$(".serv-box-content-overlay-3").css({transform:"translateY(0)"})}).mouseout(function(){$(".serv-box-content-overlay-3").css({transform:"translateY(400px)"})}),
// IMAGE
$(".serv-box-content-btn-3").mouseover(function(){$(".bot-content-class-img").css({transform:"scale(.2)",opacity:0})}).mouseout(function(){$(".bot-content-class-img").css({transform:"scale(1)",opacity:1})});