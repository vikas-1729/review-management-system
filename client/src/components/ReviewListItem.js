import React, { Component } from 'react';

class ReviewListItem extends Component {
  render() {
    const { review } = this.props;
    const { customer_id: customer } = review;

    let reviewInfo = {
      star: review.star,
      comment: review.comment,
    };
    let date1 = new Date(review.updatedAt);
    let months = [
      'Jan',
      'Feb',
      'March',
      'Apr',
      'May',
      'June',
      'July',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    let startArray = [];
    for (let i = 0; i < reviewInfo.star; i++) {
      startArray.push(
        <img
          height="30"
          width="30"
          src="/assest/images/star.png"
          alt="start"
          key={i}
        />
      );
    }
    for (let i = reviewInfo.star; i < 5; i++) {
      startArray.push(
        <img
          height="30"
          width="30"
          src="/assest/images/star-blank.png"
          alt="not -color"
          key={i}
        />
      );
    }
    return (
      <div className="review-item">
        <div className="up">
          <div className="star-smile">
            <div className="star">{startArray}</div>
            {reviewInfo.star >= 3 ? (
              <div className="smile">
                <img
                  height="50"
                  width="50"
                  src="/assest/images/smile.png"
                  alt="smile"
                />
              </div>
            ) : (
              <div className="smile">
                <img
                  height="50"
                  width="50"
                  src="/assest/images/sad.png"
                  alt="smile"
                />
              </div>
            )}
          </div>
          <div className="title">
            <span>{review.title}</span>
          </div>
        </div>
        <div className="middle">
          <div className="content">
            <span>{review.content}</span>
          </div>
        </div>
        <div className="down">
          <div className="customer-product">
            <div className="customer">
              <div className="customer-pic">
                <img
                  height="30"
                  width="30"
                  src="/assest/images/user.png"
                  alt="avatar"
                />
              </div>
              <div className="customer-info">
                <div className="customer-name">
                  <span className="light-word">{customer.name}</span>
                </div>
                <div className="date">
                  <span className="light-word">
                    {date1.getDate() +
                      ' ' +
                      months[date1.getMonth() - 1] +
                      ' ' +
                      date1.getFullYear()}
                  </span>
                </div>
              </div>
            </div>
            <div className="product">
              <div className="product-name">
                <span className="light-word">{reviewInfo.comment}</span>
              </div>
              <div className="product-pic">
                <img
                  height="30"
                  width="30"
                  src="/assest/images/comment1.png"
                  alt="product"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReviewListItem;
