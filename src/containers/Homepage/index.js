import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export class Homepage extends Component {
  render() {
    const { about, listOfWorks } = this.props.data;

    return(
      <div>
        <section className="text-center">
          <h2 className="heading heading--2">
            {about.title}
          </h2>
          {about.text}
          <ul className="list-of-work">
            {
              listOfWorks.map( (el, key) => {
                return <li
                  key={`item-${key}`}
                  className="list-of-work__item">
                    {el}
                  </li>
              })
            }
          </ul>
        </section>
      </div>

    );
  }

}

Homepage.propTypes = {
  data: PropTypes.shape({
    about: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }),
    listOfWorks: PropTypes.array
  })
}
