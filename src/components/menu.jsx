// Import React and useState from the 'react' library
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import the CSS file for styling (make sure to adjust the path as needed)
import '../style/menu.css';
import LoginForm from './logginForm';
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

  const handleOpenPopup = () => {
    console.log('Abriendo popup...');
    
  };

  const handleClosePopup = () => {
    console.log('Cerrando popup...');
    
  };

  const buttonStyle = {
    

    color: 'white',
    backgroundColor: "#5ABFCB",/* Color de fondo */
   border:"none",
   borderRadius: "5px",
   padding:"5px",
  with:"100px",
   position:"relative",
   top:'-3px',
   left:'15px'
  };

  const validUsersData = {
    "LeidyLopes@prueba.co": "HelloWord",
    "AlejandroWills@prueba.co": "HelloWord",
    "CuentaGeneral@prueba.co": "HelloWord"
  };
  // Render the header component
  return (
    <header>
      <nav>
        
  <div id='LanguageSelectorC' className="LanguageSelectorC">

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
        <button id='Menuu' className={`menu-button ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span className="menu-icon">&#9776;</span> {/* Hamburger icon */}
        </button>
        <div className="line"></div>

        {/* Main menu */}
        <ul id='Menu' className={`menu ${menuOpen ? 'open' : ''}`}>
          
          <Link to="/"><li> <a href="#">HOME</a> </li> </Link>
          <Link to="/Error404"><li> <a href="#">ABOUT</a> </li> </Link>
          <Link to="/Error404"><li> <a href="#">TOPICS</a> </li> </Link>
          <Link to="/Error404"><li> <a href="#">RESOURCES</a> </li> </Link>
          <Link to="/Error404"><li> <a href="#">GAMES</a> </li> </Link>
          <Link to="/Error404"><li> <a href="#">BLOG</a> </li> </Link>

          <Link to="/Error404"><li> <a href="#">CONTACT</a> </li> </Link>
          <div id='botnCont' className="botnCont">
          <LoginForm
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            buttonStyle={buttonStyle}
            validUsersData={validUsersData}
             />
          <li><a href="#" id='singupBottomm' className="signup-buttonn">Sign Up</a></li>
          </div>
        </ul>
          
      </nav>
    </header>
  );
}

export default Menu;
