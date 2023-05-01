class Service {
  getProducts() {
    return [
      {
        id: 1234,
        productImg: "src/static/product_img.png",
        productName: "Product 1",
        productSubject: "Product 1's subject line",
      },
      {
        id: 2345,
        productImg: "src/static/product_img.png",
        productName: "Product 2",
        productSubject: "Product 2's subject line",
      },
    ];
  }
}

export default new Service();
