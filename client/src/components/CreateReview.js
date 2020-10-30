import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { clearAll, submitReviewFunction } from '../actions/submitReview';
function UserFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);
  function handleChange(e) {
    if (e.target.id === 'star') {
      if (e.target.value && e.target.value > 5) {
        e.target.value = 5;
      } else if (e.target.value && e.target.value < 1) {
        e.target.value = 1;
      }
    }
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange,
  };
}

function CreateReview({ submitReview, dispatch }) {
  useEffect(() => {
    return () => {
      dispatch(clearAll());
    };
  }, []);
  const title = UserFormInput('');
  const content = UserFormInput('');
  const customer_id = UserFormInput('');
  const product_id = UserFormInput('');
  const star = UserFormInput('');
  const submitForm = submitReview;
  const { inProgress, success, error } = submitForm;

  return (
    <form className="review-form">
      <span className="review-header">Review Form</span>
      <div className="field">
        <input type="title" placeholder="Title" required {...title} />
      </div>
      <div className="field">
        <textarea type="text" placeholder="Content" required {...content} />
      </div>
      <div className="field">
        <input
          type="text"
          placeholder="Customer Id"
          required
          {...customer_id}
        />
      </div>
      <div className="field">
        <input type="text" placeholder="Product Id" required {...product_id} />
      </div>
      <div className="field">
        <input
          id="star"
          type="number"
          min="1"
          max="5"
          placeholder="rating from 1 to 5 "
          {...star}
        />
      </div>
      <div className="field">
        {inProgress ? (
          <button disabled>Creating...</button>
        ) : (
          <button
            onClick={(e) => {
              e.preventDefault();
              if (
                title.value &&
                content.value &&
                product_id.value &&
                customer_id.value &&
                star.value
              ) {
                dispatch(
                  submitReviewFunction(
                    title.value,
                    content.value,
                    product_id.value,
                    customer_id.value,
                    star.value
                  )
                );
              } else {
                window.alert('please fill all the fields');
              }
            }}
          >
            Create Review
          </button>
        )}
      </div>
      {error && <span className="alert error-dailog">{error}</span>}
      {success && <span className="alert success-dailog">{success}</span>}
    </form>
  );
}
function mapToState(state) {
  return {
    submitReview: state.submitReview,
  };
}
export default connect(mapToState)(CreateReview);
