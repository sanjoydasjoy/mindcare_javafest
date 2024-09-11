import React, { useRef } from 'react';

import { Outlet } from "react-router-dom"
import KeyFeatures from "./Components/KeyFeatures";
import BigCard from './Components/Personalized';
import Community from './Components/Community';
import Assesment from './Components/Assesment';
import Spacer from './Components/Spacer';

import './App.css';


export default function Layout() {

  // Create a reference to the KeyFeatures section (or whichever section you want to scroll to)
  const keyFeaturesRef = useRef(null);

  // Function to handle scroll to the KeyFeatures section
  const handleScrollToContent = () => {
    if (keyFeaturesRef.current) {
      keyFeaturesRef.current.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }
  };

  return (
    <div className="layout-container">
      <main>
        {/* Pass the scroll function to the BigCard component */}
        <BigCard onGetStartedClick={handleScrollToContent} />
        {/* Apply the ref to the KeyFeatures section */}
        <div ref={keyFeaturesRef}>
          <KeyFeatures />
        </div>
        <Assesment />
        <Community />
        <Spacer height="50px" />
        <Outlet />
      </main>
    </div>
  );
}