import React from 'react'
import PropTypes from "prop-types";
export const Sample = (props) => {
    const {color} = props;
  return (
    <div style={{backgroundColor:color}}>Sample</div>
  )
}


Sample.propTypes = {
    color: PropTypes.oneOf(["red","green","blue"]).isRequired,
}