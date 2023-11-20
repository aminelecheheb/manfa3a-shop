type StateType = {
  showNav: boolean;
  model: boolean;
};

type ActionType = {
  type: string;
  payload?: any;
};

type ContextType = {
  state: StateType;
  toggleShowNav: () => void;
  showModel: () => void;
  hideModel: () => void;
};
