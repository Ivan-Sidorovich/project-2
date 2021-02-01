/******/ (() => { // webpackBootstrap
/*!****************************!*\
  !*** ./src/js/nav_form.js ***!
  \****************************/
let slider = document.querySelectorAll('.form-nav');

closeDiv = function () {
  if (this.visible) {
    this.parentNode.style.height = '72px';
    this.visible = false;
  } else {
    this.visible = true;
    this.parentNode.style.height = '492px';
  }
};

slider.forEach(one => {
  let checkbox = one.querySelectorAll('.checkbox__div');
  checkbox[0].visible = false;
  checkbox[0].addEventListener("click", closeDiv);
});
/******/ })()
;
//# sourceMappingURL=checkout.build.js.map