import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearTodos, deleteSingleItem, editItem } = this.props;
    return (
      <ul clasSName="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>

        {items.map(item => {
          return (
            <TodoItem
              id={item.id}
              key={item.id}
              title={item.title}
              deleteSingleItem={deleteSingleItem}
              editItem={editItem}
            />
          );
        })}
        <button
          type="submit"
          onClick={clearTodos}
          className="btn btn-danger btn-block text-capitalize mt-5"
        >
          Clear
        </button>
      </ul>
    );
  }
}
