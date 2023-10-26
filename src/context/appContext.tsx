import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  showNav: false,
};

const AppContext = React.createContext<ContextType>({
  state: initialState,
  toggleShowNav: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleShowNav = () => {
    dispatch({ type: "TOGGLE_SHOW_NAV" });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        toggleShowNav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
