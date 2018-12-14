import React, { Component } from 'react';

class AddItem extends Component {
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e){
        e.preventDefault();
        this.props.onAdd(this.nameInput.value, this.priceInput.value, this.quantityInput.value)
        this.nameInput.value = ''
        this.priceInput.value = ''
        this.quantityInput.value = '';

    }
  render() {
    return <form onSubmit={this.onSubmit}>
        <h3>Add New Items</h3>
        <input className="input" placeholder="Name" ref={nameInput => (this.nameInput = nameInput)} />
        <input className="input" placeholder="Price" ref={priceInput => (this.priceInput = priceInput)} />
        <input className="input" placeholder="Quantity" ref={quantityInput => (this.quantityInput = quantityInput)} />
        <button className="addBtn">Add</button>
        
      </form>;
    }
}

export default AddItem;
