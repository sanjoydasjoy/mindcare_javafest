import React from 'react';

export default function AboutPage() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto', fontFamily: "'Arial', sans-serif", backgroundColor: '#f0f4f8', borderRadius: '12px', boxShadow: '0 12px 24px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ fontSize: '40px', fontWeight: '700', textAlign: 'center', color: '#2c3e50', marginBottom: '30px', position: 'relative' }}>
        About Us
        <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '80px',
          height: '5px',
          background: '#3498db',
          borderRadius: '3px',
          bottom: '-10px'
        }}></div>
      </h1>
      
      <section style={{ marginBottom: '30px', padding: '25px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '20px', color: '#3498db' }}>Our Mission</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#34495e' }}>
          At MindCare, our mission is to provide support and resources to improve mental health and well-being. We are dedicated to helping individuals navigate their mental health journey through education, support, and community.
        </p>
      </section>
      
      <section style={{ marginBottom: '30px', padding: '25px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '20px', color: '#3498db' }}>Our Team</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#34495e' }}>
          Our team consists of dedicated professionals with a passion for mental health. From therapists to support staff, each member brings a wealth of experience and a commitment to making a difference in people's lives.
        </p>
      </section>
      
      <section style={{ marginBottom: '30px', padding: '25px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '20px', color: '#3498db' }}>Our Values</h2>
        <ul style={{ fontSize: '18px', lineHeight: '1.6', color: '#34495e', paddingLeft: '20px', listStyleType: 'disc' }}>
          <li>Empathy: We approach each individual with understanding and compassion.</li>
          <li>Integrity: We uphold the highest ethical standards in everything we do.</li>
          <li>Innovation: We continuously seek new ways to improve and expand our services.</li>
          <li>Community: We believe in the power of connection and support within our community.</li>
        </ul>
      </section>
      
      <section style={{ textAlign: 'center', padding: '25px', backgroundColor: '#e0e0e0', color: '#333333', borderRadius: '10px', boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)' }}>
        <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px' }}>Get in Touch</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          We’d love to hear from you! If you have any questions or would like to learn more about us, please <a href="/contact" style={{ color: '#3498db', textDecoration: 'underline' }}>contact us</a>.
        </p>
      </section>
    </div>
  );
}
