import React, { useState } from 'react';

export default function Counsellor() {
  return (
    <section style={{ padding: '20px', fontFamily: 'sans-serif' }}> {/* Added font-family */}
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Psychiatrists</h2> {/* Added heading */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {profiles.map((profile, index) => (
          <div key={index} style={{
            border: '1px solid #ccc',
            borderRadius: '8px', /* Increased border-radius */
            padding: '20px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', /* Enhanced shadow */
            backgroundColor: '#fff', /* Added background color */
            transition: 'transform 0.2s', /* Added smooth transition */
            '&:hover': {
              transform: 'scale(1.02)', /* Added hover effect */
            }
          }}>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>{profile.name}</h3>
              <p style={{ margin: '10px 0', color: '#555' }}>{profile.title}</p> {/* Adjusted margin and color */}
              <p style={{ margin: '5px 0', color: '#777', fontSize: '0.9rem' }}>{profile.position}</p> {/* Adjusted font size and color */}
              <p style={{ margin: '5px 0', color: '#777', fontSize: '0.9rem' }}>{profile.teaches}</p>
            </div>
            <Collapsible>
              <CollapsibleTrigger>
                <Button variant="outline" style={{ marginTop: '20px', padding: '8px 15px', border: '1px solid #007bff', color: '#007bff', borderRadius: '5px', cursor: 'pointer' }}> {/* Button styling */}
                  <ChevronDownIcon style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                  View Chambers
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div style={{ marginTop: '15px' }}>
                  {profile.chambers.map((chamber, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                      <MapPinIcon style={{ marginRight: '5px', color: '#007bff' }} /> {/* Icon color */}
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

// ... (rest of the code with profiles, icons, and Collapsible components remains the same)
const profiles = [
  {
    name: "Dr. John Doe",
    title: "Psychiatrist, MD",
    position: "Professor of Psychology",
    teaches: "Teaches at XYZ University",
    chambers: ["123 Main St, Anytown USA", "456 Oak Rd, Somewhere Else USA"]
  },
  {
    name: "Dr. Jane Smith",
    title: "Psychiatrist, MD, Board Certified",
    position: "Assistant Professor of Psychiatry",
    teaches: "Teaches at ABC Medical School",
    chambers: ["789 Elm St, Somewhere Else USA"]
  },
  {
    name: "Dr. Michael Johnson",
    title: "Psychiatrist, MD",
    position: "Lecturer in Clinical Psychology",
    teaches: "Teaches at DEF College",
    chambers: ["321 Oak Rd, Somewhere Else USA"]
  },
  // Additional 20 Psychiatrist Profiles 
  {
    name: "Dr. Laura White",
    title: "Psychiatrist, MD",
    position: "Specialist in Mood Disorders",
    teaches: "Teaches at GHI University",
    chambers: ["456 Elm St, Anytown USA"]
  },
  {
    name: "Dr. George Harris",
    title: "Psychiatrist, MD",
    position: "Expert in Anxiety Disorders",
    teaches: "Teaches at JKL Medical School",
    chambers: ["789 Oak Rd, Somewhere Else USA"]
  },
  {
    name: "Dr. Linda Martin",
    title: "Psychiatrist, MD",
    position: "Focus on Geriatric Psychiatry",
    teaches: "Teaches at MNO College",
    chambers: ["123 Pine St, Somewhere New USA"]
  },
  {
    name: "Dr. Richard Clark",
    title: "Psychiatrist, MD",
    position: "Specializes in Addiction Psychiatry",
    teaches: "Teaches at PQR University",
    chambers: ["456 Maple Ave, Anytown USA"]
  },
  {
    name: "Dr. Susan Young",
    title: "Psychiatrist, MD",
    position: "Expertise in Child and Adolescent Psychiatry",
    teaches: "Teaches at STU Medical School",
    chambers: ["789 Cedar Ln, Somewhere Else USA"]
  },
  {
    name: "Dr. Charles Lewis",
    title: "Psychiatrist, MD",
    position: "Focus on Forensic Psychiatry",
    teaches: "Teaches at VWX College",
    chambers: ["321 Birch St, Somewhere New USA"]
  },
  {
    name: "Dr. Karen Walker",
    title: "Psychiatrist, MD",
    position: "Specializes in Consultation-Liaison Psychiatry",
    teaches: "Teaches at YZA University",
    chambers: ["654 Oak St, Anytown USA"]
  },
  {
    name: "Dr. Thomas Hall",
    title: "Psychiatrist, MD",
    position: "Expertise in Psychosomatic Medicine",
    teaches: "Teaches at BCD Medical School",
    chambers: ["987 Elm Ave, Somewhere Else USA"]
  },
  {
    name: "Dr. Dorothy King",
    title: "Psychiatrist, MD",
    position: "Focus on Sleep Psychiatry",
    teaches: "Teaches at EFG College",
    chambers: ["246 Pine Rd, Somewhere New USA"]
  },
  {
    name: "Dr. Paul Baker",
    title: "Psychiatrist, MD",
    position: "Specializes in Neuropsychiatry",
    teaches: "Teaches at HIJ University",
    chambers: ["369 Maple St, Anytown USA"]
  },
  {
    name: "Dr. Helen Cook",
    title: "Psychiatrist, MD",
    position: "Expertise in Community Psychiatry",
    teaches: "Teaches at KLM Medical School",
    chambers: ["159 Cedar Dr, Somewhere Else USA"]
  },
  {
    name: "Dr. Edward Cooper",
    title: "Psychiatrist, MD",
    position: "Focus on Cross-Cultural Psychiatry",
    teaches: "Teaches at NOP College",
    chambers: ["357 Birch Ave, Somewhere New USA"]
  },
  {
    name: "Dr. Margaret Bell",
    title: "Psychiatrist, MD",
    position: "Specializes in Emergency Psychiatry",
    teaches: "Teaches at QRS University",
    chambers: ["864 Oak Ln, Anytown USA"]
  },
  {
    name: "Dr. Ronald Green",
    title: "Psychiatrist, MD",
    position: "Expertise in Pain Psychiatry",
    teaches: "Teaches at TUV Medical School",
    chambers: ["258 Elm St, Somewhere Else USA"]
  },
  {
    name: "Dr. Ruth Gray",
    title: "Psychiatrist, MD",
    position: "Focus on Women's Mental Health",
    teaches: "Teaches at WXY College",
    chambers: ["147 Pine Ct, Somewhere New USA"]
  },
  {
    name: "Dr. Samuel Price",
    title: "Psychiatrist, MD",
    position: "Specializes in LGBTQ+ Mental Health",
    teaches: "Teaches at ZAB University",
    chambers: ["630 Maple Rd, Anytown USA"]
  },
  {
    name: "Dr. Donna Wood",
    title: "Psychiatrist, MD",
    position: "Expertise in Military Psychiatry",
    teaches: "Teaches at CDE Medical School",
    chambers: ["369 Cedar Blvd, Somewhere Else USA"]
  },
  {
    name: "Dr. Harry Evans",
    title: "Psychiatrist, MD",
    position: "Focus on Telepsychiatry",
    teaches: "Teaches at FGH College",
    chambers: ["135 Birch Ter, Somewhere New USA"]
  },
  {
    name: "Dr. Betty Adams",
    title: "Psychiatrist, MD",
    position: "Specializes in Integrative Psychiatry",
    teaches: "Teaches at IJK University",
    chambers: ["741 Oak Pl, Anytown USA"]
  },
  {
    name: "Dr. Walter Nelson",
    title: "Psychiatrist, MD",
    position: "Expertise in Psychopharmacology",
    teaches: "Teaches at LMN Medical School",
    chambers: ["528 Elm Way, Somewhere Else USA"]
  }
];

function ChevronDownIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m6 9 6 6 6-6" />
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
