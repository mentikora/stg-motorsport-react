import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../../components/Comment';

import './index.scss';

export class Homepage extends Component {
  render() {
    const { about, listOfWorks, workingHours } = this.props.data;

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

        <section className="text-center">
          <h2 className="heading heading-2">
            {workingHours.title}
          </h2>
          <ul className="working-hours">
            {
              workingHours.list.map( (el, key) => {
                return <li
                  key={key}
                  className="working-hours__item"
                >
                  <span className="working-hours__item-day">{el[0]}</span>
                  <span className="working-hours__item-hours">{el[1]}</span>
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
    listOfWorks: PropTypes.shape({
      title: PropTypes.string,
      list: PropTypes.array
    })
  })
}
