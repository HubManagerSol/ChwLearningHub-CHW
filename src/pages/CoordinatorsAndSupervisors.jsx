
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/shared/buttons/Button'; 
import '../components/shared/buttons/ButtonSkills'; 
import {  } from "../styles/Profile.css";
import Header from '../components/core/Header';
import InterestCard from '../components/shared/cards/InterestCard'
import TopicsCard from '../components/shared/cards/TopicsCard'
import {} from '../styles/Header.css'
import {} from '../styles/Titles.css'
import Menu from '../components/menu2';
import {  } from "../pages/home";
import SearchBar2 from "../components/searchbar2";
import Footer from '../components/footer';
import Card from '../components/cards1';
// import imgC1 from "../img/1racard.svg";
import imgC2 from "../img/2card.svg";
import imgC3 from "../img/3card.svg";
import imgC4 from "../img/4cart.svg";
import imgC5 from "../img/6card.svg";
import imgC6 from "../img/7card.svg";
import hiring_icon from "../mg-2/hiring_icon.svg"
import supervision  from "../mg-2/supervision.svg"
import performance  from "../mg-2/performance.svg"
import mentorship_icon  from "../mg-2/mentorship_icon.svg"
import team_icon  from "../mg-2/team_icon.svg"
import strategic_icon  from "../mg-2/strategic_icon.svg"
import Pic from "../mg-2/Pic.png"





const CoordinatorsAndSupervisors = () => {

  return (
    <div style={{ maxWidth:'1920px',  backgroundColor:'white' }}> 
      <main  id="main1" className="main1" >
      <Menu></Menu>
      <div style={{position:"relative", backgroundColor:"transparent", left:'100px', width: '1440px', boxSizing: 'border-box',top:"50px" }}>
      <div style={{position:'relative',top:"-90px", boxSizing: 'border-box', zIndex: 1 }}>
        <SearchBar2 />
      </div>
      <div style={{ width: '100%', boxSizing: 'border-box',position:"relative" }}>
      <Header  imageUrl="/mg-2/header.png"/> 
      </div>
      <div className='row'>
        <div className='col-12'>
          <p className='title-route'>Home - CHWs / Coordinators and Supervisors</p>
            <div className='col-4'>
              <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Recruitment and Interviewing </h1>
              <InterestCard img={hiring_icon} text='Hiring and Retention ' />
          </div>

          <div className='row'>
            <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Supervision and Performance Appraisals</h1>
            <div className="col-4">
              <InterestCard img={supervision} text='Supervision ' style={{ marginRight: '10px' }} />
            </div>
            <div className="col-4">
              <InterestCard img={performance} text='Performance ' style={{ marginRight: '10px' }} />
            </div>
          </div>
        <div>
          <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Mentorship</h1>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <InterestCard img={mentorship_icon} text='Mentorship and Motivation' style={{ marginRight: '10px' }} />
          </div>
        </div>
        <div>
          <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Team Management</h1>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <InterestCard img={team_icon} text='Team Building and Management' style={{ marginRight: '10px' }} />
          </div>
        </div>
        <div>
          <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Planning and Evaluation</h1>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <InterestCard img={strategic_icon} text='Strategic Action Planning and Evaluation' style={{ marginRight: '10px' }} />
          </div>
        </div>
    {/* final cards */}
      <div className="title-h1-chws my-4" style={{paddingTop: "15px"}}>Featured</div>
        <div className="row">
          <div className="col-sm-4">
            <TopicsCard  img={Pic}  title="Job Description Example" subtitle="Hiring and Retention" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={Pic} className="mx-4" title="Types of Supervision" subtitle="Supervision" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={Pic} title="Appraisal/Evaluation/Professional Development" subtitle="Performance Appraisals" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={Pic}  title="The Grow Model of Mentorship and Motivation " subtitle="Mentorship and Motivation" text="Community Health Workers (CHWs) are trusted members of the communities where they live..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={Pic} className="mx-4" title="Professional Boundaries Worksheet Template" subtitle="Team Building and Management" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={Pic} title="Strategic Action Plan Example" subtitle="Strategic Action Planning and Evaluation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
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

export default CoordinatorsAndSupervisors;
