// JavaScript Document
$(document).ready(
  function(){
    $("#nav img, #totop img, #headerlink img").hover(function(){
       $(this).fadeTo("fast", 0.0);
    },function(){
       $(this).fadeTo("slow", 1.0);
	});
    $("#indexLink a img").hover(function(){
       $(this).fadeTo("fast", 0.5);
    },function(){
       $(this).fadeTo("slow", 1.0);
	});
    $("#sidelink img").hover(function(){
       $(this).fadeTo("fast", 0.7);
    },function(){
       $(this).fadeTo("slow", 1.0);
	});	
});