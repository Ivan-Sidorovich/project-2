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
})

export default {
    slider,
    closeDiv,
    result
}