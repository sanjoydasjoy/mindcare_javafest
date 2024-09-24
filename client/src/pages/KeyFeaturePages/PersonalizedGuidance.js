import React, { useState } from 'react';

export default function PersonalizedGuidance() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = async () => {
    try {
      const prompt = `You are a well-trained mental health specialist, compassionate and supportive. The user is going to tell you how they are feeling right now. You are going to give the user a top-notch reply, including what to do, how they should handle their feelings, how they can boost their mood, and how they can make their day very nice. Your purpose is to help users explore their feelings, thoughts, and challenges in a safe and confidential space. The user is expecting one comprehensive response from you.

      Please respond to the following user message in plain text, without any FORMATTING(DONT BOLD THE WORDS) or SPECIAL CHARACTERS(asterisk or something to format the text). Just send the raw text. Focus on providing a clear and concise response that promotes emotional well-being and mental health:

      User: ${input}`;

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
                  text: prompt
                }
              ]
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      const botMessageText = data.candidates[0].content.parts[0].text;
      setResponse(botMessageText);
    } catch (error) {
      console.error('Error communicating with the API:', error);
      setResponse('Sorry, something went wrong. Please try again.');
    }

    setInput('');
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>How are you feeling right now?</h2>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Describe your feelings in detail..."
          style={styles.textarea}
        />
        <button onClick={handleSubmit} style={styles.button}>Submit</button>
        {response && (
          <div style={styles.responseContainer}>
            <h3 style={styles.responseHeading}>Personalized Advice:</h3>
            <p style={styles.responseText}>{response}</p>
          </div>
        )}
      </div>
    </section>
  );
}

const styles = {
  section: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '40px 20px',
    backgroundColor: '#f0f4f8',
    minHeight: '100vh'
  },
  container: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center'
  },
  heading: {
    fontSize: '1.75rem',
    fontWeight: '600',
    marginBottom: '24px',
    color: '#333333'
  },
  textarea: {
    width: '100%',
    height: '150px',
    padding: '10px',
    fontSize: '1rem',
    border: '1px solid #cccccc',
    borderRadius: '8px',
    marginBottom: '16px',
    resize: 'none'
  },
  button: {
    padding: '12px 20px',
    fontSize: '1rem',
    color: '#ffffff',
    backgroundColor: '#3498db',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  },
  buttonHover: {
    backgroundColor: '#2980b9'
  },
  responseContainer: {
    marginTop: '24px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    border: '1px solid #e0e0e0',
    textAlign: 'left'
  },
  responseHeading: {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: '#333333',
    marginBottom: '12px'
  },
  responseText: {
    fontSize: '1.125rem',
    color: '#666666',
    lineHeight: '1.6'
  }
};

// import React, { useState } from 'react';

// export default function PersonalizedGuidance() {
//   const [input, setInput] = useState('');
//   const [response, setResponse] = useState('');

//   const handleSubmit = async () => {
//     try {
//       const prompt = `You are a well trained mental health specialist, a compassionate and supportive. User is going to tell you how they are feeling right now. You are going to give user some top notch reply. like what to do, how should they handle their feeling and how can they boost their mood and how can they make their day very nice. Your purpose is to help users explore their feelings, thoughts, and challenges in a safe and confidential space.

//       Please respond to the following user message in plain text, without any formatting or special characters. Focus on providing a clear and concise response that promotes emotional well-being and mental health:

//       User: ${input}`;

//       const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyATesepFKDuKiy3erERfUg2FqsSYOWEn9A', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           contents: [
//             {
//               parts: [
//                 {
//                   text: prompt
//                 }
//               ]
//             }
//           ]
//         })
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const data = await response.json();
//       const botMessageText = data.candidates[0].content.parts[0].text;
//       setResponse(botMessageText);
//     } catch (error) {
//       console.error('Error communicating with the API:', error);
//       setResponse('Sorry, something went wrong. Please try again.');
//     }

//     setInput('');
//   };

//   return (
//     <section style={styles.section}>
//       <div style={styles.container}>
//         <h2 style={styles.heading}>How are you feeling right now?</h2>
//         <textarea
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Describe your feelings in detail..."
//           style={styles.textarea}
//         />
//         <button onClick={handleSubmit} style={styles.button}>Submit</button>
//         {response && (
//           <div style={styles.responseContainer}>
//             <h3 style={styles.responseHeading}>Personalized Advice:</h3>
//             <p style={styles.responseText}>{response}</p>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }

// const styles = {
//   section: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: '40px 20px',
//     backgroundColor: '#f0f4f8',
//     minHeight: '100vh'
//   },
//   container: {
//     backgroundColor: '#ffffff',
//     borderRadius: '12px',
//     padding: '24px',
//     boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
//     maxWidth: '600px',
//     width: '100%',
//     textAlign: 'center'
//   },
//   heading: {
//     fontSize: '1.75rem',
//     fontWeight: '600',
//     marginBottom: '24px',
//     color: '#333333'
//   },
//   textarea: {
//     width: '100%',
//     height: '150px',
//     padding: '10px',
//     fontSize: '1rem',
//     border: '1px solid #cccccc',
//     borderRadius: '8px',
//     marginBottom: '16px',
//     resize: 'none'
//   },
//   button: {
//     padding: '12px 20px',
//     fontSize: '1rem',
//     color: '#ffffff',
//     backgroundColor: '#3498db',
//     border: 'none',
//     borderRadius: '8px',
//     cursor: 'pointer',
//     transition: 'background-color 0.3s ease'
//   },
//   buttonHover: {
//     backgroundColor: '#2980b9'
//   },
//   responseContainer: {
//     marginTop: '24px',
//     textAlign: 'left'
//   },
//   responseHeading: {
//     fontSize: '1.25rem',
//     fontWeight: '600',
//     color: '#333333',
//     marginBottom: '8px'
//   },
//   responseText: {
//     fontSize: '1rem',
//     color: '#666666'
//   }
// };