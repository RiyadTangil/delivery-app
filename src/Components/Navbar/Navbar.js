import React,{useState} from 'react';
import "./Navbar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
  const [showToggle,setShowToggle]=useState(false)
  const [showMobileDrp,setShowMobileDrp]=useState(false)
    return (
    
  <header id="header" className="bg-secondary py-1">
    <div className="container d-flex align-items-center ">

      <a href="index.html" className="logo me-auto"><img src="https://img.freepik.com/free-vector/letter-s-with-spoon-fork-logo-tableware-logo-fast-food-restaurant-logo_65373-25.jpg?size=338&ext=jpg" alt="" className="img-fluid"></img></a>

      <nav id="navbar" className={`${showToggle? "navbar-mobile" : "navbar"}`}>
        <ul>
          <li><a className="nav-link  active" href="/">Home</a></li>
           <li onClick={()=>setShowMobileDrp(!showMobileDrp)}  className="dropdown"><a href="#"><span>Restaurant</span> <i className="bi bi-chevron-down"></i></a>
            <ul className={`${showMobileDrp? "d-block":"d-none"}`}>
        
              <li className="text-decoration-none"><a href="/restaurant/popular">Popular</a></li>
              <li><a href="/restaurant/recent">Recently added</a></li>
            </ul>
          </li>
          <li><a className="getstarted " href="#about">Login</a></li>
        </ul>
        {showToggle?  <i onClick={()=>setShowToggle(false)} className="  mobile-nav-toggle"><FontAwesomeIcon  icon={faTimes} /></i>
        : 
        <i onClick={()=>setShowToggle(true)} className="mobile-nav-toggle "><FontAwesomeIcon  icon={ faBars} /></i>
        }
       
       
      </nav>
    </div>
  </header>

    );
};

export default Navbar;   