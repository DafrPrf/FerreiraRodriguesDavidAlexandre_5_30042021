class Storage {
  // save in the localStorage the products chosen by the user
  // as well as their values
  saveProducts(productsArray) {
    // object to stock product values with new keys
    let productValues = {
      randomId: productsArray[0],
      id: productsArray[1],
      price: productsArray[2],
      name: productsArray[3],
      image: productsArray[4],
      quantity: productsArray[5],
      lenses: productsArray[6],
    };

    // variable to store any product which is in localStorage
    let productsInLocalStorage = JSON.parse(
      localStorage.getItem('Added Products')
    );
    let alert;
    const items = [];

    // if localStorage contains items
    if (productsInLocalStorage) {
      // check if they have the same id
      productsInLocalStorage.forEach((item) => {
        if (item.id === productValues.id) {
          // if true check if they have the same lenses
          if (item.lenses === productValues.lenses) {
            items.push(item.id);
          }
        }
      });

      // if array items.lenght > 0
      if (items.length != 0) {
        alert = true;
        // display alert "this product is already in the cart"
        whatsNextPopup(alert);

        // if loaclStorage have product but not tthe same add the new one
      } else {
        alert = false;

        productsInLocalStorage.push(productValues);
        localStorage.setItem(
          'Added Products',
          JSON.stringify(productsInLocalStorage)
        );
        // display popupo and ask the user for the next step
        whatsNextPopup(alert);
      }

      // if localStorage is empty add the first product to it
    } else {
      productsInLocalStorage = [];
      productsInLocalStorage.push(productValues);
      console.log('new product added');
      alert = false;
      localStorage.setItem(
        'Added Products',
        JSON.stringify(productsInLocalStorage)
      );
      // display popupo and ask the user for the next step
      whatsNextPopup(alert);
    }

    // let productsInLocalStorage = JSON.parse(
    //   localStorage.getItem('Added Products')
    // );

    // if (productsInLocalStorage) {
    //   productsInLocalStorage.push(productValues);
    //   localStorage.setItem(
    //     'Added Products',
    //     JSON.stringify(productsInLocalStorage)
    //   );
    // } else {
    //   productsInLocalStorage = [];
    //   productsInLocalStorage.push(productValues);

    //   localStorage.setItem(
    //     'Added Products',
    //     JSON.stringify(productsInLocalStorage)
    //   );
    // }
  }
}
