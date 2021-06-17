import React, { Component } from 'react';


class RestaurantInput extends Component {
  state = {
    text: ''
  }

  handleOnChange = e => (this.setState({[e.target.name]: e.target.value}))
  
  handleOnSubmit = e => {
    e.preventDefault()
    const restaurant = {...this.state}
    this.props.addRestaurant(restaurant)
    this.setState({text: ''})
  }

  render() {

    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          New Restaurant Name:
          <input type="text" name="text" onChange={this.handleOnChange} value={this.state.text}></input>
          <input type="submit"></input>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
