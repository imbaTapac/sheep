'use strict';

$('select.js-select-simple').each(function () {
    var $this = $(this),
        numberOfOptions = $(this).children('option').length,
        $styledSelect = $this.next('div.select-view').detach();

    $this.addClass('select-hidden');
    $this.wrap('<div class="select_wrapper"></div>');
    $this.after($styledSelect);

    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />');
    $list.addClass('select-options').insertAfter($styledSelect);
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.select-view.active').not(this).each(function () {
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle(300);
    });

    $listItems.click(function (e) {
        $styledSelect.removeClass("select_placeholder");
        $(this).addClass("active");
        $listItems.not(this).removeAttr("class");
        e.stopPropagation();
        $styledSelect.text($(this).text()).removeClass('active');
        $this.val($(this).attr('rel'));
        $list.hide();
    });

    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });
}); /*select.each*/

$('select.js-select-multiple').each(function () {
    var $this = $(this),
        $inlineValueContainer = $(this).parents(".js-multi-select-wrapper").find(".js-value-container"),
        $inlineValue = $inlineValueContainer.find(".js-inline-value"),
        numberOfOptions = $(this).children('option').length,
        $styledSelect = $this.next('div.select-view').detach();

    $this.attr("multiple", "");

    $this.addClass('select-hidden');
    $this.wrap('<div class="select_wrapper"></div>');
    //$this.after('<div class="select-view  select_placeholder"></div>');
    $this.after($styledSelect);

    // var $styledSelect = $this.next('div.select-view');
    $styledSelect.text($this.children('option').eq(0).text());

    var $list = $('<ul />');
    $list.addClass('select-options').insertAfter($styledSelect);
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $styledSelect.click(function (e) {
        e.stopPropagation();
        $('div.select-view.active').not(this).each(function () {
            $(this).removeClass('active').next('ul.select-options').hide();
        });
        $(this).toggleClass('active').next('ul.select-options').toggle(300);
    });

    $listItems.click(function (e) {
        e.stopPropagation();
        var rel = $(this).attr("rel"),
            optText = $(this).html();

        $styledSelect.removeClass("select_placeholder");
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            //console.log(optText);
            $this.find("option[value = " + rel + "]").attr("selected", false);
            $inlineValueContainer.find(".js-inline-value").each(function () {
                if ($(this).html() == optText) $(this).remove();
            });
        } else {
            $(this).addClass("active");
            $this.find("option[value = " + rel + "]").attr("selected", true);
            $inlineValueContainer.append("<div class='inline-value inline-value--small js-inline-value'>" + optText + "</div>");
        }
        //$list.hide();
    });

    $inlineValueContainer.on("click", ".js-inline-value", function () {
        var text = $(this).html();
        //$this.find("option").eq(deleteIndex).attr("selected", false);
        $listItems.each(function () {
            if ($(this).html() == text) $(this).removeClass("active");
        });
        $this.find("option").each(function () {
            if ($(this).html() == text) $(this).attr("selected", false);
        });

        $(this).remove();
    });

    $(document).click(function () {
        $styledSelect.removeClass('active');
        $list.hide();
    });
}); /*select.each*/