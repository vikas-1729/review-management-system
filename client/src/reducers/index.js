import { combineReducers } from 'redux';
import { reviewList } from './reviewList';
import { submitReview } from './submitReview';
export default combineReducers({
  reviewList: reviewList,
  submitReview: submitReview,
});
