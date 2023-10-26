import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  activeNav: "home",
};

const AppContext = React.createContext<ContextType>({
  state: initialState,
  setActiveNav: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setActiveNav = (value: string) => {
    dispatch({ type: "SET_ACTIVE_NAV", payload: value });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        setActiveNav,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
