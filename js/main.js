$(document).ready(function () {
	$('a[href^="#"]').click(function () {//выбрать ссылки из меню
		var target = $(this).attr('href');//Сохраняем значение атрибута href
		$('html, body').animate({
			scrollTop: $(target).offset().top //вычесть высоту меню
		}, 500);//время анимации
		return false;
	});
});