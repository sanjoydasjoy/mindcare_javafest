import React, { useState } from 'react';
function PhoneIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"   
 strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0   
 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
export default function Counsellor() {
  const [selectedCity, setSelectedCity] = useState('All');

  // Major cities of Bangladesh
  const majorCities = [
    'All', 'Dhaka', 'Chittagong', 'Khulna', 'Sylhet', 'Rajshahi', 'Rangpur', 'Barisal', 'Mymensingh', 'Comilla', 'Narayanganj', 'Gazipur',
    
    'Bogra', 'Dinajpur', 'Joypurhat', 'Naogaon', 'Natore', 'Nawabganj', 'Pabna', 'Sirajganj', 
    'Thakurgaon', 'Bandarban', 'Brahmanbaria', 'Chandpur', 'Chattogram', 'Cox\'s Bazar', 'Cumilla', 'Feni', 
    'Khagrachhari', 'Lakshmipur', 'Noakhali', 'Rangamati', 'Faridpur', 'Gopalganj', 'Kishoreganj', 'Madaripur', 
    'Manikganj', 'Munshiganj', 'Narail', 'Rajbari', 'Shariatpur', 'Tangail', 'Bagerhat', 'Chuadanga', 'Jashore', 
    'Jhenaidah', 'Khulna', 'Kushtia', 'Magura', 'Meherpur', 'Narail', 'Satkhira', 'Jamalpur', 'Mymensingh', 
    'Netrokona',   
   
    'Sherpur', 'Barguna', 'Barisal', 'Bhola', 'Jhalakathi', 'Patuakhali', 'Pirojpur', 'Habiganj', 
    'Moulvibazar', 'Sunamganj', 'Sylhet'
  ];

  // Function to filter profiles based on selected city
  const filteredProfiles = selectedCity === 'All' 
    ? profiles 
    : profiles.filter(profile => profile.city === selectedCity);

  return (
    <section style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Our Psychiatrists</h2>

      {/* City Filter Dropdown */}
      <select 
        value={selectedCity} 
        onChange={e => setSelectedCity(e.target.value)}
        style={{ padding: '8px', marginBottom: '20px' }}
      >
        {majorCities.map(city => (
          <option key={city} value={city}>{city}</option>
        ))}
      </select>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}> 
        {filteredProfiles.map((profile, index) => (
          <div key={index} style={{ 
            border: '1px solid #ccc', 
            borderRadius: '8px',
            padding: '20px', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff', 
            transition: 'transform 0.2s',
            '&:hover': {
              transform: 'scale(1.02)',
            }
          }}> 
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 'bold' }}>{profile.name}</h3>
              <p style={{ margin: '10px 0', color: '#555' }}>{profile.title}</p>
              <p style={{ margin: '5px 0', color: '#777', fontSize: '0.9rem' }}>{profile.position}</p>
              <p style={{ margin: '5px 0', color: '#777', fontSize: '0.9rem' }}>{profile.teaches}</p>

              {/* Display City Name */}
              <p style={{ margin: '5px 0', color: '#777', fontSize: '0.9rem' }}>
                <MapPinIcon style={{ marginRight: '5px', color: '#007bff', verticalAlign: 'middle' }} /> 
                {profile.city}
              </p>

              {/* Display Contact Number if available */}
              {profile.phone && (
                <p style={{ margin: '5px 0', color: '#777', fontSize: '0.9rem' }}>
                  <PhoneIcon style={{ marginRight: '5px', color: '#007bff', verticalAlign: 'middle' }} /> 
                  {profile.phone}
                </p>
              )} 
            </div>
            <Collapsible>
              <CollapsibleTrigger>
                <Button variant="outline" style={{ marginTop: '20px', padding: '8px 15px', border: '1px solid #007bff', color: '#007bff', borderRadius: '5px', cursor: 'pointer' }}>
                  <ChevronDownIcon style={{ marginRight: '5px', verticalAlign: 'middle' }} />
                  View Chambers
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div style={{ marginTop: '15px' }}>
                  {profile.chambers.map((chamber, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '8px' }}>
                      <MapPinIcon style={{ marginRight: '5px', color: '#007bff' }} />
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
    name: "Prof. Dr. Md. Rezaul Karim",
    title: "MBBS, FCPS (Psychiatry), MS (USA)",
    position: "Psychiatry (Brain, Mental Diseases, Drug Addiction) Specialist",
    teaches: "Former Professor & Head, Psychiatry, Sylhet MAG Osmani Medical College & Hospital",
    city: "Sylhet",
    chambers: ["Zindabazar Point, Sylhet", "Osmani Medical College Campus, Sylhet"],
    phone: "+8801712345678"
  },
  {
    name: "Prof. Dr. Gopi Kanta Roy",
    title: "MBBS, FCPS (Psychiatry), WHO Fellow (India)",
    position: "Psychiatry (Mental Diseases, Depression, Drug Addiction) Specialist",
    teaches: "Professor (Ex), Psychiatry, Jalalabad Ragib-Rabeya Medical College & Hospital",
    city: "Sylhet",
    chambers: ["Amborkhana Point, Sylhet"],
    phone: "+8801912345678"
  },
  {
    name: "Dr. Siddhartha Paul",
    title: "MBBS, M.Phil (Psychiatry)",
    position: "Psychiatry (Brain, Mental Diseases, Drug Addiction) Specialist",
    teaches: "Associate Professor, Psychiatry, North East Medical College & Hospital",
    city: "Sylhet",
    chambers: ["Chowhatta, Sylhet", "North East Medical College Campus, Sylhet"],
    phone: "+8801320932211"
  },
  {
    name: "Dr. RKS Royel",
    title: "MBBS, BCS (Health), M.Phil (Psychiatry)",
    position: "Psychiatry (Brain, Mind, Depression, Drug Addiction) Specialist",
    teaches: "Assistant Professor & Head, Psychiatry, Sylhet MAG Osmani Medical College & Hospital",
    city: "Sylhet",
    chambers: ["Bondor Bazar, Sylhet", "Osmani Medical College Campus, Sylhet"],
    phone: "+8801843829102"
  },
  {
    name: "Dr. Susmita Roy",
    title: "MBBS, M.Phil (Psychiatry)",
    position: "Brain, Mental & Drug Addiction Specialist",
    teaches: "Associate Professor, Psychiatry, Jalalabad Ragib-Rabeya Medical College & Hospital",
    city: "Sylhet",
    chambers: ["Uposhohor, Sylhet"],
    phone: "+8801320932211"
  },
  {
    name: "Dr. Ahmad Riad Chowdhury",
    title: "MBBS, M.Phil (Psychiatry)",
    position: "Psychiatry (Mental Diseases, Headache, Drug Addiction) Specialist",
    teaches: "Assistant Professor, Psychiatry, Sylhet MAG Osmani Medical College & Hospital",
    city: "Sylhet",
    chambers: ["Mirzajangal, Sylhet", "Osmani Medical College Campus, Sylhet"],
    phone: "+8801843829102"
  },
  {
    name: "Dr. Mohammad Humayun Kabir",
    title: "MBBS (SSMC), MD (Psychiatry, BSMMU), Trained in Sexual Medicine (South Asian Society of Sexual Medicine)",
    position: "Psychiatry (Brain, Mind, Medicine & Sex and Drug Addiction Specialist)",
    teaches: "Former Resident Doctor, Psychiatry, Consultant: Shahjalal Mental Health & Research Center, Akhalia, Sylhet, Former Psychiatrist (MD Resident), Dept. of Psychiatry, Sylhet MAG Osmani College Hospital",
    city: "Sylhet",
    chambers: ["Akhalia, Sylhet", "Shahjalal Mental Health & Research Center, Sylhet"],
    phone: "+8801672930123"
  },
  {
    name: "Prof. Dr. Md. Shafiqur Rahman",
    title: "MBBS, M.Phil (Psychiatry)",
    position: "Psychiatry (Brain, Mental Diseases, Drug Addiction) Specialist",
    teaches: "Professor & Head, Psychiatry, Sylhet Womens Medical College & Hospital",
    city: "Sylhet",
    chambers: ["Shibgong, Sylhet", "Sylhet Womens Medical College Campus, Sylhet"],
    phone: "+8801521389023" 
  },
  {
    name: "Dr. Shamsul Haque Chowdhury",
    title: "MBBS, M.Phil (Psychiatry)",
    position: "Psychiatry (Brain, Mental Diseases, Drug Addiction) Specialist",
    teaches: "Assistant Professor (Ex), Psychiatry, Sylhet MAG Osmani Medical College & Hospital",
    city: "Sylhet",
    chambers: ["Subhanighat, Sylhet", "Osmani Medical College Campus, Sylhet"],
    phone: "+8801311923012"
  },
  {
    name: "Dr. Rezwana Habiba",
    title: "MBBS, BCS (Health), MD (Psychiatry)",
    position: "Mental Diseases, Sexual Health, Parenting Specialist & Psychotherapist",
    teaches: "Consultant, Psychiatry, Sylhet MAG Osmani Medical College & Hospital",
    city: "Sylhet",
    chambers: ["Kumarpara, Sylhet", "Osmani Medical College Campus, Sylhet"],
    phone: "+8801982310987"
  },
  {
    name: "Prof. Dr. Dipendra Narayan Das",
    title: "MBBS (CU), M.Phil (Psychiatry)",
    position: "Psychiatry (Brain, Mind, Depression, Drug Addiction) Specialist",
    teaches: "Professor & Head, Psychiatry, Parkview Medical College & Hospital, Sylhet",
    city: "Sylhet",
    chambers: ["Menonbagh, Sylhet", "Parkview Medical College Campus, Sylhet"],
    phone: "+8801784396499"
  },
  {
    name: "Dr. Md. Abdullah Sayed",
    title: "MBBS, MD (Psychiatry)",
    position: "Psychiatry (Brain, Mind, Mental Diseases, Depression) Specialist",
    teaches: "Assistant Professor, Psychiatry, North East Medical College & Hospital",
    city: "Sylhet",
    chambers: ["Uttara Model Town, Sylhet", "North East Medical College Campus, Sylhet"],
    phone: "+8801450612851"
  },
  {
    name: "Dr. Md. Enayet Karim",
    title: "MBBS, M.Phil (Psychiatry)",
    position: "Psychiatry (Brain, Mind, Depression, Drug Addiction) Specialist",
    teaches: "Assistant Professor, Psychiatry, Jalalabad Ragib-Rabeya Medical College & Hospital",
    city: "Sylhet", 
    chambers: ["Modina Market, Sylhet"],
    phone: "+8801825461388"
  },
  {
    name: "Dr. Md. Shafiul Islam",
    title: "MBBS, PGT (Medicine), M.Phil (Psychiatry)",
    position: "Psychiatry (Brain, Mental Diseases, Drug Addiction) Specialist",
    teaches: "Associate Professor & Head, Psychiatry, Jalalabad Ragib-Rabeya Medical College & Hospital",
    city: "Sylhet",
    chambers: ["Keranigonj, Sylhet"],
    phone: "+8801515768392"
  },
  {
    name: "Dr. Ayesha Rahman",
    title: "MBBS, FCPS (Psychiatry)",
    position: "Child & Adolescent Psychiatrist",
    teaches: "Teaches at Dhaka Medical College",
    city: "Dhaka",
    chambers: ["Dhanmondi, Dhaka", "Gulshan, Dhaka"],
    phone: "+8801977433953"
  },
  {
    name: "Dr. Farhan Ahmed",
    title: "MBBS, MD (Psychiatry)",
    position: "Addiction Psychiatrist",
    teaches: "Teaches at Chittagong Medical College",
    city: "Chittagong",
    chambers: ["Agrabad, Chittagong", "GEC Circle, Chittagong"],
    phone: "+8801855678577"
  },
  {
    name: "Prof. Brig. Gen. Dr. Kumrul Hasan",
    title: "MBBS, MCPS, MPHIL (Psychiatry), MMEd, Fellow Child Psychiatry (Pakistan), MACP (USA), FRCP (UK)",
    position: "Psychiatry, Brain, Drug Addiction, Sex Specialist & Neuro Psychiatrist, Adviser Specialist",
    teaches: "Psychiatry",
    city: "Dhaka",
    chambers: ["Combined Military Hospital, Dhaka"],
    phone: "+8801722568931"
  },
  {
    name: "Dr. Redwana Hossain",
    title: "MBBS, BCS (Health), MD (Psychiatry)",
    position: "Psychiatry, Drug Addiction, Dementia & Female Psychosexual Disorder Specialist",
    teaches: "Assistant Professor, Psychiatry, Shaheed Suhrawardy Medical College & Hospital",
    city: "Dhaka",
    chambers: ["Shaheed Suhrawardy Medical College & Hospital"],
    phone: "+8801933746102"
  },
  {
    name: "Prof. Dr. Nahid Mahjabin Morshed",
    title: "MBBS, MSc (DU), M.Phil (Psychiatry), Fellow (WPA, Australia)",
    position: "Mental Diseases, Brain & Drug Addiction Specialist, Professor, Child & Adolescent Psychiatry, Chairman",
    teaches: "Department of Psychiatry, Bangabandhu Sheikh Mujib Medical University Hospital",
    city: "Dhaka",
    chambers: ["Bangabandhu Sheikh Mujib Medical University Hospital"],
    phone: "+8801755239841"
  },
  {
    name: "Dr. Mekhala Sarkar",
    title: "MBBS, FCPS (Psychiatry), Fellow WPA (Turkey), International Fellow, American Psychiatric Association (USA)",
    position: "Mental Health Specialist & Psychiatrist, Associate Professor",
    teaches: "Psychiatry, National Institute of Mental Health & Hospital",
    city: "Dhaka", // Assuming Dhaka as the city
    chambers: ["National Institute of Mental Health & Hospital"],
    phone: "+8801922653014"
  },
  {
    name: "Prof. Dr. M. A. Mohit Kamal",
    title: "MBBS, MPhil (Psychiatry), PhD (Psychiatry), FWPA (USA), CME-WCP",
    position: "Psychiatry (Mental Diseases) Specialist & Psychotherapist, Director & Professor",
    teaches: "Psychiatry, National Institute of Mental Health & Hospital",
    city: "Dhaka", // Assuming Dhaka as the city
    chambers: ["National Institute of Mental Health & Hospital"],
    phone: "+8801633890721"
  },
  {
    name: "Prof. Dr. Jhunu Shamsun Nahar",
    title: "MBBS, FCPS (Psychiatry), International Fellow of American Psychiatric Association (USA)",
    position: "Psychiatrist & Psychotherapist, Ex. Professor & Chairman",
    teaches: "Psychiatry, Bangabandhu Sheikh Mujib Medical University Hospital",
    city: "Dhaka",
    chambers: ["Bangabandhu Sheikh Mujib Medical University Hospital"],
    phone: "+8801744932106"
  },
  {
    name: "Prof. Dr. Md. Shah Alam",
    title: "MBBS, FCPS (Psychiatry)",
    position: "Mental Diseases, Drug Addiction, Sexual Health Specialist & Psychotherapist, Former Professor & Head",
    teaches: "Psychotherapy, National Institute of Mental Health & Hospital",
    city: "Dhaka", // Assuming Dhaka as the city
    chambers: ["National Institute of Mental Health & Hospital"],
    phone: "+8801302856193"
  },
  {
    name: "Brig. Gen. Prof. Dr. Md. Azizul Islam",
    title: "MBBS, FCPS (PSY), FRCP (UK), FACP (USA)",
    position: "Mental Diseases, Drug Addiction & Psychiatry Specialist, Professor & Head",
    teaches: "Psychiatry, Armed Forces Medical College, Dhaka",
    city: "Dhaka",
    chambers: ["Armed Forces Medical College, Dhaka"],
    phone: "+8801966201354"
  },
  {
    name: "Prof. Dr. Md. Mohsin Ali Shah",
    title: "MBBS, M.Phil (Psychiatry), MD (Psychiatry)",
    position: "Mental Diseases, Drug Addiction, Sex Medicine & Psychiatry Specialist, Professor",
    teaches: "Psychiatry, Bangabandhu Sheikh Mujib Medical University Hospital",
    city: "Dhaka",
    chambers: ["Bangabandhu Sheikh Mujib Medical University Hospital"],
    phone: "+8801733049281"
  },
  {
    name: "Prof. Md. Waziul Alam Chowdhury",
    title: "MBBS, FCPS (Psychiatry), MACP (USA), WHO Fellowship (India)",
    position: "Psychiatry & Mental Health Specialist, Professor & Director",
    teaches: "Psychiatry, National Institute of Mental Health & Hospital",
    city: "Dhaka", // Assuming Dhaka as the city
    chambers: ["National Institute of Mental Health & Hospital"],
    phone: "+8801811537902" 
  },
  {
    name: "Prof. Dr. Md. Golam Rabbani",
    title: "MBBS, FCPS (Psychiatry)",
    position: "Mental Diseases, Brain & Drug Addiction Specialist, Former Professor & Head",
    teaches: "Psychiatry, National Institute of Mental Health & Hospital",
    city: "Dhaka", // Assuming Dhaka as the city
    chambers: ["National Institute of Mental Health & Hospital"],
    phone: "+8801766352189"
  },
  {
    name: "Dr. Raisul Islam Parag",
    title: "MBBS (DMC), MD (Psychiatry)",
    position: "Psychiatry (Mental Diseases, Depression, Sexual Problem) Specialist, Registrar",
    teaches: "Psychiatry, Dhaka Medical College & Hospital",
    city: "Dhaka",
    chambers: ["Dhaka Medical College & Hospital"],
    phone: "+8801944820173"
  },
  {
    name: "Dr. Nasim Jahan",
    title: "MBBS, MCPS, FCPS (Psychiatry)",
    position: "Mental Diseases, Brain Disorder & Drug Addiction Specialist, Assistant Professor",
    teaches: "Psychiatry, Birdem General Hospital & Ibrahim Medical College",
    city: "Dhaka", // Assuming Dhaka as the city
    chambers: ["Birdem General Hospital & Ibrahim Medical College"],
    phone: "+8801533927401" 
  },
  {
    name: "Prof. Dr. Nilufer Akhter Jahan",
    title: "MBBS, M.Phil (Psychiatry), MD (Psychiatry)",
    position: "Psychiatry (Mental Diseases, Drug Addiction, Brain Disorder) Specialist, Professor",
    teaches: "Geriatric & Organic Psychiatry, National Institute of Mental Health & Hospital",
    city: "Dhaka", // Assuming Dhaka as the city
    chambers: ["National Institute of Mental Health & Hospital"],
    phone: "+8801318439206"
  },
  {
    name: "Prof. Dr. Md. Abdus Salam",
    title: "MBBS, DPM (DU), MCPS (Psychiatry)",
    position: "Psychiatry (Brain, Mind, Depression, Drug Addiction) Specialist & Psychotherapist, Former Professor",
    teaches: "Psychiatry, Bangabandhu Sheikh Mujib Medical University Hospital",
    city: "Dhaka",
    chambers: ["Bangabandhu Sheikh Mujib Medical University Hospital"],
    phone: "+8801833652140" 
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

// import React, { useState } from 'react';
// import '../../Allcss/Counsellor.css';

// export default function Counsellor() {
//   return (
//     <section className="section-container">
//       <div className="card-container">
//         {profiles.map((profile, index) => (
//           <div key={index} className="card">
//             <div className="card-header">
//               <img src={profile.image} alt={profile.name} className="profile-image" />
//               <div className="profile-info">
//                 <h3 className="profile-name">{profile.name}</h3>
//                 <p className="profile-title">{profile.title}</p>
//                 <div className="profile-contact">
//                   <PhoneIcon className="icon" />
//                   <a href={`tel:${profile.phone}`} className="profile-link">
//                     {profile.phone}
//                   </a>
//                 </div>
//                 <div className="profile-contact">
//                   <GlobeIcon className="icon" />
//                   <a href={profile.website} target="_blank" rel="noopener noreferrer" className="profile-link">
//                     {profile.website}
//                   </a>
//                 </div>
//               </div>
//             </div>
//             <Collapsible className="card-collapsible">
//               <CollapsibleTrigger>
//                 <Button variant="outline" className="card-button">
//                   <ChevronDownIcon className="icon" />
//                   View Chambers
//                 </Button>
//               </CollapsibleTrigger>
//               <CollapsibleContent>
//                 <div className="card-chambers">
//                   {profile.chambers.map((chamber, index) => (
//                     <div key={index} className="chamber-location">
//                       <MapPinIcon className="icon" />
//                       <span>{chamber}</span>
//                     </div>
//                   ))}
//                 </div>
//               </CollapsibleContent>
//             </Collapsible>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// const profiles = [
//   {
//     name: "Dr. John Doe",
//     title: "Clinical Psychologist, MA, PhD",
//     phone: "+1 (234) 567-890",
//     website: "www.example.com",
//     image: "/placeholder.svg",
//     chambers: ["123 Main St, Anytown USA", "456 Oak Rd, Somewhere Else USA"]
//   },
//   {
//     name: "Dr. Jane Smith",
//     title: "Psychiatrist, MD, Board Certified",
//     phone: "+0 (987) 654-321",
//     website: "www.example.org",
//     image: "/placeholder.svg",
//     chambers: ["789 Elm St, Somewhere Else USA"]
//   },
//   {
//     name: "Dr. Michael Johnson",
//     title: "Clinical Psychologist, PsyD",
//     phone: "+5 (555) 123-4567",
//     website: "www.example.net",
//     image: "/placeholder.svg",
//     chambers: ["321 Oak Rd, Somewhere Else USA"]
//   }
// ];

// function ChevronDownIcon(props) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="m6 9 6 6 6-6" />
//     </svg>
//   );
// }

// function GlobeIcon(props) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <circle cx="12" cy="12" r="10" />
//       <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
//       <path d="M2 12h20" />
//     </svg>
//   );
// }

// function MapPinIcon(props) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
//       <circle cx="12" cy="10" r="3" />
//     </svg>
//   );
// }

// function PhoneIcon(props) {
//   return (
//     <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//     </svg>
//   );
// }

// function Collapsible({ children, className }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className={`${className} ${isOpen ? 'open' : ''}`}>
//       {React.Children.map(children, child =>
//         React.cloneElement(child, { isOpen, setIsOpen })
//       )}
//     </div>
//   );
// }

// function CollapsibleTrigger({ children, asChild, isOpen, setIsOpen }) {
//   return (
//     <div onClick={() => setIsOpen(!isOpen)}>
//       {children}
//     </div>
//   );
// }

// function CollapsibleContent({ children, isOpen }) {
//   return isOpen ? <div>{children}</div> : null;
// }

// function Button({ children, variant, className, ...props }) {
//   return (
//     <button className={`${variant} ${className}`} {...props}>
//       {children}
//     </button>
//   );
// }
