import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        { config.subHeading && (<p className="subheading">{config.subHeading}</p>) }
        { config.subSubHeading && (<p className="subsubheading">{config.subSubHeading}</p>) }
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
            How can you sum up a person
            <br />
            with words alone?
          </h2>
          <p>
            I aim to make the world better bit by bit through software
            <br />
            because today's world is run on software.
          </p>
        </header>
        <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label"></span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label"></span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label"></span>
            </span>
          </li>
        </ul>
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            I have a passion
            <br />
            for good software
          </h2>
          <p>
            My grandpa always used to say "hard work pays dividends." Later in life I found out that hard work is the difference between usable and unusable software.
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            And a thirst
            <br />
            for knowledge
          </h2>
          <p>
            "There's a big difference between knowing the name of something and knowing something." - Richard Feynman
          </p>
        </div>
      </section>
      {/* <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Augue eleifend aliquet
            <br />
            sed condimentum
          </h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
            imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
          </p>
        </div>
      </section> */}
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>The world is full of things to learn</h2>
          <p>
            And not enough time to learn them all. That's where I can help! I have years of learning and experience with various technologies and I've helped dozens of clients realize their goals.
          </p>
        </header>
        <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Product Design</h3>
            <p>
              Design is more than just fashion, it's about fashion and function working in tandem. Brilliant UI and UX are useless if the product simply doesn't work.
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Web Design</h3>
            <p>
              Mobile first is a nice idea, but progressive enhancement is far more powerful. Start in the space containing the most people and gradually move through every other space.
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Product Development</h3>
            <p>
              Start with an idea and nurture it, help it to grow into something bigger. Take all of the user feedback that you can get, nobody knows what your users want better than they do.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Social Media</h3>
            <p>
              No matter what you want to do, building a strong personal brand will only help to get you there. Take advantage of how connected our world is.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Personal Development</h3>
            <p>
              Keep your mind sharp and your skills up-to-date by learning something new! It also puts you in a position to help others in the same area when they need it.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Consulting</h3>
            <p>
              There is no better way to learn your own limits than consulting. Clients will consistently challenge you and you will either conquer that challenge or fold.
            </p>
          </li>
        </ul>
      </div>
    </section>

    {/* <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section> */}
  </Layout>
);

export default IndexPage;
