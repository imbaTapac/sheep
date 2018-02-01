"use strict";

// $(".js-specific-check").on("click", function(){
// 	var specificBlock = $(this).data("block");
// 	if($(this).is(":checked")) {
// 		$("."+specificBlock).show(200);
// 	}
// 	else { 
// 		$("."+specificBlock).hide(200);
// 	}
// })

$("[name='type-gender']").on("click", function () {
	if ($(this).hasClass("js-specific-check")) {
		$(".js-specific-gender-data").show(200);
	} else {
		$(".js-specific-gender-data").hide(200);
	}
});

$("[name='type-age']").on("click", function () {
	if ($(this).hasClass("js-specific-check")) {
		$(".js-specific-age-data").show(200);
	} else {
		$(".js-specific-age-data").hide(200);
	}
});

$("[name='type-income']").on("click", function () {
	if ($(this).hasClass("js-specific-check")) {
		$(".js-specific-income-data").show(200);
	} else {
		$(".js-specific-income-data").hide(200);
	}
});

$(".specific-location .js-specific-check").on("click", function () {
	if ($(this).is(':checked')) {
		$(".js-specific-location-data").show(200);
	} else {
		$(".js-specific-location-data").hide(200);
	}
});

$(".js-location-place, .js-location-add").on("click", function () {
	$(".specific-location .js-specific-check").prop("checked", false);
	$(".js-specific-location-data").hide(200);
});

$(".specific-title .js-specific-check").on("click", function () {
	if ($(this).is(':checked')) {
		$(".js-specific-title-data").show(200);
	} else {
		$(".js-specific-title-data").hide(200);
	}
});