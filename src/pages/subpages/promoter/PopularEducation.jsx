import React, {useState} from 'react';
import { Link } from 'react-router-dom';
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
import Checkbox from '../../../components/shared/checkbox/CheckBox';
import CardButtonFilterPages from '../../../components/shared/buttons/CardButtonFilterPages';
import printable_icon from "../../../mg-2/printable_icon.svg"
import graphics_icon from "../../../mg-2/graphics_icon.svg"
import assessment_icon from "../../../mg-2/assessment_icon.svg"
import digital_icon from "../../../mg-2/digital_icon.svg"
import ReadCard from '../../../components/shared/cards/ReadCard';
import CalendarNextEvent3 from "../../../mg-2/CalendarNextEvent3.png"


const PopularEducation = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };

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
          <p className='title-route'>
            <Link style={{textDecoration: 'none',  color: isHovered ? '#47BBC6' : '#666',}} to="/"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave} >Home &#160;{'>'} &#160;
            </Link> 
            <Link style={{textDecoration: 'none',  color: isHovered2 ? '#47BBC6' : '#666',}} to="/chws-promoter"
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2} > CHWs / Promotores  &#160;{'>'} &#160;
            </Link>
            <Link style={{textDecoration: 'none',  color: isHovered3 ? '#47BBC6' : '#666',}} to="/chws-promoter"
              onMouseEnter={handleMouseEnter3}
              onMouseLeave={handleMouseLeave3} > CHW/Promotor Philosophy  &#160;{'>'} &#160;
            </Link>
            Popular Education
          </p>
            <div className='col-6'>
              <h1 className='title-h1-subpages' style={{ paddingTop: '35px'}}>Popular Education</h1>
              <p className='subtitle-subpages'>Refine by type of resource</p>
            </div>


            <div className='row'>
              <div className='col-10'>
                <div className='row'>
                  <div className='col-2'>
                  <CardButtonFilterPages img={printable_icon} text='Printable'></CardButtonFilterPages>
                  </div>
                  <div className='col-2'>
                  <CardButtonFilterPages img={graphics_icon} text='Graphics'></CardButtonFilterPages>
                  </div>
                  <div className='col-2'>
                  <CardButtonFilterPages img={assessment_icon} text='Asessments'></CardButtonFilterPages>
                  </div>
                  <div className='col-2'>
                  <CardButtonFilterPages img={digital_icon} text='Printable'></CardButtonFilterPages>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-12'>
                    <Checkbox label={'Reflection'}/>
                    <Checkbox label={'Short Quiz'}/>
                    <Checkbox label={'Self-assessments'}/>
                  </div>
                </div>
              <div>
            </div>
          </div>
          <div className='col-2'>
              <h5 style={{color:"#666"}}>Sort by</h5>
              <h6  style={{color:"#666", marginTop:"40px"}}>Newest to Oldest</h6>
              <h6  style={{color:"#666", marginTop:"10px"}}>Oldest to Newest</h6>
              <h6  style={{color:"#666", marginTop:"10px"}}>A to Z</h6>
              <h6  style={{color:"#666", marginTop:"10px"}}>Z to A</h6>
          </div>
        </div>
        <div style={{paddingTop: '30px'}}>
        <ReadCard 
          img={CalendarNextEvent3} 
          title={'131 - Introduction to popular education'}
          subtitle={'Popular Education'}
          text={'Donec a dapibus purus. Nunc mollis arcu quis volutpat mattis. Donec venenatis, libero et porta cursus, elit nulla vulputate erat, nec iaculis nisi nisi quis est.'}
        />
        </div>
        <div>
          <h1 className='title-resources' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Resources</h1>
        </div>

<div className="row">
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/AgenciesCard.png'}  title="131VT - House of popular education" subtitle="Popular Education" text="Community Health Workers (CHWs) are trusted members of the communities where they live..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/AgenciesCard.png'} className="mx-4" title="131VTD - House of popular education"  subtitle="Popular Education" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/AgenciesCard.png'} title="131VTP - House of popular education" subtitle="Popular Education" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/AgenciesCard.png'}  title="132 - Activities to raise awareness" subtitle="Popular Education" text="Community Health Workers (CHWs) are trusted members of the communities where they live..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/AgenciesCard.png'} className="mx-4" title="133 - Icebreakers" subtitle="Popular Education" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/AgenciesCard.png'} title="134 - Group activities" subtitle="Popular Education" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/AgenciesCard.png'} title="135 - Why do we use popular neducation in the community?" subtitle="Popular Education" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={'/mg-2/AgenciesCard.png'} title="Video What is Popular Education? Powtoon" subtitle="Popular Education" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
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

export default PopularEducation;
