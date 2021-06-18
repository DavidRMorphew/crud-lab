import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  
  state = {
    text: ''
  }
  
  handleOnChange = e => (
    this.setState({text: e.target.value})
  )

  handleOnSubmit = e => {
    e.preventDefault()
    const newReview = {...this.state, restaurantId: this.props.restaurantId}
    this.props.addReview(newReview)
    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type="textarea" onChange={this.handleOnChange} value={this.state.text}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
