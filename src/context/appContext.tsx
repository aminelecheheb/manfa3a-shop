import React, { useContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  showNav: false,
  model: {
    model: false,
    type: "",
    id: 0,
  },
};

const AppContext = React.createContext<ContextType>({
  state: initialState,
  toggleShowNav: () => {},
  showModel: () => {},
  hideModel: () => {},
});

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const toggleShowNav = () => {
    dispatch({ type: "TOGGLE_SHOW_NAV" });
  };

  const showModel = (type: string, id: number) => {
    dispatch({ type: "SHOW_MODEL", payload: { type, id } });
  };

  const hideModel = () => {
    dispatch({ type: "HIDE_MODEL" });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        toggleShowNav,
        showModel,
        hideModel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
