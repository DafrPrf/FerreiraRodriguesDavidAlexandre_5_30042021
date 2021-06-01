class UiUpdate {
  updateProductsList(data, productsContainer) {
    let updateProductsList = '';
    data.forEach((product) => {
      updateProductsList += `
        <h1 class="content__title">Nous Produits</h1>
          <a id='card' data-id="${
            product._id
          }" href="../product/product.html" class="products__card">
            <figure>
                <img class="products__image" src="${product.imageUrl}" alt="" />
              <figcaption class="products__description">
                <h2 class="products__title">${product.name}</h2>
                <p class="products__price">${product.price / 1000} €</p>
                <span class="products__rank">
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                  <i class="far fa-star"></i>
                </span>
              </figcaption>
            </figure>
          </a>
        `;
    });
    productsContainer.innerHTML = updateProductsList;
    slideAnimationX();
  }

  updateProduct(data) {
    const container = document.querySelector('.product');
    let updatedProduct = '';

    data.forEach((product) => {
      updatedProduct = `
      
          <h1 data-id="${product._id}" class="product__title">${
        product.name
      }</h1>
          <figure class='product__card'>
            <a href="../productsList/products.html"><i class="product__goBack fas fa-arrow-left"title="Revenir en arriere"></i></a>
            <a href=''><i class="product__heart far fa-heart" title="Ajouter aux favoris"></i></a>
            <img class='product__image' src="${product.imageUrl}" alt="" />
            <figcaption class='product__descriptionContainer'>
              
              <h3 class='product__description'>${product.description}</h3>
              <div class='product__priceAndRankContainer'>
               <p class='product__price'>${product.price / 1000} €</p>
               <div class="product__rank">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
               </div>
              </div>
              
          <div class="product__selections">
            <label for="quantity">Quantité:</label>
            <input
              class="product__quantity"
              type="number"
              id="quantity"
              name="quantity"
              value="1"
              min="1"
              max="20"
            />
            <label for="lenses">Lentille:</label>
            <select name="lenses" class="product__lenses">
              <option disabled>--Choissir une lentille--</option>
              ${product.lenses.map((item) => {
                return `<option value=''>${item}</option>`;
              })}
            </select>
          </div>
          <div class="product__buttons">
            <input
              class="product--addCartButton"
              type="submit"
              value="Ajouter au panier"
            />
          </div>
            </figcaption>
          </figure>
          `;
    });

    container.innerHTML = updatedProduct;
  }

  updateCart(productsCart) {
    const cart = document.querySelector('.cart');

    let updateCart = '';
    let totalArray = [];

    productsCart.forEach((product) => {
      updateCart += `
          <figure class="cart__card" data-id="${product.id}">
            <img class="cart__image" src="${product.image}" alt="" />
            <figcaption>
              <div class="cart__quantityAndlensesContainer">
                <p class="cart__title">${product.name}</p>
                <p>Quantité : ${product.quantity}</p>
                <p class="lenses" >Lentilles : ${product.lenses}</p>
              </div>
              <div class="cart__priceAndTotalContainer">
                <i data-id="${
                  product.randomId
                }" class="cart__trashIcon far fa-trash-alt"></i>
                <p>Prix unité : ${product.price / 1000}€</p>
                <p>Total : ${(product.price * product.quantity) / 1000}€</p>
              </div>
            </figcaption>
          </figure> `;

      totalArray.push(product.price * product.quantity);
    });

    calculateTotalCartPrice(totalArray);

    cart.innerHTML = updateCart;

    slideAnimationY();
  }

  // remove product from cart
  removeItem(productID) {
    let item = JSON.parse(localStorage.getItem('Added Products'));

    // loock for the index of the product we have selected
    const index = item.findIndex((el) => el.randomId == productID);

    if (index > -1) {
      // remove product
      item.splice(index, 1);
    }

    // refresh localStorage
    localStorage.setItem('Added Products', JSON.stringify(item));
    // refresh the page to make removed products disappear
    location.reload();
  }
}
