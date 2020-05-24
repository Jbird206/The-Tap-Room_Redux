import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewKegForm(props) {
  const myStyledComponentStyles = {
    backgroundColor: '#f5e042',
    fontFamily: 'sans-serif',
    padding: '10px',
    margin: '5px',
    width: '300px',
    height: '300px',
    marginLeft: 50,
    marginRight: 50,
    boxShadow: '5px 5px 15px',
    borderRadius: 10,
    textAlign: 'center',
    border: '1px solid gold',
borderWidth: 2,
borderColor: '#fc9803'
    
  }

  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      flavor: event.target.flavor.value,
      price: event.target.price.value,
      alcohol: event.target.alcohol.value,
      pints: 99,
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <div style={myStyledComponentStyles}>
      <h2>Add a Keg to the List!</h2>
      <hr />
      <form onSubmit={handleNewKegFormSubmission}>
      <label><b>Name </b></label>
        <input
          type='text'
          name='name'
          placeholder='Keg Name' /><br />
        <label><b>Brand</b></label>
        <input
          type='text'
          name='brand'
          placeholder='Keg Brand' /><br />
        <label><b>Flavor></b></label>
        <input
          type='text'
          name='flavor'
          placeholder='Keg Flavor' /><br />
        <label> <b>Price </b></label>
        <input
          name='price'
          placeholder='Price' /><br />
        <label><b>Alcohol </b></label>
        <input
          name='alcohol'
          placeholder='Alcohol by volume' /><br />
        <button type='submit'>Add Keg </button>
      </form></div>
    </React.Fragment>
  );
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;