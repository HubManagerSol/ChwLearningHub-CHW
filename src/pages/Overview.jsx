import React from 'react';
import '../components/shared/buttons/styles/Button.css'; 
import '../components/shared/buttons/styles/ButtonSkills.css'; 
import {  } from "../styles/Profile.css";
import TopicsCard from '../components/shared/cards/TopicsCard'
import {} from '../styles/Header.css'
import { Button } from 'react-bootstrap';
import Footer from '../components/footer';
import {} from '../styles/Titles.css'
import Menu from '../components/menu';
import SearchBar2 from "../components/searchbar2";
import Card from '../components/cards1';
import { Link } from 'react-router-dom';
import imgC1 from "../img/1racard.svg";
import imgC2 from "../img/2card.svg";
import imgC3 from "../img/3card.svg";
import imgC4 from "../img/4cart.svg";
import imgC5 from "../img/6card.svg";

const Overview = () => {
  return (
    <div style={{ maxWidth:'1920px',  backgroundColor:'white' }}> 
    <main  id="main1" className="main1" >
    <Menu></Menu>
    <div style={{position:"relative", backgroundColor:"transparent", left:'100px', width: '1440px', boxSizing: 'border-box',top:"50px" }}>
    <div style={{position:'relative',top:"-90px", boxSizing: 'border-box', zIndex: 1, width: '1440px'}}>
        <SearchBar2 />
    </div>
      <div className='row'>
            <div className='col-11'>
            <div className='row'>
            <p className='title-route'>Home - CHWs / Promotores / CHW/Promotor Philosophy / Introduction to CHWs/Ps</p>
            </div>
  <div>
    <div className='row'>
        <div className='col-11'>
        <div className="row">
  <h1 className='title-h1-subpages'>What is a Community Health Worker?</h1>
</div>
<svg xmlns="http://www.w3.org/2000/svg" width="131" height="6" viewBox="0 0 131 6" fill="none">
<path d="M3 3H128" stroke="#47BBC6" stroke-width="5" stroke-linecap="round"/>
</svg>
        </div>
    </div>
</div>
<div class="row">
<p className='subtitle-overview' style={{margin: '30px 0px 30px 0px'}}>Back to: Introduction to CHWs</p>
</div>
<div className='row'>
<img src="../mg-2/healty.png" alt="img" style={{ width: '1196px', height: '627px'}}/>
</div>
<div className='row' style={{width:'1196px', background: '#F4F4F4', marginTop: '40px', padding: '35px 35px 35px 35px', borderRadius: '10px', fontSize: '20px', alignItems: 'flex-start', gap: '30px'}}>
    <p style={{color: '#666', fontSize: 'normal', fontWeight: '400', lineHeight: '22.5px'}}>
    Community Health Workers (CHWs) are recognized leaders and trusted members of the communities where they live and work. The CHW career path follows one of service, advocacy, and social justice. Through their work, CHWs are both protagonists and companions for those who are part of the cycle of community transformation, which begins with individuals, and extends to communities and ultimately to systems. CHWs are agents of change who help reduce disparities at all levels by acting as a bridge that connects socioeconomic, political, and health systems and resources to the most vulnerable and disadvantaged populations
    </p>
</div>
<div class="row">
    <h1 className='title-h1-overview' style={{ paddingTop: '40px'}}>CHWs in the Community</h1>
</div>
<div className='row'>
<p  className='p-overview' style={{width: '1196px', paddingBottom: '20px', paddingTop: '15px'}}>
    Promotores are now recognized by various health and government agencies as an integral link between communities, resources, and existing services and systems. For example, <strong style={{color: '#067CBC'}}>the Centers for Disease Control (CDC)</strong>,  which is in charge of detecting and responding to new and emerging health threats in the United States, defines CHWs as “trained public health workers who serve as a bridge between communities, health care systems, and state health departments.”
</p>
</div>
<div className='row'>
    <p style={{color: '#067CBC', fontSize: '23px', width: '1196px'}}>
    CHWs are members and recognized leaders in the communities in which they serve, both in urban and rural settings. 
    </p>
</div>
<div className='row' style={{width: '1196px', paddingBottom: '30px'}}>
    <p className='p-overview'> 
    They usually share many things in common with these communities, which can be language, customs, cuisine, cultural traditions, and sometimes similar life experiences. This gives them invaluable insight into the struggles and challenges that these communities face and the importance of working collectively to address those challenges and achieve a better quality of life for all.
    </p>
</div>
<div class="row">
                <h1 className='title-h1-overview' style={{ paddingBottom: '30px'}}>Community transformation model</h1>
</div>
<div>
    <div className='row'>
        <div className='col-6' style={{width: '598px'}}>
            <div class="row">
                <p className='p-overview' style={{ paddingBottom: '30px'}}>The community transformation model helps us to visualize how CHWs through their different roles and capacities, promote and motivate positive changes in the life of individuals, families, and communities.
                <div style={{paddingTop: '35px'}}>
                    <p className='p-overview'>
                    This transformation happens when:
                    </p>
                </div>
</p>
<p className='p-overview'>
1 - Strong and meaningful relationships are built through community outreach, peer support, one-on-one meetings, solidarity, and constant partnership. <br></br><br></br><br></br><br></br>
2 - Individual and collective capacity building is supported through educational workshops, informational materials, resources, and mutual exchange of experiences and knowledge.<br></br><br></br><br></br><br></br>
3 - Community engagement is promoted through awareness, individual, and collective leadership development that leads us to advocacy and action. <br></br><br></br><br></br><br></br>
</p>
    </div>
        </div>
        <div className='col-6' style={{width: '598px'}}>
        <img src="../mg-2/imgprueba1.png" alt="img" style={{ width: '554px', height: '530px', alignContent: 'center' }}/>
        </div>
    </div>
</div>
<div class="row" style={{paddingBottom: '10px'}}>
                <h1  className='title-h1-overview'style={{ paddingTop: '10px', fontWeight: 'bold', paddingBottom: '45px'}}>Names and roles that CHWs have had around the world </h1>
</div>
<div className='row' style={{width: '1196px'}}>
    <p className='p-overview' style={{width: '1196px'}}>
    CHWs have existed in different parts of the world since the 1800s. They have had many names and roles including feldshers, barefoot doctors, village health workers, community organizers, community health promoters, health advisors, community advocates, representatives and more. Whatever their role or name, the nature of their work remains the same: advocating for the rights of the most vulnerable and being part of the process of empowering communities to advocate for themselves and obtain the socioeconomic, health, and political representation they deserve.
    </p>
</div>
<div className='row' style={{paddingBottom: '10px'}}>
<img src="../mg-2/nameandroles.png" alt="img" style={{ width: '1196px', height: '691px', alignContent: 'center' }}/>
</div>
<div class="row">
                <h1  className='title-h1-overview' style={{ paddingTop: '40px', fontWeight: 'bold', paddingBottom: '15px'}}>History of CHWs Around the World </h1>
</div>
<div className='row' style={{paddingBottom: '30px', width: '1196px'}}>
    <p className='p-overview'>
    CHWs have been around for hundreds of years. Their work has a long history dating back to the 19th century with origins in Asia, namely Russia and China. From barefoot doctors walking through rice paddies to provide medical care to political activists advocating for free clinics, CHWs have a rich history that spans the globe. Today, the World Health Organization (WHO) has not only recognized CHWs as an integral component of public health but continues to support these government-sponsored programs as part of its mission to bring health to all.
    </p>
</div>
<div className='row'>
  <iframe
    title="Genially Map"
    src="https://view.genial.ly/644bba7a7030060018027f75"
    style={{ width: '1196px', height: '627px', border: 'none'}}
    allowFullScreen
  ></iframe>
</div>

<div class="row">
    <h1 className='title-h1-overview' style={{ paddingTop: '40px', fontWeight: 'bold', paddingBottom: '30px'}}>Skills of CHWs</h1>
</div>
<div className='row' style={{paddingBottom: '40px'}}>
    <p className='p-overview'>
    Some of the skills CHWs have include those found in the C3 Project:
    </p>
</div>
<div style={{width: '1196px'}}>
<div style={{paddingBottom: '50px'}}>
<div className='row'>
        <div className='col-md-4'>
            <div className='row'>
                <div className='col-4'>
                <img src='../mg-2/Trazado 3166.png' alt="next icon"></img>
                </div>
                <div className='col-8'>
                    <p style={{color: '#47BBC6'}}>Advocacy skills</p>
                </div>
            </div>
        </div>
        <div className='col-md-4'>
            <div className='row'>
                <div className='col-4'>
                <img src='../mg-2/Trazado 3168.png' alt="next icon"></img>
                </div>
                <div className='col-8'>
                    <p style={{color: '#47BBC6'}}>Service coordination and navigation skills</p>
                </div>
            </div>
        </div>
        <div className='col-md-4'>
            <div className='row'>
                <div className='col-4'>
                <img src='../mg-2/Trazado 3167.png' alt="next icon"></img>
                </div>
                <div className='col-8'>
                    <p style={{color: '#47BBC6'}}>Capacity Building Skills</p>
                </div>
            </div>
        </div> 
    </div>
</div>

<div style={{paddingBottom: '50px'}}>
<div className='row'>
        <div className='col-md-4'>
            <div className='row'>
                <div className='col-4'>
                <img src='../mg-2/Trazado 3173.png' alt="next icon"></img>
                </div>
                <div className='col-8'>
                    <p style={{color: '#47BBC6'}}>Individual and community Assessment Skills</p>
                </div>
            </div>
        </div>
        <div className='col-md-4'>
            <div className='row'>
                <div className='col-4'>
                <img src='../mg-2/Trazado 3175.png' alt="next icon"></img>
                </div>
                <div className='col-8'>
                    <p style={{color: '#47BBC6'}}>Outreach Skills</p>
                </div>
            </div>
        </div>
        <div className='col-md-4'>
            <div className='row'>
                <div className='col-4'>
                <img src='../mg-2/Grupo 1848.png' alt="next icon"></img>
                </div>
                <div className='col-8'>
                    <p style={{color: '#47BBC6'}}>Communication Skills</p>
                </div>
            </div>
        </div> 
    </div>
</div>

<div style={{paddingBottom: '50px'}}>
<div className='row'>
        <div className='col-md-4'>
            <div className='row'>
                <div className='col-4'>
                <img src='../mg-2/Grupo 1850.png' alt="next icon"></img>
                </div>
                <div className='col-8'>
                    <p style={{color: '#47BBC6'}}>Interpersonal and Relationship-Building Skills</p>
                </div>
            </div>
        </div>
        <div className='col-md-4'>
            <div className='row'>
                <div className='col-4'>
                <img src='../mg-2/Grupo 1852.png' alt="next icon"></img>
                </div>
                <div className='col-8'>
                    <p style={{color: '#47BBC6'}}>Evaluation and Research Skills</p>
                </div>
            </div>
        </div>
        <div className='col-md-4'>
            <div className='row'>
                <div className='col-4'>
                <img src='../mg-2/Grupo 1854.png' alt="next icon"></img>
                </div>
                <div className='col-8'>
                    <p style={{color: '#47BBC6'}}>Education and Facilitation Skills</p>
                </div>
            </div>
        </div> 
    </div>
</div>

<div style={{paddingBottom: '50px'}}>
<div className='row'>
        <div className='col-md-4'>
            <div className='row'>
                <div className='col-4'>
                <img src='../mg-2/Grupo 1856.png' alt="next icon"></img>
                </div>
                <div className='col-8'>
                    <p style={{color: '#47BBC6'}}>Knowledge Base Skills</p>
                </div>
            </div>
        </div>
        <div className='col-md-4'>
            <div className='row'>
                <div className='col-4'>
                <img src='../mg-2/Grupo 1858.png' alt="next icon"></img>
                </div>
                <div className='col-8'>
                    <p style={{color: '#47BBC6'}}>Professional Skills and Conduct</p>
                </div>
            </div>
        </div>
        <div className='col-md-4'>
            <div className='row'>
                <div>
                <Button style={{alignItems: 'right' ,color: 'white', background: '#143F6A', width: '12rem', height: '3.5rem', border: '1px solid #143F6A'
}}>See full list of qualities, <br></br> skills, and roles </Button>
                </div>
            </div>
        </div>
        </div>
    </div>
</div>

<div className='row' style={{width: '1196px'}}>
    <p className='p-overview'>
    In other occupations, CHWs may also provide direct services such as first aid, psychological intervention (one-on-one), crisis intervention, and diabetes or blood pressure screening.  
<br></br>
<br></br>
CHWs are always willing to facilitate the learning process of others, to listen to the community, to accompany the community, to advocate for individuals to obtain culturally appropriate resources, and to strive to build strong relationships with communities. CHWs carry a passion for service in their hearts and their commitment lies not only with the communities where they live and work but also with each person who comes to them seeking comfort and understanding.
    </p>
</div>
<div className='row'>
<img src="../mg-2/paulofreire.png" alt="img" style={{ width: '1196px', height: '528px', alignContent: 'center' }}/>
</div>
<div class="row">
    <h1 className='title-h1-chws' style={{ paddingTop: '40px', fontWeight: 'bold'}}>CHWs Code of Ethics</h1>
</div>
<div className='row' style={{width: '1196px'}}>
    <p className='p-overview'>
A code of ethics is a set of standards designed to help CHWs/Ps discuss ethical issues facing the profession. The CHW Code of Ethics can be used by CHWs/Ps, supervisors, and employers. According to the American Association of Community Health Workers Code of Ethics, a code of ethics is based upon commonly understood assumptions that are applied to all professionals within the health and social service field.
<br></br>
<br></br>
The primary mission of the CHW/P profession is to reduce social inequality and promote equity through relationship building, integrity, empowerment, teamwork, and compassion. The code of ethics guides decision-making and conduct when an ethical issue appears as CHWs/Ps work within complex systems and various populations.
<br></br>
<br></br>
The code of ethics, however, is not legally binding but is used to encourage CHWs/Ps to reflect on the ethical obligations that they have to the communities they serve. The CHWs Code of Ethics is formed by four articles and sub-articles that focus on Responsibility in the Delivery of Care, Promotion of Equitable Relationships, Interactions with Other Service Providers, and Professional Rights and Responsibilities.
<br></br>
<br></br>
To access the full version of the code of ethics for CHWs/Ps, click on the following link: <strong style={{color: '#067CBC'}}>CHWs Code of Ethics</strong> 
    </p>
</div>

<div style={{width:'1196px',marginLeft: '0px', backgroundColor:'#F9F9F9', borderRadius:'10px', top:'80px', left:'4%'}}>
      <h1 className='title-h1-chws' style={{ paddingTop: '35px', position: 'relative', top: 0, fontWeight: 'bold', marginLeft:"30px"}}>Other topics to explore</h1>
      <div className='row' style={{}}>
      <div className='col-12' style={{}}>
      <Link to="/chws-promoter">
          <Card
            title="CHW's/ promotores"
            imageUrl={imgC1}
          />
        </Link>
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
      </div>
      </div>
      </div>
<div className="title-h1-chws my-4 text-center" style={{paddingTop: "15px"}}>
  Explore what's inside
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
export default Overview;