import React from "react";

function Header() {
  const myStyledComponentStyles = {
    backgroundColor: '#f5e042',
    fontFamily: 'sans-serif',
    //padding: '10px',
    //margin: '5px',
    width: '425px',
    height: '100px',
    marginLeft: 50,
    marginRight: 50,
    boxShadow: '5px 5px 15px',
    borderRadius: 10,
    textAlign: 'center',
    border: '1px solid gold',
    borderWidth: 2,
    borderColor: '#fc9803',
    
  }
  return (
    <center><div style={myStyledComponentStyles}>
      <h1>Our Tap Room</h1>
      <br></br>
     <p>Browse our selections</p>
    </div></center>
    
  );
}

export default Header;