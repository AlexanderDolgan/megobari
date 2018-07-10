$(document).ready(function(){
	
	$('.nav-open-btn').on('click', function() {
		$('body').toggleClass('no-scroll');
		$('.nav-mob').toggleClass('active-nav');
	});

	$(document).keyup(function(e) {     
    if(e.keyCode== 27) {
			$('body').removeClass('no-scroll');
			$('.nav-mob').removeClass('active-nav');
    } 
	});

	$("body").click(function(e) {
		if(e.target.id !== 'nav-open-btn'){
			$('.nav-mob').removeClass('active-nav');
		}      
	});

	$('.close-btn').on('click', function() {
		$('body').removeClass('no-scroll');
		$('.nav-mob').removeClass('active-nav');
	});

	$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
		console.log(scroll);
    if (scroll > 0) {
			$('.nav-screen').css('background-color', 'white');
			$('.nav-screen ul li a').css('color', '#292929');
    } else {
			$('.nav-screen').css('background-color', 'transparent');
			$('.nav-screen ul li a').css('color', 'white');
		}
}); //missing );

});