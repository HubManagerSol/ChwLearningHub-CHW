
import React from 'react';
import { Link } from 'react-router-dom';
import '../components/shared/buttons/Button'; 
import '../components/shared/buttons/ButtonSkills'; 
import {  } from "../styles/Profile.css";
import InterestCard from '../components/shared/cards/InterestCard'
import TopicsCard from '../components/shared/cards/TopicsCard'
import {} from '../styles/Header.css'
import {} from '../styles/Titles.css'
import Menu from '../components/menu2';
import {  } from "../pages/home";
import SearchBar2 from "../components/searchbar2";
import Footer from '../components/footer';
import Card from '../components/cards1';
import imgC1 from "../img/1racard.svg";
// import imgC2 from "../img/2card.svg";
import imgC3 from "../img/3card.svg";
import imgC4 from "../img/4cart.svg";
import imgC5 from "../img/6card.svg";
import imgC6 from "../img/7card.svg";
import chronic_icon from "../mg-2/chronic_icon.svg"
import cancer_icon from "../mg-2/cancer_icon.svg"
import heart_icon from "../mg-2/heart_icon.svg"
import hypertension_icon from "../mg-2/hypertension_icon.svg"
import choresterol_icon from "../mg-2/choresterol_icon.svg"
import hypertension2_icon from "../mg-2/hypertension2_icon.svg"
import asthma from "../mg-2/asthma.svg"
import lung_icon from "../mg-2/lung_icon.svg"
import copd_icon from "../mg-2/copd_icon.svg"
import bronchitis_icon from "../mg-2/bronchitis_icon.svg"
import emphysema_icon from "../mg-2/emphysema_icon.svg"
import pulmonary_icon from "../mg-2/pulmonary_icon.svg"
import stroke_icon from "../mg-2/stroke_icon.svg"
import alzheimer_icon from "../mg-2/alzheimer_icon.svg"
import kidney_icon from "../mg-2/kidney_icon.svg"
import substance_icon from "../mg-2/substance_icon.svg"
import hepatitis_icon from "../mg-2/hepatitis_icon.svg"
import diabetes_icon from "../mg-2/diabetes_icon.svg"
import home_icon from "../mg-2/home.svg"
import mental_icon from "../mg-2/mental_icon.svg"
import ulysses_icon from "../mg-2/ulysses_icon.svg"
import domestic_icon from "../mg-2/domestic_icon.svg"
import wfpb_icon from "../mg-2/wfpb_icon.svg"
import nutrition_icon from "../mg-2/nutrition_icon.svg"
import recipes from "../mg-2/recipes.svg"
import oral_icon from "../mg-2/oral_icon.svg"
import oral_adult_icon from "../mg-2/oral_adult_icon.svg"
import oral_children_icon from "../mg-2/oral_children_icon.svg"
import postpartum_icon from "../mg-2/postpartum_icon.svg"
import sexually_transmitted_icon from "../mg-2/sexually_transmitted_icon.svg"
import Pic from "../mg-2/Pic.png"
import banner from "../mg-2/Banner.png"



const CommunityHealthEducation = () => {

  return (
    <div style={{ maxWidth:'1920px',  backgroundColor:'white' }}> 
      <main  id="main1" className="main1" >
      <Menu></Menu>
      <div style={{position:"relative", backgroundColor:"transparent", left:'100px', width: '1440px', boxSizing: 'border-box',top:"50px" }}>
      <div style={{position:'relative',top:"-90px", boxSizing: 'border-box', zIndex: 1 }}>
        <SearchBar2 />
      </div>
      <div style={{ width: '100%', boxSizing: 'border-box',position:"relative" }}>
        <img src={banner} alt="img" style={{ width: '1440px', height:"450px" }} />
      </div>
      <div className='row'>
        <div className='row'>
          <p className='title-route'>Home - CHWs / Community Health Education</p>

          <div className='row'>
            <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Chronic Diseases</h1>
            <div className="col-4">
            <InterestCard img={chronic_icon} text='Chronic Diseases' />
            </div>
            <div className="col-4">
              <InterestCard img={cancer_icon} text='Cancer' style={{ marginRight: '10px' }} />
            </div>
            <div className="col-4 mb-4">
              <InterestCard img={heart_icon} text='Heart Disease' />
            </div>
            <div className="col-4 mb-4">
              <InterestCard img={hypertension_icon} text='Hypertension and High Cholesterol' />
            </div>
            <div className="col-4 mb-4">
              <InterestCard img={choresterol_icon} text='High Cholesterol' />
            </div>
            <div className="col-4 mb-4">
              <InterestCard img={hypertension2_icon} text='Hypertension' />
            </div>
            <div className="col-4 mb-4">
              <InterestCard img={asthma} text='Asthma' />
            </div>
            <div className="col-4 mb-4">
              <InterestCard img={lung_icon} text='Chronic Lung Disease' />
            </div>
            <div className="col-4 mb-4">
              <InterestCard img={copd_icon} text='COPD' />
            </div>
            <div className="col-4 mb-4">
              <InterestCard img={bronchitis_icon} text='Bronchitis' />
            </div>
            <div className="col-4 mb-4">
              <InterestCard img={emphysema_icon} text='Emphysema' />
            </div>
            <div className="col-4 mb-4">
              <InterestCard img={pulmonary_icon} text='Pulmonary Hypertension' />
            </div>
            <div className="col-4 mb-4">
              <InterestCard img={stroke_icon} text='Stroke' />
            </div>
            <div className="col-4 mb-4">
              <InterestCard img={alzheimer_icon} text="Alzheimer's Disease" />
            </div>
            <div className="col-4 mb-4">
              <InterestCard img={kidney_icon} text="Chronic Kidney Disease" />
            </div>
            <div className="col-4 mb-4">
              <InterestCard img={substance_icon} text="Substance Use Disorder" />
            </div>
            <div className="col-4 mb-4">
              <InterestCard img={hepatitis_icon} text="Hepatitis C" />
            </div>
          </div>
          <div className='row'>
            <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Diabetes</h1>
            <div className="col-4">
              <InterestCard img={diabetes_icon} text='Diabetes' style={{ marginRight: '10px' }} />
            </div>
          </div>
          <div>
            <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Home Visitation</h1>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <InterestCard img={home_icon} text='Home Visitation' style={{ marginRight: '10px' }} />
            </div>
          </div>
          <div>
            <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Mental Health</h1>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <InterestCard img={mental_icon} text='Mental Health' style={{ marginRight: '10px' }} />
            </div>
            <div className="col-sm-4">
              <InterestCard img={ulysses_icon} text='The Ulysses Syndrome ' style={{ marginRight: '10px' }} />
            </div>
            <div className="col-sm-4">
              <InterestCard img={domestic_icon} text='Domestic Violence' />
            </div>
          </div>
          <div>
            <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Nutrition</h1>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <InterestCard img={wfpb_icon} text='WFPB Diet' style={{ marginRight: '10px' }} />
            </div>
            <div className="col-sm-4">
              <InterestCard img={nutrition_icon} text='Nutrition' style={{ marginRight: '10px' }} />
            </div>
            <div className="col-sm-4">
              <InterestCard img={recipes} text='Healthy Recipes' style={{ marginRight: '10px' }} />
            </div>
          </div>
          <div>
            <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Oral Health</h1>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <InterestCard img={oral_icon} text='Oral Health' style={{ marginRight: '10px' }} />
            </div>
            <div className="col-sm-4">
              <InterestCard img={oral_adult_icon} text='Adult Oral Health' style={{ marginRight: '10px' }} />
            </div>
            <div className="col-sm-4">
              <InterestCard img={oral_children_icon} text="Children's Oral Health" style={{ marginRight: '10px' }} />
            </div>
          </div>
          <div>
            <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Postpartum Depression</h1>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <InterestCard img={postpartum_icon} text='Postpartum Depression' style={{ marginRight: '10px' }} />
            </div>
          </div>
          <div>
            <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold'}}>Sexually Transmitted Diseases</h1>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <InterestCard img={sexually_transmitted_icon} text='Sexually Transmitted Diseases' style={{ marginRight: '10px' }} />
            </div>
          </div>
    {/* final cards */}
      <div className="title-h1-chws my-4" style={{paddingTop: "15px"}}>Featured</div>
        <div className="row">
          <div className="col-sm-4">
            <TopicsCard  img={Pic}  title="Trivia Game Chronic Diseases" subtitle="Chronic Diseases" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={Pic} className="mx-4" title="Food choices - Carbohydrates, salt and sugar" subtitle="Diabetes" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={Pic} title="Home Visitation Case Studies" subtitle="Home Visitation" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={Pic}  title="Activities for wellness and mental  health in the workplace" subtitle="Mental Health" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={Pic} className="mx-4" title="Getting started with a whole-food, plant-based diet" subtitle="Nutrition" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
          </div>
          <div className="col-sm-4">
            <TopicsCard  img={Pic} title="Importance of visiting the dentist as adults" subtitle="Oral Health" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacus neque, fermentum nec..."/>
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

export default CommunityHealthEducation;
