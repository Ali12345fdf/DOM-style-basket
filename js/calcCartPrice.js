function calcCartPriceAndDelivery() {
  const cartItems = document.querySelectorAll(".cart-item");
  const totalPriceEl = document.querySelector(".total-price");
    const deliveryCost = document.querySelector('.delivery-cost')
    const dataCartDelivery = document.querySelector('[data-cart-delivery]')
  let totalPrice = 0;


  cartItems.forEach(function (item) {
    const amountEl = item.querySelector("[data-counter]");
    const priceEl = item.querySelector(".price__currency");

    const currentPrice =
      parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
    totalPrice += currentPrice;
  });
  totalPriceEl.innerText = totalPrice;

  if(totalPrice > 0){
    dataCartDelivery.classList.remove('none')
  }else{
    dataCartDelivery.classList.add('none')
  }
  if(totalPrice >= 600){
    deliveryCost.classList.add('free')
    deliveryCost.innerText = 'бесплатно'
  }else{
    deliveryCost.classList.remove('free')
    deliveryCost.innerText = '250 ₽'

  }
}
