const $indicator = $('footer a');
const $container = $('.article-container');

$indicator.on('click', function (evt) {
	evt.preventDefault();

	const nowIdx = $indicator.index(this);

	$container.animate({ left: -480 * nowIdx });

	$indicator.eq(nowIdx).parent().addClass('on');
	$indicator.eq(nowIdx).parent().siblings().removeClass('on');
});
