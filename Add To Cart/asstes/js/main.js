// B1: Truy cap vao phan tu
const cartModalOverlay = document.querySelector('.cart-modal-overlay');
const cart = document.querySelector('.cart-btn');
const close = document.querySelector('#close-btn');

// B2: Logic open/close popup cart
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

// B3: Them 1 san pham - Xoa 1 san pham - Thay doi so luong 1 san pham vao vao trong gio hang
const addToCart = document.querySelectorAll('.add-to-cart');
// const productRow = document.querySelector('.product-row');


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
  // Check moi san pham them 1 lan
  const cartImage = document.querySelectorAll('.cart-image');
  let isAdd = false;
  cartImage.forEach((item) => {
    if (item.src == imageSrc) {
      alert('San pham da co trong gio hang');
      isAdd = true;
      return;
    }
  })
  if(isAdd) {
    return
  }
  // Ghi noi dung vao trong the 'div'
  productRow.innerHTML = `
    <img class="cart-image" src="${imageSrc}" alt="">
    <span class ="cart-price">${price}</span>
    <input class="product-quantity" type="number" value="1">
    <button class="remove-btn">Remove</button>
  `;
  // Truy cap phan tu product-rows
  const productRows = document.querySelector('.product-rows');
  // Them noi dung vao product-rows
  productRows.append(productRow);


  // Remove 1 san pham trong gio hang
  const btnRemove = document.querySelectorAll('.remove-btn');
  btnRemove.forEach((item)=> {
    item.addEventListener('click', ()=> {
      item.parentElement.remove();
      updatePrice();
    })
  });

  // Change item
  const inputQuality = document.querySelectorAll('.product-quantity');
  inputQuality.forEach((item)=> {
    item.addEventListener('change', () => {
      console.log(item.value);
      if(isNaN(item.value) || (item.value <= 1)) {
        item.value = 1;
      }
      updatePrice();
    })
  });

  updatePrice();


}


// Cap nhat gia tien
const updatePrice = () => {
  const productRowEle = document.querySelectorAll('.product-row');

  let total = 0;
  productRowEle.forEach((item)=> {
    // Lay gia tien
    const priceEl = item.querySelector('.cart-price');
    const price = parseFloat(priceEl.innerHTML.replace('$', ' '));

    // Lay so luong san pham trong gio hang
    const quantity = item.querySelector('.product-quantity').value;

    total = total + (price * quantity)
  })
  console.log(total);

  document.querySelector('.total-price').innerHTML = total;
  document.querySelector('.cart-quantity').innerHTML = productRowEle.length;
}