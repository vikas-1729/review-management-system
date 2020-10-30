import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_SUCCESS_AGAIN,
} from '../actions/action_type';

let intitalState = {
  inProgress: false,
  error: null,
  list: [],
};
export function reviewList(state = intitalState, action) {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        inProgress: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        inProgress: false,
        list: action.data,
      };
    case FETCH_SUCCESS_AGAIN:
      return {
        ...state,
        inProgress: false,
        list: state.list.concat(action.data),
      };
    case FETCH_ERROR:
      return {
        ...state,
        inProgress: false,
        error: action.message,
      };

    default:
      return {
        ...state,
      };
  }
}
