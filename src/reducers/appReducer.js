export const initialState = {
  loading: false,
  error: false,
  orders: [],
  activities: [],
  courses: [],
  events: [],
};

export const appReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true, error: false };

    case "SET_DATA":
      return {
        ...state,
        loading: false,
        [action.payload.type]: action.payload.data || [],
      };

    case "ERROR":
      return { ...state, loading: false, error: true };

    default:
      return state;
  }
};