'use strict';

function adsTabs() {
	var adsContent = $('.js-adst-tab');

	$(adsContent).each(function () {
		$(this).find('.js-adst-tab__link').first().addClass('is-active');

		$(this).find('.js-adst-tab__content').first().addClass('is-active').fadeIn(300);
	});

	$('.js-adst-tab__link').on('click', function () {
		var self = $(this);

		$(this).addClass('is-active').siblings().removeClass('is-active');

		$(this).closest('.js-adst-tab').find('.js-adst-tab__content').each(function () {
			if ($(this).data('content') == $(self).data('target-content')) {
				$(this).addClass('is-active').fadeIn(300).siblings('.js-adst-tab__content').removeClass('is-active').hide();
			}
		});
	});
};

adsTabs();

$('.js-adstnav__link-create').on("click", function () {
	$('.adstnav_hide').hide();
	$('.title-adm_hide').hide();
});