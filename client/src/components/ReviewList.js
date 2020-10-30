import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReview } from '../actions/fetch';
import { ReviewListItem } from './index';

class ReviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCurrent: 1,
    };
  }
  componentDidMount() {
    this.props.dispatch(fetchReview());
  }

  render() {
    const { data } = this.props;
    const { pageCurrent } = this.state;
    const { list, inProgress } = data;

    if (inProgress) {
      return <h1 className="loading">Loading ...</h1>;
    }
    let reviewList = [];

    for (
      let i = (pageCurrent - 1) * 5;
      i < list.length && pageCurrent * 5 + 5;
      i++
    ) {
      reviewList[i] = list[i];
    }

    return (
      <div className="review-container">
        {reviewList.map((review) => {
          return <ReviewListItem review={review} key={review._id} />;
        })}
        <div className="btn-container">
          {this.state.pageCurrent >= 2 && (
            <button
              className="btn save-btn"
              onClick={() => {
                if (pageCurrent < 2) {
                  return;
                }
                this.setState({
                  pageCurrent: pageCurrent - 1,
                });
              }}
            >
              back
            </button>
          )}
          {reviewList.length > 0 ? (
            <button
              className="btn save-btn"
              onClick={() => {
                this.props.dispatch(fetchReview(pageCurrent + 1));
                this.setState({
                  pageCurrent: pageCurrent + 1,
                });
              }}
            >
              Forward
            </button>
          ) : (
            <h2>No more review !!!!</h2>
          )}
        </div>
      </div>
    );
  }
}
function mapToState(state) {
  return {
    data: state.reviewList,
  };
}

export default connect(mapToState)(ReviewList);
