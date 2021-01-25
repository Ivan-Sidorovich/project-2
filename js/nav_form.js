let slider = document.querySelectorAll('.form-nav')

closeDiv = function () {
    if (this.visible) {
        this.parentNode.style.height = '72px';
        this.visible = false;
        console.log(this);
    } else {
        this.visible = true;
        this.parentNode.style.height = '492px';
    }
}
slider.forEach(one => {
    let checkbox = one.querySelectorAll('.checkbox__div')
    checkbox[0].visible = false;
    checkbox[0].addEventListener("click", closeDiv);
})