import React from 'react';
import Keg from './Keg';
import PropTypes from "prop-types";

function KegList(props){
  const myStyledComponentStyles = {
    backgroundColor: '#f5e042',
    fontFamily: 'sans-serif',
    padding: '10px',
    margin: '15px',
    width: '300px',
    height: '100px',
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
      <center><h2>Keg List</h2>
      <hr /><p>Choose from the selection below</p></center></div>
      {props.kegList.map((keg) =>
        <div key={`key-${keg.id}`} id="KegListElement">
          <Keg 
            whenKegClicked = { props.onKegSelection }
            name={keg.name}
            brand={keg.brand}
            flavor={keg.flavor}
            price={keg.price}
            alcohol={keg.alcohol}
            pints={keg.pints}
            id={keg.id}
          />
          
        </div>
      )}

    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;