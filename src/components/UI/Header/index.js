import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <div className="container container-fluid">
        <span className="navbar-brand mb-0 h1">CakeFactory</span>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={(navData) => navData.isActive ? 'nav-link active': 'nav-link'}>
                CakeFactory
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/products" className={(navData) => navData.isActive ? 'nav-link active': 'nav-link'}>
                Products
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;