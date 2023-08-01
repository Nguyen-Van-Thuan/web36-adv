// B1: Truy cap vao phan tu
const cartModalOverlay = document.querySelector('.cart-modal-overlay');
const cart = document.querySelector('.cart-btn');
const close = document.querySelector('#close-btn');
// console.log(close);

// B2: Logic open popup cart
cart.addEventListener('click', () => {
  cartModalOverlay.style.transform = "translateX(0)";
});
close.addEventListener('click', () => {
  cartModalOverlay.style.transform = "translateX(-200%)";
});
cartModalOverlay.addEventListener('click', (event) => {
  if (event.target.classList.contains('cart-modal-overlay') === true) {
    cartModalOverlay.style.transform = "translateX(-200%)";
  }
});

// B3: Them 1 san pham vao vao trong gio hang
const addToCart = document.querySelectorAll('.add-to-cart');
const productRow = document.querySelector('.product-row');


addToCart.forEach((item) => {
  item.addEventListener('click', () => addToCartClicked(item));
})

const addToCartClicked = (event) => {

  // Truy cap phan tu cha
  let cartItem = event.parentElement;

  // Truy cap phan tu con, lay price - image
  let price = cartItem.querySelector('.product-price').innerHTML;
  let imageSrc = cartItem.querySelector('.product-image').src;

  // Them price, image vao popup cart.
  addItemToCart(price, imageSrc)

}

const addItemToCart = (price, imageSrc) => {

  // Tao 1 the "<div class="product-row"></div>"
  let productRow = document.createElement('div');
  productRow.classList.add('product-row');

  // // Check moi san pham them 1 lan
  // const cartImage = document.querySelectorAll('.cart-image');

  // cartImage.forEach((item) => {
  //   if (item.src == imageSrc) {
  //     alert('San pham da co trong gio hang');
  //     return;
  //   }
  // })
  const a =     `
  <div class="product-row">
    <img class="cart-image" src="${imageSrc}" alt="">
    <span class ="cart-price">${price}</span>
    <input class="product-quantity" type="number" value="1">
    <button class="remove-btn">Remove</button>
  </div>
  `;

  // Ghi noi dung vao trong the 'div'
  productRow.innerHTML = a;


  // Truy cap phan tu product-rows
  const productRows = document.querySelector('.product-rows');

  // Them noi dung vao product-rows
  productRows.append(productRow);


}

console.log('123');
// Xu ly xoa 1 san pham trong gio hang
const removeBtn = document.querySelectorAll('.remove-btn');
console.log(removeBtn);
removeBtn.forEach((item) => {
  // console.log(item);
  item.addEventListener('click', () => removeItem(item));
})
const removeItem = (item) => {
  console.log(item);
}
