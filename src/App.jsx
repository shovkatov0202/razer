import React from 'react';
import Nav from './components/Nav.jsx';
import Oka from './components/Oka.jsx';
import Laptop from './components/Laptop.jsx';
import Mice from './components/Mice.jsx';
import Hey from './components/Hey.jsx';
import Headsets from './components/Headsets.jsx';
import Chairs from './components/Chairs.jsx';
import Console from './components/Console.jsx';
import Keyboards from './components/Keyboards.jsx';
import Mobile from './components/Mobile.jsx';
import Gear from './components/Gear.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <>
      <Nav />
      <div className="container">
        <Hey />
      </div>
      <br />
      <br />
      <div className="kotta">
        <h1 className="fury">THE LATEST AND GREATEST GAMING GEAR</h1>
        <p className="toxa">Razer mice, keyboards, headsets, laptops & more</p>
        <br />
        <br />
        <br />
        <h1 className="fury">FRESH OFF THE LINE</h1>
        <p className="toxa">
          Check out our latest releases to secure the most up-to-date upgrades
          for your setup
        </p>
      </div>
      <br />
      <br />
      <div className="container">
        <Laptop />
      </div>
      <br />
      <br />
      <div className="katta">
        <h1 className="fury">BEST SELLERS</h1>
        <br />
        <p className="toxa">
          Join the hype train with the hottest products in our arsenal
        </p>
      </div>
      <br />
      <br />
      <div className="container">
        <Mice />
      </div>
      <br />
      <br />

      <div className="kichik">
        <br />
        <br />
        <img
          className="ilya"
          src="https://assets2.razerzone.com/images/pnx.assets/33b0f75b2605668f59d056f13cec54fc/1920x400-(6).webp"
          alt=""
        />
        <br />
        <br />
        <h1 className="fury">RAZER EXCLUSIVES</h1>
        <br />
        <p className="toxa">
          Explore unique products and services only available at our official
          online store
        </p>
      </div>
      <br />
      <br />
      <div className="container">
        <Headsets />
      </div>
      <br />
      <br />
      <div className="alohida">
        <br />
        <br />
        <img
          src="https://assets2.razerzone.com/images/pnx.assets/186921c07aa55486994e5d5de6ecc511/razer-skins-store-desktop.jpg"
          alt=""
        />
        <br />
        <br />
      </div>
      <br />
      <br />

      <br />
      <br />

      <div className="container">
        <Chairs />
      </div>
      <div className="alohida">
        <br />
        <br />
        <img
          src="https://assets2.razerzone.com/images/pnx.assets/d90c20bd9a4df3f52933b15e89306f08/viper-mini-signature-store-desktop.jpg"
          alt=""
        />
        <br />
        <br />
      </div>

      <br />
      <br />

      <div className="container">
        <Console />
      </div>
      <div className="alohida">
        <br />
        <br />
        <img
          src="https://assets2.razerzone.com/images/pnx.assets/33b0f75b2605668f59d056f13cec54fc/razer-esports-line-huntsmanv3pro-store_desktop_1920x400.webp"
          alt=""
        />
        <br />
        <br />
      </div>

      <div className="container">
        <Keyboards />
      </div>
      <div className="alohida">
        <br />
        <br />
        <img
          src="https://assets2.razerzone.com/images/pnx.assets/186921c07aa55486994e5d5de6ecc511/razer-skins-store-desktop.jpg"
          alt=""
        />
        <br />
        <br />
      </div>
      <div className="container">
        <Mobile />
      </div>
      <div className="alohida">
        <br />
        <br />
        <img
          src="https://assets2.razerzone.com/images/pnx.assets/33b0f75b2605668f59d056f13cec54fc/1920x400-(4).webp"
          alt=""
        />
        <br />
        <br />
      </div>
      <div className="container">
        <Gear />
      </div>
      <br />
      <br />
      <Oka />
      <br />
      <br />
      <br />
      <br />
      <div className="container">
        <Footer />
      </div>
    </>
  );
};

export default App;
