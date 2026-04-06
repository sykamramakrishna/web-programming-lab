import React, { useState } from "react";

function Q2() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleAdd = () => {
    setResult(Number(num1) + Number(num2));
  };

  const handleSubtract = () => {
    setResult(Number(num1) - Number(num2));
  };

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <p style={{ margin: 0 }}>RAMAKRISHNA</p>
        <p style={{ margin: 0 }}>24BDS0165</p>
      </div>

      <div style={boxStyle}>
        <h1>Basic Calculator</h1>

        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          style={inputStyle}
        />

        <div>
          <button onClick={handleAdd} style={buttonStyle}>
            Add
          </button>

          <button onClick={handleSubtract} style={buttonStyle}>
            Subtract
          </button>
        </div>

        <h2>Result: {result}</h2>
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
  width: "320px",
  margin: "0 auto",
  textAlign: "center",
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "12px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)"
};

const inputStyle = {
  width: "90%",
  padding: "10px",
  margin: "10px 0",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "6px"
};

const buttonStyle = {
  padding: "10px 16px",
  margin: "10px 5px",
  fontSize: "16px",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  backgroundColor: "#007bff",
  color: "white"
};

export default Q2;