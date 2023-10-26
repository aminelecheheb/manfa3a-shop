type StateType = {
  showNav: boolean;
};

type ActionType = {
  type: string;
  payload?: any;
};

type ContextType = {
  state: StateType;
  toggleShowNav: () => void;
};
