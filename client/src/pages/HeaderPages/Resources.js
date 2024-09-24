import React, { useState, useEffect } from 'react';
import { BookOpen, Phone, Search, Youtube } from "lucide-react";

const resources = [
  {
    category: "Articles",
    items: [
      { 
        title: "Building Resilience", 
        description: "Learn strategies to bounce back from life's challenges.", 
        url: "https://care-clinics.com/building-resilience-how-to-bounce-back-from-lifes-challenges/#:~:text=Ensure%20you%20get%20enough%20sleep,and%20engage%20in%20relaxation%20techniques.&text=Effective%20communication%20is%20crucial%20in,conflicts%20in%20a%20healthy%20way.&text=Maintain%20a%20positive%20outlook%20even%20in%20the%20face%20of%20adversity." 
      },
      { 
        title: "Mindfulness Techniques", 
        description: "Discover practical mindfulness exercises for daily life.", 
        url: "https://www.calm.com/blog/mindfulness-exercises" 
      },
      { 
        title: "Improving Sleep Habits", 
        description: "Tips for better sleep and improved mental health.", 
        url: "https://namica.org/blog/better-sleep-to-maintain-mental-health/" 
      },
      { 
        title: "Understanding Depression", 
        description: "An overview of depression symptoms, causes, and treatment options.", 
        url: "https://www.verywellmind.com/anxiety-disorders-4157261" 
      },
      { 
        title: "The Power of Positive Thinking", 
        description: "How positive thinking can improve your mental health.", 
        url: "https://www.bettersleep.com/blog/how-positive-thinking-can-improve-your-mental-health" 
      },
      { 
        title: "Cognitive Behavioral Therapy (CBT)", 
        description: "Introduction to CBT techniques for managing mental health issues.", 
        url: "https://www.apa.org/ptsd-guideline/patients-and-families/cognitive-behavioral" 
      },
      { 
        title: "Healthy Eating and Mental Health", 
        description: "Explore the link between nutrition and mental well-being.", 
        url: "https://www.healthline.com/nutrition/mental-health-and-diet" 
      },
      { 
        title: "The Benefits of Physical Activity for Mental Health", 
        description: "Learn how exercise can help alleviate anxiety and depression.", 
        url: "https://www.mind.org.uk/information-support/tips-for-everyday-living/physical-activity-sport-and-exercise/" 
      },
      {
        title: "Managing Stress: 10 Evidence-Based Tips",
        description: "Discover effective ways to manage stress and improve your overall well-being.",
        url: "https://www.healthline.com/nutrition/10-ways-to-relieve-stress"
    },
    {
        title: "How to Cope with Anxiety: 11 Simple Tips",
        description: "Practical strategies for coping with anxiety and reducing its impact on your life.",
        url: "https://www.healthline.com/health/mental-health/how-to-cope-with-anxiety"
    },
    {
        title: "Self-Compassion: The Proven Power of Being Kind to Yourself",
        description: "Learn about the importance of self-compassion and how it can benefit your mental health.",
        url: "https://psychcentral.com/health/self-compassion-the-proven-power-of-being-kind-to-yourself"
    },
    {
        title: "Building Healthy Relationships: Tips for Improving Your Connections",
        description: "Strategies for developing and maintaining healthy relationships, which are essential for mental well-being.",
        url: "https://www.helpguide.org/articles/relationships-communication/relationship-help.htm"
    },
    {
        title: "The Connection Between Sleep and Mental Health",
        description: "Explore the intricate relationship between sleep and mental health, and learn how to improve both.",
        url: "https://www.sleepfoundation.org/mental-health"
    },
    {
        title: "Understanding Bipolar Disorder",
        description: "An overview of bipolar disorder, including its symptoms, causes, and treatment options.",
        url: "https://www.nami.org/About-Mental-Illness/Mental-Health-Conditions/Bipolar-Disorder"
    },
    {
        title: "Overcoming Social Anxiety: Tips and Strategies",
        description: "Helpful tips for managing social anxiety and building confidence in social situations.",
        url: "https://www.verywellmind.com/tips-for-living-with-social-anxiety-disorder-3024829"
    },
    {
        title: "Mindfulness Meditation for Beginners: A Simple Guide",
        description: "A step-by-step guide to practicing mindfulness meditation and reaping its benefits for mental health.",
        url: "https://positivepsychology.com/mindfulness-meditation-for-beginners/"
    },
    {
        title: "The Role of Therapy in Mental Health",
        description: "An overview of therapy and its role in addressing mental health concerns and promoting well-being.",
        url: "https://www.psychologytoday.com/us/basics/therapy"
    },
    {
        title: "The Benefits of Journaling for Mental Health",
        description: "Discover how journaling can help you process emotions, gain self-awareness, and improve your mental health.",
        url: "https://psychcentral.com/health/benefits-of-journaling-for-mental-health"
    },
    {
      title: "The Link Between Gut Health and Mental Health",
      description: "Explore the fascinating connection between your gut microbiome and your mental well-being.",
      url: "https://www.health.harvard.edu/diseases-and-conditions/the-gut-brain-connection"
    },

    {
      title: "The Impact of Social Media on Mental Health",
      description: "Examine the potential positive and negative effects of social media on mental health.",
      url: "https://www.helpguide.org/articles/mental-health/social-media-and-mental-health.htm"
    },
    {
      title: "Coping with Grief and Loss",
      description: "Strategies for navigating the grieving process and finding healing after experiencing loss.",
      url: "https://www.mayoclinic.org/healthy-lifestyle/end-of-life/in-depth/grief/art-20047974"
    },
    {
      title: "The Importance of Setting Boundaries",
      description: "Learn how to set healthy boundaries to protect your mental and emotional well-being.",
      url: "https://www.mindbodygreen.com/0-15829/10-ways-to-build-and-preserve-better-boundaries.html"
    },
    {
      title: "Managing Anger: Healthy Ways to Express Your Emotions",
      description: "Explore healthy ways to manage anger and express your emotions constructively.",
      url: "https://www.apa.org/topics/anger/control"
    },
    {
      title: "Understanding Obsessive-Compulsive Disorder (OCD)",
      description: "An overview of OCD, its symptoms, and available treatment approaches.",
      url: "https://iocdf.org/about-ocd/"
    },
    {
      title: "The Benefits of Spending Time in Nature",
      description: "Discover how connecting with nature can improve your mental health and reduce stress.",
      url: "https://www.takingcharge.csh.umn.edu/how-does-nature-impact-our-wellbeing"
    },
    {
      title: "Building Resilience in Children and Teens",
      description: "Strategies for helping young people develop resilience and cope with challenges.",
      url: "https://www.apa.org/topics/resilience/children-teens"
    },
    {
      title: "The Power of Forgiveness",
      description: "Learn how forgiveness can lead to emotional healing and improved mental well-being.",
      url: "https://greatergood.berkeley.edu/topic/forgiveness/definition"
    },
    {
      title: "Cultivating Gratitude: A Path to Happiness",
      description: "Explore the practice of gratitude and its positive effects on mental health.",
      url: "https://www.health.harvard.edu/healthbeat/giving-thanks-can-make-you-happier"
    },
    {
      title: "Understanding Seasonal Affective Disorder (SAD)",
      description: "Learn about SAD, its symptoms, and ways to manage it during the winter months.",
      url: "https://www.mayoclinic.org/diseases-conditions/seasonal-affective-disorder/symptoms-causes/syc-20364651"
    },
    {
      title: "The Impact of Trauma on Mental Health",
      description: "Explore how trauma can affect mental health and learn about available support and healing resources.",
      url: "https://www.psychiatry.org/patients-families/trauma-and-mental-health"
    },
    {
      title: "Mindful Eating: A Path to a Healthier Relationship with Food",
      description: "Discover how mindful eating can improve your mental and physical health.",
      url: "https://www.healthline.com/nutrition/mindful-eating-guide"
    },
    {
      title: "The Importance of Self-Care for Mental Health Professionals",
      description: "Strategies for mental health professionals to prioritize their own well-being and avoid burnout.",
      url: "https://positivepsychology.com/self-care-mental-health-professionals/"
    },
    {
      title: "Understanding Schizophrenia",
      description: "An overview of schizophrenia, including its symptoms, causes, and treatment options.",
      url: "https://www.nimh.nih.gov/health/topics/schizophrenia"
    },
    {
      title: "The Benefits of Volunteering for Mental Health",
      description: "Explore how helping others through volunteering can boost your own mental well-being.",
      url: "https://www.helpguide.org/articles/mental-health/volunteering-and-its-surprising-benefits.htm"
    },
    {
      title: "Coping with Loneliness",
      description: "Strategies for managing feelings of loneliness and building social connections.",
      url: "https://www.mind.org.uk/information-support/tips-for-everyday-living/loneliness/about-loneliness/"
    },
    {
      title: "Understanding Panic Attacks",
      description: "Learn about panic attacks, their symptoms, and ways to manage them.",
      url: "https://www.nimh.nih.gov/health/topics/panic-disorder"
    },
    {
      title: "The Importance of Mental Health in the Workplace",
      description: "Explore the significance of mental health in the workplace and how employers can create a supportive environment.",
      url: "https://www.mentalhealth.org.uk/our-work/mental-health-workplace"
    },
    {
      title: "The Link Between Gut Health and Mental Health",
      description: "Explore the fascinating connection between your gut microbiome and your mental well-being.",
      url: "https://www.health.harvard.edu/diseases-and-conditions/the-gut-brain-connection"
    },
    {
      title: "Understanding Post-Traumatic Stress Disorder (PTSD)",
      description: "Learn about PTSD, its symptoms, causes, and available treatment options.",
      url: "https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd"
    },
    {
      title: "The Impact of Social Media on Mental Health",
      description: "Examine the potential positive and negative effects of social media on mental health.",
      url: "https://www.helpguide.org/articles/mental-health/social-media-and-mental-health.htm"
    },
    {
      title: "Coping with Grief and Loss",
      description: "Strategies for navigating the grieving process and finding healing after experiencing loss.",
      url: "https://www.mayoclinic.org/healthy-lifestyle/end-of-life/in-depth/grief/art-20047974"
    },
    {
      title: "The Importance of Setting Boundaries",
      description: "Learn how to set healthy boundaries to protect your mental and emotional well-being.",
      url: "https://www.mindbodygreen.com/0-15829/10-ways-to-build-and-preserve-better-boundaries.html"
    },
    {
      title: "Managing Anger: Healthy Ways to Express Your Emotions",
      description: "Explore healthy ways to manage anger and express your emotions constructively.",
      url: "https://www.apa.org/topics/anger/control"
    },
    {
      title: "Understanding Obsessive-Compulsive Disorder (OCD)",
      description: "An overview of OCD, its symptoms, and available treatment approaches.",
      url: "https://iocdf.org/about-ocd/"
    },
    {
      title: "The Benefits of Spending Time in Nature",
      description: "Discover how connecting with nature can improve your mental health and reduce stress.",
      url: "https://www.takingcharge.csh.umn.edu/how-does-nature-impact-our-wellbeing"
    },
    {
      title: "Building Resilience in Children and Teens",
      description: "Strategies for helping young people develop resilience and cope with challenges.",
      url: "https://www.apa.org/topics/resilience/children-teens"
    },
    {
      title: "The Power of Forgiveness",
      description: "Learn how forgiveness can lead to emotional healing and improved mental well-being.",
      url: "https://greatergood.berkeley.edu/topic/forgiveness/definition"
    },
    {
      title: "Cultivating Gratitude: A Path to Happiness",
      description: "Explore the practice of gratitude and its positive effects on mental health.",
      url: "https://www.health.harvard.edu/healthbeat/giving-thanks-can-make-you-happier"
    },
    {
      title: "Understanding Seasonal Affective Disorder (SAD)",
      description: "Learn about SAD, its symptoms, and ways to manage it during the winter months.",
      url: "https://www.mayoclinic.org/diseases-conditions/seasonal-affective-disorder/symptoms-causes/syc-20364651"
    },
    {
      title: "The Impact of Trauma on Mental Health",
      description: "Explore how trauma can affect mental health and learn about available support and healing resources.",
      url: "https://www.psychiatry.org/patients-families/trauma-and-mental-health"
    },
    {
      title: "Mindful Eating: A Path to a Healthier Relationship with Food",
      description: "Discover how mindful eating can improve your mental and physical health.",
      url: "https://www.healthline.com/nutrition/mindful-eating-guide"
    },
    {
      title: "The Importance of Self-Care for Mental Health Professionals",
      description: "Strategies for mental health professionals to prioritize their own well-being and avoid burnout.",
      url: "https://positivepsychology.com/self-care-mental-health-professionals/"
    },
    {
      title: "Understanding Schizophrenia",
      description: "An overview of schizophrenia, including its symptoms, causes, and treatment options.",
      url: "https://www.nimh.nih.gov/health/topics/schizophrenia"
    },
    {
      title: "The Benefits of Volunteering for Mental Health",
      description: "Explore how helping others through volunteering can boost your own mental well-being.",
      url: "https://www.helpguide.org/articles/mental-health/volunteering-and-its-surprising-benefits.htm"
    },
    {
      title: "Coping with Loneliness",
      description: "Strategies for managing feelings of loneliness and building social connections.",
      url: "https://www.mind.org.uk/information-support/tips-for-everyday-living/loneliness/about-loneliness/"
    },
    {
      title: "Understanding Panic Attacks",
      description: "Learn about panic attacks, their symptoms, and ways to manage them.",
      url: "https://www.nimh.nih.gov/health/topics/panic-disorder"
    },
    {
      title: "The Importance of Mental Health in the Workplace",
      description: "Explore the significance of mental health in the workplace and how employers can create a supportive environment.",
      url: "https://www.mentalhealth.org.uk/our-work/mental-health-workplace"
    }  
    ]
  },
  // {
  //   category: "Hotlines",
  //   items: [
  //     { title: "Crisis Helpline", description: "24/7 support for those in emotional distress: 1-800-273-8255" },
  //     { title: "Substance Abuse Helpline", description: "Get help for addiction: 1-800-662-4357" },
  //     { title: "Teen Line", description: "Support for teenagers: 1-800-852-8336" },
  //   ]
  // },
  {
    category: "YouTube Videos",
    items: [
      { title: "Understanding Anxiety", url: "https://youtu.be/9mPwQTiMSj8?si=1vEjy6qleWvqt_yB", description: "A comprehensive guide to understanding anxiety." },
      { title: "Coping with Depression", url: "https://youtu.be/lQhpetkwWnM?si=hpRGymJT_CEVg5WY", description: "Learn practical strategies for managing depression." },
      { title: "Mindfulness for Anxiety", url: "https://youtu.be/v-w-vSvi-24?si=gf9fvvOLUI43wgVP", description: "An introductory session on mindfulness techniques to manage anxiety." },
      { 
        title: "We All Have Mental Health", 
        url: "http://www.youtube.com/watch?v=DxIDKZHW3-E", 
        description: "A video by Anna Freud exploring the idea that mental health is something everyone has, and it's important to take care of it." 
    },
    { 
        title: "Physical and Mental Health", 
        url: "http://www.youtube.com/watch?v=EKEWk4oWmjY", 
        description: "A video by Psych Hub discussing the connection between physical and mental health, and how taking care of one can benefit the other." 
    },
    { 
        title: "Talking Mental Health", 
        url: "http://www.youtube.com/watch?v=nCrjevx3-Js", 
        description: "Another video by Anna Freud emphasizing the importance of talking openly about mental health and seeking help when needed." 
    },
    { 
        title: "Why students should get mental health days", 
        url: "http://www.youtube.com/watch?v=3k_wxTkYN50", 
        description: "A TEDx Talk by Hailey Hardcastle advocating for the importance of mental health days for students and highlighting the impact of stress on academic performance and overall well-being." 
    },
    { 
        title: "5 Ways to help someone struggling with their mental health", 
        url: "http://www.youtube.com/watch?v=wIUcc8g17wg", 
        description: "A video by BBC Ideas providing practical tips on how to support someone who is experiencing mental health challenges." 
    },
    {
      title: "The Science of Anxiety & Fear",
      url: "https://www.youtube.com/watch?v=a-ddVEYaEL8",
      description: "AsapSCIENCE explores the science behind anxiety and fear, explaining how they work and offering coping strategies."
  },
  {
      title: "How to deal with Depression & Anxiety",
      url: "https://www.youtube.com/watch?v=ZSt9tm3RoUU",
      description: "TEDx Talk by Kati Morton, a licensed therapist, sharing practical advice on managing depression and anxiety."
  },
  {
      title: "Mental Health: Crash Course Psychology #28",
      url: "https://www.youtube.com/watch?v=wuhJ-GkRRQc",
      description: "Crash Course Psychology provides an overview of mental health, discussing various disorders and treatment approaches."
  },
  {
      title: "The power of vulnerability",
      url: "https://www.youtube.com/watch?v=iCvmsMzlF7o",
      description: "Brené Brown's iconic TED Talk on embracing vulnerability and its connection to courage, connection, and a wholehearted life."
  },
  {
      title: "How to make stress your friend",
      url: "https://www.youtube.com/watch?v=RcGyVTAoXEU",
      description: "Kelly McGonigal's TED Talk on changing your mindset about stress and harnessing its positive potential."
  },
  {
      title: "Depression, the secret we share",
      url: "https://www.youtube.com/watch?v=n0wH-3gAeRM",
      description: "Andrew Solomon's powerful TED Talk on his personal experience with depression and the importance of breaking the stigma."
  },
  {
      title: "What makes a good life? Lessons from the longest study on happiness",
      url: "https://www.youtube.com/watch?v=8KkKuTCFvzI",
      description: "Robert Waldinger shares insights from the Harvard Study of Adult Development on what truly leads to happiness and fulfillment."
  },
  {
      title: "My story of overcoming anxiety & depression",
      url: "https://www.youtube.com/watch?v=La9oLLoI5Rc",
      description: "Youtuber Kati Morton shares her personal story of overcoming anxiety and depression."
  },
  {
      title: "How to Train Your Brain to Be Happy",
      url: "https://www.youtube.com/watch?v=s9N-S3MBaHw",
      description: "TEDx Talk by Dr. Caroline Leaf, a cognitive neuroscientist, on how to rewire your brain for happiness."
  },
  {
      title: "7 Types of Self-Care Activities for Mental Health",
      url: "https://www.youtube.com/watch?v=dIGkXqy8o1A",
      description: "Psych2Go discusses different types of self-care activities to improve mental well-being."
  },
  {
      title: "The Importance of Mental Health Awareness",
      url: "https://www.youtube.com/watch?v=3wTkFIpW2Gw",
      description: "TEDx Talk emphasizing the significance of mental health awareness and breaking the stigma."
  },
  {
      title: "Breathing Techniques for Anxiety Relief",
      url: "https://www.youtube.com/watch?v=aX7jnVXXG5E",
      description: "Simple breathing exercises to help manage anxiety and stress."
  },
  {
      title: "How to Build Self-Esteem",
      url: "https://www.youtube.com/watch?v=N-RPiowRboQ",
      description: "Practical tips on developing and improving self-esteem."
  },
  {
      title: "Gratitude: The Short Film",
      url: "https://www.youtube.com/watch?v=gXDMoiEkyuQ",
      description: "A short film highlighting the power of gratitude and its positive impact on mental health."
  },
  {
      title: "The Surprising Habits of Original Thinkers",
      url: "https://www.youtube.com/watch?v=fxbCHn6gE3U",
      description: "Adam Grant's TED Talk on how to cultivate originality and embrace new ideas, which can boost creativity and well-being."
  },
  {
      title: "The happy secret to better work",
      url: "https://www.youtube.com/watch?v=fLJsdqxnZb0",
      description: "Shawn Achor's TED Talk on the benefits of positive psychology and how it can improve performance and happiness at work."
  },
  {
      title: "How to stop screwing yourself over",
      url: "https://www.youtube.com/watch?v=Lp7E973zozc",
      description: "Mel Robbins' motivational talk on overcoming self-doubt and taking action to achieve your goals."
  },
  {
      title: "Inside the mind of a master procrastinator",
      url: "https://www.youtube.com/watch?v=arj7oStGLkU",
      description: "Tim Urban's humorous and insightful TED Talk on procrastination and how to overcome it."
  },
  {
      title: "The art of being yourself",
      url: "https://www.youtube.com/watch?v=veEQQ-N9xWU",
      description: "Caroline McHugh's TEDx Talk on embracing your authentic self and finding confidence in your uniqueness."
  },
  {
      title: "Your body language may shape who you are",
      url: "https://www.youtube.com/watch?v=Ks-_Mh1QhMc",
      description: "Amy Cuddy's TED Talk on how body language can influence our thoughts and feelings, and how \"power posing\" can boost confidence."
  }

    
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
  const [searchTerm, setSearchTerm] = useState(""); 
  const isDarkMode = useTheme();

  // Styles 
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

  // Filtering logic
  const filteredItems = resources
    .find(resource => resource.category === activeTab)
    ?.items.filter(item => // Optional chaining in case 'activeTab' category is not found
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase())
    ) || []; // Default to empty array if no matches

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Mental Health Resources</h1>

      {/* Category Tabs */}
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

       {/* Search Bar */}
      <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
        <label htmlFor="searchInput" aria-label="Search"> 
          <Search className="icon" style={{ marginRight: '8px', color: isDarkMode ? '#ffffff' : '#000000' }} />
        </label>
        <input
          id="searchInput" 
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{
            padding: '8px 12px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            flex: 1,
            backgroundColor: isDarkMode ? '#333' : '#fff',
            color: isDarkMode ? '#ffffff' : '#000000',
          }}
        />
      </div>

      {/* Resource Cards or No Results Message */}
      {filteredItems.length > 0 ? (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          {filteredItems.map((item, index) => (
            <div key={index} style={cardStyle}>
              <h3 style={titleStyle}>{item.title}</h3>
              <p style={descriptionStyle}>{item.description}</p>
              {item.url && ( 
                <a href={item.url} style={linkStyle} target="_blank" rel="noopener noreferrer">
                  {activeTab === "YouTube Videos" ? "Watch Video" : "Read More"}
                </a>
              )}
            </div>
          ))}
        </div>
      ) : (
        <p style={{ color: isDarkMode ? '#dddddd' : '#333333' }}>No resources found matching your search.</p>
      )}
    </div>
  );
}