import {
  FETCH_LIST_FAILURE,
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  ADD_LIST_SUCCESS,
} from "./actionType";

const initialState = {
  loading: false,
  isError: false,
  list: [],
  query: null,
  error: "",
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        isError: false,
        list: action.payload.list,
        error: "",
      };
    case FETCH_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        isError: true,
        list: [],
        error: action.payload.error,
      };

    case ADD_LIST_SUCCESS: {
      return {
        ...state,
        loading: false,
        isError: false,
        list: [...state.list, ...action.payload.list],
        error: ""
      }
    }
    default:
      return state;
  }
};

export default listReducer;
