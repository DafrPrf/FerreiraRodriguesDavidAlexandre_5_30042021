const thanksData = JSON.parse(localStorage.getItem('thanksPageData'));

const thanksContainer = document.querySelector('.thanks');

let orderId = '';
let products = [];

// loop in thanksData object and return each key
for (const key in thanksData) {
  //if key strict equal to string 'orderId'
  if (key === 'orderId') {
    // add on the variable the key value
    orderId = thanksData[key];

    //if key strict equal to string 'products'
  } else if (key === 'products') {
    // push to the array variable the key value
    products.push(thanksData[key]);
  }
}

let priceArray = [];

// loop  array products and get each element
products.forEach((el) => {
  // loop each element of the array products
  el.forEach((product) => {
    // push to the priceArray the product.price values
    priceArray.push(product.price);
  });
});

// calculate total value of priceArray
let totalPrice = calculateTotalCartPrice(priceArray);

thanksContainer.innerHTML = `
    <h2 class="thanks__orderNb">Numero de commande : <span class="thanks--greenColor">${orderId}</span></h2>
    <h3 class="thanks__orderPrice">Prix Total : <span class="thanks--redColor">${totalPrice}€</span></h3>

    <button class="thanks__btn">Accueil</button>`;

const homeBtn = document.querySelector('.thanks__btn');

homeBtn.addEventListener('click', (e) => {
  e.preventDefault();

  window.location = '../home/home.html';
  localStorage.clear();
});
