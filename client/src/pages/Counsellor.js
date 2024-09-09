import React, { useState } from 'react';
import '../Allcss/Counsellor.css';

export default function Counsellor() {
  return (
    <section className="section-container">
      <div className="card-container">
        {profiles.map((profile, index) => (
          <div key={index} className="card">
            <div className="card-header">
              <img src={profile.image} alt={profile.name} className="profile-image" />
              <div className="profile-info">
                <h3 className="profile-name">{profile.name}</h3>
                <p className="profile-title">{profile.title}</p>
                <div className="profile-contact">
                  <PhoneIcon className="icon" />
                  <a href={`tel:${profile.phone}`} className="profile-link">
                    {profile.phone}
                  </a>
                </div>
                <div className="profile-contact">
                  <GlobeIcon className="icon" />
                  <a href={profile.website} target="_blank" rel="noopener noreferrer" className="profile-link">
                    {profile.website}
                  </a>
                </div>
              </div>
            </div>
            <Collapsible className="card-collapsible">
              <CollapsibleTrigger>
                <Button variant="outline" className="card-button">
                  <ChevronDownIcon className="icon" />
                  View Chambers
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="card-chambers">
                  {profile.chambers.map((chamber, index) => (
                    <div key={index} className="chamber-location">
                      <MapPinIcon className="icon" />
                      <span>{chamber}</span>
                    </div>
                  ))}
                </div>
              </CollapsibleContent>
            </Collapsible>
          </div>
        ))}
      </div>
    </section>
  );
}

const profiles = [
  {
    name: "Dr. John Doe",
    title: "Clinical Psychologist, MA, PhD",
    phone: "+1 (234) 567-890",
    website: "www.example.com",
    image: "/placeholder.svg",
    chambers: ["123 Main St, Anytown USA", "456 Oak Rd, Somewhere Else USA"]
  },
  {
    name: "Dr. Jane Smith",
    title: "Psychiatrist, MD, Board Certified",
    phone: "+0 (987) 654-321",
    website: "www.example.org",
    image: "/placeholder.svg",
    chambers: ["789 Elm St, Somewhere Else USA"]
  },
  {
    name: "Dr. Michael Johnson",
    title: "Clinical Psychologist, PsyD",
    phone: "+5 (555) 123-4567",
    website: "www.example.net",
    image: "/placeholder.svg",
    chambers: ["321 Oak Rd, Somewhere Else USA"]
  }
];

function ChevronDownIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function GlobeIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
      <path d="M2 12h20" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function Collapsible({ children, className }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${className} ${isOpen ? 'open' : ''}`}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { isOpen, setIsOpen })
      )}
    </div>
  );
}

function CollapsibleTrigger({ children, asChild, isOpen, setIsOpen }) {
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      {children}
    </div>
  );
}

function CollapsibleContent({ children, isOpen }) {
  return isOpen ? <div>{children}</div> : null;
}

function Button({ children, variant, className, ...props }) {
  return (
    <button className={`${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}
