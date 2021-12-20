import renderCart from "./renderCart";
import postData from "./postData";

const cart = () => {
    const cartBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartCloseBtn = cartModal.querySelector('.cart-close');
    const cartTotal = cartModal.querySelector('.cart-total > span');
    const cartSendBtn = cartModal.querySelector('.cart-confirm');
    const goodsWrapper = document.querySelector('.goods');
    const cartWrapper = document.querySelector('.cart-wrapper');
    const counter = document.querySelector('.counter')

    const openCart = () => {
        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []
        cartModal.style.display = 'flex';

        renderCart(cart)

        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)
    }

    const closeCart = (e) => {
        if (e.target === cartModal || e.target === cartCloseBtn) {
            cartModal.style.display = '';
        }
    }

    cartBtn.addEventListener('click', openCart);
    cartCloseBtn.addEventListener('click', closeCart);
    cartModal.addEventListener('click', closeCart);

    goodsWrapper.addEventListener('click', event => {
        const target = event.target
        if (target.classList.contains('btn-primary')) {
            const card = target.closest('.card')
            const key = card.dataset.key
            const goods = JSON.parse(localStorage.getItem('goods'))

            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : []

            const goodItem = goods.find((item) => {
                return item.id === +key
            })

            cart.push(goodItem);
            localStorage.setItem('cart', JSON.stringify(cart));
            counter.textContent = cart.length
        }
    })

    cartWrapper.addEventListener('click', event => {
        const target = event.target
        if (target.classList.contains('btn-primary')) {

            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : []
            const card = target.closest('.card')
            const key = card.dataset.key

            const index = cart.findIndex((item) => {
                return item.id === +key
            })

            cart.splice(index, 1);

            localStorage.setItem('cart', JSON.stringify(cart));

            renderCart(cart)

            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price
            }, 0)
            counter.textContent = cart.length
        }
    })

    cartSendBtn.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []
        postData(cart).then(() => {
            localStorage.removeItem('cart')
            renderCart([])
            cartTotal.textContent = 0
            counter.textContent = 0
        })

    })
    const cart = localStorage.getItem('cart') ?
        JSON.parse(localStorage.getItem('cart')) : []
    counter.textContent = cart.length

}

export default cart