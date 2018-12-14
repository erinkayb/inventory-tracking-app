import React, { Component } from "react";
import "./components.css";

class ProductItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isEdit: false
    };

    this.onDelete = this.onDelete.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }
  onDelete() {
    const { onDelete, name } = this.props;
    onDelete(name);
  }
  onEdit() {
    this.setState({ isEdit: true });
  }
  onEditSubmit(e) {
    e.preventDefault();
    this.props.onEditSubmit(
      this.nameInput.value,
      this.priceInput.value,
      this.quantityInput.value,
      this.props.name
    );
    this.setState({ isEdit: false });
  }

  render() {
    const { name, price, quantity } = this.props;
    return (
      <div className="grid">
        {this.state.isEdit ? (
          <form onSubmit={this.onEditSubmit}>
            <input
              className="input"
              placeholder="Item Name"
              defaultValue={name}
              ref={nameInput => (this.nameInput = nameInput)}
            />
            <input
              className="input"
              placeholder="Price"
              defaultValue={price}
              ref={priceInput => (this.priceInput = priceInput)}
            />
            <input
              className="input"
              placeholder="Quantity"
              defaultValue={quantity}
              ref={quantityInput => (this.quantityInput = quantityInput)}
            />
            <button>Save</button>
          </form>
        ) : (
          <div className="grid">
            <table>
              <tbody>
                <tr>
                  <th colSpan="1">Item</th>
                  <th colSpan="1">Price</th>
                  <th colSpan="1">Quantity</th>
                </tr>
                <tr>
                  <td>{name}</td>
                  <td>{price}</td>
                  <td style={{ color: quantity < 5 && "red" }}>{quantity}</td>
                </tr>
              </tbody>
            </table>
            <div className="buttons">
              <button className="button" onClick={this.onEdit}>
                Edit
              </button>
              <button className="button" onClick={this.onDelete}>
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProductItem;
