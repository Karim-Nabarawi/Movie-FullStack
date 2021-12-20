const initState = {
  popular: null,
  upcoming: null,
  searched: [],
};

const moviesReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
      };
    default:
      return { ...state };
  }
};

export default moviesReducer;
