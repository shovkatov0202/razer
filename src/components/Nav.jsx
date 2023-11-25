import React from 'react';

const Nav = () => {
  return (
    <>
      <div
        className="nav
      "
      >
        <img
          className="rasm"
          src="https://assets2.razerzone.com/images/phoenix/razer-ths-logo.svg"
          alt=""
        />
        <div className="text">
          <p>Store</p>

          <p>PC</p>

          <p>Console</p>

          <p>Mobile</p>

          <p>Lifestyle</p>

          <p>Community</p>
        </div>
        <div className="cart-icon">🛒</div>
      </div>
    </>
  );
};

export default Nav;
