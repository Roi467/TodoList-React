import React, { Component } from "react";

class Form extends Component {
  state = {
    toDoText: "",
  };

  handelSubmit = (e) => {
    e.preventDefault();
    this.props.onAdd(this.state.toDoText);
    this.setState({ toDoText: "" });
  };

  handleTodoChange = (event) => {
    this.setState({ toDoText: event.target.value });
  };

  onFilterChange = (event) => {
    this.props.onFilter(event.target.value);
  };

  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <input
          type="text"
          className="todo-input"
          value={this.state.toDoText}
          onChange={this.handleTodoChange}
        />
        <button className="todo-button" type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select
            name="todos"
            className="filter-todo"
            onChange={this.onFilterChange}
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    );
  }
}

export default Form;
