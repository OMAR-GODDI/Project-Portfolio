import React  from 'react';
import { NavLink  } from 'react-router-dom';


const Navbar = () => {
 
    return (
        <div>
          <header className="header" id="navbar-collapse-toggle">
          <ul className="icon-menu d-none d-lg-block revealator-slideup revealator-once revealator-delay1">
            <li className="icon-box active">
              <i className="fa fa-home" />
              <NavLink to='/'><h2>Home</h2> </NavLink>
                
              
            </li>
            <li className="icon-box active">
              <i className="fa fa-user" />
              
              <a href="/about">
                <h2>About</h2>
              </a>
           
              
            </li>
            <li className="icon-box active">
              <i className="fa fa-briefcase" />
              <a href="/portfolio">
                <h2>Portfolio</h2>
              </a>
            </li>
            <li className="icon-box active">
              <i className="fa fa-envelope-open" />
              <a href="/contact">
                <h2>Contact</h2>
              </a>
            </li>
          </ul>
{/* Fixed Navigation Ends */}
{/* Mobile Menu Starts */}
<nav role="navigation" className="d-block d-lg-none">
  <div id="menuToggle">
    <input type="checkbox" />
    <span />
    <span />
    <span />
    <ul className="list-unstyled" id="menu">
      <li className="active"><a href='/'><i className="fas fa-home" /><span>Home</span></a></li>
      <li className="active"><a href="/about"><i className="fas fa-user" /><span>About</span></a></li>
      <li className="active"><a href="/portfolio"><i className="fas fa-folder-open" /><span>Portfolio</span></a></li>
      <li className="active"><a href="/contact"><i className="fas fa-envelope-open" /><span>Contact</span></a></li>
     
    </ul>
  </div>
</nav>
{/* Mobile Menu Ends */}



          
        </header>    
        </div>
    )
}

export default Navbar


