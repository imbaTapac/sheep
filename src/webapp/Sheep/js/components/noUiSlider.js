"use strict";

if ($(".js-filter").hasClass("js-filter")) {
  var setSliderHandle = function setSliderHandle(i, value) {
    var r = [null, null];
    r[i] = value;
    priceSlider.noUiSlider.set(r);
  };

  // Listen to keydown events on the input field.


  var setSliderHandle = function setSliderHandle(i, value) {
    var r = [null, null];
    r[i] = value;
    dateSlider.noUiSlider.set(r);
  };

  // Listen to keydown events on the input field.


  var priceSlider = document.getElementById('priceSlider'),
      priceInputMin = document.getElementById('priceInputMin'),
      priceInputMax = document.getElementById('priceInputMax'),
      inputs = [priceInputMin, priceInputMax],
      dateSlider = document.getElementById('dateSlider'),
      dateInputMin = document.getElementById('dateInputMin'),
      dateInputMax = document.getElementById('dateInputMax'),
      dateinputs = [dateInputMin, dateInputMax];

  noUiSlider.create(priceSlider, {
    start: [100, 500],
    connect: true,
    range: {
      'min': [0],
      'max': [600]
    },
    format: wNumb({
      decimals: 0,
      thousand: ' '
    })
  });

  priceSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
  });

  inputs.forEach(function (input, handle) {

    input.addEventListener('change', function () {
      setSliderHandle(handle, this.value);
    });

    input.addEventListener('keydown', function (e) {

      var values = priceSlider.noUiSlider.get();
      var value = Number(values[handle]);

      // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
      var steps = priceSlider.noUiSlider.steps();

      // [down, up]
      var step = steps[handle];

      var position;

      // 13 is enter,
      // 38 is key up,
      // 40 is key down.
      switch (e.which) {

        case 13:
          setSliderHandle(handle, this.value);
          break;

        case 38:

          // Get step to go increase slider value (up)
          position = step[1];

          // false = no step is set
          if (position === false) {
            position = 1;
          }

          // null = edge of slider
          if (position !== null) {
            setSliderHandle(handle, value + position);
          }

          break;

        case 40:

          position = step[0];

          if (position === false) {
            position = 1;
          }

          if (position !== null) {
            setSliderHandle(handle, value - position);
          }

          break;
      }
    });
  });

  // date slider 

  noUiSlider.create(dateSlider, {
    start: [2, 10],
    connect: true,
    range: {
      'min': [0],
      'max': [12]
    },
    format: wNumb({
      decimals: 0,
      thousand: ' '
    })
  });

  dateSlider.noUiSlider.on('update', function (values, handle) {
    dateinputs[handle].value = values[handle];
  });

  dateinputs.forEach(function (input, handle) {

    input.addEventListener('change', function () {
      setSliderHandle(handle, this.value);
    });

    input.addEventListener('keydown', function (e) {

      var values = dateSlider.noUiSlider.get();
      var value = Number(values[handle]);

      // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
      var steps = dateSlider.noUiSlider.steps();

      // [down, up]
      var step = steps[handle];

      var position;

      // 13 is enter,
      // 38 is key up,
      // 40 is key down.
      switch (e.which) {

        case 13:
          setSliderHandle(handle, this.value);
          break;

        case 38:

          // Get step to go increase slider value (up)
          position = step[1];

          // false = no step is set
          if (position === false) {
            position = 1;
          }

          // null = edge of slider
          if (position !== null) {
            setSliderHandle(handle, value + position);
          }

          break;

        case 40:

          position = step[0];

          if (position === false) {
            position = 1;
          }

          if (position !== null) {
            setSliderHandle(handle, value - position);
          }

          break;
      }
    });
  });
};