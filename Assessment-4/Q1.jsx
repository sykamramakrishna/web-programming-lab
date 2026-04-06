import React from "react";

// Header Component (Top Left)
function Header() {
  return (
    <div style={headerStyles}>
      <p>RAMAKRISHNA</p>
      <p>24BDS0165</p>
    </div>
  );
}

// Functional Component with Props
function Welcome(props) {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>
        Hello {props.name} 👋
      </h1>

      <h2 style={styles.subheading}>
        Welcome to {props.city}
      </h2>

      <p style={styles.text}>
        This is a simple React application demonstrating functional components,
        props, JSX, and inline styling.
      </p>
    </div>
  );
}

// Main Q1 Component
function Q1() {
  return (
    <>
      <Header />
      <Welcome name="RAMAKRISHNA" city="Vellore" />
    </>
  );
}

// Styles
const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial",
    backgroundColor: "#111",
    color: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  heading: {
    color: "#00f7ff"
  },
  subheading: {
    color: "#ff00c8"
  },
  text: {
    fontSize: "18px"
  }
};

// Header Styles
const headerStyles = {
  position: "fixed",
  top: "10px",
  left: "10px",
  backgroundColor: "rgba(0,0,0,0.7)",
  color: "#fff",
  padding: "8px 12px",
  borderRadius: "8px",
  fontSize: "14px",
  fontWeight: "bold",
  zIndex: 1000
};

export default Q1;