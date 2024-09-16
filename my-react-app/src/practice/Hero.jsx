import React from 'react';


function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <div className="hero__bg__circle" />
        <div className="hero__bg__line hero__bg__line--left-top" />
        <div className="hero__bg__line hero__bg__line--left-bottom" />
        <div className="hero__bg__line hero__bg__line--right-top" />
        <div className="hero__bg__line hero__bg__line--right-center" />
        <div className="hero__bg__line hero__bg__line--right-bottom" />
      </div>
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h1 className="hero__content__title">Landing Page<br />UI kit</h1>
            <div className="features__header__desc">
              Lorem ipsum is common placeholder text used to demonstrate the graphic elements of a document or visual presentation.
            </div>
            <button aria-label="Get started button" className="button hero__content__button" type="button">
              Get Started
            </button>
          </div>
          <figure className="hero__image">
            <img alt="Hero Photo" src="img/phone-mockup.svg" />
          </figure>
        </div>
      </div>
    </section>
  );
}

export default Hero;