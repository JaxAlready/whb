$(function(){
	function Slider(){
		this.imgs = $('#imgbox li');
		this.menu = $('#menubox li');
		this.init();
		this.timer = null;
		this.changeimg();
		this.indx = 0;
	}
	Slider.prototype.init = function(){
		var that =this;
		this.menu.on('mouseover',function(){
			that.indx = $(this).index();
			$(this).addClass('active').siblings().removeClass();
			console.log($(this).index())
			that.imgs.eq($(this).index()).stop(true,true).fadeIn(666).siblings().stop(true,true).fadeOut(666);
		})
	}
	Slider.prototype.changeimg = function(){
		var that = this;
		this.timer = setInterval(function(){
				that.indx ++;
				that.indx%=6;
				that.menu.eq(that.indx).addClass('active').siblings().removeClass();
				that.imgs.eq(that.indx).stop(true,true).fadeIn(666).siblings().stop(true,true).fadeOut(666);
		},2000)
	}
	var slid = new Slider();
})