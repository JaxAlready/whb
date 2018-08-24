$(function(){
	$('#out').fullpage({
		menu:'#menu',
		anchors:['page1','page2','page3','page4','page5']
	});
	// 使用Fullpage插件以后视频标签不能自动播放
	function videoPlay() {
	    $('video').each(function (i, e) {
	      $('video').get(i).play();
	    });
	  }
	videoPlay();
})