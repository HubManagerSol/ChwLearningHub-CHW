// Import React and useState from the 'react' library
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import the CSS file for styling (make sure to adjust the path as needed)
import '../style/menu2.css';

// Import the image for the logo (adjust the path accordingly)
import ElSol from "../img/CHWLearningHUB_Logo.png"


  //traductor de idioma importacion 

  import LanguageSelector from './languageSelector';
// Define a functional component named Header
function Menu() {
  

  
  // Use the 'useState' hook to manage the 'menuOpen' state
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to toggle the menu state (open/close)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Render the header component
  return (
    <header>
      <nav>
        
  <div className="LanguageSelectorC">

    <LanguageSelector />
  </div>
        <div className='divContainer'>
   
          <img 
            className='logo'
            src={ElSol}
            alt="Logo"    
          />
        </div>
        
        {/* Button to toggle the menu on smaller screens */}
        <button id='Menu' className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="menu-icon">&#9776;</span> {/* Hamburger icon */}
        </button>
        <div className="line"></div>

        {/* Main menu */}
        <ul id='Menu' className={`menu ${menuOpen ? 'open' : ''}`}>
          
          <Link to="/"><li> HOME </li> </Link>
          <Link to="/Error404"><li> ABOUT </li> </Link>
          <Link to="/Error404"><li> TOPICS </li> </Link>
          <Link to="/Error404"><li> RESOURCES</li> </Link>
          <Link to="/Error404"><li> GAMES</li> </Link>
          <Link to="/Error404"><li> BLOG</li> </Link>
          <Link to="/Error404"><li> CONTACT </li> </Link>
          <div className="botnCont">
          </div>
        </ul>
          
      </nav>
    </header>
  );
}

// Export the Menu component as the default export
export default Menu;
