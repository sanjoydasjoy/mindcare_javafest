import React, { useState, useEffect } from 'react';
import { BookOpen, Phone, Video, Users } from "lucide-react";

const resources = [
  {
    category: "Articles",
    items: [
      { title: "Building Resilience", description: "Learn strategies to bounce back from life's challenges." },
      { title: "Mindfulness Techniques", description: "Discover practical mindfulness exercises for daily life." },
      { title: "Improving Sleep Habits", description: "Tips for better sleep and improved mental health." },
    ]
  },
  {
    category: "Hotlines",
    items: [
      { title: "Crisis Helpline", description: "24/7 support for those in emotional distress: 1-800-273-8255" },
      { title: "Substance Abuse Helpline", description: "Get help for addiction: 1-800-662-4357" },
      { title: "Teen Line", description: "Support for teenagers: 1-800-852-8336" },
    ]
  },
  {
    category: "Videos",
    items: [
      { title: "Stress Management", description: "A 10-minute guided meditation for stress relief." },
      { title: "Positive Psychology", description: "Learn about the science of happiness and well-being." },
      { title: "Cognitive Behavioral Therapy", description: "Introduction to CBT techniques you can use at home." },
    ]
  },
  {
    category: "Support Groups",
    items: [
      { title: "Wellness Warriors", description: "Weekly online meetings for general mental wellness." },
      { title: "Grief and Loss", description: "A safe space to share and heal from loss." },
      { title: "Mindfulness Meditation", description: "Group sessions for practicing mindfulness techniques." },
    ]
  },
];

const getCategoryIcon = (category) => {
  switch (category) {
    case "Articles":
      return <BookOpen className="icon" />;
    case "Hotlines":
      return <Phone className="icon" />;
    case "Videos":
      return <Video className="icon" />;
    case "Support Groups":
      return <Users className="icon" />;
    default:
      return null;
  }
};

const useTheme = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.getAttribute('data-theme') === 'dark'
  );

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDarkMode(document.documentElement.getAttribute('data-theme') === 'dark');
    };

    window.addEventListener('storage', handleThemeChange);
    return () => window.removeEventListener('storage', handleThemeChange);
  }, []);

  return isDarkMode;
};

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState("Articles");
  const isDarkMode = useTheme();

  const containerStyle = {
    padding: '20px',
  };

  const headingStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: isDarkMode ? '#ffffff' : '#000000',
  };

  const buttonStyle = (category) => ({
    margin: '0 10px',
    padding: '10px 20px',
    cursor: 'pointer',
    background: activeTab === category ? '#007bff' : '#f0f0f0',
    color: activeTab === category ? '#fff' : '#000',
    border: 'none',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
  });

  const cardStyle = {
    backgroundColor: isDarkMode ? '#333' : '#fff',
    borderRadius: '8px',
    padding: '20px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '300px',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: isDarkMode ? '#ffffff' : '#000000',
  };

  const descriptionStyle = {
    marginBottom: '15px',
    color: isDarkMode ? '#dddddd' : '#333333',
  };

  const buttonCardStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '14px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Mental Health Resources</h1>
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        {resources.map(resource => (
          <button
            key={resource.category}
            onClick={() => setActiveTab(resource.category)}
            style={buttonStyle(resource.category)}
          >
            {getCategoryIcon(resource.category)}
            <span style={{ marginLeft: '8px' }}>{resource.category}</span>
          </button>
        ))}
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {resources
          .find(resource => resource.category === activeTab)
          .items.map((item, index) => (
            <div key={index} style={cardStyle}>
              <h3 style={titleStyle}>{item.title}</h3>
              <p style={descriptionStyle}>{item.description}</p>
              <button style={buttonCardStyle}>
                Learn More
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}
