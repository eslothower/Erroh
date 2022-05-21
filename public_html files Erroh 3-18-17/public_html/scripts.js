 $(document).ready(function(){
 	$(".ipadSolutions").hide();
 	$(".homeNavContainer").hide();
 	$(".sublistContinuity").hide();
 	$(".homeOverflow").hide();
 	//$(".creditsContents").hide();
 });
$(".window").css("height", $(window).height()*0.95);
$(".footer").css("height", $(window).height()*0.4);
$(".featuresWindow").css("height", $(window).height()*0.95);
$(".devicesWindow").css("height", $(window).height());
$(".navContainer").css("width", $(window).width()*0.85);
//$(".homeTechDevices").css("width", $(window).width()*0.65);
$(window).on('resize', function(){
    	$(".window").css("height", $(window).height()*0.95);
    	$(".navContainer").css("width", $(window).width()*0.85);
    	$(".devicesWindow").css("height", $(window).height());
    	$(".footer").css("height", $(window).height()*0.4);
});

$(".CTA").click(function(){
	
	$('html, body').animate({
	    scrollTop: $(".featuresWindow").offset().top*0.98
	});
	
});

$(".navH").click(function(){
	
	$('html, body').animate({
	    scrollTop: $(".homeTech").offset().top
	});
	
});

$(".navS").click(function(){
	
	$('html, body').animate({
	    scrollTop: $(".schoolTech").offset().top
	});
	
});

$(".navB").click(function(){
	
	$('html, body').animate({
	    scrollTop: $(".businessTech").offset().top
	});
	
});

$(".homeDevice").click(function(){
	
	$('html, body').animate({
	    scrollTop: $(".homeTech").offset().top
	});
	
});


// animations 

 

$(document).ready(function(){
	
	$('.load-animate1').css({'display':'block', 'opacity':'0'}).animate({'opacity':'1','bottom':'20px'}, 700);
	$('.load-animate2').delay(200).css({'display':'block', 'opacity':'0'}).animate({'opacity':'1','bottom':'20px'}, 700);
	$('.load-animate3').delay(400).css({'display':'block', 'opacity':'0'}).animate({'opacity':'1','bottom':'20px'}, 700);
	
	$('.nav-load-animate').css({'display':'block', 'opacity':'0'}).animate({'opacity':'1','top':'10px'}, 1000);
	
	
	
	
	
	setTimeout(function(){ 
		$('.CTA').addClass("CTAafter"); 
	}, 1100);
	
	
	
/*
	var targetOffset = $(".featuresWindow").offset().top - 100;

	var $w = $(window).scroll(function(){
    if ( $w.scrollTop() > targetOffset ) {   
            } 

});*/
		
});

$(".ipadContinuityli").mouseover(function(){
	
	$(".sublistContinuity").show();
	$(".homeOverflow").css("height", 110);
});

$(".ipadContinuityli").mouseout(function(){
	
	$(".sublistContinuity").hide();
	$(".homeOverflow").css("height", 80);
});



$(".ipad").click(function(){
	
 	$(".homeTechDevices").fadeOut();
 	$(".homeTechh1").html("iPad");
 	$(".homeOverflow").show();
 	$(".homeOverflow").css("height", $(window).height()*2.03);
 	
 	
 	
 	setTimeout(function(){ 
		
		
		$(".homeNavContainer").fadeIn();
		$(".ipadSolutions").fadeIn();
		$(".homeTechh1").css("float", "left");
	}, 600);
	
	
});

$(".ipadContinuity").click(function(){
	
	$(".ipadCall").fadeIn();
	$(".sublistContinuity").fadeIn();
	$(".ipadCall").css("bottom", 500);
	
	//$('.sublistContinuityli').delay(500).animate({'top':'200px'}, 700); 
});



$(".ipadBack").click(function(){
	$(".homeTechh1").css("float", "none");
	
 	$(".homeTechh1").html("Home");
 	$(".homeNavContainer").fadeOut();
	$(".ipadSolutions").fadeOut();
	$(".homeOverflow").css("height", 80);
	
	setTimeout(function(){ 
		$(".homeTechDevices").fadeIn();
	}, 600);
	
	//$('.sublistContinuityli').delay(500).animate({'top':'200px'}, 700); 
});

$(".HomeNavContent").click(function(){
	$('html, body').animate({
	    scrollTop: $(".homeTech").offset().top
	});
	
	//$('.sublistContinuityli').delay(500).animate({'top':'200px'}, 700); 
});

/*$(window).scroll(function() {
    if ($(this).scrollTop() === 100) { // this refers to window
        $(".navbar").css("background-color", "white")
    }
});*/

//alert($(".teachersExplain").height()*0.5);





	
