function play(){smallLi.eq(iNow).addClass("active").siblings("li").removeClass("active"),bigLi.fadeOut(),bigLi.eq(iNow).fadeIn(),smallPli.hide(),smallPli.eq(iNow).show()}var smallUl=$(".small-two"),smallLi=smallUl.find("li"),bigUl=$(".bigImage"),bigLi=bigUl.find("li"),playWrap=$(".palyWrap"),smallP=$(".small-one"),smallPli=smallP.find("li"),timer=null,iNow=0;smallLi.click(function(){clearInterval(timer),iNow=$(this).index(),$(this).addClass("active").siblings("li").removeClass("active"),bigLi.fadeOut(),bigLi.eq(iNow).fadeIn(),smallPli.hide(),smallPli.eq(iNow).show()}),timer=setInterval(function(){5==++iNow&&(iNow=0),smallLi.eq(iNow).addClass("active").siblings("li").removeClass("active"),bigLi.fadeOut(),bigLi.eq(iNow).fadeIn(),smallPli.hide(),smallPli.eq(iNow).show()},2e3),playWrap.hover(function(){$(this).find("a").show()},function(){$(this).find("a").hide()}),$(".prev").click(function(){clearInterval(timer),0==--iNow&&(iNow=4),play()}),$(".next").click(function(){clearInterval(timer),5==++iNow&&(iNow=0),play()});var $qihuan=$(".qiehuan"),$qia=$qihuan.find("a"),$con=$(".con-5"),$conLi=$con.find("li"),$index=0;$qia.mouseenter(function(){$index=$(this).index(),$conLi.hide(),$conLi.eq($index).show()});var mySwiper=new Swiper(".swiper-container",{direction:"horizontal",loop:!0,autoplay:2e3});