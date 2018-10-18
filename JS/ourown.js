$(function(){
	
	$.scrollify({
            section : ".snap",
            sectionName : "page"
          });
	
	$('#about-block').click(function(){
		$.scrollify.move("#about")
		
//			$('#about').css({
//			'font-family':'cursive',
//			'font-size':'20px'	
//			});
	});
	$('#team-block').click(function(){
		$.scrollify.move("#team")
	});
	$('#services-block').click(function(){
		$.scrollify.move("#services")
	});
	$('#contacts-block').click(function(){
		$.scrollify.move("#contacts")
	});
	
	
	$('#about-block').hover(function(){
		$('#about').stop().slideToggle();
	});
		$('#team-block').hover(function(){
		$('#team').stop().slideToggle();
	});
		$('#services-block').hover(function(){
		$('#services').stop().slideToggle();
	});
		$('#contacts-block').hover(function(){
		$('#contacts').stop().slideToggle();
	});

//Scroll to top function	
	
//$(".scrollToTop").on("click", function() {
//    $("body").scrollTop(0);
//});
	
	$('.first.circle').circleProgress({
    value: 0.75
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(75 * progress) + '<i>%</i>');
  });
	
	
$('.second.circle').circleProgress({
    value: 0.87
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(87 * progress) + '<i>%</i>');
  });
	
	
	$('.third.circle').circleProgress({
    value: 0.80
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(80 * progress) + '<i>%</i>');
  });
	
  	$('.forth.circle').circleProgress({
    value: 0.60
  }).on('circle-animation-progress', function(event, progress) {
    $(this).find('strong').html(Math.round(60 * progress) );
  });
	
  });