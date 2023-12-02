const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "TOGGLE_SHOW_NAV":
      return {
        ...state,
        showNav: !state.showNav,
      };

    case "SHOW_MODEL":
      return {
        ...state,
        model: {
          model: true,
          type: action.payload.type,
          id: action.payload.id,
        },
      };

    case "HIDE_MODEL":
      return {
        ...state,
        model: {
          model: false,
          type: "",
          id: 0,
        },
      };

    case "SET_DELIVERY_PRICE_GLOBAL":
      return {
        ...state,
        deliveryPriceGlobal: action.payload,
      };

    case "SET_QUANTITY_GLOBAL":
      return {
        ...state,
        quantityGlobal: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
