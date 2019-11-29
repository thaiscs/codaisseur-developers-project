const initialState = {
  post: null
};

export default function PostReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "ADD_POST": {
      return { ...state, post: action.payload };
    }
    default: {
      return state;
    }
  }
}
