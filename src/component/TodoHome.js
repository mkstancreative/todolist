import React from "react";
import Todolist from "./Todolist";
import useFetch from "./useFetch";

export default function TodoHome() {
  const { todos, error, handleDelete } = useFetch(
    "https://63f3e9d6de3a0b242b4b1249.mockapi.io/todos"
  );

  return (
    <>
      {todos && <Todolist todos={todos} handleDelete={handleDelete} />}
      {error && <h4>{error}</h4>}
    </>
  );
}
