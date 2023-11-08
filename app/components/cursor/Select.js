import React from 'react';

const Select = () => {
    return (
      <select className="show-cursor">
        {Array(5).fill().map((item, idx) => (
          <option key={idx} value={idx}>
            Option {idx + 1}
          </option>
        ))}
      </select>
    );
  };
export default Select;