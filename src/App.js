import React, { Component } from "react";
import "./App.css";

import ProductItem from "./components/productItem";
import AddItem from "./components/addItem";

const products = [
  {
    name: "Blue T-Shirt",
    price: 21.99,
    quantity: 3
  },
  {
    name: "Pink Dress",
    price: 69.99,
    quantity: 22
  },
  {
    name: "Red T-Shirt",
    price: 32.99,
    quantity: 54
  },
  {
    name: "Green Hoodie",
    price: 49.99,
    quantity: 4
  }
];

localStorage.setItem("products", JSON.stringify(products));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: JSON.parse(localStorage.getItem("products"))
    };
    this.onDelete = this.onDelete.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  componentWillMount() {
    const products = this.getProducts();
    this.setState({ products });
  }
  getProducts() {
    return this.state.products;
  }
  onAdd(name, price, quantity) {
    const products = this.getProducts();
    products.push({
      name,
      price,
      quantity
    });
    this.setState({ products });
  }
  onDelete(name) {
    const products = this.getProducts();
    const filteredProducts = products.filter(product => {
      return product.name !== name;
    });
    this.setState({ products: filteredProducts });
  }
  onEditSubmit(name, price, quantity, originalProduct) {
    let products = this.getProducts();
    products = products.map(product => {
      if (product.name === originalProduct) {
        product.name = name
        product.price = price
        product.quantity = quantity;
      }
      return product;
    });
    this.setState({ products });
  }

  render() {
    return <div className="App">
        <div className="container">
          <h1>Inventory Tracker</h1>
          <h3>Products Manager</h3>
          {this.state.products.map(product => {
            return <ProductItem key={product.name} {...product} onDelete={this.onDelete} onEditSubmit={this.onEditSubmit} />;
          })}
          <br />
          <hr />
          <AddItem onAdd={this.onAdd} />
        </div>
      </div>;
  }
}

export default App;
