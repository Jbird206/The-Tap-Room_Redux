import React from 'react';
import PropTypes from "prop-types";

function DailyKeg(props) {
  const myStyledComponentStyles = {
    backgroundColor: '#f5e042',
    fontFamily: 'sans-serif',
    padding: '5px',
    margin: '20px',
    width: '300px',
    height: '150px',
    marginLeft: 50,
    marginRight: 50,
    boxShadow: '5px 5px 15px',
    borderRadius: 10,
    textAlign: 'center',
    border: '1px solid gold',
borderWidth: 2,
borderColor: '#fc9803'
    
  }
  return (
    <React.Fragment>
      <div style={myStyledComponentStyles}>
      <h2>Daily Special</h2>
      <hr />
      <h3>Name:</h3>
      <p>{props.kegList[0].name}</p>
      <h3>Flavor:</h3>
      <p>{props.kegList[0].flavor}</p><br />
      <img id="kegImage" src="https://i.pinimg.com/originals/07/27/b7/0727b7109259803133b831eeead88611.jpg" alt="keg" /><br />
      <h2>Description of the day</h2>
      <p>High volume, high-octane beer for your house parties.
      </p>
      <button id="DailyKegButton" onClick = {() => props.onKegSelection(props.kegList[0].id)}>Details</button>
      </div>
    </React.Fragment>
  );
}

DailyKeg.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default DailyKeg;