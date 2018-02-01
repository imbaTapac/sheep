"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

$(".js-popup-link").click(function (e, name) {
    e.preventDefault();
    var $this = $(this),

    // for open from slider
    slideIndex = +$this.attr("data-slide-index");

    openPopup($this, slideIndex);
});

// remove in production
$(".js-remove-in-back-end").click(function (e, name) {
    e.preventDefault();
    openPopup("js-popup-select-method");
});

function openPopup(temp, slideIndex) {

    var locWindowWidth = $(document).width(),
        $popupOpen;

    if ((typeof temp === "undefined" ? "undefined" : _typeof(temp)) == "object") {
        var $linkObj = temp,
            dataPopupOpen = $linkObj.attr("data-popup-open"),
            $parentPopup = $linkObj.parents(".js-popup");

        $popupOpen = $(".js-popup[data-popup = " + dataPopupOpen + "]");
    } else {
        $popupOpen = $(".js-popup." + temp + "");
    };

    //mobile close dropdownmenu
    if (locWindowWidth < 992) {
        $(".js-nav-respons").slideUp(50);
    };

    // if open popup from other popup
    if ($parentPopup) {
        $parentPopup.fadeOut(50);
        //$parentPopup.find(".js-field-wrap-validate").removeClass("field-error field-error--sign");
    };

    if (locWindowWidth >= 992) {
        $popupOpen.fadeIn(150).addClass("popup-is-open");
        $("body").addClass("is-hidden");
    } else {
        if ($popupOpen.hasClass("js-popup-gallery")) {} else {
            $popupOpen.fadeIn(150).addClass("popup-is-open");
            $("body").addClass("is-hidden");
        }
    }

    // if popup has gallery
    if ($popupOpen.hasClass("js-popup-gallery") && locWindowWidth >= 992) {
        var mainSlider = $popupOpen.find(".js-popup-main-slider"),
            tumbSlider = $popupOpen.find(".js-popup-tumb-slider");

        if (mainSlider.hasClass("slick-initialized") && tumbSlider.hasClass("slick-initialized")) {
            return;
        } else {
            mainSlider.slick({
                prevArrow: "<div class='slick-prev-custom slick-arrow-custom'>Previous</div>",
                nextArrow: "<div class='slick-next-custom slick-arrow-custom'>Previous</div>",
                asNavFor: tumbSlider

            });
            tumbSlider.slick({
                arrows: false,
                asNavFor: mainSlider,
                slidesToShow: 4,
                slidesToScroll: 1,
                focusOnSelect: true,
                centerMode: true,
                variableWidth: true
            });
        };
        //slide to 
        mainSlider.slick('slickGoTo', slideIndex);
        tumbSlider.slick('slickGoTo', slideIndex);
    }
};
// class open  
//openPopup("js-popup-gallery, slideIndex")


$(".js-popup").on("click", function () {
    var $this = $(this),
        locWidth = $(document).width();
    $this.removeClass("popup-is-open");
    $this.fadeOut(150);
    $("body").removeClass("is-hidden");
    //$this.find(".js-field-wrap-validate").removeClass("field-error field-error--sign");


    // if popup gallery
    if ($this.hasClass("js-popup-gallery") && locWidth >= 992) {
        //console.log(222)
        var mainSlider = $this.find(".js-popup-main-slider"),
            tumbSlider = $this.find(".js-popup-tumb-slider");
        mainSlider.slick("unslick");
        tumbSlider.slick("unslick");
    }
});

$(".js-btn-close").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".js-popup").trigger("click");
});