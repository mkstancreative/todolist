import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
// import useFetch from "./useFetch";
// import useFetch from "./useFetch";
import backG from "../component/assests/img/backG.gif";

export default function EditTodo() {
  const [id, setId] = useState(0);
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [completed, setCompleted] = useState(false);
  const [isUpdateing, setIsUpdating] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();
  const { toid } = useParams();

  // const {todos} = useFetch("https://63f3e9d6de3a0b242b4b1249.mockapi.io/todos/" + id);

  useEffect(() => {
    fetch("https://63f3e9d6de3a0b242b4b1249.mockapi.io/todos/" + toid)
      .then((res) => {
        if (!res.ok) {
          console.log("Can't Fetch from this Resource");
        }
        return res.json();
      })
      .then((res) => {
        // console.log(res);
        setId(res.id);
        setTask(res.task);
        setDate(res.date);
        setTime(res.time);
        setCompleted(res.completed);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [toid]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const todos = { id, task, date, time, completed };

    setIsUpdating(true);

    setTimeout(() => {
      fetch("https://63f3e9d6de3a0b242b4b1249.mockapi.io/todos/" + id, {
        method: "PUT",
        headers: { "content-Type": "Application/json" },
        body: JSON.stringify(todos),
      })
        .then(() => {
          setIsUpdating(false);
          history.push("/todohome");
        })
        .catch((err) => {
          setError(err.message);
        });
    }, 1000);
  };

  return (
    <>
      {/* <h1>{toid}</h1> */}

      <div className="addtodo" style={{ backgroundImage: `url(${backG})` }}>
        <div>
          <h2>
            What are you Doing Today!{" "}
            <Link className="goHome" to="/">
              Home
            </Link>
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <input readOnly value={id} hidden />
          <label>Task</label>
          <input
            type="text"
            placeholder="Add Task Now"
            value={task}
            required
            onChange={(e) => setTask(e.target.value)}
          />
          <br></br>

          <label>Time</label>
          <input
            type="time"
            value={time}
            required
            onChange={(e) => setTime(e.target.value)}
          />
          <br></br>
          <label>Date</label>
          <input
            type="date"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          />
          {/* <br></br> */}
          <div className="checkbox-add">
            <input
              type="checkbox"
              checked={completed}
              value={completed}
              onChange={(e) => setCompleted(e.currentTarget.checked)}
            />
            <label className="checkbox-label">Completed</label>
          </div>

          <button>Update</button>
        </form>

        {isUpdateing && <h3 className="adding">Updating Task.......</h3>}
        {error && <h1>{error}</h1>}
      </div>
    </>
  );
}
