import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Item = props => (
  <span className="item">
    {this.props.plantName}
  </span>
);

Item.propTypes = {
  plantName: PropTypes.string.isRequired
};

export default Item;
