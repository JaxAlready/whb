$(function(){
	$('.list-down li').each(function(index){
	    $(this).on('mouseenter',function(){
	        $('.bb_box li').eq(index).stop(true,true).fadeIn(666).siblings().stop(true,true).fadeOut(666);
	        $(this).css('opacity','1').siblings().css('opacity','.7');
	        $('.down'+(index+1)).stop().animate({
	        	'margin-top':-10
	        });
	        $('#ic_line').stop().animate({
	        	'left':145*index
	        },333)
	    }).on('mouseleave',function(){
	    	$('.down'+(index+1)).stop().animate({
	        	'margin-top':0
	        })
	    })
	});
	$('.conman').on('mouseenter',function(){
		$(this).find('.hover_box').stop(true).animate({
			'left':0
		},333);
	}).on('mouseleave',function(){
		$(this).find('.hover_box').stop(true).animate({
			'left':'100%'
		},1)
	})
})