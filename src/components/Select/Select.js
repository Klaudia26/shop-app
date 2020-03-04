import React from 'react';
import './Select.scss';

const Select = (props) => {
  return (
    <select className="select" onChange={props.handleChange}>
      <option>Select</option>
      <option value="highestToLowest">Highest to lowest</option>
      <option value="lowestToHighest">Lowest to highest</option>
    </select>
  );
};
export default Select;
