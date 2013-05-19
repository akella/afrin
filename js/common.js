$(document).ready(function() {

function sam() {
	$(".drop").each(function(event) {
		rand = Math.floor((Math.random()*10000));
		var x = 2000; //timescale
		var v = 100; //v-scale
		$(this).animate({opacity: 1}, 300, 'linear');
		$(this).delay(rand).animate({top: '-=100', marginLeft: '-=60'}, 1.5*x, 'linear', function() {
			$(this).animate({top: '-=200', marginLeft: '+=120'}, 3*x, 'linear', function() {
				$(this).animate({top: '-=200', marginLeft: '-=120'}, 3*x, 'linear', function() {
					$(this).animate({top: '-=200', marginLeft: '+=120', opacity: 0}, 3*x, 'linear', function() {
						$(this).css("top", 800);
					});
				});
			});
		});
	});
}

sam();
setInterval(function(){
	sam()
}, 23000);


	$('.cycle').cycle({ 
		fx:     'fade', 
		delay:  -5000,
		cleartypeNoBg: true
	});

	// location dropdown list after yandex-map
	jQuery(".location li:has('ul')").toggle(
		function(){
			jQuery(this).children('ul').show();
			return false;
			jQuery(this).children('a').addClass('js-active');
		},
		function(){
			jQuery(this).children('ul').hide();
			return false;
		}
	);

	// primary navigation dropdown
	$('.js-dropdown > li').hover(
		function(){ $(this).addClass('is-open') },
		function(){ $(this).removeClass('is-open') }
	);

	// masonry
	$('#js-list').masonry({
		// указываем элемент-контейнер в котором расположены блоки для динамической верстки
		itemSelector: '.list__item',
		isFitWidth: true,
		// указываем класс элемента являющегося блоком в нашей сетке
		singleMode: false,
		// true - если у вас все блоки одинаковой ширины
		isResizable: true,
		// перестраивает блоки при изменении размеров окна
		isAnimated: true,
		// анимируем перестроение блоков
		animationOptions: {
			queue: false,
			duration: 500
		}
		// опции анимации - очередь и продолжительность анимации
	 });
});