
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from '../styles/Titles.css'
import '../components/shared/buttons/Button'; 
import '../components/shared/buttons/ButtonSkills'; 
import {  } from "../styles/Profile.css";
import Header from '../components/core/Header';
import InterestCard from '../components/shared/cards/InterestCard'
import TopicsCard from '../components/shared/cards/TopicsCard'
import {} from '../styles/Header.css'
import {} from '../styles/Titles.css'
import Menu from '../components/menu2';
import {  } from "./home";
import SearchBar2 from "../components/searchbar2";
import Footer from '../components/footer';
import Card from '../components/cards1';
import imgC1 from "../img/1racard.svg";
import imgC2 from "../img/2card.svg";
import imgC3 from "../img/3card.svg";
import imgC4 from "../img/4cart.svg";
import imgC5 from "../img/6card.svg";
import imgC6 from "../img/7card.svg";
import icon_career from "../mg-2/icon_career.svg";
import introduction_icon from "../mg-2/introduction_icon.svg"
import pencil_icon from "../mg-2/pencil_icon.svg"





const ChwIntegrationHealthcare = () => {

  return (
    <div style={{ maxWidth:'1920px',  backgroundColor:'white' }}> 
      <main  id="main1" className="main1" >
      <Menu></Menu>
      <div style={{position:"relative", backgroundColor:"transparent", left:'100px', width: '1440px', boxSizing: 'border-box',top:"50px" }}>
      <div style={{position:'relative',top:"-90px", boxSizing: 'border-box', zIndex: 1 }}>
        <SearchBar2 />
      </div>
      <div style={{ width: '100%', boxSizing: 'border-box',position:"relative" }}>
      <Header  imageUrl="/mg-2/heltyy.png"/> 
      </div>
      <div className='row'>
        <div className='col-12'>
          <p className='title-route'>Home - CHWs / CHW Integration into Healthcare</p>
            <div className='col-4'>
              <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Defining Clinical Teams and Health Care Teams</h1>
              <InterestCard img={icon_career} text='CHWs and Clinical Care Teams' />
          </div>

          <div className='row'>
            <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>CHW Role in Care Teams</h1>
            <div className="col-4">
              <InterestCard img={introduction_icon} text='The Essence and Role of CHWs' style={{ marginRight: '10px' }} />
            </div>
            <div className="col-4">
              <InterestCard img={pencil_icon} text='CHWs Role as a Professional
Health Worker in a Care Team' style={{ marginRight: '10px' }} />
            </div>
            </div>
        <div>
          <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>CHW Role Delineation in Care Teams</h1>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <InterestCard img={'/mg-2/resume.svg'} text='CHW Role and Clinical
Staff Role' style={{ marginRight: '10px' }} />
          </div>
          <div className="col-sm-4">
            <InterestCard img={'/mg-2/message_icon.svg'} text='Bidirectional and Vertical
Approaches in Health Aare' style={{ marginRight: '10px' }} />
          </div>
        </div>
      <div>
        <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Principles and Elements of CHW integration</h1>
      </div>
      <div className="row">
          <div className="col-sm-4">
            <InterestCard img={'/mg-2/resume.svg'} text='Principles for CHW integration ' style={{ marginRight: '10px' }} />
          </div>
          <div className="col-sm-4">
            <InterestCard img={'/mg-2/message_icon.svg'} text='Elements of CHW
implementation' style={{ marginRight: '10px' }} />
          </div>
        </div>

        <div>
        <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Scope of Practice for CHW integration</h1>
      </div>
      <div className="row">
          <div className="col-sm-4">
            <InterestCard img={'/mg-2/resume.svg'} text='CHW Scope of Practice' style={{ marginRight: '10px' }} />
          </div>
          <div className="col-sm-4">
            <InterestCard img={'/mg-2/message_icon.svg'} text='CHW services
and interventions ' style={{ marginRight: '10px' }} />
          </div>
        </div>

        <div>
        <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Organizational Readiness</h1>
      </div>
      <div className="row">
          <div className="col-sm-4">
            <InterestCard img={'/mg-2/resume.svg'} text='CHW integration barriers
and solutions ' style={{ marginRight: '10px' }} />
          </div>
          <div className="col-sm-4">
            <InterestCard img={'/mg-2/message_icon.svg'} text='CHW plan for assessments, 
documentation and supervision' style={{ marginRight: '10px' }} />
          </div>
        </div>

      <div className="title-h1-chws my-4" style={{paddingTop: "15px"}}>Featured</div>
      <div className="row">
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/card5.png'}  title="The role of CHW" subtitle="Hiring and Retention" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/card5.png'} className="mx-4" title="Tips for recruiting and
interviewing CHWs" subtitle="Supervision " text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/card5.png'} title="Community satisfaction tip sheet" subtitle="Performance Appraisals" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/card5.png'}  title="Evaluation tools for CHW
supervisors" subtitle="Management" text="Community Health Workers (CHWs) are trusted members of the communities where they live..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/card5.png'} className="mx-4" title="Professional Boundaries 
Worksheet Template" subtitle="Team Building and Management " text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/card5.png'} title="Strategic Action Plan Example" subtitle="Strategic Action Planning and Evaluation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
        </div>
      </div>
    </div>
          
      </div>
      <div style={{width:'1440px',marginLeft: '30px', backgroundColor:'#F9F9F9', borderRadius:'10px',  position:"relative", top:'80px', left:'4%'}}>
      <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold', marginLeft:"30px"}}>Other topics to explore</h1>
      <div className='row' style={{}}>
      <div className='col-12' style={{}}>
        <Link to="/chws-promoter">
          <Card
            title="CHW's/ promotores"
            imageUrl={imgC1}
          />
        </Link>
        <Link to="/CoordinatorsAndSupervisors">
          <Card
            title="Coordinators and Supervisors"   
            imageUrl={imgC3}
          />
        </Link>
        <Link to="/CoordinatorsAndSupervisors">
          <Card
            title="Agencies and Organizations"   
            imageUrl={imgC4}
          />
        </Link>
        <Link to="/ChwIntegrationHealthcare">
          <Card
            title="CHW into Healthcare"   
            imageUrl={imgC5}
          />
        </Link>
        <Link to="/CommunityEngagementAdvocacy">
          <Card
            title="Community Engagement and Advocacy"   
            imageUrl={imgC6}
          />
        </Link>
      </div>
      </div>
      </div>
          </main>
          <div style={{position:'relative', top:'450px', backgroundColor:'#003d6a'}}>
              <Footer />
          </div>
    </div>
  );
};

export default ChwIntegrationHealthcare;
