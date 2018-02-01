"use strict";

// multiple select
$(".js-multiple-container").each(function () {
    var $this = $(this),
        $inlineValueContainer = $this.next(".js-value-container"),
        valueInput = $this.find(".js-value-input"),
        visibleInput = $this.find(".js-field-visible"),
        addBtn = $this.find(".js-multiple-add-btn"),
        valueArr = [],
        strResult;

    addBtn.on("click", function () {
        var $this = $(this),
            tempValue = visibleInput.val();

        visibleInput.val("");
        $inlineValueContainer.empty();
        //console.log(tempValue)
        if (tempValue != " " && tempValue.length >= 3 && valueArr.indexOf(tempValue) === -1) {
            valueArr.push(tempValue);
        };
        //console.log(valueArr);
        for (var i = 0; i < valueArr.length; i++) {
            if ($inlineValueContainer.hasClass("js-value-container-small")) {
                $inlineValueContainer.append("<div class='inline-value inline-value--small js-inline-value'>" + valueArr[i] + "</div>");
            } else {
                $inlineValueContainer.append("<div class='inline-value js-inline-value'>" + valueArr[i] + "</div>");
            }
        };
        strResult = valueArr.join(";");
        valueInput.val("" + strResult + "");
    });

    visibleInput.keyup(function (e) {
        if (event.keyCode == 13) {
            e.preventDefault();
            addBtn.trigger("click");
            return false;
        }
    });

    $inlineValueContainer.on("click", ".js-inline-value", function () {
        var $this = $(this),
            inlineValue = $this.html(),
            deleteIndex = valueArr.indexOf(inlineValue);

        valueArr.splice(deleteIndex, 1);
        strResult = valueArr.join(';');
        valueInput.val(strResult);

        $this.remove();
    });
});
// multiple select