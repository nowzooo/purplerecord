$(document).ready(function(){
    $('nav .gnb>li').hover(function(){
        $(this).find('ul').stop().animate({width:'toggle'},800);
    },function(){
        $(this).find('ul').stop().animate({width:'toggle'},800);
    });

    var swiper = new Swiper('.swiper', {
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        }
    });

    let num = 0;
	let imageName = ["heart-regular", "heart-solid"];
	$(".heart").click(function() {
		if(num == 1) num=0;
		else 	     num++;	
		$(this).attr("src","./img/"+ imageName[num]+".svg");
	});
 

    $('.event ul>li>a').on("click",function(){
        const num = $(".event ul>li>a").index($(this));
        $('.event ul li').removeClass('on');
        $('.e_img').removeClass('on');

        $('.event ul li:eq(' + num + ')').addClass('on');
        $('.e_img:eq(' + num + ')').addClass('on');
    });

});