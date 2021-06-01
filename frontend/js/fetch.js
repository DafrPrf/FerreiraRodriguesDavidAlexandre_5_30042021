class Fetch {
  async fetchAllProducts() {
    try {
      const response = await fetch('http://localhost:3000/api/cameras');
      const data = await response.json();

      return data;
    } catch (err) {
      console.log('Error fetch All: ', err);
    }
  }

  async fetchProductByID(productId) {
    try {
      const response = await fetch(
        `http://localhost:3000/api/cameras/${productId}`
      );
      const data = [];

      data.push(await response.json());
      return data;
    } catch (err) {
      console.log('Error fetching product id: ', err);
    }
  }

  async fetchOrder(body) {
    try {
      const response = await fetch('http://localhost:3000/api/cameras/order', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    } catch (err) {
      console.log('Error fetching order: ', err);
    }
  }
}
