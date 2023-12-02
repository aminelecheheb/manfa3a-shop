type StateType = {
  showNav: boolean;
  model: ModelType;
  deliveryPriceGlobal: number;
  quantityGlobal: number;
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
  setDeliveryPriceGlobal: (price: number) => void;
  setQuantityGlobal: (quantity: number) => void;
};

type ModelType = {
  model: boolean;
  type: string;
  id: number;
};
