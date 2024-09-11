import React from 'react';

export default function TermsPage() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: "'Roboto', sans-serif", backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', textAlign: 'center', color: '#333', borderBottom: '3px solid #007bff', paddingBottom: '10px' }}>Terms of Service</h1>
      
      <section style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '15px', color: '#007bff' }}>Introduction</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
          Welcome to MindCare. By accessing or using our services, you agree to comply with and be bound by these Terms of Service. If you do not agree with these terms, please do not use our services.
        </p>
      </section>
      
      <section style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '15px', color: '#007bff' }}>Use of Our Services</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
          You agree to use our services only for lawful purposes and in accordance with these Terms. You must not use our services in any way that may damage, disable, or impair our services.
        </p>
      </section>
      
      <section style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '15px', color: '#007bff' }}>Intellectual Property</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
          All content, trademarks, and other intellectual property on our website are the property of MindCare or our licensors. You must not use any of our intellectual property without our prior written consent.
        </p>
      </section>
      
      <section style={{ marginBottom: '30px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '28px', fontWeight: '600', marginBottom: '15px', color: '#007bff' }}>Limitation of Liability</h2>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
          To the fullest extent permitted by law, MindCare shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our services or inability to use our services.
        </p>
      </section>
      
      <section style={{ textAlign: 'center', padding: '20px', backgroundColor: '#e0e0e0', color: '#333', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
        <h3 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '15px' }}>Contact Us</h3>
        <p style={{ fontSize: '18px', lineHeight: '1.6' }}>
          If you have any questions about these Terms, please <a href="/contact" style={{ color: '#007bff', textDecoration: 'underline' }}>contact us</a>.
        </p>
      </section>
    </div>
  );
}
