import React from 'react';
import developer1Image from './developer1.jpg';
import developer2Image from './developer2.jpg';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const AboutPage = () => {
  const pageStyle = {
    padding: '40px',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: "'Arial', sans-serif",
    backgroundColor: '#f0f4f8',
    borderRadius: '12px',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)',
  };

  const headingStyle = {
    fontSize: '40px',
    fontWeight: '700',
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '30px',
    position: 'relative',
  };

  const underlineStyle = {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '80px',
    height: '5px',
    background: '#3498db',
    borderRadius: '3px',
    bottom: '-10px',
  };

  const sectionStyle = {
    marginBottom: '30px',
    padding: '25px',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
  };

  const paragraphStyle = {
    fontSize: '18px',
    lineHeight: '1.6',
    color: '#34495e',
  };

  const developerSectionHeadingStyle = {
    fontSize: '28px',
    fontWeight: '600',
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '20px',
  };

  const developerSectionParagraphStyle = {
    ...paragraphStyle,
    textAlign: 'center',
    marginBottom: '30px',
  };

  const developerCardStyle = {
    textAlign: 'center',
  };

  const developerImageStyle = {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '15px',
  };

  const developerNameStyle = {
    fontSize: '22px',
    fontWeight: '500',
    color: '#2c3e50',
    marginBottom: '10px',
  };

  const developerDetailsStyle = {
    fontSize: '16px',
    lineHeight: '1.4',
    color: '#34495e',
  };

  const socialLinksStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  };

  const socialLinkStyle = {
    marginRight: '15px',
    color: '#34495e',
  };

  return (
    <div style={pageStyle}>
      <h1 style={headingStyle}>
        MindCare: Your AI-Powered Mental Health Companion
        <div style={underlineStyle}></div>
      </h1>

      <section style={sectionStyle}>
        <p style={paragraphStyle}>
          MindCare is a revolutionary web-based platform dedicated to providing personalized mental health support. Using advanced AI technology, we offer tailored tips, scenario-based advice, and a wealth of resources to individuals struggling with various mental health conditions.
        </p>
      </section>

      <section style={sectionStyle}>
        <p style={paragraphStyle}>
          Our platform fosters a supportive community, empowering users to connect, share experiences, and learn effective coping strategies. With MindCare, individuals can access personalized assistance, cultivate resilience, and embark on a journey toward improved mental well-being.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={developerSectionHeadingStyle}>The Minds Behind MindCare</h2>
        <p style={developerSectionParagraphStyle}>
          Passionate individuals dedicated to making a difference in mental health.
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {/* Developer 1 */}
          <div style={developerCardStyle}>
            <img src={developer1Image} alt="Developer 1" style={developerImageStyle} />
            <h3 style={developerNameStyle}>Mustakim Billah</h3>
            <p style={developerDetailsStyle}>
              Lead Developer <br />
              <strong>mbillah.cse.sust20@gmail.com</strong>
              <br />
              <strong> CSE,SUST</strong>
            </p>

            <div style={socialLinksStyle}>
              <a href="https://github.com/MBillahsust" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                <FaGithub size={24} /> 
              </a>
              <a href="https://www.linkedin.com/in/mustakim-billah-nafees/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                <FaLinkedin size={24} /> 
              </a>
            </div>
          </div>

          {/* Developer 2 */}
          <div style={developerCardStyle}>
            <img src={developer2Image} alt="Developer 2" style={developerImageStyle} />
            <h3 style={developerNameStyle}>Sanjoy Das</h3>
            <p style={developerDetailsStyle}>
              Lead Developer 
              <br />
              <strong>sanjoy.cse.sust20@gmail.com</strong> <br />
              <strong>CSE,SUST </strong>
            </p>

            <div style={socialLinksStyle}>
              <a href="https://github.com/sanjoydasjoy" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                <FaGithub size={24} /> 
              </a>
              <a href="https://www.linkedin.com/in/sanjoy-das-ba774a22a/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                <FaLinkedin size={24} /> 
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;


// import React from 'react';

  // import developer1Image from './developer1.jpg'; // Replace with actual image path
  // import developer2Image from './developer2.jpg';

  // export default function AboutPage() {
  //   return (
  //     <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: "'Arial', sans-serif", backgroundColor: '#f0f4f8', borderRadius: '12px', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)' }}>
  //       <h1 style={{ fontSize: '40px', fontWeight: '700', textAlign: 'center', color: '#2c3e50', marginBottom: '30px', position: 'relative' }}>
  //         MindCare: Your AI-Powered Mental Health Companion
  //         <div style={{
  //           position: 'absolute',
  //           left: '50%',
  //           transform: 'translateX(-50%)',
  //           width: '80px',
  //           height: '5px',
  //           background: '#3498db',
  //           borderRadius: '3px',
  //           bottom: '-10px'
  //         }}></div>
  //       </h1>

  //       <section style={{ marginBottom: '30px', padding: '25px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)' }}>
  //         <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#34495e' }}>
  //           MindCare is a revolutionary web-based platform dedicated to providing personalized mental health support. Using advanced AI technology, we offer tailored tips, scenario-based advice, and a wealth of resources to individuals struggling with various mental health conditions.
  //         </p>
  //       </section>

  //       <section style={{ marginBottom: '30px', padding: '25px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)' }}>
  //         <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#34495e' }}>
  //           Our platform fosters a supportive community, empowering users to connect, share experiences, and learn effective coping strategies. With MindCare, individuals can access personalized assistance, cultivate resilience, and embark on a journey toward improved mental well-being.
  //         </p>
  //       </section>

  //       {/* New section about the developers */}
  //       <section style={{ marginBottom: '30px', padding: '25px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)' }}>
  //         <h2 style={{ fontSize: '28px', fontWeight: '600', textAlign: 'center', color: '#2c3e50', marginBottom: '20px' }}>
  //           The Minds Behind MindCare
  //         </h2>
  //         <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#34495e', textAlign: 'center', marginBottom: '30px' }}>
  //           Passionate individuals dedicated to making a difference in mental health.
  //         </p>

  //         <div style={{ display: 'flex', justifyContent: 'space-around' }}>
  //           {/* Developer 1 */}
  //           <div style={{ textAlign: 'center' }}>
  //             <img src={developer1Image} alt="Developer 1" style={{ width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px' }} />
  //             <h3 style={{ fontSize: '22px', fontWeight: '500', color: '#2c3e50', marginBottom: '10px' }}>Mustakim Billah</h3>
  //             <p style={{ fontSize: '16px', lineHeight: '1.4', color: '#34495e' }}>
  //               Lead Developer <br />
  //               <strong>mbillah.cse.sust20@gmail.com</strong>
  //               <br />
  //               <strong> CSE,SUST</strong>

  //             </p>
  //           </div>

  //           {/* Developer 2 */}
  //           <div style={{ textAlign: 'center' }}>
  //             <img src={developer2Image} alt="Developer 2" style={{ width: '250px', height: '250px', borderRadius: '50%', objectFit: 'cover', marginBottom: '15px' }} />
  //             <h3 style={{ fontSize: '22px', fontWeight: '500', color: '#2c3e50', marginBottom: '10px' }}>Sanjoy Das</h3>
  //             <p style={{ fontSize: '16px', lineHeight: '1.4', color: '#34495e' }}>
  //             Lead Developer 
  //             <br />
  //               <strong>sanjoy.cse.sust20@gmail.com</strong> <br />
  //               <strong>CSE,SUST </strong>
  //             </p>
  //           </div>
  //         </div>
  //       </section>
  //     </div>
  //   );
  // }

  // // import React from 'react';

  // // export default function AboutPage() {
  // //   return (
  // //     <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: "'Arial', sans-serif", backgroundColor: '#f0f4f8', borderRadius: '12px', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)' }}>
  // //       <h1 style={{ fontSize: '40px', fontWeight: '700', textAlign: 'center', color: '#2c3e50', marginBottom: '30px', position: 'relative' }}>
  // //         MindCare: Your AI-Powered Mental Health Companion
  // //         <div style={{
  // //           position: 'absolute',
  // //           left: '50%',
  // //           transform: 'translateX(-50%)',
  // //           width: '80px',
  // //           height: '5px',
  // //           background: '#3498db',
  // //           borderRadius: '3px',
  // //           bottom: '-10px'
  // //         }}></div>
  // //       </h1>
        
  // //       <section style={{ marginBottom: '30px', padding: '25px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)' }}>
  // //         <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#34495e' }}>
  // //           MindCare is a revolutionary web-based platform dedicated to providing personalized mental health support. Using advanced AI technology, we offer tailored tips, scenario-based advice, and a wealth of resources to individuals struggling with various mental health conditions.
  // //         </p>
  // //       </section>
        
  // //       <section style={{ marginBottom: '30px', padding: '25px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)' }}>
  // //         <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#34495e' }}>
  // //           Our platform fosters a supportive community, empowering users to connect, share experiences, and learn effective coping strategies. With MindCare, individuals can access personalized assistance, cultivate resilience, and embark on a journey toward improved mental well-being.
  // //         </p>
  // //       </section>
  // //     </div>
  // //   );
  // // }
