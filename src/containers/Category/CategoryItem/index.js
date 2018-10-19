import React, { Component } from 'react';
// import { router, Link } from 'react-router-dom';
import './style.scss';
import image from './images/test.jpg';


export class CategoryItem extends Component {
  render () {
    return (
      <li className="category-item-preview" style={{ backgroundImage: `url(${image})` }}>
        {/* <Link to="/" className="category-item-preview__content-link">
          1
        </Link> */}
        <div className="category-item-preview__content-link">
          <h2 className>Subaru WRX</h2>
          <a href="/">read more</a>
        </div>
      </li>
    );
  }
}