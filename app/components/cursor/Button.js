import React from 'react';
import useCursorHandlers from './useCursorHandlers';

const Button = () => {
  const cursorHandlers = useCursorHandlers();

  return (
    <button type="button" style={{ padding: '1rem' }} {...cursorHandlers}>
      HOVER ME
    </button>
  );
};

export default Button;