import React from 'react';

export default function PrivacyPage() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: "'Roboto', sans-serif", backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', textAlign: 'center', color: '#333', borderBottom: '3px solid #007bff', paddingBottom: '10px' }}>Privacy Policy</h1>
      
      <section style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '15px', color: '#007bff' }}>Introduction</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
          Welcome to MindCare's Privacy Policy. We are committed to protecting your personal information. This policy explains how we collect, use, and safeguard your information.
        </p>
      </section>
      
      <section style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '15px', color: '#007bff' }}>Information Collection</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
          We collect information you provide directly to us, such as when you register for an account or contact us. We may also collect information automatically through your use of our services.
        </p>
      </section>
      
      <section style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '15px', color: '#007bff' }}>Use of Information</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
          We use your information to provide and improve our services, communicate with you, and comply with legal obligations. We do not sell or rent your personal information to third parties.
        </p>
      </section>
      
      <section style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '15px', color: '#007bff' }}>Data Security</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
          We implement reasonable measures to protect your data from unauthorized access, use, or disclosure. However, no method of transmission over the Internet or electronic storage is 100% secure.
        </p>
      </section>
      
      <section style={{ textAlign: 'center', padding: '20px', backgroundColor: '#e0e0e0', color: '#333', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px' }}>Contact Us</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          If you have any questions about this Privacy Policy, please <a href="/contact" style={{ color: '#007bff', textDecoration: 'underline' }}>contact us</a>.
        </p>
      </section>
    </div>
  );
}