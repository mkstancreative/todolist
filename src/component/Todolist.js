import React from "react";
import { Link } from "react-router-dom";
import "../component/assests/css/todolist.css";
import backG from "../component/assests/img/backG.gif";

export default function Todolist({ todos, handleDelete }) {
  return (
    <>
      <div
        className="todolist-container"
        style={{ backgroundImage: `url(${backG})` }}
      >
        <h2>
          List of My Todos{" "}
          <Link className="goHome" to="/">
            Home
          </Link>
        </h2>
        {todos.map((todo) => (
          <div className="todolist" key={todo.id}>
            <div className="todoitems">
              <div class="check_container"> 
                <input
                  id="checkbox"
                  class="hidden"
                  type="checkbox"
                  checked={todo.completed}
                />
                <label class="checkbox" for="checkbox"></label>
              </div>
              <div className="todotext">
                <h3>{todo.task}</h3>
                <p>
                  <span>{todo.date}</span>
                  <span> </span>
                  <span>{todo.time}</span>
                </p>
              </div>
            </div>
            <div className="action-btn">
              <Link to={`/edittodo/${todo.id}`}>
                <button id="editt">Edit</button>
              </Link>
              <button id="del" onClick={() => handleDelete(todo.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
