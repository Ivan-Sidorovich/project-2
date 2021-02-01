class cart {
    constructor() {
        this.cartARR = []
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

    totalPrice() {
        let resultPrice = this.cartARR.reduce((total, elem) => total + elem.price, 0);
        let $span = document.getElementById('span_Price');
        $span.innerHTML = `$${resultPrice}`
    }

    deleteCart() {
        const now = new Date();
        fetch('deleteCart.', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(cartList.cartARR[this.id])
            }).then(data => data.json())
            .then(data => {
                data.time = now;
                cartList.getStatsData(data);
                cartList.fetchCart();
                cartList.totalPrice();
            })
    }

    fetchCart() {
        let $container = document.querySelector('.cart__content--main');
        $container.innerHTML = '';
        fetch('dataCart.')
            .then(data => data.json())
            .then(data => {
                if (data.length) {
                    this.cartARR = data;
                    this.cartARR.map((thing, index) => {
                        this.render(thing, index)
                    })
                    cartList.totalPrice();
                } else {
                    let $certIsEmpty = document.querySelector('.cart-is-empty');
                    $certIsEmpty.style.display = 'flex';
                    let $span = document.getElementById('span_Price');
                    $span.innerHTML = `$ 0`;
                }
            })
            .catch(data => console.log(data))
    }

    render(ob, index) {
        let $container = document.querySelector('.cart__content--main');

        let $containerProduct = document.createElement('div');
        $containerProduct.classList.add('cart__content--main--line--bottom');

        $container.append($containerProduct);

        let $leftContent = document.createElement('div');
        $leftContent.classList.add('line--left-bottom');
        $containerProduct.append($leftContent);

        let $img = document.createElement('img');
        $img.src = `${ob.img_URl}`;
        $leftContent.append($img);

        let $textContent = document.createElement('div');
        $textContent.classList.add('line--left-bottom-text');
        $leftContent.append($textContent);

        let $h3 = document.createElement('h3');
        $h3.innerHTML = `${ob.name}`
        $textContent.append($h3);

        let $p1 = document.createElement('p');
        $p1.innerHTML = 'Color:'
        let $span1 = document.createElement('span');
        $span1.innerHTML = 'Red';
        $p1.append($span1);
        $textContent.append($p1);

        let $p2 = document.createElement('p');
        $p2.innerHTML = 'Size:'
        let $span2 = document.createElement('span');
        $span2.innerHTML = 'Xll';
        $p2.append($span2);
        $textContent.append($p2);

        let $rightContent = document.createElement('div');
        $rightContent.classList.add('line-right--main')
        $containerProduct.append($rightContent);

        let $div1 = document.createElement('div');
        $div1.classList.add('line--rigth-bottom');
        $div1.id = 'size5'
        $rightContent.append($div1);
        let $pDiv1 = document.createElement('p')
        $pDiv1.innerHTML = `${ob.price}`;
        $div1.append($pDiv1);

        let $div2 = document.createElement('div');
        $div2.classList.add('line--rigth-bottom');
        $div2.id = 'size4'
        $rightContent.append($div2);
        let $input = document.createElement('input');
        $input.classList.add('input__cart');
        $input.type = 'number';
        $input.placeholder = "1";
        $div2.append($input);

        let $div3 = document.createElement('div');
        $div3.classList.add('line--rigth-bottom');
        $div3.id = 'size3'
        $rightContent.append($div3);
        let $pDiv3 = document.createElement('p')
        $pDiv3.innerHTML = 'FREE';
        $div3.append($pDiv3);

        let $div4 = document.createElement('div');
        $div4.classList.add('line--rigth-bottom');
        $div4.id = 'size2'
        $rightContent.append($div4);
        let $pDiv4 = document.createElement('p')
        $pDiv4.innerHTML = '$300';
        $div4.append($pDiv4);

        let $div5 = document.createElement('div');
        $div5.classList.add('line--rigth-bottom');
        $div5.id = 'size1'
        $rightContent.append($div5);
        let $aDiv5 = document.createElement('div');
        $aDiv5.classList.add('link__cart');
        $div5.append($aDiv5);

        let $i = document.createElement('i');
        $i.id = index;
        $i.addEventListener('click', cartList.deleteCart);
        let className = 'fas fa-times-circle'
        $i.className = className;
        $aDiv5.append($i);
    }
}

const cartList = new cart();
cartList.fetchCart();