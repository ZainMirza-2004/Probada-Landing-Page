import React from 'react';


function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__wrapper">
          <div className="about__content">
            <h2 className="about__title">About Us</h2>
            <p className="about__description">
              We are a team of dedicated professionals committed to delivering top-notch solutions for your business needs. Our expertise spans across various domains, ensuring that we meet your expectations and help you achieve your goals.
            </p>
            <button aria-label="Learn more button" className="button about__button" type="button">
              Learn More
            </button>
          </div>
          <figure className="about__image">
            <img alt="About Us" src="img/about-us.svg" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default About;