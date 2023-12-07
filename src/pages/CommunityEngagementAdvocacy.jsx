
import React from 'react';
import { Link } from 'react-router-dom';
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
// import imgC1 from "../img/1racard.svg";
import imgC2 from "../img/2card.svg";
import imgC3 from "../img/3card.svg";
import imgC4 from "../img/4cart.svg";
import imgC5 from "../img/6card.svg";
import imgC6 from "../img/7card.svg";
import icon_career from "../mg-2/icon_career.svg";
import introduction_icon from "../mg-2/introduction_icon.svg"
import pencil_icon from "../mg-2/pencil_icon.svg"
import roles_icon from "../mg-2/roles_icon.svg"





const CommunityEngagementAdvocacy = () => {

  return (
    <div style={{ maxWidth:'1920px',  backgroundColor:'white' }}> 
      <main  id="main1" className="main1" >
      <Menu></Menu>
      <div style={{position:"relative", backgroundColor:"transparent", left:'100px', width: '1440px', boxSizing: 'border-box',top:"50px" }}>
      <div style={{position:'relative',top:"-90px", boxSizing: 'border-box', zIndex: 1 }}>
        <SearchBar2 />
      </div>
      <div style={{ width: '100%', boxSizing: 'border-box',position:"relative" }}>
        <Header/> 
      </div>
      <div className='row'>
        <div className='col-12'>
          <p className='title-route'>Home - CHWs / Promotores</p>
            <div className='col-4'>
              <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>CHW/P Career Pathway Opportunities</h1>
              <InterestCard img={icon_career} text='Career Advancement Opportunities' />
          </div>

          <div className='row'>
            <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Community Health Workers Philosophy</h1>
            <div className="col-4">
              <InterestCard img={introduction_icon} text='Introduction to CHW/Ps' style={{ marginRight: '10px' }} />
            </div>
            <div className="col-4">
              <InterestCard img={pencil_icon} text='Popular Education' style={{ marginRight: '10px' }} />
            </div>
            <div className="col-4 mb-4">
              <InterestCard img={roles_icon} text='Roles & Core Competencies C3' />
            </div>
            </div>
        <div>
          <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Personal and Professional Development</h1>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <InterestCard img={'/mg-2/resume.svg'} text='Digital Profile' style={{ marginRight: '10px' }} />
          </div>
          <div className="col-sm-4">
            <InterestCard img={'/mg-2/message_icon.svg'} text='Messages' style={{ marginRight: '10px' }} />
          </div>
          <div className="col-sm-4">
            <InterestCard img={'/mg-2/schedule_icon.svg'} text='Schedule' />
          </div>
        </div>
      <div className="row">
        <div className="col-sm-4">
          <InterestCard img={'/mg-2/resume.svg'} text='Digital Profile' style={{ marginRight: '10px' }} />
        </div>
        <div className="col-sm-4">
          <InterestCard img={'/mg-2/message_icon.svg'} text='Messages' style={{ marginRight: '10px' }} />
        </div>
        <div className="col-sm-4">
          <InterestCard img={'/mg-2/schedule_icon.svg'} text='Schedule' />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <InterestCard img={'../mg-2/resume.svg'} text='Digital Profile' style={{ marginRight: '10px' }} />
        </div>
        <div className="col-sm-4">
          <InterestCard img={'/mg-2/message_icon.svg'} text='Messages' style={{ marginRight: '10px' }} />
        </div>
        <div className="col-sm-4">
          <InterestCard img={'/mg-2/schedule_icon.svg'} text='Schedule' />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <InterestCard img={'/mg-2/schedule_icon.svg'} text='Schedule' />
        </div>
      </div>
      <div>
        <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>CHW/P Career Pathway Opportunities</h1>
      </div>
      <div className="row">
        <div className="col-sm-4">
          <InterestCard img={'/mg-2/resume.svg'} text='Digital Profile' style={{ marginRight: '10px' }} />
        </div>
      </div>
    {/* final cards */}
      <div className="title-h1-chws my-4" style={{paddingTop: "15px"}}>Featured</div>
        <div className="row">
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/card5.png'}  title="Who are Community Health Workers?" subtitle="Introduction to CHWs/Ps" text="Community Health Workers (CHWs) are trusted members of the communities where they live..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/card5.png'} className="mx-4" title="What is a CHW?" subtitle="Roles & Core Competencies C3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/card5.png'} title="Qualities of a CHW (Part 2)" subtitle="Roles & Core Competencies C3" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/card5.png'}  title="House of Popular Education " subtitle="Popular Education" text="Community Health Workers (CHWs) are trusted members of the communities where they live..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/card5.png'} className="mx-4" title="Popular Education Activities for Awareness" subtitle="Popular Education" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/card5.png'} title="What is a facilitator?" subtitle="Group Facilitation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
        </div>
      </div>
    </div>
          
      </div>
      <div style={{width:'1440px',marginLeft: '30px', backgroundColor:'#F9F9F9', borderRadius:'10px',  position:"relative", top:'80px', left:'4%'}}>
      <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold', marginLeft:"30px"}}>Other topics to explore</h1>
      <div className='row' style={{}}>
      <div className='col-12' style={{}}>
      <Link to="/CommunityHealthEducation">
          <Card
            title="Community Health Education"   
            imageUrl={imgC2}
          />
        </Link>
        <Link to="/CommunityHealthEducation">
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
        <Link to="/ChwIntegrationHealthcare">
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

export default CommunityEngagementAdvocacy;
