// recuperate product id when user click on product
function getProductID() {
  const product = document.querySelectorAll('#card');

  // loop all products to check if user click in any
  for (let i = 0; i < product.length; i++) {
    product[i].addEventListener('click', (e) => {
      e.preventDefault();

      // recuperate selected product id
      let selectedProduct = product[i].dataset.id;

      // send product id to localStorage
      localStorage.setItem('productID', selectedProduct);

      // redirect page to product.html
      location.href = '../product/product.html';
    });
  }
}

// show popup alert and whatToDoNext
function whatsNextPopup(alert) {
  const popup = document.querySelector('.activated');
  const popupAlert = document.querySelector('.alert');

  if (alert) {
    popupAlert.style.display = 'block';
  } else {
    popup.style.display = 'block';
  }
}

// calculate the total price of cart
function calculateTotalCartPrice(totalArray) {
  let totalPrice = totalArray.reduce((a, b) => a + b);
  totalPrice /= 1000;
  localStorage.setItem('totalPrice', totalPrice);

  return totalPrice;
}

// send form values to server
function sendFormData(e) {
  e.preventDefault();

  const fetchOrder = new Fetch();

  // recuperate the id of products added int the cart
  let productId = JSON.parse(localStorage.getItem('Added Products'));

  let products = [];

  // iterates all products in the cart and push to products array theyre id
  productId.forEach((item) => {
    products.push(item.id);
  });

  // create a FormData object with the form keys/values
  const formData = new FormData(this);

  // create an object of formData result
  const contact = Object.fromEntries(formData);

  // concat contact and products to body object
  const body = { contact, products };

  fetchOrder.fetchOrder(body).then((data) => {
    localStorage.clear();

    updateThanksPage(data);

    window.location = '../../thanks/thanks.html';
  });
}

function updateThanksPage(data) {
  localStorage.setItem('thanks page data ', JSON.stringify(data));
}
