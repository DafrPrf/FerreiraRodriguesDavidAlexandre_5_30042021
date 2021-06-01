// get products from localStorage
let productsCart = JSON.parse(localStorage.getItem('addedProducts'));

const uiCart = new UiUpdate();

// send products to updateCart
uiCart.updateCart(productsCart);

//----------------------------------------//
// select price element
totalPrice = document.querySelector('.content__price');
// get from localStorage price value
const price = localStorage.getItem('totalPrice');
// add price value

totalPrice.innerText = ` ${price}€`;
//-----------------------------------------//

//select trash icon
let trashIcons = document.querySelectorAll('.cart__trashIcon');
const popup = document.querySelector('.removedItem');
const yesBtn = document.querySelector('.removedItem__yesBtn');
const noBtn = document.querySelector('.removedItem__noBtn');

let productID = '';

// add an eventListener to each btn
for (let i = 0; i < trashIcons.length; i++) {
  trashIcons[i].addEventListener('click', (e) => {
    e.preventDefault();

    // get the id of the selected product
    productID = trashIcons[i].dataset.id;

    popup.style.display = 'block';
  });
}

yesBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // call removeItem method of UiUpdate class
  uiCart.removeItem(productID);

  location.href = './cart.html';
});

noBtn.addEventListener('click', (e) => {
  e.preventDefault();

  location.href = './cart.html';
});
//----------------------------------------//

// add event listener to pay btn
const payBtn = document.querySelector('.content__contentCartBtn');

payBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // redirect link to register user page
  window.location = '../user/register/register.html';
});
