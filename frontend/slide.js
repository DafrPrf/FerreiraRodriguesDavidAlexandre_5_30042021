const slide = document.querySelector('.products');

function updateCard(product) {
  for (let i = 0; i < product.length; i++) {
    const name = product[i].name;
    const price = product[i].price;
    const image = product[i].imageUrl;
    // const lenses = product[i].lenses;
    // const description = product[i].description;

    slide.innerHTML += `
        <a id="card" class="products__card${i}" href="./product.html">
            <figure class="products__card">
                <img class="products__image" src="${image}" alt="" />
                <figcaption class="products__description">
                    <h2 class="products__title">${name}</h2>
                    <p class="products__price">${price}€</p>
                    <div class="products__rank">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </figcaption>
            </figure>
        </a>
        `;
  }
}

function slideAnimation() {
  const arrowLeft = document.querySelector('.arrows-left');
  const arrowRight = document.querySelector('.arrows-right');

  arrowLeft.addEventListener('click', () => {
    slide.scrollLeft -= 384 * 2;
  });

  arrowRight.addEventListener('click', () => {
    slide.scrollLeft += 384 * 2;
  });
}

slideAnimation();
