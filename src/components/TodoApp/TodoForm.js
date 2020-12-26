import React from "react";

import { useForm } from "../../hooks/useForm";

export const TodoForm = ({ handleAdd }) => {
  const [{ desc }, handleInputChange, reset] = useForm({
    desc: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    if (desc.trim().length <= 1) {
      return;
    }
    const newTodo = {
      id: new Date().getMilliseconds(),
      desc,
      done: false,
    };
    handleAdd(newTodo);
    reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h3>Add task</h3>
      <input
        type="text"
        name="desc"
        className="form-control mt-3"
        placeholder="Description"
        onChange={handleInputChange}
        value={desc}
        autoComplete="off"
      />
      <button type="submit" className="btn btn-outline-success btn-block mt-2">
        Add
      </button>
    </form>
  );
};
