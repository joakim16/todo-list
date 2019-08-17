import React, { Component } from "react";

export default class TodoInput extends Component {
  render() {
    const { item, handleChange, handleSubmit, edit } = this.props;
    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <input
            required
            type="text"
            className="form-control text-capitalize"
            placeholder="add todo"
            value={item}
            onChange={handleChange}
          />

          {!edit ? (
            <button
              type="submit"
              className="btn btn-block btn-primary mt-3 text-capitalize"
            >
              Add item
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-block btn-success mt-3 text-capitalize"
            >
              Edit item
            </button>
          )}
        </form>
      </div>
    );
  }
}
