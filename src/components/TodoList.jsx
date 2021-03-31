import React from "react";

const TodoList = ({ toDoList, onComplete, onDelete }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {toDoList.map((item) => (
          <div key={item.id} className="todo">
            <li className={item.completed ? "completed" : ""}>{item.title}</li>
            <button
              className="complete-btn"
              onClick={() => onComplete(item.id)}
            >
              <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={() => onDelete(item.id)}>
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
