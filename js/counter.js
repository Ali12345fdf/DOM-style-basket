// добавляем прослушку на все окно
window.addEventListener("click", counter);
function counter(e) {
  let counter;
  // проверяем сьрого по кнопкам плюс или минус
  if (
    e.target.dataset.action === "plus" ||
    e.target.dataset.action === "minus"
  ) {
    //находим род эл кнопки и доч счетчик
    const counterWrappper = e.target.closest(".counter-wrapper");
    counter = counterWrappper.querySelector("[data-counter]");
  }
  if (e.target.dataset.action === "plus") {
    counter.innerText = ++counter.innerText;
  }

  if (e.target.dataset.action === "minus") {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
    } else if (
      e.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      e.target.closest(".cart-item").remove();
      toggleCartStatus();
      calcCartPriceAndDelivery();
    }
  }
  if (
    e.target.hasAttribute("data-action") &&
    e.target.closest(".cart-wrapper")
  ) {
    calcCartPriceAndDelivery();
  }
}
