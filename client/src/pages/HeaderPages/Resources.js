import React, { useState, useEffect } from 'react';
import { BookOpen, Phone, Youtube } from "lucide-react";

const resources = [
  {
    category: "Articles",
    items: [
      { title: "Building Resilience", description: "Learn strategies to bounce back from life's challenges.", url: "https://care-clinics.com/building-resilience-how-to-bounce-back-from-lifes-challenges/#:~:text=Ensure%20you%20get%20enough%20sleep,and%20engage%20in%20relaxation%20techniques.&text=Effective%20communication%20is%20crucial%20in,conflicts%20in%20a%20healthy%20way.&text=Maintain%20a%20positive%20outlook%20even%20in%20the%20face%20of%20adversity." },
      { title: "Mindfulness Techniques", description: "Discover practical mindfulness exercises for daily life.", url: "https://www.calm.com/blog/mindfulness-exercises" },
      { title: "Improving Sleep Habits", description: "Tips for better sleep and improved mental health.", url: "https://namica.org/blog/better-sleep-to-maintain-mental-health/" },
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
    category: "YouTube Videos",
    items: [
      { title: "Understanding Anxiety", url: "https://www.youtube.com/watch?v=rLm-A5QBBNw", description: "A comprehensive guide to understanding anxiety." },
      { title: "Coping with Depression", url: "https://www.youtube.com/watch?v=WyQjjM3sFgQ", description: "Learn practical strategies for managing depression." },
      { title: "Mindfulness for Anxiety", url: "https://www.youtube.com/watch?v=ogmYnEJXb8Q", description: "An introductory session on mindfulness techniques to manage anxiety." },
    ]
  }
];

const getCategoryIcon = (category) => {
  switch (category) {
    case "Articles":
      return <BookOpen className="icon" />;
    case "Hotlines":
      return <Phone className="icon" />;
    case "YouTube Videos":
      return <Youtube className="icon" />;
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

  const linkStyle = {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
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
              {item.url ? (
                <a href={item.url} style={linkStyle} target="_blank" rel="noopener noreferrer">
                  Read More
                </a>
              ) : (
                <button style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', padding: '10px', cursor: 'pointer', fontSize: '14px' }}>
                  Learn More
                </button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
