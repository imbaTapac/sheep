'use strict';

function accountTabs() {
	var adsContent = $('.js-account-tab');

	$(adsContent).each(function () {
		$(this).find('.js-account-tab__link').first().addClass('is-active');

		$(this).find('.js-account-tab__content').first().addClass('is-active').fadeIn(300);
	});

	$('.js-account-tab__link').on('click', function () {
		var self = $(this);

		$(this).addClass('is-active').siblings().removeClass('is-active');

		$(this).closest('.js-account-tab').find('.js-account-tab__content').each(function () {
			if ($(this).data('account') == $(self).data('target-account')) {
				$(this).addClass('is-active').fadeIn(300).siblings('.js-account-tab__content').removeClass('is-active').hide();
			}
		});
	});
};

accountTabs();

function createAccoTabs() {
	var createAcc = $('.js-create-account');

	$(createAcc).each(function () {
		$(this).find('.js-create-acc-nav__link').first().addClass('is-active');

		$(this).find('.js-create-acc_content').first().addClass('is-active').fadeIn(300);
	});

	$('.js-create-acc-nav__link').on('click', function () {
		var self = $(this);

		$(this).addClass('is-active').siblings().removeClass('is-active');

		$(this).closest('.js-create-account').find('.js-create-acc_content').each(function () {
			if ($(this).data('create-acc') == $(self).data('target-acc')) {
				$(this).addClass('is-active').fadeIn(300).siblings('.js-create-acc_content').removeClass('is-active').hide();
			}
		});
	});
};

createAccoTabs();