/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/nav.js":
/*!***********************!*\
  !*** ./src/js/nav.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let slider = document.querySelectorAll('.menu-item2');

function closeDiv() {
  if (this.visible) {
    this.parentNode.style.height = '60px';
    this.visible = false;
  } else {
    this.visible = true;
    this.parentNode.style.height = '455px';
  }
}

let result = slider.forEach(one => {
  let checkbox = one.querySelectorAll('.checkbox__product');
  checkbox[0].visible = false;
  checkbox[0].addEventListener("click", closeDiv);
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  slider,
  closeDiv,
  result
});

/***/ }),

/***/ "./src/js/range.js":
/*!*************************!*\
  !*** ./src/js/range.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  button2.style.marginLeft = slider.offsetWidth - button1.offsetWidth + 'px';
  between.style.width = slider.offsetWidth - (button1.offsetWidth + 20) + 'px';
  between.style.marginLeft = 20 + 'px';
  inpt1.value = 56;
  inpt2.value = max;

  inpt1.onchange = function () {
    if (parseInt(inpt1.value) < min) inpt1.value = min;
    if (parseInt(inpt1.value) > max) inpt1.value = max;

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
      between.style.width = left1 - left2 + 'px';
      between.style.marginLeft = left2 + 'px';
    } else {
      between.style.width = left2 - left1 + 'px';
      between.style.marginLeft = left1 + 'px';
    }
  };

  inpt2.onchange = function () {
    if (parseInt(inpt2.value) < min) inpt2.value = min;
    if (parseInt(inpt2.value) > max) inpt2.value = max;

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
      between.style.width = left1 - left2 + 'px';
      between.style.marginLeft = left2 + 'px';
    } else {
      between.style.width = left2 - left1 + 'px';
      between.style.marginLeft = left1 + 'px';
    }
  };
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
        between.style.width = left1 - left2 + 'px';
        between.style.marginLeft = left2 + 'px';
        per_min = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
        per_max = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
      } else {
        between.style.width = left2 - left1 + 'px';
        between.style.marginLeft = left1 + 'px';
        per_min = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
        per_max = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
      }

      inpt1.value = parseInt(min) + Math.round((max - min) * per_min / 100);
      inpt2.value = parseInt(min) + Math.round((max - min) * per_max / 100);
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
        between.style.width = left1 - left2 + 'px';
        between.style.marginLeft = left2 + 'px';
        per_min = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
        per_max = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
      } else {
        between.style.width = left2 - left1 + 'px';
        between.style.marginLeft = left1 + 'px';
        per_min = left1 * 100 / (slider.offsetWidth - button1.offsetWidth);
        per_max = left2 * 100 / (slider.offsetWidth - button1.offsetWidth);
      }

      inpt1.value = parseInt(min) + Math.round((max - min) * per_min / 100);
      inpt2.value = parseInt(min) + Math.round((max - min) * per_max / 100);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  init2slider,
  call
});

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.js */ "./src/js/nav.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range.js */ "./src/js/range.js");



class GoodsList {
  constructor() {
    this.cartArr = [], this.filteredGoods = [];
  }

  getStatsData(data) {
    fetch('statsData.', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    }).then(data => data.json());
  }

  addCart() {
    const now = new Date();
    fetch('addToCArt.', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(list.filteredGoods[this.id])
    }).then(data => data.json()).then(data => {
      data.time = now;
      list.getStatsData(data);
    });
    const $insh = this.querySelector('.insh');
    $insh.innerHTML = "&nbsp;Done";
  }

  fetchGoods() {
    fetch('data.').then(data => data.json()).then(data => {
      this.goods = data;
      this.filteredGoods = data;
      this.filteredGoods.map((thing, index) => {
        this.render(thing, index);
      });
    }).catch(data => console.log(data));
  }

  render(ob, id) {
    const $products__window = document.querySelector('.products__window');
    const $window = document.createElement('div');
    $window.classList.add("window");
    $products__window.append($window);
    const $window_shadow = document.createElement('div');
    $window_shadow.classList.add("window-shadow");
    $window.append($window_shadow);
    const $in_shadow = document.createElement('div');
    $in_shadow.classList.add("in-shadow");
    $in_shadow.id = id;
    $in_shadow.addEventListener('click', list.addCart);
    $window_shadow.append($in_shadow);
    const $img_in_shadow = document.createElement('img');
    $img_in_shadow.src = "img/Forma_1_copy.svg";
    $in_shadow.append($img_in_shadow);
    const $insh = document.createElement('p');
    $insh.classList.add("insh");
    $insh.innerHTML = "&nbsp;Add to Cart";
    $in_shadow.append($insh);
    const $window_photo = document.createElement('div');
    $window_photo.classList.add("window-photo");
    $window.append($window_photo);
    const $window_img = document.createElement('img');
    $window_img.classList.add("window-img");
    $window_img.src = `${ob.img_URl}`;
    $window_photo.append($window_img);
    const $window_text = document.createElement('div');
    $window_text.classList.add("window-text");
    $window.append($window_text);
    const $p_top = document.createElement('h3');
    $p_top.classList.add("p-top");
    $p_top.innerHTML = ob.name;
    $window_text.append($p_top);
    const $p_prise = document.createElement('p');
    $p_prise.classList.add("p-prise");
    $p_prise.innerHTML = ob.price;
    $window_text.append($p_prise);
  }

  filterGoods(value) {
    const $products__window = document.querySelector('.products__window');
    $products__window.innerHTML = '';
    const regexp = new RegExp(value, 'i');
    this.filteredGoods = this.goods.filter(good => regexp.test(good.name));

    if (this.filteredGoods.length === 0) {
      const $products__window = document.querySelector('.products__window');
      const $p = document.createElement('p');
      $p.innerHTML = 'Ничего не найдено';
      $products__window.append($p);
    } else {
      this.filteredGoods.map((thing, index) => {
        this.render(thing, index);
      });
    }
  }

}

const list = new GoodsList();
list.fetchGoods();
const searchButton = document.querySelector('.search__button');
const searchInput = document.querySelector('.search__input');
searchButton.addEventListener('click', e => {
  const value = searchInput.value;
  list.filterGoods(value);
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/script.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=product.build.js.map