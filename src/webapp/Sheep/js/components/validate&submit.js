'use strict';

$('form').bind("keypress", function (e) {
    if (e.keyCode == 13) {
        e.preventDefault();
        return false;
    }
});

$('form').submit(function (e) {
    e.preventDefault();
    console.log("form submit");
    var $thisForm = $(this),
        $fields = $thisForm.find(".js-field-validate"),
        $inlineValue = $thisForm.find(".js-inline-value"),
        formStatus = 1,
        fieldStatus = 1;
    //$select = $this.find()

    $fields.parents(".js-field-wrap-validate").removeClass("field-error field-error--sign");

    $fields.each(function () {
        var $this = $(this);
        validateField($this);
    });

    if (fieldStatus == 0) {
        formStatus = 0;
    };
    if (formStatus == 1) {
        console.log("form status ok");
        // popup forms
        if ($thisForm.attr("data-success-close") == "true") {
            $thisForm.parents(".js-popup").fadeOut(300);
            $("body").removeClass("is-hidden");
        }
        $.ajax({
            url: 'send.php',
            type: 'GET',
            data: $(this).serialize(),
            success: function success() {

                $thisForm.trigger("reset");
                $inlineValue.trigger("click");
            }
        });
    } else {

        //  scroll error
        if ($thisForm.attr("data-scroll-error") == "true") {
            $('html, body').animate({

                scrollTop: $thisForm.find(".js-field-wrap-validate.field-error").first().offset().top - 30
            }, 300);
        } else {}
    };

    function validateField(field) {
        var val = field.val(),
            $field = field,
            dataValidate = field.attr("data-validate");
        switch (dataValidate) {
            case "general-field":
                if (!isValidGeneral(val)) checkErrorDefault(field);
                break;
            case "upload-field":
                var $uploadFields = $field.parents(".js-upload-block").find(".js-upload-input"),
                    uploadValidate = 0;
                $uploadFields.each(function () {
                    if ($(this).hasClass("js-valid-loaded")) {
                        uploadValidate = 1;
                    }
                });
                if (uploadValidate == 0) {
                    checkErrorDefault(field);
                } else {
                    removeErrorDefault(field);
                }

                break;
            case "select-field":
                if (val == "hide") {
                    checkErrorSelect(field);
                }
                break;

            case "popup-pass-field":
                if (!isValidGeneral(val)) checkErrorPopup(field);
                break;
            case "popup-email-field":
                if (!isValidEmail(val)) checkErrorPopup(field);
                break;
            case "popup-user-field":
                if (!isValidGeneral(val)) checkErrorPopup(field);
                break;
            case "popup-confirm-pass-field":
                var passValue = $thisForm.find(".js-field-validate[data-validate =" + 'popup-pass-field' + "]").val();
                if (!isValidGeneral(val) || val != passValue) checkErrorPopup(field);
                break;
            default:
                ;
        };
        //switch

        function checkErrorDefault(field) {
            //setTimeout(function(){},150);
            field.parents(".js-field-wrap-validate").addClass('field-error');
            field.val("");
            fieldStatus = 0;
        };

        function checkErrorPopup(field) {
            field.parents(".js-field-wrap-validate").addClass('field-error field-error--sign');
            field.val("");
            fieldStatus = 0;
        };

        function checkErrorSelect(field) {
            field.parents(".js-field-wrap-validate").addClass('field-error');
            fieldStatus = 0;
        };

        //function checkConfirmPass(field) {
        //    var passValue = $thisForm.find(".js-field-validate[data-validate =" + 'popup-pass-field' +"]").val();
        //    console.log(passValue)
        //    //if(passValue != val){
        //    //    field.parents(".js-field-wrap-validate").addClass('field-error')
        //    //    fieldStatus = 0;
        //    //}
        //};

        function removeErrorDefault(field) {
            field.parents(".js-field-wrap-validate").removeClass('field-error');
        };
    };
});

function isValidGeneral(val) {
    if (val.length >= 2 && val != " ") return 1;
    return 0;
};

function isValidPhope(phone) {
    var regExp = new RegExp(/((8|\+7)[\- ]?)?(\(?\d{3,4}\)?[\- ]?)?[\d\- ]{5,10}/);
    return regExp.test(phone);
};

function isValidEmail(email) {
    var regExp = new RegExp(/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i);
    return regExp.test(email);
};