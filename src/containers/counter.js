import React, { Component } from 'react';
import { connect } from 'react-redux';

class Count extends Component {

  handleOnClick() {
    
    this.props.dispatch({
      type: 'INCREMENT',
    });
  }
  
  render() {
    return (
      <div>
        <button onClick={(event) => this.handleOnClick()}>
          Click
        </button>
        <p>{this.props.count.count}</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return { count: state.count };
};

export default connect(mapStateToProps)(Count);