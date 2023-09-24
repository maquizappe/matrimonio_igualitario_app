import React, { useState } from 'react';
import CursorContext from './CursorContext';

const CursorContextProvider = ({ children }) => {
  const [cursor, setCursor] = useState({ active: false });

  return (
    <CursorContext.Provider value={[cursor, setCursor]}>
      {children}
    </CursorContext.Provider>
  );
};

export default CursorContextProvider;