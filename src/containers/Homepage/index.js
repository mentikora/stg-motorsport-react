import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../../components/Comment';
import './index.scss';

import image from './images/test.jpg';

export class Homepage extends Component {
  render() {
    const { welcome, about, listOfWorks, workingHours } = this.props.data;

    return(
      <>

        {/* welcome section */}
        <section className="welcome-section text-center">
          <div className="welcome-section__content">
            <hgroup>
              <h1 className="heading heading--1">
                {welcome.title}
              </h1>
              <h2 className="subheading">
                {welcome.subtitle}
              </h2>
            </hgroup>
          </div>
        </section>

        {/* <section className="text-center">
          <div className="container">
          </div>
        </section> */}

        {/* about-us */}
        <article className="homepage-article">
          <div className="container container--flex">
            <div className="side align-center">
              <h2 className="heading heading--2">
                {about.title}
              </h2>
              <p>
                {about.text}
              </p>
            </div>
            <div className="side align-center">
              <img className="image-bordered" src={image} alt="alt" />
            </div>
          </div>
        </article>

        {/* list-of-work */}
        <article className="homepage-article text-center">
          <div className="container">
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
          </div>
        </article>
        
        {/* working hours */}
        <article className="homepage-article text-center">
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
          <Comment text={workingHours.comment} />
          <p className="adress">
            Україна, Львів
            <br/>
            вул. Антоновича, 130А
            <br/>
            +38 (050) 430 24 99
          </p>
        </article>

      </>
    );
  }

}

Homepage.propTypes = {
  data: PropTypes.shape({
    welcome: PropTypes.shape({
      title: PropTypes.string,
      subtitle: PropTypes.string
    }),
    about: PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string
    }),
    listOfWorks: PropTypes.shape({
      title: PropTypes.string,
      list: PropTypes.array
    }),
    workingHours: PropTypes.shape({
      title: PropTypes.string,
      list: PropTypes.array
    })
  })
}
