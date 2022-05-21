	
/*	if (typeof jQuery != 'undefined') {
	
	    alert("jQuery library IS loaded!");
	
	}else{
	
	    alert("jQuery library is NOT found!");
	
	};
*/
	/*animations */

		

		var fadeinamount = $(".window").height() * .5;
		var menuHeight = $("#ipadMenu").height() ;
		var windowWidth = $(window).width();

		
		
		//$(".device").hide();
 		$(".problemHide").hide();
 		
 		//alert($(window).width());
		

	
	function bottom() {
	    document.getElementById( 'bottom' ).scrollIntoView();
	    window.setTimeout( function () { top(); }, 1 );
	};
	
	
	$(window).on('resize', function(){
    	$(".window").css("height", $(window).height());
	});
		
	$(".window").css("height", $(window).height());

		
	if($(window).width() <= 1196){
		$(".h1").css("margin-top", -200);
	}	
	
		
	$(".teachers").click(function() {
		/*$("html" ).toggleClass('htmlBlack');
		$("html" ).toggleClass('htmlbody');*/
		$(".CTA" ).toggleClass("CTAwhite");
		$(".window").toggleClass('windowWhite');
		$(".lineBlue").fadeToggle();
		$(".CTAp").toggleClass('CTApBlue'); 
		$(".teachers").toggleClass('teachersBlue');
		$(".teachersP").toggleClass('TeachermarginLeft');
		$(".header").toggleClass('headerPic');
		$(".htmlbody").toggleClass('htmlbodyWhite');
		$(".h1").toggleClass('h1Blue');
		
		
		
		
		$("#lineBlue").toggleClass('lineWhite');
		
		  
		if ($(".teachersP").html() == "Teachers"){
			
			$(".teachersP").html("Public");
			
		}

		else{
			
			$(".teachersP").html("Teachers");
		}
		
		

	});
	
	$(".line").css("width", $(window).width()-300);
	

	
	$(window).on('resize', function(){
    	$(".line").css("width", $(window).width()-300);
	});

	
		
	$(".window").css("height", $(window).height());
	
	$(".wide").css("width", $(window).width()-300);
	
	
	$(".appleRestart").click(function(){
		
		$("#appleTitle").html("Apple");
		$(".ipadWords").html("iPad");
		$(".ipadWords").css("width", 43);
		$(".problemHide").hide();
	});


		

	
	
	
	$(".ipadBox").click(function(){
		$("#appleTitle").html("iPad");
		$(".ipadWords").html("Continuity");
		
		if($(".ipadWords").html() == "Continuity"){
			$(".ipadWords").css("width", 83);
			
			$(".ipadBox").click(function(){
				$(".ipadWords").html("Cellular Calls");
				$(".ipadWords").css("width", 123);
				
				$(".ipadBox").click(function(){
					$(".problemHide").show();
					$("#AutoUnlock").hide();
					$("#ipadHotspot").hide();
					//$("#devicesContainer").hide();
					$(".h1").hide();
					
				});
				
			});
			
		} else{
			$(".ipadWords").css("width", 43);
		}
	});
	
	
	$("#ipadContinuity").click(function(){
		$("#appleTitle").html("Continuity");
	});
	
	$(".CTA").click( function(){
		$('html, body').animate({
        scrollTop: $(".lineBlue").offset().top + 70
    });
		
	});
	
	
		
	
	



	
	

	
	


		
		


	


 



 	/* Mobile and small devices */

	var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	};
	
		if( isMobile.any() ){
	
			$("#iflogo").show();
		}
	
	 
	$( document ).ready(function(){
    	if ( $(window).height() < 500) {
			$("#Login").css("top", "-8px");
			$("#iflogo").css("bottom", "100px");
			$("#iflogo").css("height", "95px");
			$("#iflogo").css("width", "200px");
	    } else{
		    $("#iflogo").css("bottom", "200px");
	    }
	});
	
	$("#iPad").css("width", $("#ipadSphere").width());
	
	
	
	
	/* real code */
		
		


  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-90472212-1', 'auto');
  ga('send', 'pageview');







	

		



		

		



		
 
		