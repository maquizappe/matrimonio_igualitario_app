import { useContext, useCallback } from 'react';
import CursorContext from './CursorContext';

const useCursorHandlers = (options = {}) => {
  const [, setCursor] = useContext(CursorContext);

  // Define toggleCursor outside of useCallback
  const toggleCursor = useCallback(() => {
    setCursor(({ active }) => ({ active: !active }));
  }, [setCursor]);

  const onMouseEnter = useCallback(
    (event) => {
      if (options.onMouseEnter) {
        options.onMouseEnter(event);
      }

      toggleCursor();
    },
    [options, toggleCursor]
  );

  const onMouseLeave = useCallback(
    (event) => {
      if (options.onMouseLeave) {
        options.onMouseLeave(event);
      }

      toggleCursor();
    },
    [options, toggleCursor]
  );

  return { onMouseEnter, onMouseLeave };
};

export default useCursorHandlers;