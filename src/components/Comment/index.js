import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export class Comment extends Component {
  render() {
    return (
      <div className="comment">
        {this.props.text}
      </div>
    );
  }
}

Comment.propTypes = {
  text: PropTypes.string
}