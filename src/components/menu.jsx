// Import React and useState from the 'react' library
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Import the CSS file for styling (make sure to adjust the path as needed)
import '../style/menu.css';
import LoginForm from './logginForm';
import ElSol from "../img/CHWLearningHUB_Logo.png";
import LanguageSelector from './languageSelector';


function Menu() {
  
  const [menuOpen, setMenuOpen] = useState(false);
 const [topicsDropdownOpen, setTopicsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTopicsDropdown = () => {
    setTopicsDropdownOpen(!topicsDropdownOpen);
  };

  const handleOpenPopup = () => {
    console.log('Abriendo popup...');
    
  };

  const handleClosePopup = () => {
    console.log('Cerrando popup...');
    
  };

  const buttonStyle = {
    

    color: '#5ABFCB ',
    backgroundColor: "#FAF5ED",/* Color de fondo */
   border:"solid #5ABFCB 1px",
   borderRadius: "5px",
   padding:"2px",
   
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
          <li onClick={toggleTopicsDropdown}>
  
    <a href="#">TOPICS &gt; </a>
 
  {topicsDropdownOpen && (
    <ul className="topics-dropdown">
      <li>
        <Link to="/Error404">
          <a id="TitleMenu2" href="#">CHWs / Promotores</a>
        </Link>
        <ul className="subtopics">
          <Link to="/Error404"><a href="#">CHW/Promotor Philosophy</a></Link>
          <Link to="/Error404"><a href="#">Personal and professional Development</a></Link>
          <Link to="/Error404"><a href="#">CHW/P Career Pathway Opportunitiies</a></Link>
        </ul>
      </li>
      <li>
        <Link to="/Error404">
          <a id="TitleMenu2" href="#">Health Educatioin</a>
        </Link>
        <ul className="subtopics">
          <Link to="/Error404"><a href="#">Mental Health</a></Link>
          <Link to="/Error404"><a href="#">Diabetes</a></Link>
          <Link to="/Error404"><a href="#">Nutrition</a></Link>
          <Link to="/Error404"><a href="#">Chronic Diseases</a></Link>
          <Link to="/Error404"><a href="#">Sexually Transmitted Diseases</a></Link>
          <Link to="/Error404"><a href="#">Postpartum Depression</a></Link>
          <Link to="/Error404"><a href="#">Home Visitaton</a></Link>
          <Link to="/Error404"><a href="#">Oral Health</a></Link>
        </ul>
      </li>
      <li>
        <Link to="/Error404">
          <a id="TitleMenu2" href="#">Coordinators/ Supervisors</a>
        </Link>
        <ul className="subtopics">
          <Link to="/Error404"><a href="#">Recruitment and Interviewing</a></Link>
          <Link to="/Error404"><a href="#">Supervision and Preformace Apparaisals</a></Link>
          <Link to="/Error404"><a href="#">Mentorship</a></Link>
          <Link to="/Error404"><a href="#">Team Management</a></Link>
          <Link to="/Error404"><a href="#">Planning and Evaluation</a></Link>
        </ul>
      </li>
      <li>
        <Link to="/Error404">
          <a id="TitleMenu2" href="#">Agencies and Organizations</a>
        </Link>
        <ul className="subtopics">
          <Link to="/Error404"><a href="#">CHW Recruitment</a></Link>
          <Link to="/Error404"><a href="#">Training and Professional Development</a></Link>
          <Link to="/Error404"><a href="#">Program Planning and Evaluation</a></Link>
          <Link to="/Error404"><a href="#">Sustainability</a></Link>
        </ul>
      </li>
      <li>
        <Link to="/Error404">
          <a id="TitleMenu2" href="#">CHW Integration into Healthcare</a>
        </Link>
        <ul className="subtopics">
          <Link to="/Error404"><a href="#">Defining Clinical Teams and Health Care Teams</a></Link>
          <Link to="/Error404"><a href="#">CHW Role in Care Teams</a></Link>
          <Link to="/Error404"><a href="#">CHW Role Delineation in Care Teams</a></Link>
          <Link to="/Error404"><a href="#">Principles and Elements of CHW Integration</a></Link>
          <Link to="/Error404"><a href="#">Scope of Practice for CHW integration</a></Link>
          <Link to="/Error404"><a href="#">Organizational Readiness</a></Link>
          <Link to="/Error404"><a href="#">CHW Integration into Healthcare</a></Link>
          <Link to="/Error404"><a href="#">The Healthcare system</a></Link>
          <Link to="/Error404"><a href="#">CHW Documentation</a></Link>
        </ul>
      </li>
      <li>
        <Link to="/Error404">
          <a id="TitleMenu2" href="#">Community Engagement and Advocacy</a>
        </Link>
        <ul className="subtopics">
          <Link to="/Error404"><a href="#">Community Engagement and Advocacy</a></Link>
          <Link to="/Error404"><a href="#">Research and Investigation</a></Link>
          <Link to="/Error404"><a href="#">Community Health</a></Link>
          <Link to="/Error404"><a href="#">Partnerships and Coalition Building</a></Link>
        </ul>
      </li>
    </ul>
  )}
</li>
        

          <Link to="/Error404"><li> <a href="#">RESOURCES</a> </li> </Link>
          <Link to="/Error404"><li> <a href="#">GAMES</a> </li> </Link>
          <Link to="/Error404"><li> <a href="#">BLOG</a> </li> </Link>

          <Link to="/Error404"><li> <a href="#">CONTACT</a> </li> </Link>
          <div id='botnCont' className="botnCont">
            <div className='loginButtomCont'>
          <LoginForm
            onOpenPopup={handleOpenPopup}
            onClosePopup={handleClosePopup}
            buttonStyle={buttonStyle}
            validUsersData={validUsersData}
             />
             </div>
          <li><a href="#" id='singupBottomm' className="signup-buttonn">Sign Up</a></li>
          </div>
        </ul>
          
      </nav>
    </header>
  );
}

export default Menu;
