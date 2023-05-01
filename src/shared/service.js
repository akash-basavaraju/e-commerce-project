class Service {
  async getProducts() {
    // return [
    //   {
    //     id: 1234,
    //     quantity: 5,
    //     image: "src/static/product_img.png",
    //     name: "Product 1",
    //     description: "Product 1's subject line",
    //   },
    //   {
    //     id: 2345,
    //     quantity: 5,
    //     image: "src/static/product_img.png",
    //     name: "Product 2",
    //     description: "Product 2's subject line",
    //   },
    // ];
    return await fetch("http://127.0.0.1:3000/product");
  }

  async saveUser(payload) {
    return await fetch("http://127.0.0.1:3000/user", {
      method: "POST",
      body: payload,
    });
  }

  async payOrder(payload) {
    return await fetch("http://127.0.0.1:3000/payment", {
      method: "POST",
      body: payload,
    });
  }

  async getUsers() {
    return await fetch("http://127.0.0.1:3000/user");
  }
}

export default new Service();
