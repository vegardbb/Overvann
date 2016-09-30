import React from "react";


export default class Footer extends React.Component {
  render() {

    const footerStyle = {
    backgroundColor: "#E5E5E5",
    position: "absolute",
    left: "0",
    bottom: "0",
    height: "50px",
    width: "100%",
    overflow:"hidden",
    };

    const centerText = {
      position: "fixed",
      left: "50%", 
      transform: "translate(-50%, 0)",
      marginTop: "15px"
    };

    return (
      <footer style={footerStyle}>
        <p style={centerText}>Copyright &copy; Ovase.no</p>
      </footer>
    );
  }
}