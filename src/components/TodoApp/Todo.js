import React from "react";

export const Todo = ({ handleDelete, handleToggle, id, done, desc, index }) => {
  return (
    <li
      className="list-group-item mt-2  bg-light d-flex justify-content-between "
      key={id}
      onClick={() => handleToggle(id)}
    >
      <small className={`${done && "completed"}`}>
        {index + 1}. {desc}
      </small>
      <button className="btn btn-danger ml-3" onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};
