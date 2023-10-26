const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "SET_ACTIVE_NAV":
      return {
        ...state,
        activeNav: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
