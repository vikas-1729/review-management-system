import {
  CLEAR_ALL,
  SUBMIT_REVIEW_ERROR,
  SUBMIT_REVIEW_START,
  SUBMIT_REVIEW_SUCCESS,
} from '../actions/action_type';

let intitalState = {
  inProgress: false,
  error: null,
  success: null,
};
export function submitReview(state = intitalState, action) {
  switch (action.type) {
    case CLEAR_ALL:
      return {
        ...state,
        inProgress: false,
        error: null,
        success: null,
      };
    case SUBMIT_REVIEW_START:
      return {
        ...state,
        inProgress: true,
      };
    case SUBMIT_REVIEW_SUCCESS:
      return {
        ...state,
        inProgress: false,
        success: action.message,
      };
    case SUBMIT_REVIEW_ERROR:
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
