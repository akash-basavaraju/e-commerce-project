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
    return await fetch(
      `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/product`
    );
  }

  async saveUser(payload) {
    return await fetch(
      `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/user`,
      {
        method: "POST",
        body: payload,
      }
    );
  }

  async payOrder(payload) {
    return await fetch(
      `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/payment`,
      {
        method: "POST",
        body: payload,
      }
    );
  }

  async getUsers() {
    return await fetch(
      `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/user`
    );
  }

  async login(payload) {
    return await fetch(
      `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}/user/login`,
      {
        method: "POST",
        body: payload,
      }
    );
  }
}

export default new Service();
