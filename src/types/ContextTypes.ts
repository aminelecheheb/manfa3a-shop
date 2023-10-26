type StateType = {
  activeNav: string;
};

type ActionType = {
  type: string;
  payload?: any;
};

type ContextType = {
  state: StateType;
  setActiveNav: (value: string) => void;
};
