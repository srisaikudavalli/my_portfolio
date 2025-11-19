import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  FileText, 
  Code, 
  Database, 
  Cpu, 
  Terminal, 
  ExternalLink, 
  Menu, 
  X, 
  MapPin, 
  Calendar, 
  BookOpen, 
  Award, 
  User,
  Briefcase,
  Send
} from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(id);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans selection:bg-teal-500 selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollToSection('home')}>
            SRI SAI<span className="text-teal-500">.</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm font-medium transition-colors duration-300 hover:text-teal-400 ${activeSection === link.id ? 'text-teal-400' : 'text-slate-400'}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-800 border-b border-slate-700 shadow-xl">
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-left text-lg font-medium ${activeSection === link.id ? 'text-teal-400' : 'text-slate-300'}`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10 text-center md:text-left md:flex md:items-center md:justify-between">
          <div className="md:w-1/2 space-y-6 animate-fade-in-up">
            <div className="inline-block px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 text-sm font-medium border border-teal-500/20 mb-2">
              Computer Science Graduate
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Hi, I'm <br />
              <span className="text-teal-400">Sri Sai Kudavalli</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-lg mx-auto md:mx-0">
              A passionate software developer proficient in Java, Python, and Full Stack development, building scalable solutions with modern technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
              <a href="mailto:srisaikudavalli@gmail.com" className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 shadow-lg shadow-teal-500/25">
                <Mail size={18} /> Contact Me
              </a>
              <a href="/resume.pdf" download="Sri_Sai_Kudavalli_Resume.pdf" className="bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2">
                <FileText size={18} /> Download Resume
              </a>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-6 pt-6 text-slate-400">
              <a href="https://linkedin.com/in/ksrisai" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors"><Linkedin size={24} /></a>
              <a href="https://github.com/srisaikudavalli" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition-colors"><Github size={24} /></a>
              <a href="mailto:srisaikudavalli@gmail.com" className="hover:text-teal-400 transition-colors"><Mail size={24} /></a>
            </div>
          </div>

          {/* Hero Visual/Avatar */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500 to-blue-600 rounded-2xl rotate-6 opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 bg-slate-800 border border-slate-700 rounded-2xl flex items-center justify-center overflow-hidden shadow-2xl">
                <img 
                  src="/profile.jpg" 
                  alt="Sri Sai Kudavalli" 
                  className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-300"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/400x400/0f172a/14b8a6?text=Add+profile.jpg+to+public+folder";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 shadow-xl max-w-sm w-full">
                 <div className="space-y-4">
                   <div className="flex items-center gap-4 text-slate-300">
                     <div className="bg-teal-500/10 p-2 rounded-lg text-teal-400"><MapPin size={20}/></div>
                     <span>Vizianagaram, AP, India</span>
                   </div>
                   <div className="flex items-center gap-4 text-slate-300">
                     <div className="bg-teal-500/10 p-2 rounded-lg text-teal-400"><Phone size={20}/></div>
                     <span>+91 9347253238</span>
                   </div>
                   <div className="flex items-center gap-4 text-slate-300">
                     <div className="bg-teal-500/10 p-2 rounded-lg text-teal-400"><Mail size={20}/></div>
                     <span className="text-sm">srisaikudavalli@gmail.com</span>
                   </div>
                   <div className="flex items-center gap-4 text-slate-300">
                     <div className="bg-teal-500/10 p-2 rounded-lg text-teal-400"><User size={20}/></div>
                     <span>English, Telugu</span>
                   </div>
                 </div>
              </div>
            </div>
            
            <div className="md:w-2/3 text-slate-300 space-y-6 leading-relaxed text-lg">
              <p>
                Recent Computer Science graduate with a solid foundation in software development principles and problem-solving. 
                I am proficient in <span className="text-teal-400 font-medium">Java, Python, and SQL</span>, with practical experience in object-oriented programming.
              </p>
              <p>
                My journey involves not just coding, but understanding the bigger picture of project execution. 
                I am skilled in team management, analytical thinking, and adapting to Agile environments.
                Whether it's building full-stack web applications or experimenting with AI/ML models, I am always eager to learn and innovate.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-700/50">
                  <h3 className="font-bold text-white mb-1">Interests</h3>
                  <p className="text-sm text-slate-400">Video Games, Travelling, Driving</p>
                </div>
                <div className="bg-slate-900 p-4 rounded-xl border border-slate-700/50">
                  <h3 className="font-bold text-white mb-1">Goal</h3>
                  <p className="text-sm text-slate-400">Building scalable tech solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Programming", 
                icon: <Code size={32} />, 
                skills: ["Java", "Python (R, Numpy)", "Full Stack Web Dev", "JavaScript"] 
              },
              { 
                title: "Databases", 
                icon: <Database size={32} />, 
                skills: ["MySQL", "DBMS", "SQL Optimization", "Data Modeling"] 
              },
              { 
                title: "Tools & Platforms", 
                icon: <Terminal size={32} />, 
                skills: ["VS Code (AI Integration)", "Google Colab", "Git/GitHub", "Salesforce"] 
              },
              { 
                title: "Soft Skills", 
                icon: <User size={32} />, 
                skills: ["Team Management", "Analytical Thinking", "Agile Methodology", "Communication"] 
              }
            ].map((category, idx) => (
              <div key={idx} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-all hover:shadow-lg hover:shadow-teal-500/10 group">
                <div className="bg-slate-900 w-14 h-14 rounded-lg flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-center text-slate-400">
                      <div className="w-1.5 h-1.5 bg-teal-500 rounded-full mr-2"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                role: "AI/ML/Data Science Intern",
                company: "IIDT with BlackBucks, Tirupati",
                period: "May 2024 – Jul 2024",
                desc: "Gained hands-on experience in Artificial Intelligence and Machine Learning methodologies.",
                tags: ["AI", "Machine Learning", "Data Science"]
              },
              {
                role: "Full Stack Java Intern",
                company: "Datapro, Visakhapatnam",
                period: "Jun 2023 – Aug 2023",
                desc: "Worked on Full Stack development using Java technologies, enhancing web application development skills.",
                tags: ["Java", "Full Stack", "Web Development"]
              }
            ].map((job, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0">
                {/* Timeline Line for desktop */}
                <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-slate-700 md:left-1/2 transform md:-translate-x-1/2"></div>
                
                <div className={`md:flex justify-between items-center w-full ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="hidden md:block w-5/12"></div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-teal-500 border-4 border-slate-800 transform -translate-x-1.5 md:-translate-x-1/2 mt-6"></div>
                  
                  <div className="md:w-5/12 bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-lg hover:border-teal-500/30 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{job.role}</h3>
                      <span className="text-xs font-mono text-teal-400 bg-teal-500/10 px-2 py-1 rounded mt-2 sm:mt-0 w-fit">{job.period}</span>
                    </div>
                    <h4 className="text-slate-400 font-medium mb-4 flex items-center gap-1">
                      <Briefcase size={14} /> {job.company}
                    </h4>
                    <p className="text-slate-300 text-sm mb-4">
                      {job.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map(tag => (
                        <span key={tag} className="text-xs bg-slate-800 text-slate-400 border border-slate-700 px-2 py-1 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Workshops Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Workshops & Training</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "DevOps Workshop", loc: "Datapro, Visakhapatnam", date: "Sep 2023" },
                { name: "Android App Development", loc: "Datapro, Visakhapatnam", date: "Nov 2022" },
                { name: "Generative AI Workshop", loc: "Skillshop, Visakhapatnam", date: "Aug 2024" }
              ].map((ws, i) => (
                <div key={i} className="bg-slate-800 p-5 rounded-lg border border-slate-700 text-center">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mx-auto mb-3">
                    <Award size={24} />
                  </div>
                  <h4 className="font-bold text-white mb-1">{ws.name}</h4>
                  <p className="text-xs text-slate-400 mb-2">{ws.loc}</p>
                  <span className="text-xs text-teal-400 font-mono">{ws.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Project 1 */}
            <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 group hover:border-teal-500/50 transition-all">
              <div className="h-48 bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center relative overflow-hidden">
                <Cpu size={64} className="text-slate-500 opacity-50" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">AI Call Assistant</h3>
                <p className="text-teal-400 text-sm font-mono mb-4">NLP • Machine Learning • API Architecture</p>
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                  Extractive Summarization of Call Recordings. Developed an AI-powered Call Assistant utilizing 
                  Whisper ASR, BART, VADER, and TextBlob. Features include speech-to-text, extractive summarization, 
                  sentiment analysis, and multilingual translation.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Whisper ASR", "Python", "BART", "NLP", "VADER"].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-400 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 group hover:border-teal-500/50 transition-all">
              <div className="h-48 bg-gradient-to-r from-slate-700 to-slate-600 flex items-center justify-center relative overflow-hidden">
                <BookOpen size={64} className="text-slate-500 opacity-50" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2">Online Book Store</h3>
                <p className="text-teal-400 text-sm font-mono mb-4">Full Stack Web Application • Database</p>
                <p className="text-slate-300 mb-6 text-sm leading-relaxed">
                  Developed a responsive online bookstore allowing users to search and purchase books by title, 
                  author, and subject. Implemented secure authentication and optimized database-backed search functionality for seamless user experience.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Full Stack", "SQL", "Authentication", "Web Design"].map(tech => (
                    <span key={tech} className="px-3 py-1 bg-slate-900 rounded-full text-xs text-slate-400 border border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section id="education" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Education Column */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="bg-teal-500/20 p-2 rounded-lg text-teal-400"><BookOpen size={24} /></span> 
                Education
              </h3>
              
              <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Award size={100} className="text-teal-500" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">B.Tech in Computer Science and Engineering</h4>
                <p className="text-teal-400 font-medium mb-4">Avanthi's Research and Technological Academy</p>
                <div className="flex justify-between items-center text-sm text-slate-400 mb-2">
                  <span>Vizianagaram, AP</span>
                  <span className="font-mono bg-slate-800 px-2 py-1 rounded">2021 - 2025</span>
                </div>
                <div className="mt-4 inline-block bg-teal-500/10 text-teal-400 px-4 py-2 rounded-full font-bold border border-teal-500/20">
                  CGPA: 7.8
                </div>
              </div>
            </div>

            {/* Certifications Column */}
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="bg-blue-500/20 p-2 rounded-lg text-blue-400"><Award size={24} /></span> 
                Certifications
              </h3>
              
              <div className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-700 border-b border-slate-700">
                  <div className="p-5 hover:bg-slate-800 transition-colors">
                    <h5 className="text-white font-semibold mb-1">Salesforce Developer</h5>
                    <p className="text-xs text-slate-400">SMART INTERNZ</p>
                  </div>
                  <div className="p-5 hover:bg-slate-800 transition-colors">
                    <h5 className="text-white font-semibold mb-1">AI/ML/Data Science</h5>
                    <p className="text-xs text-slate-400">APSCHE</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-700 border-b border-slate-700">
                   <div className="p-5 hover:bg-slate-800 transition-colors">
                    <h5 className="text-white font-semibold mb-1">Cyber Security</h5>
                    <p className="text-xs text-slate-400">APSCHE</p>
                  </div>
                  <div className="p-5 hover:bg-slate-800 transition-colors">
                    <h5 className="text-white font-semibold mb-1">Data Science 101</h5>
                    <p className="text-xs text-slate-400">IBM Skills Build</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-700">
                   <div className="p-5 hover:bg-slate-800 transition-colors">
                    <h5 className="text-white font-semibold mb-1">Full Stack Java</h5>
                    <p className="text-xs text-slate-400">Datapro</p>
                  </div>
                  <div className="p-5 hover:bg-slate-800 transition-colors">
                    <h5 className="text-white font-semibold mb-1">Cloud Computing</h5>
                    <p className="text-xs text-slate-400">IBM Skills Build</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-slate-400 max-w-lg mx-auto">
              Whether you have a question, a project proposal, or just want to say hi, feel free to reach out!
            </p>
            <div className="w-20 h-1 bg-teal-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden shadow-2xl flex flex-col md:flex-row">
            
            <div className="p-10 md:w-2/5 bg-slate-900 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-500"></div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg text-teal-400"><Mail size={20} /></div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-1">Email</h4>
                    <a href="mailto:srisaikudavalli@gmail.com" className="text-slate-400 hover:text-white transition-colors break-all">srisaikudavalli@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg text-teal-400"><Phone size={20} /></div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-1">Phone</h4>
                    <span className="text-slate-400">+91 9347253238</span>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-slate-800 p-3 rounded-lg text-teal-400"><Linkedin size={20} /></div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-1">Socials</h4>
                    <div className="flex gap-4 mt-2">
                      <a href="https://linkedin.com/in/ksrisai" className="text-slate-400 hover:text-white transition-colors"><Linkedin /></a>
                      <a href="https://github.com/srisaikudavalli" className="text-slate-400 hover:text-white transition-colors"><Github /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-10 md:w-3/5">
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Name</label>
                    <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Email</label>
                    <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Subject</label>
                  <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors" placeholder="Project Inquiry" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-400 font-bold mb-2">Message</label>
                  <textarea rows="4" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors resize-none" placeholder="Hello, I'd like to discuss..."></textarea>
                </div>
                <button type="submit" className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition hover:-translate-y-0.5 flex items-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-8 text-center text-slate-500 text-sm">
        <div className="container mx-auto px-6">
          <div className="flex justify-center gap-6 mb-4">
            <a href="https://linkedin.com/in/ksrisai" className="hover:text-teal-400 transition-colors"><Linkedin size={20} /></a>
            <a href="https://github.com/srisaikudavalli" className="hover:text-teal-400 transition-colors"><Github size={20} /></a>
            <a href="mailto:srisaikudavalli@gmail.com" className="hover:text-teal-400 transition-colors"><Mail size={20} /></a>
          </div>
          <p>© {new Date().getFullYear()} Sri Sai Kudavalli. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;