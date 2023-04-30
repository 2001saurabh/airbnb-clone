import axios from "axios";
import {
  FETCH_LIST_FAILURE,
  FETCH_LIST_REQUEST,
  FETCH_LIST_SUCCESS,
  ADD_LIST_SUCCESS,
} from "./actionType";

export const fetchList = (keyword) => async (dispatch) => {
  try {
    dispatch(fetchListRequest());
    const list = await axios.get(
      `https://airbnb-db.onrender.com/data?q=${keyword}`
    );
    console.log(list.data);
    dispatch(fetchListSuccess(list.data));
  } catch (error) {
    console.log(error, "fetching list data failed!!");
    error = error.message;

    dispatch(fetchListFailure(error));
  }
};

export const appendToList =
  ({ page = 1, perPage = 11, keyword = "" }) =>
  async (dispatch) => {
    try {
      dispatch(fetchListRequest());
      const list = await axios.get(
        `https://airbnb-db.onrender.com/data?q=${keyword}&page_no=${page}&per_page=${perPage}`
      );
      console.log(list.data);
      dispatch(addListSuccess(list.data));
    } catch (error) {
      console.log(error, "fetching list data failed!!");
      error = error.message;

      dispatch(fetchListFailure(error));
    }
  };

export const fetchListRequest = () => {
  return {
    type: FETCH_LIST_REQUEST,
  };
};

export const fetchListSuccess = (list) => {
  return {
    type: FETCH_LIST_SUCCESS,
    payload: { list, isLoading: false },
  };
};

export const addListSuccess = (list) => {
  return {
    type: ADD_LIST_SUCCESS,
    payload: { list, isLoading: false },
  };
};

export const fetchListFailure = (error) => {
  return {
    type: FETCH_LIST_FAILURE,
    payload: { isLoding: false, isError: true, error: error },
  };
};
