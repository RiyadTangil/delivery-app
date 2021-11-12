import React,{useState} from 'react';
import "./Navbar.css"
const Navbar = () => {
  const [showToggle,setShowToggle]=useState(true)
    return (
    
  <header id="header" className="bg-secondary">
    <div className="container d-flex align-items-center ">

      <a href="index.html" className="logo me-auto"><img src="https://img.freepik.com/free-vector/letter-s-with-spoon-fork-logo-tableware-logo-fast-food-restaurant-logo_65373-25.jpg?size=338&ext=jpg" alt="" className="img-fluid"></img></a>

      <nav id="navbar" className={`${showToggle? "navbar-mobile" : "navbar"}`}>
        <ul>
          <li><a className="nav-link  active" href="/">Home</a></li>
           <li className="dropdown nav-link"><a href="#"><span>Restaurant</span> <i className="bi bi-chevron-down"></i></a>
            <ul>
        
              <li className="text-decoration-none"><a href="/restaurant/popular">Popular</a></li>
              <li><a href="/restaurant/recent">Recently added</a></li>
            </ul>
          </li>
          <li><a className="getstarted " href="#about">Login</a></li>
        </ul>
        {showToggle?  <i onClick={()=>setShowToggle(false)} className="bi bi-list  d-sm-block d-md-none  mobile-nav-toggle">show</i>
        : 
        <i onClick={()=>setShowToggle(true)} className="bi bi-list  mobile-nav-toggle d-sm-block d-md-none ">remove</i>
        }
       
       
      </nav>
    </div>
  </header>

    );
};

export default Navbar;