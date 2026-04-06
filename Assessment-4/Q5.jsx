import React, { useState } from "react";

function Q5() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") {
      return;
    }

    setTasks([...tasks, task]);
    setTask("");
  };

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <p style={{ margin: 0 }}>RAMAKRISHNA</p>
        <p style={{ margin: 0 }}>24BDS0165</p>
      </div>

      <div style={boxStyle}>
        <h1>Todo List</h1>

        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={inputStyle}
        />

        <button onClick={addTask} style={buttonStyle}>
          Add Task
        </button>

        <ul style={listStyle}>
          {tasks.map((item, index) => (
            <li key={index} style={listItemStyle}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  backgroundColor: "#f4f6f8",
  paddingTop: "80px"
};

const headerStyle = {
  position: "fixed",
  top: "10px",
  left: "10px",
  backgroundColor: "#222",
  color: "white",
  padding: "10px 14px",
  borderRadius: "8px",
  fontWeight: "bold"
};

const boxStyle = {
  width: "400px",
  margin: "0 auto",
  textAlign: "center",
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
};

const inputStyle = {
  width: "70%",
  padding: "10px",
  marginRight: "10px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "6px"
};

const buttonStyle = {
  padding: "10px 16px",
  fontSize: "16px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#007bff",
  color: "white",
  cursor: "pointer"
};

const listStyle = {
  listStyleType: "none",
  padding: 0,
  marginTop: "20px"
};

const listItemStyle = {
  backgroundColor: "#eef2f7",
  margin: "8px 0",
  padding: "10px",
  borderRadius: "6px",
  textAlign: "left"
};

export default Q5;