import React, { Component } from "react";

import { FaPen, FaTrash } from "react-icons/fa";

export default class TodoItem extends Component {
  render() {
    const { title, deleteSingleItem, id, editItem } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success">
            <FaPen cursor="pointer" onClick={editItem.bind(this, id)} />
          </span>
          <span className="mx-2 text-danger">
            <FaTrash
              cursor="pointer"
              onClick={deleteSingleItem.bind(this, id)}
            />
          </span>
        </div>
      </li>
    );
  }
}
