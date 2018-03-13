$(function(){
	function resize(){
		var screenwidth = $(window).width();
		var isSmall = screenwidth<768;
	 $("#main_ad>.carousel-inner>.item").each(function(index,item){
	    var imgSrc=$(item).data(isSmall?'img-xs':'img-lg');
		$(item).css('backgroundImage','url("'+imgSrc+'")');

	 });
	}
	$(window).on('resize',resize).trigger('resize');
	$(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
    var ulchild = $(".nav-tabs").children('li');
    var length=30;
    ulchild.each(function(index,item){
       length +=item.clientWidth 
    })
    if(length>$(window).width()){
       $(".nav-tabs")
        .css('width',length)
        .parent().css('overflow-x', 'scroll');
    }
   $("#news .nav-grace a").on("click",function(){
       $(".newstitle").text($(this).data('titile'));
   });
   //  先判断往左滑还有往右滑
  var $carousel = $(".carousel");
  var startX,endX,distance;
  var offset = 50;
  $carousel.on("touchstart",function(e){
       startX = e.originalEvent.touches[0].clientX;
  });
  $carousel.on("touchmove",function(e){
       endX = e.originalEvent.touches[0].clientX;
  });
  $carousel.on("touchend",function(e){
       distance =startX - endX;
       if(Math.abs(Math.abs(distance)>offset)){
          $(this).carousel(distance>0?'next':'prev');
       }
  })
});	
	

