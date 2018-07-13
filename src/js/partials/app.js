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
    if (scroll > 0) {
			$('.nav-screen').css('background-color', 'white');
			$('.nav-screen ul li a').css('color', '#292929');
    } else {
			$('.nav-screen').css('background-color', 'transparent');
			$('.nav-screen ul li a').css('color', 'white');
		}
}); //missing );

});

// Yandex Map
ymaps.ready(init);

function init() {

    ////YandexApi map
    var megobariMap = new ymaps.Map("map", {
            center: [55.757921, 37.636778], //megobari hostel
            zoom: 17,

            //убрать кнопки управления
            controls: ['zoomControl']
        }),


        // Создаем геообъект с типом геометрии "Круг".
        megobariPlacemark = new ymaps.GeoObject({
            // Описание геометрии
            geometry: {
                type: "Point",
                coordinates: [55.757921, 37.636778]
            }
        });

    megobariMap.geoObjects.add(megobariPlacemark);


// отключается zoom при прокрутке страницы
    megobariMap.behaviors.disable('scrollZoom');
    megobariMap.behaviors.disable('drag');
}