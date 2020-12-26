import React, { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import "./styles.css";

import { TodoList } from "./TodoList";
import { TodoForm } from "./TodoForm";

const init = () => {
  console.log(JSON.parse(localStorage.getItem("todos")));
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    console.log(todoId);
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };

  const handleToggle = (todoId) => {
    console.log(todoId);
    dispatch({
      type: "toggle",
      payload: todoId,
    });
  };

  const handleAdd = (newTodo) => {
    console.log(newTodo);
    dispatch({
      type: "add",
      payload: newTodo,
    });
  };

  return (
    <div className="container ">
      <h1 className="text-primary">TodoAPP ({todos.length})</h1>
      <div className="row py-5">
        <div className="col-7">
          <h3>Tasks List</h3>
          {/* //TodoList (todos, handleToggle, handleDelete) */}
          <TodoList
            todos={todos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
          />
        </div>
        <div className="col-5">
          <TodoForm handleAdd={handleAdd} />
        </div>
      </div>
    </div>
  );
};
