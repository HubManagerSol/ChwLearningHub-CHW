
import React from 'react';
import '../../../components/shared/buttons/Button'; 
import CardButtonFilterPages from '../../../components/shared/cards/CardButtonFilterPages';
import '../../../components/shared/buttons/ButtonSkills'; 
import {  } from "../../../styles/Profile.css";
import {} from '../../../styles/Header.css'
import {} from '../../../styles/Titles.css'
import {  } from "../../../pages/home";
import Menu from '../../../components/menu2';
import SearchBar2 from "../../../components/searchbar2";
import TopicsCard from '../../../components/shared/cards/TopicsCard';
import Footer from '../../../components/footer';
import icon_career from '../../../mg-2/icon_career.svg'


const CareerPathwayOpportunities = () => {
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
          <p className='title-route'>Home - CHWs / Promotores - CHW/P Career Pathway Opportunities</p>
            <div className='col-6'>
              <h1 className='title-h1-subpages' style={{ paddingTop: '35px'}}>CHW/P Career Pathway Opportunities</h1>
              <p className='subtitle-subpages'>Refine by type of resource</p>
            </div>
            <div className='row'>
            <CardButtonFilterPages img={icon_career} text='Prueba'></CardButtonFilterPages>
            </div>


        <div>
          <h1 className='title-resources' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Resources</h1>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/AgenciesCard.png'}  title="Self-reflection Assessment Printable" subtitle="Career Advancement Opportunities" text="Community Health Workers (CHWs) are trusted members of the communities where they live..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/AgenciesCard.png'} className="mx-4" title="Self-reflection Assessment Digital"  subtitle="Career Advancement Opportunities" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/AgenciesCard.png'} title="312 - Career advancement in CHWs’ management " subtitle="Career Advancement Opportunities" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/AgenciesCard.png'}  title="313 - CHWs career advancement in community health education  & training" subtitle="Career Advancement Opportunities" text="Community Health Workers (CHWs) are trusted members of the communities where they live..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/AgenciesCard.png'} className="mx-4" title="314 - CHWs integration in health care settings" subtitle="Career Advancement Opportunities" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/AgenciesCard.png'} title="315 - CHWs career advancement in professional development  & curriculum" subtitle="Career Advancement Opportunities" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/AgenciesCard.png'} title="316 - CHWs career advancement in policy and advocacy" subtitle="Career Advancement Opportunities" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
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

export default CareerPathwayOpportunities;
