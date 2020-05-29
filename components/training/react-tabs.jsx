import React, {
  useState,
  useContext,
  createContext,
  useMemo,
  cloneElement,
  isValidElement,
} from 'react';
import useConstant from 'use-constant';

const TabsState = createContext([0, () => {}]);
const Elements = createContext({ tabs: 0, panels: 0 });

export const Tabs = ({ state: outerState, children }) => {
  const innerState = useState(0);
  const elements = useConstant(() => ({ tabs: 0, panels: 0 }));
  const state = outerState || innerState;

  return (
    <Elements.Provider value={elements}>
      <TabsState.Provider value={state}>{children}</TabsState.Provider>
    </Elements.Provider>
  );
};

export const useTabState = () => {
  const [activeIndex, setActiveIndex] = useContext(TabsState);
  const elements = useContext(Elements);

  const tabIndex = useConstant(() => {
    const currentIndex = elements.tabs;
    elements.tabs += 1;
    return currentIndex;
  });

  const onClick = useConstant(() => () => {
    setActiveIndex(tabIndex);
  });

  const state = useMemo(
    () => ({
      active: activeIndex === tabIndex,
      onClick,
    }),
    [activeIndex, onClick, tabIndex]
  );

  return state;
};

export const usePanelState = () => {
  const [activeIndex] = useContext(TabsState);
  const elements = useContext(Elements);

  const panelIndex = useConstant(() => {
    const currentIndex = elements.panels;
    elements.panels += 1;

    return currentIndex;
  });

  return panelIndex === activeIndex;
};

export const Tab = ({ children }) => {
  const state = useTabState();

  if (typeof children === 'function') {
    return children(state);
  }

  return isValidElement(children) ? cloneElement(children, state) : children;
};

export const Panel = ({ active, children }) => {
  const isActive = usePanelState();

  return isActive || active ? children : null;
};
