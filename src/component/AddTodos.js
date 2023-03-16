import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./assests/css/addtodo.css";
import backG from "../component/assests/img/backG.gif";


export default function AddTodos() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [completed, setCompleted] = useState(false);

  const [isAdding, setIsAdding] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const todos = { task, date, time, completed};

    setIsAdding(true);

    // console.log(todos);

    setTimeout(() => {
      fetch("https://63f3e9d6de3a0b242b4b1249.mockapi.io/todos", {
        method: "POST",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify(todos),
      }).then(() => {
        console.log("New Task Added Successfuly");
        setIsAdding(false);
        history.push("/todohome");
      });
    }, 1000);

    setTask("");
    setDate("");
    setTime("");
    setCompleted(false);
  };

  return (
    <>
      <div className="addtodo" style={{ backgroundImage: `url(${backG})` }}>
        <div>
          <h2>What are you Doing Today! <Link className="goHome" to="/">Home</Link></h2>
        </div>
        <form onSubmit={handleSubmit}>
          <label>Task:</label>
          <input
            type="text"
            placeholder="Add Task Now"
            value={task}
            required
            onChange={(e) => setTask(e.target.value)}
          />
          {/* <br></br> */}

          <label>Time:</label>
          <input
            type="time"
            value={time}
            required
            onChange={(e) => setTime(e.target.value)}
          />
          {/* <br></br> */}
          <label>Date:</label>
          <input
            type="date"
            value={date}
            required
            onChange={(e) => setDate(e.target.value)}
          />
         <div className="checkbox-add"> 
          <input 
          type="checkbox"
          checked={completed}
          value={completed}
          hidden
          onChange={(e) => setCompleted(e.currentTarget.checked)}
          />
         </div>
          {/* <br></br> */}

          <button>Submit</button>
        </form>

        {isAdding && <h3 className="adding">Adding New Task.......</h3>}
       
      </div>
    </>
  );
}
