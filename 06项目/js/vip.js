$(function(){
	$('#header .close').click(function(){
		$('#headertop').slideUp(666);
	});
	$('#warp-header .bird').mouseenter(function(){
		var index = 150;
		var that= this;
		$(this).css('border-color','orange')
		var timer = setInterval(function(){
			index +=50 ;
			if (index==250) {
				clearInterval(timer);
				index=250;
			}
			$(that).css('background-position',-index+'px 0px');
			console.log(index)
		},100)
	}).mouseleave(function(){
		$(this).css({
			'background-position':'-100px 0px',
			'border-color':'transparent'
		});
	});
	$('.yeartitle>li').on('click',function(){
		$(this).addClass('on').siblings().removeClass();
		$('.tab-area').eq($(this).index()).show().siblings().hide();
	})
	// 轮播图
	function Slide(imgs,leftbtn,rightbtn,numbox){
		this.imgs = imgs;
		this.leftbtn = leftbtn;
		this.rightbtn = rightbtn;
		this.numbox = numbox;
		this.index = 0;

	}
	Slide.prototype.changeIndex = function(){
		var that = this;
		this.leftbtn.on('click',function(){
			that.index--;
			that.changeImg(that.index);
		})
		this.rightbtn.on('click',function(){
			that.index++;
			that.index%=6;
			that.changeImg(that.index);
		})
		this.numbox.on('click',function(){
			that.index = $(this).index();
			that.changeImg(that.index);
		})
	}
	Slide.prototype.changeImg = function(index){
		if (index<0) {
			index=6
		}
		$(this.imgs).eq(index).fadeIn(333).siblings().fadeOut(333);
		$(this.numbox).eq(index).addClass('active').siblings().removeClass();
	}
	var slide = new Slide($('#imgbox>li'),$('#leftbtn'),$('#rightbtn'),$('#numbox li'));
	slide.changeIndex();
})