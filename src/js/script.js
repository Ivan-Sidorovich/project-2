import navModule from './nav.js';
import rangeModule from './range.js';

class GoodsList {

    constructor() {
        this.cartArr = [],
            this.filteredGoods = []

    }

    getStatsData(data) {
        fetch('statsData.', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(data)
        }).then(data => data.json())
    }

    addCart() {
        const now = new Date();
        fetch('addToCArt.', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(list.filteredGoods[this.id])
            }).then(data => data.json())
            .then(data => {
                data.time = now;
                list.getStatsData(data);
            });
        const $insh = this.querySelector('.insh');
        $insh.innerHTML = "&nbsp;Done";

    }

    fetchGoods() {
        fetch('data.')
            .then(data => data.json())
            .then(data => {
                this.goods = data;
                this.filteredGoods = data;
                this.filteredGoods.map((thing, index) => {
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
        $in_shadow.addEventListener('click', list.addCart);
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
        $window_img.src = `${ob.img_URl}`
        $window_photo.append($window_img);


        const $window_text = document.createElement('div');
        $window_text.classList.add("window-text")
        $window.append($window_text)

        const $p_top = document.createElement('h3');
        $p_top.classList.add("p-top")
        $p_top.innerHTML = ob.name;
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
        this.filteredGoods = this.goods.filter(good => regexp.test(good.name));
        if (this.filteredGoods.length === 0) {
            const $products__window = document.querySelector('.products__window');
            const $p = document.createElement('p');
            $p.innerHTML = 'Ничего не найдено';
            $products__window.append($p);
        } else {
            this.filteredGoods.map((thing, index) => {
                this.render(thing, index)
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