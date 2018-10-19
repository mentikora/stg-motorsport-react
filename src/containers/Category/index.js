import React, { Component } from 'react';
import './style.scss';
import { CategoryItem } from './CategoryItem';

export class Category extends Component {
  render () {
    return (
      <article className="category">
        <h1 className="category__title heading heading--2">
          Drift category
        </h1>
        <ul className="category-container">
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
          <CategoryItem />
        </ul>
      </article>
    );
  }
}