$(document).ready(function() {


var i;
for (i in document.images) {
    if (document.images[i].src) {
        var imgSrc = document.images[i].src;
        if (imgSrc.substr(imgSrc.length-4) === '.png' || imgSrc.substr(imgSrc.length-4) === '.PNG') {
            document.images[i].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='crop',src='" + imgSrc + "')";
        }
    }
}

	$('.cycle').cycle({ 
		fx:     'fade', 
		delay:  -5000 
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