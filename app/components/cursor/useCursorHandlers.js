import { useContext, useCallback } from 'react';
import CursorContext from './CursorContext';

const useCursorHandlers = (options = {}) => {
    const [, setCursor] = useContext(CursorContext);
  
    const toggleCursor = () => {
      setCursor(({ active }) => ({ active: !active }));
    };
  
    const onMouseEnter = useCallback((event) => {
      if (options.onMouseEnter) {
        options.onMouseEnter(event);
      }
  
      toggleCursor();
    }, [options]);
  
    const onMouseLeave = useCallback((event) => {
      if (options.onMouseLeave) {
        options.onMouseLeave(event);
      }
  
      toggleCursor();
    }, [options]);
  
    return { onMouseEnter, onMouseLeave };
  };
  
  export default useCursorHandlers;