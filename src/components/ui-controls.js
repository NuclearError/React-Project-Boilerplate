import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputForm from './input-form';

const UIControls = () => (

  // There should be a button with show/hide logic for the user's input form here

  <div>
     {/*
    <h3>UI Controls:</h3>
    <ul>
      <li>Toggle Input Form</li>
      <li>Save Calendar (eg. to pdf)</li>
      <li>Toggle views</li>
    </ul>
    */}
    <InputForm />
  </div>
);

UIControls.propTypes = {
  //
};


export default UIControls;
