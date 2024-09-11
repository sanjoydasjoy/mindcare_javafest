// src/pages/ActivityLogging.js
import React, { useState } from 'react';
import '../../Allcss/KeyFeaturePages/ActivityLogging.css';

export default function ActivityLogging() {
  const [activity, setActivity] = useState('');
  const [category, setCategory] = useState('');
  const [duration, setDuration] = useState('');
  const [notes, setNotes] = useState('');
  const [activityEntries, setActivityEntries] = useState([]);

  const handleActivitySubmit = () => {
    if (activity && category && duration) {
      const newEntry = { activity, category, duration, notes, date: new Date().toLocaleDateString() };
      setActivityEntries([newEntry, ...activityEntries]);
      setActivity('');
      setCategory('');
      setDuration('');
      setNotes('');
    }
  };

  return (
    <section className="activity-logging-section">
      <h2 className="heading">Activity Logging</h2>
      <div className="activity-entry">
        <h3>Log Your Activity</h3>
        <input
          type="text"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          placeholder="Activity Name"
          className="activity-input"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="activity-select"
        >
          <option value="" disabled>Select Category</option>
          <option value="exercise">Exercise</option>
          <option value="work">Work</option>
          <option value="social">Social</option>
          <option value="relaxation">Relaxation</option>
          {/* Add more categories as needed */}
        </select>
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="Duration (e.g., 1 hour)"
          className="activity-input"
        />
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Additional Notes..."
          className="activity-notes"
        ></textarea>
        <button onClick={handleActivitySubmit} className="button">Log Activity</button>
      </div>

      <div className="activity-history">
        <h3>Your Activity History</h3>
        <ul>
          {activityEntries.map((entry, index) => (
            <li key={index} className="activity-entry-item">
              <span>{entry.date} - {entry.activity} ({entry.duration})</span>
              <p>{entry.notes}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
