const thanksData = JSON.parse(localStorage.getItem('thanks page data '));

const thanksContainer = document.querySelector('.thanks');

let orderId = '';
let products = [];

// loop in thanksData object and return each key
for (const key in thanksData) {
  //if key stric equal to string 'orderId'
  if (key === 'orderId') {
    // add on the variable the key value
    orderId = thanksData[key];

    //if key stric equal to string 'products'
  } else if (key === 'products') {
    // push to the array variable the key value
    products.push(thanksData[key]);
  }
}

let priceArray = [];

// loop  array propducts and get each element
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

    <a class="thanks__btn" href="../home/home.html">Accueil</a>`;
