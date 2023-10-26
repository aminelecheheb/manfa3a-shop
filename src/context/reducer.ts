const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "TOGGLE_SHOW_NAV":
      return {
        ...state,
        showNav: !state.showNav,
      };

    default:
      return state;
  }
};

export default reducer;
