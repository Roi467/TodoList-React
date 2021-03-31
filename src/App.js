import React, { Component } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

import "./App.css";

class App extends Component {
  state = {
    toDoList: [],
    status: "all",
    filterdTodo: [],
    idCounter: 0,
  };

  handleComplete = (id) => {
    const toDoList = this.state.toDoList;
    const index = toDoList.findIndex((todo) => todo.id === id);
    toDoList[index].completed = !toDoList[index].completed;
    this.setState({ toDoList });
  };
  handleDelete = (id) => {
    const toDoList = this.state.toDoList.filter((todo) => todo.id !== id);
    this.setState({ toDoList });
  };

  handleAdd = (toDoText) => {
    const idCounter = this.state.idCounter;
    let toDoList = this.state.toDoList;
    toDoList.push({ id: idCounter, title: toDoText, completed: false });
    this.setState({ toDoList, idCounter: idCounter + 1 });
  };

  handleFilterChange = (status) => {
    this.setState({ status });
  };

  filterList = () => {
    const { status } = this.state;
    let filterdTodo = this.state.toDoList;
    if (status === "completed") {
      filterdTodo = this.state.toDoList.filter((todo) => todo.completed);
    } else if (status === "uncompleted") {
      filterdTodo = this.state.toDoList.filter((todo) => !todo.completed);
    }
    return filterdTodo;
  };

  render() {
    let filterdTodo = this.filterList();

    return (
      <div className="App">
        <header className="App-header">
          <h1>Roi Todo</h1>
        </header>
        <Form onAdd={this.handleAdd} onFilter={this.handleFilterChange} />
        <TodoList
          toDoList={filterdTodo}
          onComplete={this.handleComplete}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default App;
