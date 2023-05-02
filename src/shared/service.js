class Service {
  host = process.env.REACT_APP_HOST || "localhost";
  port = process.env.REACT_APP_PORT || 8080;
  baseUrl = `http://${this.host}:${this.port}`;

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
    return await fetch(`${this.baseUrl}/product`);
  }

  async saveUser(payload) {
    return await fetch(`${this.baseUrl}/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async payOrder(payload) {
    return await fetch(`${this.baseUrl}/payment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }

  async getUsers() {
    return await fetch(`${this.baseUrl}/user`);
  }

  async login(payload) {
    return await fetch(`${this.baseUrl}/user/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }
}

const service = new Service();
export default service;
