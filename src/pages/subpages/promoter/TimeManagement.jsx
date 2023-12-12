
import React from 'react';
import '../../../components/shared/buttons/Button'; 
import '../../../components/shared/buttons/ButtonSkills'; 
import {  } from "../../../styles/Profile.css";
import {} from '../../../styles/Header.css'
import {} from '../../../styles/Titles.css'
import {  } from "../../../pages/home";
import Menu from '../../../components/menu2';
import SearchBar2 from "../../../components/searchbar2";
import TopicsCard from '../../../components/shared/cards/TopicsCard';
import Footer from '../../../components/footer';


const TimeManagement = () => {
  return (
    <div style={{ maxWidth:'1920px',  backgroundColor:'white' }}> 
      <main  id="main1" className="main1" >
      <Menu></Menu>
      <div style={{position:"relative", backgroundColor:"transparent", left:'100px', width: '1440px', boxSizing: 'border-box',top:"50px" }}>
      <div style={{position:'relative',top:"-90px", boxSizing: 'border-box', zIndex: 1 }}>
        <SearchBar2 />
      </div>
      <div className='row'>
        <div className='col-12'>
          <p className='title-route'>Home - CHWs / Promotores - Personal and Professional Development - Time Management</p>
            <div className='col-6'>
              <h1 className='title-h1-subpages' style={{ paddingTop: '35px'}}>Time Management</h1>
              <p className='subtitle-subpages'>Refine by type of resource</p>
            </div>


{/* ---------------------------------------PONER CARD OVERVIEW */}

        <div>
          <h1 className='title-resources' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Resources</h1>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/AgenciesCard.png'}  title="282 - Tips for time management" subtitle="Time Management" text="Community Health Workers (CHWs) are trusted members of the communities where they live..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/AgenciesCard.png'} className="mx-4" title="283 - The 4 D’s in time 
management matrix planner"  subtitle="Time Management" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/AgenciesCard.png'} title="Overcoming Procrastination in
Three Smalls Steps" subtitle="Time Management" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
        </div>
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

export default TimeManagement;
