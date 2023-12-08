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
    // Lógica adicional al abrir el popup
  };

  const handleClosePopup = () => {
    console.log('Cerrando popup...');
    // Lógica adicional al cerrar el popup
  };

  const buttonStyle = {
    // Estilos personalizados para el botón
    backgroundColor: 'blue',
    color: 'white',
    // ... otros estilos
  };

  const validUsersData = {
    "WebDevelopers23": "ElSolNec"

    // ... otros usuarios y contraseñas
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
          
          <Link to="/"><li> HOME</li> </Link>
          <Link to="/Error404"><li> ABOUT</li> </Link>
          <Link to="/Error404"><li> TOPICS</li> </Link>
          <Link to="/Error404"><li> RESOURCES </li> </Link>
          <Link to="/Error404"><li> GAMES </li> </Link>
          <Link to="/Error404"><li> BLOG </li> </Link>
          <Link to="/Error404"><li> CONTACT</li> </Link>
          <div className="botnCont">

          <li><a href="/login" id='loguinBottomm' className="login-buttonn">Log In</a></li>
          <li><a href="/SingUp" id='singupBottomm' className="signup-buttonn">Sign Up</a></li>

          <div className='loginCont'>
      <LoginForm
        onOpenPopup={handleOpenPopup}
        onClosePopup={handleClosePopup}
        buttonStyle={buttonStyle}
        validUsersData={validUsersData}
      />
      </div>   <li><a href="#" id='singupBottomm' className="signup-buttonn">Sign Up</a></li>
 (loguin)
          </div>
        </ul>
          
      </nav>
    </header>
  );
}

export default Menu;
