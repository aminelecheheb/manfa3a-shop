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

    default:
      return state;
  }
};

export default reducer;
