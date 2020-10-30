import { API_URLS } from '../helpers/urls';
import {
  CLEAR_ALL,
  SUBMIT_REVIEW_ERROR,
  SUBMIT_REVIEW_START,
  SUBMIT_REVIEW_SUCCESS,
} from './action_type';
import { getFormBody } from '../helpers/utils';
export function clearAll() {
  return {
    type: CLEAR_ALL,
  };
}
const base_value_obj = '5f9c2b5594fcb10017abee8';
export function submitReviewStart() {
  console.log('doing good');
  return {
    type: SUBMIT_REVIEW_START,
  };
}
export function submitReviewSuccess() {
  return {
    type: SUBMIT_REVIEW_SUCCESS,
    message: 'Review created successfully once it approved it is visible',
  };
}
export function submitReviewError(message) {
  return {
    type: SUBMIT_REVIEW_ERROR,
    message: message,
  };
}

export function submitReviewFunction(
  title,
  content,
  product_id,
  customer_id,
  star
) {
  return (dispatch) => {
    dispatch(submitReviewStart());
    console.log('okk function');
    const submitReviewUrl = API_URLS.submitReview();
    let obj = {
      title: title,
      content: content,
      product_id: base_value_obj + product_id,
      customer_id: base_value_obj + customer_id,
      status: 'pending',
      star: star,
      comment: getRandomInt(10),
    };
    fetch(submitReviewUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody(obj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('dataSubmit', data);
        if (data.success) {
          dispatch(submitReviewSuccess());
          return;
        }
        dispatch(submitReviewError(data.message));
      })
      .catch((error) => console.log('error', error));
  };
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

//5f9921eb4e3aea0328d62646
//5f9921eb4e3aea0328d62645
//https://git.heroku.com/review-system-backend.git
