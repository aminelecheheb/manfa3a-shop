type StateType = {
  showNav: boolean;
  model: ModelType;
};

type ActionType = {
  type: string;
  payload?: any;
};

type ContextType = {
  state: StateType;
  toggleShowNav: () => void;
  showModel: (type: string, id: number) => void;
  hideModel: () => void;
};

type ModelType = {
  model: boolean;
  type: string;
  id: number;
};
