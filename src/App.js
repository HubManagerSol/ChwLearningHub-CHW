import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import ChwsPromoter from './pages/ChwsPromoter';
import ChwIntegrationHealthcare  from "./pages/ChwIntegrationHealthcare"
import Profile from "./pages/Profile"
import CommunityHealthEducation from "./pages/CommunityHealthEducation"
import CoordinatorsAndSupervisors from "./pages/CoordinatorsAndSupervisors"
import AgenciesAndOrganizations from "./pages/AgenciesAndOrganizations"
import Error404Component from "../src/pages/404Page.js";
import CommunityEngagementAdvocacy from "../src/pages/CommunityEngagementAdvocacy";
import CareerPathwayOpportunities from "../src/pages/subpages/promoter/CareerPathwayOpportunities.jsx";
import CHWPromotorPhilosophy from './pages/subpages/promoter/CHWPromotorPhilosophy.jsx';
import IntroductionCHWsPs from './pages/subpages/promoter/IntroductionCHWsPs.jsx';
import PopularEducation from './pages/subpages/promoter/PopularEducation.jsx';
import RolesCoreCompetenciesC3 from './pages/subpages/promoter/RolesCoreCompetenciesC3.jsx';
import PersonalProfessionalDevelopment from './pages/subpages/promoter/PersonalProfessionalDevelopment.jsx';
import Communication from './pages/subpages/promoter/Communication.jsx';
import CommunityOutreachSafety from './pages/subpages/promoter/CommunityOutreachSafety.jsx';
import CulturalHumility from './pages/subpages/promoter/CulturalHumility.jsx';
import ConflictResolution from './pages/subpages/promoter/ConflictResolution.jsx';
import GroupFacilitation from './pages/subpages/promoter/GroupFacilitation.jsx';
import EmotionalIntelligence from './pages/subpages/promoter/EmotionalIntelligence.jsx';
import ProfessionalDevelopment from './pages/subpages/promoter/ProfessionalDevelopment.jsx';
import Leadership from './pages/subpages/promoter/Leadership.jsx';
import SelfCare from './pages/subpages/promoter/SelfCare.jsx';
import StressManagement from './pages/subpages/promoter/StressManagement.jsx';
import SearchResults from './pages/subpages/promoter/SearchResults.jsx';
import TimeManagement from './pages/subpages/promoter/TimeManagement.jsx';
import Steps from '../src/pages/StepsContainer' 
import Overview from './pages/Overview.jsx';
import "../src/App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='Overview' element={<Overview></Overview>}> </Route>
        <Route path='TimeManagement' element={<TimeManagement></TimeManagement>}></Route>
        <Route path='SearchResults' element={<SearchResults></SearchResults>}></Route>
        <Route path='StressManagement' element={<StressManagement></StressManagement>}></Route>
        <Route path='SelfCare' element={<SelfCare></SelfCare>}></Route>
        <Route path='ProfessionalDevelopment' element={<ProfessionalDevelopment></ProfessionalDevelopment>}></Route>
        <Route path='Leadership' element={<Leadership></Leadership>}></Route>
        <Route path='GroupFacilitation' element={<GroupFacilitation></GroupFacilitation>}></Route>
        <Route path='EmotionalIntelligence' element={<EmotionalIntelligence></EmotionalIntelligence>}></Route>
        <Route path='ConflictResolution' element={<ConflictResolution></ConflictResolution>}></Route>
        <Route path='CulturalHumility' element={<CulturalHumility></CulturalHumility>}></Route>
        <Route path='Communication' element={<Communication></Communication>}></Route>
        <Route path='CommunityOutreachSafety' element={<CommunityOutreachSafety></CommunityOutreachSafety>}></Route>
        <Route path='PersonalProfessionalDevelopment' element={<PersonalProfessionalDevelopment></PersonalProfessionalDevelopment>}></Route>
        <Route path='RolesCoreCompetenciesC3' element={<RolesCoreCompetenciesC3></RolesCoreCompetenciesC3>}></Route>
        <Route path='PopularEducation' element={<PopularEducation></PopularEducation>}></Route>
        <Route path='/IntroductionCHWsPs' element={<IntroductionCHWsPs></IntroductionCHWsPs>}></Route>
        <Route path='/CHWPromotorPhilosophy' element={<CHWPromotorPhilosophy></CHWPromotorPhilosophy>}></Route>
        <Route path='/CareerPathwayOpportunities' element={<CareerPathwayOpportunities></CareerPathwayOpportunities>}></Route>
        <Route path="/chws-promoter" element={<ChwsPromoter />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/ChwIntegrationHealthcare" element={<ChwIntegrationHealthcare />} />
        <Route path="/CommunityHealthEducation" element={<CommunityHealthEducation />} />
        <Route path="/Error404" element={<Error404Component />} />
        <Route path="/CoordinatorsAndSupervisors" element={<CoordinatorsAndSupervisors />} />
        <Route path="/AgenciesAndOrganizations" element={<AgenciesAndOrganizations />} />
        <Route path="/CommunityEngagementAdvocacy" element={<CommunityEngagementAdvocacy />} />
        <Route path="/steps" element={<Steps />} />
        
      </Routes>
    </Router>
  );
}

export default App;
