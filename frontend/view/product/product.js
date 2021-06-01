const product = document.querySelector('.product');

const fetchProductById = new Fetch();
const ui = new UiUpdate();
const saveOnLocalStorage = new Storage();

// recuperate product id from url
let productID = Url.getId();

fetchProductById
  .fetchProductByID(productID)
  .then((data) => {
    ui.updateProduct(data);

    productsArray = [];

    const productPrice = data[0].price;
    const productName = data[0].name;
    const productImage = data[0].imageUrl;

    // random id for differentiate the same products which only have
    // lenses different in cart
    const randomID = Math.random() * 10000;

    productsArray.push(
      randomID,
      productID,
      productPrice,
      productName,
      productImage
    );

    return productsArray;
  })
  .then(() => {
    const productQuantity = document.querySelector('.product__quantity');
    const productLenses = document.querySelector('.product__lenses');
    const addBtn = document.querySelector('.product--addCartButton');
    const buyBtn = document.querySelector('.product--buyButton');

    // add an eventListener for "Ajouter au panier" btn
    addBtn.addEventListener('click', (e) => {
      e.preventDefault();

      // get product values entered by the user
      const productQuantityValue = productQuantity.value;
      const productLensesValue =
        productLenses.options[productLenses.selectedIndex].text;

      productsArray.push(productQuantityValue, productLensesValue);

      // call Storage method saveProducts with values entered by
      // the user and the product choices ID and price
      saveOnLocalStorage.saveProducts(productsArray);
    });

    // add event listener for "Acheter l'article" btn
    buyBtn.addEventListener('click', (e) => {
      e.preventDefault();

      // get product values entered by the user
      const productQuantityValue = productQuantity.value;
      const productLensesValue =
        productLenses.options[productLenses.selectedIndex].text;

      productsArray.push(productQuantityValue, productLensesValue);
      console.log(productsArray);

      // call Storage method saveProducts with values entered by
      // the user and the product choices ID and price
      saveOnLocalStorage.saveProducts(productsArray);

      // redirect to cart page
      location.href = '../cart/cart.html';
    });
  });
