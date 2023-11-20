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
        model: true,
      };

    case "HIDE_MODEL":
      return {
        ...state,
        model: false,
      };

    default:
      return state;
  }
};

export default reducer;
