import './App.css';
import Header from './pages/Header';
import Footer from "./pages/Footer";
import Layout from './IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Counsellor from './pages/Counsellor';

import AnxietyAssessment from './pages/AnxietyAssessment'; 
import DepressionScreening from './pages/DepressionScreening';
import StressEvaluation from './pages/StressEvaluation';

import Conditions from './pages/Conditions'; 
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import About from './pages/About';

import MoodTracking from './pages/MoodTracking'; 
import ActivityLogging from './pages/ActivityLogging';
import PersonalizedGuidance from './pages/PersonalizedGuidance'; 

import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from './UserContext';

function App() {
  return (
    <div className="app-container">
      <UserContextProvider>
        <Header />
        <div className="content-wrapper">
          <Routes>
            {/* routes for the main page elemets */}
            <Route path="/" element={<Layout />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/counsellors' element={<Counsellor />} />

            {/* routes for the assessments */}
            <Route path='/anxiety-assessment' element={<AnxietyAssessment />} />
            <Route path='/depression-screening' element={<DepressionScreening />} />
            <Route path='/stress-evaluation' element={<StressEvaluation />} />


            {/* routes for the header elements */}
            <Route path='/conditions' element={<Conditions />} />
            <Route path='/resources' element={<Resources />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/about' element={<About />} />

            {/* routes for assesments section */}
            <Route path="/mood-tracking" element={<MoodTracking />} />
            <Route path="/activity-logging" element={<ActivityLogging />} />
            <Route path="/personalized-guidance" element={<PersonalizedGuidance />} />
            
          </Routes>
        </div>
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
