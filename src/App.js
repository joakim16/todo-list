import React, { Component } from "react";

import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import uuid from "uuid";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {
    items: [],
    id: uuid(),
    item: "",
    edit: false
  };

  handleChange = e => {
    this.setState({
      item: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item,
      completed: false
    };

    const updatedItems = [...this.state.items, newItem];

    this.setState({
      items: updatedItems,
      item: "",
      id: uuid(),
      edit: false
    });
  };

  clearTodos = () => {
    this.setState({
      items: []
    });
  };

  deleteSingleItem = singleItem => {
    const newItems = this.state.items.filter(item => {
      return item.id !== singleItem;
    });

    this.setState({ items: newItems });
  };

  editItem = id => {
    const newItems = this.state.items.filter(item => {
      return item.id !== id;
    });

    const editedItem = this.state.items.find(item => item.id === id);
    console.log(editedItem);

    this.setState({ items: newItems, item: editedItem.title, edit: true });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center text-decoration-line-through">
              add item to list
            </h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              edit={this.state.edit}
            />
            <TodoList
              deleteSingleItem={this.deleteSingleItem}
              items={this.state.items}
              clearTodos={this.clearTodos}
              editItem={this.editItem}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
