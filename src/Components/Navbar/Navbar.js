import React from 'react';
import "./Navbar.css"
const Navbar = () => {
    return (
    
  <header id="header" className="fixed-top  bg-secondary">
    <div className="container d-flex align-items-center ">

      <a href="index.html" className="logo me-auto"><img src="https://img.freepik.com/free-vector/letter-s-with-spoon-fork-logo-tableware-logo-fast-food-restaurant-logo_65373-25.jpg?size=338&ext=jpg" alt="" className="img-fluid"></img></a>

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto active" href="/">Home</a></li>
           <li className="dropdown nav-link"><a href="#"><span>Restaurant</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
        
              <li className="text-decoration-none"><a href="/restaurant/popular">Popular</a></li>
              <li><a href="/restaurant/recent">Recently added</a></li>
            </ul>
          </li>
          <li><a className="getstarted scrollto" href="#about">Get Started</a></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>

    );
};

export default Navbar;