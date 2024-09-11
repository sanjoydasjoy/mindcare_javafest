import React from 'react';

export default function ContactPage() {
  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: "'Roboto', sans-serif" }}>
      <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center', color: '#333' }}>Contact Us</h1>
      
      <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px', color: '#007bff' }}>MindCare</h2>
        
        <p style={{ marginBottom: '10px', fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
          <strong style={{ color: '#333' }}>Address:</strong> 123 Wellness St, Suite 456, Health City, HC 78901
        </p>
        <p style={{ marginBottom: '10px', fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
          <strong style={{ color: '#333' }}>Phone:</strong> (123) 456-7890
        </p>
        <p style={{ marginBottom: '10px', fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
          <strong style={{ color: '#333' }}>Email:</strong> <a href="mailto:support@mindcare.com" style={{ color: '#007bff', textDecoration: 'none' }}>support@mindcare.com</a>
        </p>
      </div>
      
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '10px', color: '#007bff' }}>Follow Us</h3>
        <p>
          <a href="https://twitter.com/mindcare" target="_blank" rel="noopener noreferrer" style={{ color: '#1DA1F2', textDecoration: 'none', margin: '0 10px' }}>
            Twitter
          </a>
          <a href="https://facebook.com/mindcare" target="_blank" rel="noopener noreferrer" style={{ color: '#1877F2', textDecoration: 'none', margin: '0 10px' }}>
            Facebook
          </a>
          <a href="https://instagram.com/mindcare" target="_blank" rel="noopener noreferrer" style={{ color: '#E4405F', textDecoration: 'none', margin: '0 10px' }}>
            Instagram
          </a>
        </p>
      </div>
    </div>
  );
}
