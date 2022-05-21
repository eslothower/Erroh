	/*if (typeof jQuery != 'undefined') {
	
	    alert("jQuery library IS loaded!");
	
	}else{
	
	    alert("jQuery library is NOT found!");
	
	};*/

	var i = 1;		
	for (i = 1; i < 39; i++) { 
		
		$('#w'+[i]).delay(1000).queue(function(){
		    $(this).removeClass("w");
		    $(this).addClass("final");
		    
		});    
		
	}
	

	
	$(window).resize(function() {
		if ( $(window).width() < 739 && $(window).height() < 739) {      
			alert("chicken");
		} 
	});
	

	
$('#hamburger').on('click', function(){
	
	
	/*if ($("#ham1").hasClass("x1")) {
	  $(this).removeClass("x1");
	} else if(!$("#ham1").hasClass("x1")){
		$(this).addClass("x1");
	}*/

	$("#ham1").queue(function(){
		$(this).addClass("x1");
	});

	$("#ham2").queue(function(){
		$(this).addClass("x2");
	});

	$("#ham3").queue(function(){
		$(this).addClass("x3");
	});	
 });
 


	
	/*$('.box').delay(2000).queue(function(){
		$(this).addClass("longbox");
		$(this).removeClass("box");

	});*/
	



	

		


		/*if ( $(window).width() < 739) {      
			window.location.href = "/Users/Eli/Desktop/My Websites/Ferror/Images/Night-sky.jpeg";
		} else{
			window.location.href = "/Users/Eli/Desktop/My Websites/Ferror/index.html";
			
		}*/
		

		



		
 
		