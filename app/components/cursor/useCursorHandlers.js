import { useContext, useCallback } from 'react';
import CursorContext from './CursorContext';

const useCursorHandlers = (options = {}) => {
  const [, setCursor] = useContext(CursorContext);

  const toggleCursor = () => {
    setCursor(({ active }) => ({ active: !active }));
  };

  const onMouseEnter = useCallback(
    (event) => {
      if (options.onMouseEnter) {
        options.onMouseEnter(event);
      }

      toggleCursor();
    },
    [options] // Include options in the dependency array
  );

  const onMouseLeave = useCallback(
    (event) => {
      if (options.onMouseLeave) {
        options.onMouseLeave(event);
      }

      toggleCursor();
    },
    [options] // Include options in the dependency array
  );

  return { onMouseEnter, onMouseLeave };
};

export default useCursorHandlers;
