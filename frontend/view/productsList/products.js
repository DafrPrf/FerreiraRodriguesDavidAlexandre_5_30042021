const productsContainer = document.querySelector('.products');

const fetchProducts = new Fetch();
const ui = new UiUpdate();

fetchProducts
  .fetchAllProducts()
  .then((data) => {
    ui.updateProductsList(data, productsContainer);
  })
  .then(() => {
    getProductID();
  });
