// src/pages/MoodTracking.js
import React, { useState } from 'react';
import '../Allcss/MoodTracking.css';

export default function MoodTracking() {
  const [mood, setMood] = useState('');
  const [notes, setNotes] = useState('');
  const [moodEntries, setMoodEntries] = useState([]);

  const handleMoodSubmit = () => {
    if (mood) {
      const newEntry = { mood, notes, date: new Date().toLocaleDateString() };
      setMoodEntries([newEntry, ...moodEntries]);
      setMood('');
      setNotes('');
    }
  };

  return (
    <section className="mood-tracking-section">
      <h2 className="heading">Mood Tracking</h2>
      <div className="mood-entry">
        <h3>How are you feeling today?</h3>
        <select 
          value={mood}
          onChange={(e) => setMood(e.target.value)}
          className="mood-select"
        >
          <option value="" disabled>Select Mood</option>
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="anxious">Anxious</option>
          <option value="calm">Calm</option>
          {/* Add more mood options as needed */}
        </select>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add notes about your mood..."
          className="mood-notes"
        ></textarea>
        <button onClick={handleMoodSubmit} className="button">Log Mood</button>
      </div>

      <div className="mood-history">
        <h3>Your Mood History</h3>
        <ul>
          {moodEntries.map((entry, index) => (
            <li key={index} className="mood-entry-item">
              <span>{entry.date} - {entry.mood}</span>
              <p>{entry.notes}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
