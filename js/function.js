const $footer = $('footer>div>a');
const $container = $('section>.article-container');

$footer.on('click', function (evt) {
	evt.preventDefault();

	const nowIdx = $footer.index(this);

	$container({ left: -480 * nowIdx });

	$footer.eq(nowIdx).parent().addClass('on').siblings().removeClass('on');
});
