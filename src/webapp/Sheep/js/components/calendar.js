"use strict";

function createMediumCalendar() {
    // field publication dates  calendar 
    var publicationDates,
        $inlineDatesContainer = $(".js-date-container1"),
        publicDatesTextarea = $(".js-publ-dates"),
        publicationDatepicker = $('#date_range');

    publicationDatepicker.datepicker({
        range: 'multiple',
        dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
        dateFormat: "M dd, yy",
        showOtherMonths: true,
        onSelect: function onSelect(dateText, inst, extensionRange) {
            // extensionRange - объект расширения
            publicationDates = extensionRange.datesText;
            publicationDates.sort();

            $('textarea.js-publ-dates').val(extensionRange.datesText.join(';'));
            $inlineDatesContainer.empty();
            for (var i = 0; i < publicationDates.length; i++) {
                $inlineDatesContainer.append("<div class='inline-value js-inline-value'>" + publicationDates[i] + "</div>");
            };
        }
    });
    // объект расширения (хранит состояние календаря)
    //var extensionRange = $('#date_range').datepicker('widget').data('datepickerExtensionRange');
    //if (extensionRange.datesText) $('[name=publ-dates]').val(extensionRange.datesText.join('\n'));

    // remove current day from datepicker select and date textarea
    var currentDay = publicationDatepicker.find("td.ui-datepicker-current-day");
    currentDay.trigger("click");

    $(".js-date-container1").on("click", ".js-inline-value", function () {

        var $this = $(this),
            value = $this.html(),
            deleteIndex = publicationDates.indexOf(value),
            publicDatesString;

        publicationDates.splice(deleteIndex, 1);
        publicDatesString = publicationDates.join(';');
        publicDatesTextarea.val(publicDatesString);

        publicationDatepicker.datepicker("setDate", publicationDates);
        $this.remove();
    });

    $(".js-calendar1").on("click", function (e) {
        e.stopPropagation();
        $(this).toggleClass("is-open");
    });
    //$(".js-dropbox-calendar1").on("click", function(e){
    //  e.stopPropagation();
    //});
    // field publication dates  calendar
};
createMediumCalendar();

function createSpacelCalendar(arr) {

    var disableDatesArr = arr;

    var $inlineDatesContainer = $(".js-spacel-dates-cont"),
        spacelPrice = $(".js-spacel-price").html(),
        totalCost = $(".js-scalendar-total-cost"),
        $spacelDatesTextarea = $(".js-spacel-dates-textarea"),
        monthLinks = $(".js-scalendar-month");

    $("#spacel-calendar").datepick({
        altField: '#spacel-alt',
        multiSelect: 999,
        dateFormat: 'M dd, yy',
        multiSeparator: ';',
        dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
        onDate: function onDate(date, inMonth) {
            if (inMonth) {
                for (var i = 0; i < disableDatesArr.length; i++) {
                    if (date.getMonth() + 1 == disableDatesArr[i][0] && date.getDate() == disableDatesArr[i][1]) {
                        return {
                            dateClass: 'disable',
                            selectable: false
                        };
                    }
                }
            }
            return {};
        },
        //onDate: function(date, inMonth){
        //    console.log($.datepick.daysInMonth(date))
        //    if (inMonth) { 
        //        //console.log(date.getFullYear());
        //        for (var i = 0; i < natDays.length; i++) { 
        //            if (date.getMonth() + 1 == natDays[i][0] && 
        //                date.getFullYear() == natDays[i][2] &&
        //                $.datepick.daysInMonth(date) == natDays[i][1]) { 
        //                console.log($.datepick.daysInMonth(date))
        //                return {
        //                    dateClass: 'disable', 
        //                    selectable: false
        //                }; 
        //            } 
        //        } 
        //    } 
        //    return {}; 
        //},
        onSelect: function onSelect(dates) {
            var selectedDatesArr = [],
                textareaStrValue = $spacelDatesTextarea.val();

            $inlineDatesContainer.empty();
            selectedDatesArr = textareaStrValue.split(';');
            selectedDatesArr.sort();
            // /console.log(selectedDatesArr.length);

            for (var i = 0; i < selectedDatesArr.length; i++) {
                $inlineDatesContainer.append("<span>" + selectedDatesArr[i] + ";</span> ");
            };

            if (selectedDatesArr == "") {
                $inlineDatesContainer.addClass("scalendar__hidden");
                totalCost.html("0");
            } else {
                $inlineDatesContainer.removeClass("scalendar__hidden");
                totalCost.html(selectedDatesArr.length * spacelPrice);
            }
        }

    });

    var date = new Date(),
        actualYear = date.getFullYear(),
        actualMonth = date.getMonth();

    monthLinks.eq(actualMonth).addClass("is-active");

    monthLinks.on("click", function (e) {
        e.preventDefault();
        var $thisLink = $(this),
            thisIndex = $thisLink.index() + 1,
            $selectMonth = $(".datepick-month-year");

        monthLinks.removeClass("is-active");
        $thisLink.addClass("is-active");

        //$selectMonth.find("option").removeAttr("selected");
        //$selectMonth.find("option").eq(thisIndex).attr("selected", "selected");
        //console.log($selectMonth.find("option").eq(thisIndex).val())

        //$("#spacel-calendar").datepick('changeMonth', +1)
        $("#spacel-calendar").datepick('showMonth', actualYear, thisIndex);
    });
};
createSpacelCalendar([[1, 26, 2017], [2, 6, 2017], [3, 17, 2017], [4, 27, 2017], [5, 25, 2017], [6, 6, 2017], [7, 4, 2017], [8, 17, 2017], [9, 7, 2017], [10, 1, 2017], [11, 22, 2017], [12, 12, 2018]]);

//var disableArr = ["May 24, 17", "May 25, 17", "May 26, 17"]; 


//function nationalDays(date, inMonth) { 
//
//    if (inMonth) { 
//        for (var i = 0; i < natDays.length; i++) { 
//            if (date.getMonth() + 1 == natDays[i][0] && 
//                date.getDate() == natDays[i][1]) { 
//                return {
//                    dateClass: 'disable', 
//                    selectable: false, 
//                    title: natDays[i][3]}; 
//                } 
//            } 
//        } 
//        return {}; 
//    };
//multidatespicker with disable dates
//function createSpacelCalendar() {
//    // field publication dates  calendar 
//    var publicationDates,
//    $inlineDatesContainer = $(".js-spacel-dates-cont"),
//    publicDatesTextarea = $(".js-spacel-dates"),
//    publicationDatepicker = $('#spacel-calendar'),
//    spacelPrice = $(".js-spacel-price").html(),
//    totalCost = $(".js-scalendar-total-cost"),
//    array  = ["MAY 23, 2017", "MAY 24, 2017", "MAY 25, 2017"];
//
//    publicationDatepicker.datepicker({
//        range: 'multiple',
//        dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
//        dateFormat: "M dd, yy",
//        showOtherMonths: false,
//        //onSelect: function(selectedDate, el){
//        //    //console.log(selectedDate, el)
//        //    //$(this).addClass("is-selected");
//        //}
//
//        //onSelect: function(dateText, inst, extensionRange) {
//        //    //console.log(inst)
//        //    // extensionRange - объект расширения
//        //    publicationDates = extensionRange.datesText;
//        //    publicationDates.sort();
//        //    $('textarea.js-spacel-dates').val(extensionRange.datesText.join(';'));
//        //    $inlineDatesContainer.empty();
//        //    for (var i = 0; i < publicationDates.length; i++) {
//        //        $inlineDatesContainer.append("<span>" + publicationDates[i] + ";</span> ")
//        //    };
//        //    // hide container if it empty
//        //    if (!$inlineDatesContainer.html() == "") {
//        //        $inlineDatesContainer.removeClass("scalendar__hidden");
//        //    } else {
//        //        $inlineDatesContainer.addClass("scalendar__hidden");
//        //    }
//        //    // show total cost
//        //    totalCost.html(publicationDates.length * spacelPrice);
//        //},
//       //beforeShowDay : function(input, inst){
//       //    console.log(inst);
//       //    return []
//       //}
//    });
//
//    var currentDay = publicationDatepicker.find("td.ui-datepicker-current-day");
//    //currentDay.trigger("click");
//    currentDay.removeAttr("data-event");
//
//};

//createSpacelCalendar();