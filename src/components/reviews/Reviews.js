import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  
  renderReviews = () => {
    const thisRestaurantReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    return thisRestaurantReviews.map((review, index) => <Review key={index} review={review} deleteReview={this.props.deleteReview}/>)
  }
  
  render() {
    return (
      <div>
      <ul>
        {this.renderReviews()}
      </ul>
      </div>
    );
  }
};

export default Reviews;