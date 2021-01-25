class GoodsList {

    constructor() {
        this.cartArr = []
    }

    addCart(id) {
        list.cartArr.push(list.filteredGoods[this.id]);
        console.log(list.cartArr);

        const $insh = this.querySelector('.insh');
        $insh.innerHTML = "&nbsp;Done"
        
    }

    fetchGoods() {
        fetch('https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json')
            .then(data => data.json())
            .then(data => {
                this.goods = [...data, ...data, ...data, ...data];
                this.filteredGoods = [...data, ...data, ...data, ...data];
                this.goods.map((thing, index) => {
                    this.render(thing, index)
                })

            })
            .catch(data => console.log(data))
    }

    render(ob, id) {
        const $products__window = document.querySelector('.products__window');


        const $window = document.createElement('div');
        $window.classList.add("window")
        $products__window.append($window)

        const $window_shadow = document.createElement('div');
        $window_shadow.classList.add("window-shadow")
        $window.append($window_shadow);

        const $in_shadow = document.createElement('div');
        $in_shadow.classList.add("in-shadow");
        $in_shadow.id = id;
        $window_shadow.append($in_shadow);


        const $img_in_shadow = document.createElement('img');
        $img_in_shadow.src = "img/Forma_1_copy.svg"
        $in_shadow.append($img_in_shadow);

        const $insh = document.createElement('p');
        $insh.classList.add("insh")
        $insh.innerHTML = "&nbsp;Add to Cart"
        $in_shadow.append($insh);


        const $window_photo = document.createElement('div');
        $window_photo.classList.add("window-photo")
        $window.append($window_photo)

        const $window_img = document.createElement('img');
        $window_img.classList.add("window-img")
        $window_img.src = "img/Layer_2.jpg"
        $window_photo.append($window_img);


        const $window_text = document.createElement('div');
        $window_text.classList.add("window-text")
        $window.append($window_text)

        const $p_top = document.createElement('h3');
        $p_top.classList.add("p-top")
        $p_top.innerHTML = ob.product_name;
        $window_text.append($p_top);

        const $p_prise = document.createElement('p');
        $p_prise.classList.add("p-prise")
        $p_prise.innerHTML = ob.price;
        $window_text.append($p_prise);

    }

    filterGoods(value) {
        const $products__window = document.querySelector('.products__window');
        $products__window.innerHTML = '';

        const regexp = new RegExp(value, 'i');
        this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
        if (this.filteredGoods.length === 0) {
            const $products__window = document.querySelector('.products__window');
            const $p = document.createElement('p');
            $p.innerHTML = 'Ничего не найдено';
            $products__window.append($p);
        } else {
            this.filteredGoods.map(thing => {
                this.render(thing)
            })
        }


    }
}

const list = new GoodsList();
list.fetchGoods();


const searchButton = document.querySelector('.search__button');
const searchInput = document.querySelector('.search__input')

searchButton.addEventListener('click', (e) => {
    const value = searchInput.value;
    list.filterGoods(value);
});

setTimeout(() => {
    const button__Cart = document.querySelectorAll('.in-shadow')
    button__Cart.forEach(element => {
        element.addEventListener('click', list.addCart);
    })

}, 1000);

let cart = document.querySelector('.cart')
cart.addEventListener('click', () => {
    let arr = list.cartArr;
    localStorage.setItem('goods', JSON.stringify(arr));

})