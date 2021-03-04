import { NEWS_FETCH_START, NEWS_FETCH_SUCCESS, NEWS_FETCH_FAILED } from "../actions/actionTypes";

const initialState = [];

export default function(state = initialState, action) {
  switch (action.type) {
    case NEWS_FETCH_START: {
      return {
        ...state,
      };
    }
    case NEWS_FETCH_SUCCESS: {
      const { news } = action.payload;
      return {
        ...state,
        news
      };
    }
    case NEWS_FETCH_FAILED: {
      return {
        ...state,
      };
    }
    default:
      return state;
  }
}
