//const BASE_ROOT = 'http://localhost:8000/api/v1';
const BASE_ROOT = 'https://review-management-system.herokuapp.com/api/v1';

export const API_URLS = {
  fetchAllReview: () => `${BASE_ROOT}/read/review/fetch`,
  submitReview: () => `${BASE_ROOT}/review_create`,
};
