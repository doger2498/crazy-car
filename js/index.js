$('#dowebok').fullpage({
//	sectionsColor: ['#1bbc9b', '#4BBFC3', '#7BAABE', '#f90' , 'red'],
//	anchors: ['page1', 'page2', 'page3', 'page4' , 'page5'],
//	menu: '#menu',
//	continuousVertical: true
	
//	'verticalCentered': false,//内容是否垂直居中
//	'animateAnchor':true,
    'css3': true,
    'sectionsColor': ['#254875', '#00FF00', '#254587', '#695684'],//定义背景颜色
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],//定义锚链接
//  'navigation': true,/*项目导航演示：continuousVertical设置为true  显示右侧点点 false 不显示*/
	'menu': '#menu,#lanmu',/*绑定菜单：添加菜单项*/
//	'fixedElements': '#foot',/*绑定菜单：添加菜单项*/
	'continuousVertical': true,
	 afterLoad: function(anchorLink, index){
	 	//滚动到某一屏后的回调函数.接收 anchorLink 和 index 两个参数，anchorLink 是锚链接的名称，index 是序号，从1开始计算
//		if(index == 1){
////			alert(1)
//			$('.content_first').delay(0).animate({rotate: '360'}, 3000, 'easeInOutElastic');
//		}
		$('.footer').animate({right: '0'}, 1000, 'easeOutExpo');
	},
	onLeave: function(index, direction){
		//滚动前的回调函数，接收 index、nextIndex 和 direction 3个参数：index 是离开的“页面”的序号，从1开始计算；
//		if(index == '1'){
//			$('.content_first').delay(0).animate({rotate: '360'}, 3000, 'easeInOutElastic');
//		}
		$('.footer').animate({right: '-120%'}, 1000, 'easeInOutQuart');
	}
});

var on = true;

$('.my_tip').bind('click',function(){
	if(!on){
		$(".top_nav").css('display','none')
		$(".nav").css('width','235px');
		$(".my_tip").css('transform','translate(-50%,-50%) rotate(180deg)')
		on = true;
	}else{
		$(".top_nav").css('display','block')
		$(".nav").css('width','800px');
		$(".my_tip").css('transform','translate(-50%,-50%) rotate(0)')
		on = false;
	}
})
