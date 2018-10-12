import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../../components/Comment';

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
          <p>
            {about.text}
          </p>
        </section>
        <section className="text-center">
          <h2 className="heading heading--2">
            {listOfWorks.title}
          </h2>
          <ul className="list-of-work">
            {
              listOfWorks.list.map( (el, key) => {
                return <li
                  key={`item-${key}`}
                  className="list-of-work__item">
                    {el}
                  </li>
              })
            }
          </ul>
          <Comment text={listOfWorks.comment} />
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
    listOfWorks: PropTypes.shape({
      title: PropTypes.string,
      list: PropTypes.array
    })
  })
}
