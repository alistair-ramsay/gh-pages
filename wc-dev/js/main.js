$.easing.easeOutCubic=function(u,e,n,t,o){return e==o?n+t:t*(1-Math.pow(2,-12*e/o))+n},$(document).ready(function(){$(".back-to-top").click(function(){$("html, body").animate({scrollTop:$("header").offset().top},800,"easeOutCubic")}),$(".sub-menu-button, .sub-menu").hover(function(){$(".sub-menu").addClass("sub-menu-hover")},function(){$(".sub-menu").removeClass("sub-menu-hover")}),$(".sub-menu-button").click(function(){$(".sub-menu").toggleClass("sub-menu-clicked"),$(this).toggleClass("sub-menu-button-clicked")}),$(".menu-button").click(function(){$("menu").toggleClass("mobile-hide"),$(this).toggleClass("sub-menu-button-clicked")})});