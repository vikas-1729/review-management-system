import { API_URLS } from '../helpers/urls';
import { getFormBody } from '../helpers/utils';
import {
  FETCH_ERROR,
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_SUCCESS_AGAIN,
} from './action_type';

export function fetchStart() {
  return {
    type: FETCH_START,
  };
}

export function fetchSuccessAgain(data) {
  return {
    type: FETCH_SUCCESS_AGAIN,
    data,
  };
}
export function fetchSuccess(data) {
  return {
    type: FETCH_SUCCESS,
    data,
  };
}
export function fetchError(message) {
  return {
    type: FETCH_ERROR,
    message: message,
  };
}

export function fetchReview(page = 1) {
  return (dispatch) => {
    const fetchApi = API_URLS.fetchAllReview();
    dispatch(fetchStart());
    fetch(fetchApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ page: page }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        if (data.success) {
          if (page === 1) {
            dispatch(fetchSuccess(data.data));
          } else {
            dispatch(fetchSuccessAgain(data.data));
          }
          return;
        }
        dispatch(fetchError(data.message));
      })
      .catch((err) => console.log(err));
  };
}
