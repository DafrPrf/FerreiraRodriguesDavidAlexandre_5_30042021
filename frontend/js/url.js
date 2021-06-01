class Url {
  static getId() {
    const url = new URL(window.location);
    const productID = url.searchParams.get('id');

    return productID;
  }
}
