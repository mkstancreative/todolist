import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./assests/css/home.css";
import backG from "../component/assests/img/backG.gif";

export default function Home() {
  return (
    <>

      <div className=" home-container" style={{ backgroundImage: `url(${backG})` }}>
        <div className="hero-block1">
          <div className="hero-title">
            <h1>Welcome to Task Manager</h1>
            <p>Keep Every Day Record of your Activities</p>
          </div>
          <div className="hero-nav">
            <Link className="todolink" to="/todohome">TodoList</Link>
            <Link className="todolink" to="/addtodo">Add ToDo</Link>
          </div>
        </div>
        
      </div>
    </>
  );
}
