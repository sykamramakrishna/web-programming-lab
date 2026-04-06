import React, { useState } from "react";

function Q4() {
  const [mark1, setMark1] = useState("");
  const [mark2, setMark2] = useState("");
  const [mark3, setMark3] = useState("");
  const [average, setAverage] = useState("");
  const [grade, setGrade] = useState("");

  const calculateGrade = () => {
    const m1 = Number(mark1);
    const m2 = Number(mark2);
    const m3 = Number(mark3);

    const avg = (m1 + m2 + m3) / 3;
    setAverage(avg.toFixed(2));

    if (avg >= 90) {
      setGrade("A+");
    } else if (avg >= 75) {
      setGrade("A");
    } else if (avg >= 60) {
      setGrade("B");
    } else if (avg >= 50) {
      setGrade("C");
    } else {
      setGrade("Fail");
    }
  };

  return (
    <div style={pageStyle}>
      <div style={headerStyle}>
        <p style={{ margin: 0 }}>RAMAKRISHNA</p>
        <p style={{ margin: 0 }}>24BDS0165</p>
      </div>

      <div style={boxStyle}>
        <h1>Grade Calculator</h1>

        <input
          type="number"
          placeholder="Enter Subject 1 Marks"
          value={mark1}
          onChange={(e) => setMark1(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Enter Subject 2 Marks"
          value={mark2}
          onChange={(e) => setMark2(e.target.value)}
          style={inputStyle}
        />

        <input
          type="number"
          placeholder="Enter Subject 3 Marks"
          value={mark3}
          onChange={(e) => setMark3(e.target.value)}
          style={inputStyle}
        />

        <button onClick={calculateGrade} style={buttonStyle}>
          Calculate Grade
        </button>

        {average !== "" && (
          <div>
            <h2>Average: {average}</h2>
            <h2>Grade: {grade}</h2>
          </div>
        )}
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
  width: "350px",
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
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  padding: "10px 16px",
  marginTop: "10px",
  fontSize: "16px",
  border: "none",
  borderRadius: "6px",
  backgroundColor: "#28a745",
  color: "white",
  cursor: "pointer"
};

export default Q4;