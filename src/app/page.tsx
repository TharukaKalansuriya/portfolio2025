"use client"

import { useState, useEffect } from 'react';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [typing, setTyping] = useState('');
  const [typingIndex, setTypingIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  // Code strings for animation
  const codeStrings = [
    "Hello ! I am Tharuka() {",
    "  const skills = ['Web', 'Mobile', 'IoT'];",
    "  const passion = 'Building Solutions';",
    "  return { skills, passion };",
    "}",
    "// Hello World!"
  ];
  
  // Toggle between dark and light mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'education', 'contact'];
      let current = '';
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      });
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  // Animation for typing effect
  useEffect(() => {
    if (isTyping) {
      const code = codeStrings[typingIndex];
      const timer = setTimeout(() => {
        if (typing.length < code.length) {
          setTyping(code.substring(0, typing.length + 1));
        } else {
          // Move to next code string after a pause
          setTimeout(() => {
            setTyping('');
            setTypingIndex((typingIndex + 1) % codeStrings.length);
          }, 1000);
        }
      }, 80); // Typing speed
      
      return () => clearTimeout(timer);
    }
  }, [typing, isTyping, typingIndex]);

  // Start typing animation when component mounts
  useEffect(() => {
    setIsTyping(true);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  // Main skills data
  const skills = [
    { category: 'Programming', items: ['Java', 'JavaScript', 'PHP', 'C++', 'Dart', 'Python'] },
    { category: 'Web Development', items: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Tailwind CSS', 'Bootstrap'] },
    { category: 'Mobile Development', items: ['Flutter', 'Android/iOS Basics'] },
    { category: 'Databases', items: ['MySQL', 'Firebase', 'PHPMyAdmin'] },
    { category: 'Frameworks', items: ['Flutter', 'Tailwind CSS', 'Bootstrap', 'Django', 'Laravel', 'Next.js'] },
    { category: 'Embedded Systems', items: ['Arduino', 'ASCII', 'Microcontrollers'] }
  ];

  // Projects data
  const projects = [
    {
      title: 'Attendance Management System',
      date: 'December 2024',
      description: 'Flutter-based attendance mobile app with IoT integration, enhancing Django and Tailwind CSS skills while independently creating the mobile component.',
      tech: ['Tailwind CSS', 'HTML', 'PHP', 'Django', 'Flutter', 'C++', 'Firebase'],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
    },
    {
      title: 'Passport Automation System',
      date: 'April 2024',
      description: 'Java-based passport automation system with user registration, admin modules, and MySQL database, enhancing skills in object-oriented programming.',
      tech: ['Java', 'OOP', 'MySQL', 'JSON Server'],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
              <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
            </svg>
    },
    {
      title: 'Automated Rice Mill System',
      date: 'January 2024',
      description: 'Arduino-based rice mill automation system with IoT integration, simulating the milling process and showcasing expertise in embedded systems.',
      tech: ['WOKWI Simulations', 'C++', 'Arduino'],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" y1="19" x2="20" y2="19"></line>
            </svg>
    },
    {
      title: 'TSecure',
      date: 'December 2023',
      description: 'Responsive website for security solution sales featuring category-specific market pages and a user-friendly front-end design.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
            </svg>
    },
    {
      title: 'Mental Health Management App',
      date: 'Ongoing',
      description: 'Mobile application focused on managing mental health of younger generation, using AI to analyze user data and track stress levels.',
      tech: ['AI', 'Mobile Development', 'Data Analysis'],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
    },
    {
      title: 'Craze Kicks - Sneaker Store',
      date: 'Ongoing',
      description: 'E-commerce website with role-based access, admin dashboard, and PHPMyAdmin database for sneaker sales.',
      tech: ['HTML', 'Tailwind CSS', 'JavaScript', 'PHP', 'PHPMyAdmin'],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 18l6-6-6-6"></path>
              <path d="M8 6l-6 6 6 6"></path>
            </svg>
    }
  ];

  

  // Background coding animation
  const codeAnimation = (
    <div className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 ${darkMode ? 'text-blue-900/30' : 'text-blue-300/50'} font-mono overflow-hidden`}>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {Array.from({ length: 15 }).map((_, i) => (
          <div 
            key={i} 
            className="absolute text-xs"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            {"{code}"}
          </div>
        ))}
      </div>
      
      {/* Typing animation container */}
      <div className="absolute bottom-10 right-10 max-w-xs p-4 rounded-lg bg-opacity-20 backdrop-blur-sm bg-gray-800 border border-gray-700 text-xs whitespace-pre font-mono">
        <span className={darkMode ? "text-blue-400" : "text-blue-600"}>{typing}</span>
        <span className="animate-pulse">|</span>
      </div>
    </div>
  );

  // Animated particles
  const particles = Array.from({ length: 30 }).map((_, i) => (
    <div 
      key={i}
      className={`absolute rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-400'} opacity-20`}
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        width: `${Math.random() * 10 + 2}px`,
        height: `${Math.random() * 10 + 2}px`,
        animation: `float ${20 + Math.random() * 30}s linear infinite`,
        animationDelay: `-${Math.random() * 20}s`,
      }}
    />
  ));

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-all duration-300`}>
      {/* Custom CSS for animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(30px, 100px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .section-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.15);
        }
        
        .glow {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5);
        }
        
        .text-gradient {
          background: linear-gradient(90deg, #60a5fa, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Particles animation */}
        {particles}
        
        {/* Code animation */}
        {codeAnimation}
        
        {/* Blue gradient circles */}
        <div className={`absolute top-1/4 -left-20 w-96 h-96 rounded-full ${darkMode ? 'bg-blue-900/20' : 'bg-blue-200/40'} blur-3xl animate-pulse`} style={{ animationDuration: '8s' }}></div>
        <div className={`absolute bottom-1/3 right-0 w-80 h-80 rounded-full ${darkMode ? 'bg-blue-700/10' : 'bg-blue-300/30'} blur-3xl animate-pulse`} style={{ animationDuration: '12s' }}></div>
        <div className={`absolute top-2/3 left-1/4 w-72 h-72 rounded-full ${darkMode ? 'bg-cyan-900/10' : 'bg-cyan-200/30'} blur-3xl animate-pulse`} style={{ animationDuration: '10s' }}></div>
        
        {/* Grid pattern */}
        <div className={`absolute inset-0 ${darkMode ? 'opacity-5' : 'opacity-10'}`} style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(99, 179, 237, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(99, 179, 237, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px' 
        }}></div>
      </div>

      {/* Header/Navigation */}
      <header className={`sticky top-0 z-50 backdrop-blur-lg ${darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white/80 border-gray-200'} border-b transition-all duration-300`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo/Name */}
          <div className="flex items-center space-x-2">
            <span className={`text-xl font-bold font-mono ${darkMode ? 'text-blue-400' : 'text-blue-600'} glow`}>{'<Tharuka_t_k/>'}</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {['home', 'about','experiance', 'skills', 'projects', 'education', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium capitalize hover:text-blue-500 transition-all ${activeSection === item ? (darkMode ? 'text-blue-400 glow' : 'text-blue-600') : ''}`}
              >
                {item}
              </button>
            ))}
          </nav>
          
          {/* Theme Toggle and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500 transition-all">
              {darkMode ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-300">
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 rounded-full hover:bg-opacity-20 hover:bg-gray-500 transition-all">
              <div className="w-5 space-y-1">
                <span className={`block h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'} transition-all`}></span>
                <span className={`block h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'} transition-all`}></span>
                <span className={`block h-0.5 ${darkMode ? 'bg-white' : 'bg-gray-900'} transition-all`}></span>
              </div>
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
          <div className={`px-4 py-2 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
            {['home', 'about','Experiance', 'skills', 'projects', 'education', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block w-full text-left py-3 text-sm font-medium capitalize hover:text-blue-500 transition-all ${activeSection === item ? (darkMode ? 'text-blue-400' : 'text-blue-600') : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 z-10 relative">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex flex-col md:flex-row justify-center items-center relative py-16">
          <div className="max-w-3xl md:w-1/2 section-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className={`inline-block px-4 py-1 rounded-full text-sm font-medium mb-6 ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
              BSc (Hons) Computing Undergraduate
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I am <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} text-gradient`}>Tharuka Kalansuriya</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Full-stack developer specializing in web and mobile applications with a passion for IoT and embedded systems.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className={`px-6 py-3 rounded-lg text-white font-medium transition-all hover-lift ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-700 hover:bg-blue-800'} shadow-lg hover:shadow-blue-500/30`}>
                Contact Me
              </a>
              <a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }} className={`px-6 py-3 rounded-lg font-medium border transition-all hover-lift ${darkMode ? 'border-gray-700 hover:border-blue-500 text-gray-300' : 'border-gray-300 hover:border-blue-500 text-gray-700'}`}>
                View Projects
              </a>
            </div>
            
            <div className="mt-12 flex space-x-6">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className={`hover:text-blue-500 transition-all ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className={`hover:text-blue-500 transition-all ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="mailto:tharukakalansuriya@gmail.com" className={`hover:text-blue-500 transition-all ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
            </div>
          </div>
          
         {/* PNG portrait */}
<div className="md:w-1/2 mt-10 md:mt-0 section-fade-in flex justify-center items-center" style={{ animationDelay: '0.5s' }}>
  <div className="w-64 h-64 md:w-80 md:h-80 relative">
    <img
      src="/mypic.png"
      alt="Portrait of Tharuka"
      className="w-full h-full object-cover rounded-full"
    />
    <div
      className={`absolute inset-0 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-400'} opacity-10 animate-pulse`}
      style={{ animationDuration: '4s' }}
    ></div>
  </div>
</div>

          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 section-fade-in" style={{ animationDelay: '0.1s' }}>
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-12 ${darkMode ? 'text-blue-400' : 'text-blue-700'} text-gradient`}>About Me</h2>
            <div className={`p-8 rounded-2xl transition-all hover-lift ${darkMode ? 'bg-gray-800/50 backdrop-blur-md' : 'bg-white shadow-xl'}`}>
              <p className="text-lg mb-6">
                I am a third-year BSc Computing undergraduate with a strong foundation in web and mobile application
                development, database management, and full-stack development. I am a proactive self-learner who enjoys
                expanding my technical skills, with a particular interest in IoT and embedded systems.
              </p>
              <p className="text-lg mb-6">
                I thrive in both team-based and leadership roles, and I am eager to bring my knowledge and passion for problem-solving
                to an internship where I can contribute to innovative tech projects.
              </p>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {['English', 'Sinhala', 'Japanese'].map((lang) => (
                    <span key={lang} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

         {/* Experiance section */}
         <section id="experiance" className="py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-12 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Industrial Experiance</h2>
            
            {/* Experiance */}
            <div className={`p-8 rounded-2xl mb-10 ${darkMode ? 'bg-gray-800/50 backdrop-blur-md' : 'bg-white shadow-xl'}`}>
              <div className="mb-8">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">BC Agro-Tronics</h3>
                    <p className={`${darkMode ? 'text-blue-400' : 'text-blue-700'}`}> Web Development & Data Analyst</p>
                  </div>
                  <div className="text-right">
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>2025 April – Present</p>
                    <p className={`${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Internship</p>
                  </div>
                </div>
                <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Full-Time
                </p>
              </div>
            </div>
            {/*social media marketing */}
            <div className={`p-8 rounded-2xl mb-10 ${darkMode ? 'bg-gray-800/50 backdrop-blur-md' : 'bg-white shadow-xl'}`}>
              <div className="mb-8">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">BC Agro-Tronics</h3>
                    <p className={`${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Social Media Marketting</p>
                  </div>
                  <div className="text-right">
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>2025 May – Present</p>
                    <p className={`${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Internship</p>
                  </div>
                </div>
                <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Part-Time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-12 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className={`p-6 rounded-2xl transition-all duration-300 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800/70 backdrop-blur-md' : 'bg-white hover:shadow-xl shadow-lg'}`}>
                  <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span key={idx} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-800'}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Soft Skills */}
            <div className={`mt-12 p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50 backdrop-blur-md' : 'bg-white shadow-xl'}`}>
              <h3 className={`text-xl font-semibold mb-4 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['Data Analysis', 'Self-Learning', 'Communication Skills', 'Problem-Solving', 'Strategic Planning', 'Training and Mentoring', 'Critical Thinking', 'Adaptability', 'Attention to Detail'].map((skill, idx) => (
                  <span key={idx} className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900/40 text-blue-300' : 'bg-blue-100 text-blue-800'}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className={`text-3xl font-bold mb-12 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 ${darkMode ? 'bg-gray-800/50 hover:bg-gray-800/70 backdrop-blur-md' : 'bg-white hover:shadow-xl shadow-lg'}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                      {project.icon}
                    </div>
                    <div>
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <span className={`text-xs px-2 py-1 rounded ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                          {project.date}
                        </span>
                      </div>
                      <p className={`mt-3 mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <span key={idx} className={`px-2 py-1 rounded text-xs ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-12 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Education & Certifications</h2>
            
            {/* Education */}
            <div className={`p-8 rounded-2xl mb-10 ${darkMode ? 'bg-gray-800/50 backdrop-blur-md' : 'bg-white shadow-xl'}`}>
              <div className="mb-8">
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">Lanka Nippon Biztech Institute</h3>
                    <p className={`${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>BSc (Hons) Computing (Information Systems)</p>
                  </div>
                  <div className="text-right">
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>2022 – Present</p>
                    <p className={`${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Current GPA: 3.31</p>
                  </div>
                </div>
                <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Offered by University of Greenwich, United Kingdom
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-semibold">Richmond College, Galle</h3>
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>GCE Advanced Level: Physical Science</p>
                  </div>
                  <div className="text-right">
                    <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>2017 – 2022</p>
                  </div>
                </div>
                <p className={`mt-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  GCE Ordinary Level: 8 A Passes, 1 B Pass
                </p>
              </div>
            </div>
            
            {/* Certifications */}
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50 backdrop-blur-md' : 'bg-white shadow-xl'}`}>
              <h3 className="text-xl font-semibold mb-6">Certifications</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Python for Beginners – University of Moratuwa',
                  'Python for Machine Learning – Great Learning',
                  'UI/UX for Beginners – Great Learning',
                  'DSA in Java (Intermediate Level) – Great Learning',
                  'Zero Trust Cyber Security Model – Alison',
                  'Information Management – Alison',
                  'Gen AI 101 – Pieces AI',
                  'Graphic Designing – Lanka Nippon Biztech Institute',
                  'Computer Networking Basics – Lanka Nippon Biztech Institute',
                  'Business Management – Lanka Nippon Biztech Institute'
                ].map((cert, idx) => (
                  <div key={idx} className={`p-4 rounded-lg ${darkMode ? 'bg-gray-700/50' : 'bg-gray-100'}`}>
                    <div className="flex items-center gap-2">
                      <div className={`p-1 rounded ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-sm">{cert}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-12 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Leadership Experience</h2>
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50 backdrop-blur-md' : 'bg-white shadow-xl'}`}>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="hidden md:block">
                    <div className={`h-full w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <h3 className="text-xl font-semibold">Treasurer – Student Activity Club, LNBTI</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                        2024 – Present
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="hidden md:block">
                    <div className={`h-full w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <h3 className="text-xl font-semibold">Treasurer/Resource Person – Robotic Club, LNBTI</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                        2022 – 2023
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="hidden md:block">
                    <div className={`h-full w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <h3 className="text-xl font-semibold">Captain – School Debating Team (Senior)</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                        2020 – 2021
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="hidden md:block">
                    <div className={`h-full w-0.5 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
                  </div>
                  <div>
                    <div className="flex justify-between items-start flex-wrap gap-4">
                      <h3 className="text-xl font-semibold">Captain – School Debating Team (Junior)</h3>
                      <span className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                        2018 – 2020
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className={`text-3xl font-bold mb-12 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Get In Touch</h2>
            <div className={`p-8 rounded-2xl ${darkMode ? 'bg-gray-800/50 backdrop-blur-md' : 'bg-white shadow-xl'}`}>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                        
                      </div>
                      <a href="mailto:tharukakalansuriya@gmail.com" className="hover:underline">tharukakalansuriya@gmail.com</a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <a href="tel:+94775651243" className="hover:underline">+94 77 565 1243</a>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded ${darkMode ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-100 text-blue-700'}`}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                      </div>
                      <address className="not-italic">Welterfreedon Gardens, Ganegoda, Akmeemana, Galle, Sri Lanka, 80090</address>
                    </div>
                    
                    <div className="mt-8 flex space-x-4">
                      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className={`p-2 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-all`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                      </a>
                      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className={`p-2 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-all`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                          <rect x="2" y="9" width="4" height="12"></rect>
                          <circle cx="4" cy="4" r="2"></circle>
                        </svg>
                      </a>
                      <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer" className={`p-2 rounded ${darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} transition-all`}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18.986 21.865v-6.404h2.134V24H1.844v-8.539h2.13v6.404h15.012zM6.111 19.731H16.85v-2.137H6.111v2.137zm.259-4.852l10.48 2.189.451-2.07-10.478-2.187-.453 2.068zm1.359-5.056l9.705 4.53.903-1.95-9.706-4.53-.902 1.95zm2.715-4.785l8.22 6.855 1.359-1.62-8.22-6.853-1.359 1.618zM15.751 0l-1.746 1.294 6.405 8.604 1.746-1.294L15.749 0z"></path>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Your Name</label>
                      <input type="text" id="name" className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-blue-500 focus:border-blue-500`} />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email Address</label>
                      <input type="email" id="email" className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-blue-500 focus:border-blue-500`} />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className={`block mb-2 text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                      <textarea id="message" rows="4" className={`w-full px-4 py-2 rounded-lg border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-gray-900'} focus:ring-blue-500 focus:border-blue-500`}></textarea>
                    </div>
                    
                    <button type="submit" className={`px-6 py-3 rounded-lg text-white font-medium transition-all ${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-700 hover:bg-blue-800'} shadow-lg hover:shadow-blue-500/30`}>
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className={`${darkMode ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'} py-10`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className={`text-xl font-bold font-mono ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{'<Tharuka/>'}</span>
            </div>
            <div className="flex space-x-6">
              {['home', 'about', 'skills', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-sm capitalize hover:text-blue-500 transition-all"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-8 text-center text-sm">
            © {new Date().getFullYear()} Tharuka Kalansuriya. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}