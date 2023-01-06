const cartWrapper = document.querySelector('.cart-wrapper')

window.addEventListener('click', function (e) {
    if(e.target.hasAttribute('data-cart')){
        
        
        const cart = e.target.closest('.card')
        const productInfo = {
            id: cart.dataset.id,
            imgSrc: cart.querySelector('.product-img').src,
            title: cart.querySelector('.item-title').innerText,
            itemInBox : cart.querySelector('[data-items-in-box]').innerText,
            priceWeight:cart.querySelector('.price__weight').innerText,
            priceCurrency:cart.querySelector('.price__currency').innerText,
            counter:cart.querySelector('[data-counter]').innerText
        }


        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)
        if(itemInCart){
           const counterElement = itemInCart.querySelector('[data-counter]')
           counterElement.innerText = parseInt(counterElement.innerText) + parseInt(productInfo.counter)
        }else{
           const cartItemHTML = `	<div class="cart-item" data-id="${productInfo.id}">
            <div class="cart-item__top">
                <div class="cart-item__img">
                    <img src="${productInfo.imgSrc}" alt="">
                </div>
                <div class="cart-item__desc">
                    <div class="cart-item__title">${productInfo.title}</div>
                    <div class="cart-item__weight">${productInfo.itemInBox}/${productInfo.priceWeight}</div>

                    <!-- cart-item__details -->
                    <div class="cart-item__details">

                        <div class="items items--small counter-wrapper">
                            <div class="items__control" data-action="minus">-</div>
                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                            <div class="items__control" data-action="plus">+</div>
                        </div>

                        <div class="price">
                            <div class="price__currency">${productInfo.priceCurrency}</div>
                        </div>

                    </div>
                    <!-- // cart-item__details -->

                </div>
            </div>
        </div>`
        cartWrapper.insertAdjacentHTML("beforeend",cartItemHTML) 
        }
        

        //сброс счетчика в товаре
        cart.querySelector('[data-counter]').innerText = 1
        toggleCartStatus()
        calcCartPriceAndDelivery()
    }
})