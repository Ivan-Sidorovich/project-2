let call = setTimeout(init2slider('range', 'range__between', 'range__button_1', 'range__button_2', 'range_inpt1', 'range_inpt2'), 0);

function init2slider(id, bt, bt1, bt2, input1, input2) {
  let slider = document.getElementById(id);
  let between = document.getElementById(bt);
  let button1 = document.getElementById(bt1);
  let button2 = document.getElementById(bt2);
  let inpt1 = document.getElementById(input1);
  let inpt2 = document.getElementById(input2);

  let min = inpt1.min;
  let max = inpt1.max;

  button1.style.marginLeft = '20px';
  button2.style.marginLeft = (slider.offsetWidth - button1.offsetWidth) + 'px';
  between.style.width = (slider.offsetWidth - (button1.offsetWidth + 20)) + 'px';
  between.style.marginLeft = 20 + 'px';
  inpt1.value = 56;
  inpt2.value = max;

  inpt1.onchange = function () {
    if (parseInt(inpt1.value) < min)
      inpt1.value = min;
    if (parseInt(inpt1.value) > max)
      inpt1.value = max;
    if (parseInt(inpt1.value) > parseInt(inpt2.value)) {
      var temp = inpt1.value;
      inpt1.value = inpt2.value;
      inpt2.value = temp;
    }

    let per1 = parseInt(inpt1.value - min) * 100 / (max - min);
    let per2 = parseInt(inpt2.value - min) * 100 / (max - min);
    let left1 = per1 * (slider.offsetWidth - button1.offsetWidth) / 100;
    let left2 = per2 * (slider.offsetWidth - button1.offsetWidth) / 100;

    button1.style.marginLeft = left1 + 'px';
    button2.style.marginLeft = left2 + 'px';

    if (left1 > left2) {
      between.style.width = (left1 - left2) + 'px';
      between.style.marginLeft = left2 + 'px';
    } else {
      between.style.width = (left2 - left1) + 'px';
      between.style.marginLeft = left1 + 'px';
    }
  }
  inpt2.onchange = function () {
    if (parseInt(inpt2.value) < min)
      inpt2.value = min;
    if (parseInt(inpt2.value) > max)
      inpt2.value = max;
    if (parseInt(inpt1.value) > parseInt(inpt2.value)) {
      var temp = inpt1.value;
      inpt1.value = inpt2.value;
      inpt2.value = temp;
    }


    let per1 = parseInt(inpt1.value - min) * 100 / (max - min);
    let per2 = parseInt(inpt2.value - min) * 100 / (max - min);
    let left1 = per1 * (slider.offsetWidth - button1.offsetWidth) / 100;
    let left2 = per2 * (slider.offsetWidth - button1.offsetWidth) / 100;

    button1.style.marginLeft = left1 + 'px';
    button2.style.marginLeft = left2 + 'px';

    if (left1 > left2) {
      between.style.width = (left1 - left2) + 'px';
      between.style.marginLeft = left2 + 'px';
    } else {
      between.style.width = (left2 - left1) + 'px';
      between.style.marginLeft = left1 + 'px';
    }
  }

  /*mouse*/
  button1.onmousedown = function (evt) {
    let sliderCoords = getCoords(slider);
    let buttonCoords1 = getCoords(button1);
    let buttonCoords2 = getCoords(button2);
    let shiftX2 = evt.pageX - buttonCoords2.left;
    let shiftX1 = evt.pageX - buttonCoords1.left;

    document.onmousemove = function (evt) {
      let left1 = evt.pageX - shiftX1 - sliderCoords.left;
      let right1 = slider.offsetWidth - button1.offsetWidth;
      if (left1 < 0) left1 = 0;
      if (left1 > right1) left1 = right1;
      button1.style.marginLeft = left1 + 'px';


      shiftX2 = evt.pageX - buttonCoords2.left;
      let left2 = evt.pageX - shiftX2 - sliderCoords.left;
      let right2 = slider.offsetWidth - button2.offsetWidth;
      if (left2 < 0) left2 = 0;
      if (left2 > right2) left2 = right2;

      let per_min = 0;
      let per_max = 0;
      if (left1 > left2) {
        between.style.width = (left1 - left2) + 'px';
        between.style.marginLeft = left2 + 'px';

        per_min = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
        per_max = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
      } else {
        between.style.width = (left2 - left1) + 'px';
        between.style.marginLeft = left1 + 'px';

        per_min = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
        per_max = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
      }
      inpt1.value = (parseInt(min) + Math.round((max - min) * per_min / 100));
      inpt2.value = (parseInt(min) + Math.round((max - min) * per_max / 100));

    };
    document.onmouseup = function () {
      document.onmousemove = document.onmouseup = null;
    };
    return false;
  };

  button2.onmousedown = function (evt) {
    let sliderCoords = getCoords(slider);
    let buttonCoords1 = getCoords(button1);
    let buttonCoords2 = getCoords(button2);
    let shiftX2 = evt.pageX - buttonCoords2.left;
    let shiftX1 = evt.pageX - buttonCoords1.left;

    document.onmousemove = function (evt) {
      let left2 = evt.pageX - shiftX2 - sliderCoords.left;
      let right2 = slider.offsetWidth - button2.offsetWidth;
      if (left2 < 0) left2 = 0;
      if (left2 > right2) left2 = right2;
      button2.style.marginLeft = left2 + 'px';


      shiftX1 = evt.pageX - buttonCoords1.left;
      let left1 = evt.pageX - shiftX1 - sliderCoords.left;
      let right1 = slider.offsetWidth - button1.offsetWidth;
      if (left1 < 0) left1 = 0;
      if (left1 > right1) left1 = right1;

      let per_min = 0;
      let per_max = 0;

      if (left1 > left2) {
        between.style.width = (left1 - left2) + 'px';
        between.style.marginLeft = left2 + 'px';
        per_min = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
        per_max = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
      } else {
        between.style.width = (left2 - left1) + 'px';
        between.style.marginLeft = left1 + 'px';
        per_min = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
        per_max = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
      }
      inpt1.value = (parseInt(min) + Math.round((max - min) * per_min / 100));
      inpt2.value = (parseInt(min) + Math.round((max - min) * per_max / 100));

    };
    document.onmouseup = function () {
      document.onmousemove = document.onmouseup = null;
    };
    return false;
  };

  button1.ondragstart = function () {
    return false;
  };
  button2.ondragstart = function () {
    return false;
  };

  function getCoords(elem) {
    let box = elem.getBoundingClientRect();
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }

}

export default {
  init2slider,
  call

}