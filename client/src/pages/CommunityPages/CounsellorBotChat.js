import React, { useState } from 'react';

export default function CounsellorBotChat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSendClick = async () => {
    if (!input) return;
  
    // Add user message to chat
    const userMessage = { sender: 'user', text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
  
    try {
      // Make API request to Gemini
      const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyATesepFKDuKiy3erERfUg2FqsSYOWEn9A', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: input
                }
              ]
            }
          ]
        })
      });
  
      // Log the response status and body for debugging
      console.log('Response status:', response.status);
      const responseBody = await response.text();
      console.log('Response body:', responseBody);
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = JSON.parse(responseBody);
      console.log(data);
  
      // Extract the text from the response and add it to the chat
      const botMessageText = data.candidates[0].content.parts[0].text;
      const botMessage = { sender: 'bot', text: botMessageText };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
  
    } catch (error) {
      console.error('Error communicating with the API:', error);
      // Display an error message if needed
      const errorMessage = { sender: 'bot', text: 'Sorry, something went wrong. Please try again.' };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  
    setInput('');
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Counsellor Bot</h2>
      <div style={{ marginBottom: '20px', border: '1px solid #ddd', borderRadius: '8px', padding: '10px', height: '300px', overflowY: 'scroll' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <p style={{ background: msg.sender === 'user' ? '#e0e0e0' : '#007bff', color: msg.sender === 'user' ? '#000' : '#fff', padding: '8px 12px', borderRadius: '12px', display: 'inline-block', margin: '5px 0' }}>
              {msg.text}
            </p>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message..."
          style={{ flexGrow: 1, padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
        />
        <button
          onClick={handleSendClick}
          style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
