import React, { useState, useEffect, useRef } from 'react';
import { FaCode, FaServer, FaTools, FaRocket, FaBrain, FaLightbulb, FaSync, FaUsers, FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaDatabase, FaGitAlt, FaAws, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiPostman, SiVercel } from 'react-icons/si';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [visibleSkills, setVisibleSkills] = useState(false);
  const skillsRef = useRef(null);

  const skillCategories = {
    frontend: {
      title: "Frontend",
      icon: <FaCode className="text-gray-400" />,
      skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"]
    },
    backend: {
      title: "Backend",
      icon: <FaServer className="text-gray-400" />,
      skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "JWT Authentication", "API Integration"]
    },
    tools: {
      title: "Tools & DevOps",
      icon: <FaTools className="text-gray-400" />,
      skills: ["Git & GitHub", "Postman", "Vercel", "VPS Hosting", "AWS Basics", "VS Code"]
    }
  };

  const getSkillIcon = (skill) => {
    const icons = {
      'React': <FaReact className="text-blue-400" />,
      'JavaScript': <FaJs className="text-yellow-400" />,
      'HTML5': <FaHtml5 className="text-orange-500" />,
      'CSS3': <FaCss3Alt className="text-blue-500" />,
      'Tailwind CSS': <SiTailwindcss className="text-cyan-400" />,
      'Node.js': <FaNodeJs className="text-green-500" />,
      'Express.js': <SiExpress className="text-gray-400" />,
      'MongoDB': <SiMongodb className="text-green-600" />,
      'Git & GitHub': <FaGitAlt className="text-orange-600" />,
      'Postman': <SiPostman className="text-orange-500" />,
      'Vercel': <SiVercel className="text-gray-400" />,
      'AWS Basics': <FaAws className="text-orange-400" />
    };
    return icons[skill] || <FaCode className="text-gray-500" />;
  };

  // Intersection Observer for skills animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleSkills(true);
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="relative min-h-screen py-24 bg-black">
      {/* Minimal Background */}
      <div className="absolute inset-0 bg-black"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Waving Rabbit */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-gray-600"></span>
            <span className="text-sm font-mono text-gray-500 tracking-wider">EXPERTISE</span>
            <span className="w-8 h-px bg-gray-600"></span>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
              Technical Skills
            </h2>
            {/* Waving Rabbit Icon */}
            {/* <div className="relative group">
              <span className="text-4xl inline-block animate-wave cursor-pointer">
                🐰
              </span>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Hey there! 👋
              </div>
            </div> */}
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Category Tabs - Minimal Style */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 py-2 text-sm font-mono transition-all duration-300 ${
                activeCategory === key
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-500 hover:text-gray-300 border-b-2 border-transparent hover:border-gray-600'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid - Simplified */}
        <div 
          ref={skillsRef}
          className={`transition-all duration-1000 transform ${
            visibleSkills
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="border border-gray-800 p-10 md:p-12 hover:border-gray-700 transition-all duration-500">
            <div className="flex items-center gap-3 mb-10">
              <div className="text-2xl">
                {skillCategories[activeCategory].icon}
              </div>
              <h3 className="text-xl font-light text-white">
                {skillCategories[activeCategory].title} Development
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skillCategories[activeCategory].skills.map((skill, index) => (
                <div
                  key={index}
                  className="group p-4 border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    transitionDelay: `${index * 50}ms`
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-xl transition-transform duration-300 group-hover:scale-110">
                      {getSkillIcon(skill)}
                    </div>
                    <span className="text-sm text-gray-300 font-light group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soft Skills Section - Simplified */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-light text-white mb-3">Professional Attributes</h3>
            <p className="text-gray-500 text-sm font-light max-w-2xl mx-auto">
              Beyond technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Consistent", description: "Persistent problem-solving until solutions are found", icon: <FaTools /> },
              { title: "Quick Learning", description: "Rapid adaptation to new technologies and frameworks", icon: <FaLightbulb /> },
              { title: "Strategic Thinking", description: "Planning scalable and maintainable solutions", icon: <FaBrain /> },
              { title: "Adaptability", description: "Thriving in dynamic and changing environments", icon: <FaSync /> },
              { title: "Team Collaboration", description: "Working effectively in team settings", icon: <FaUsers /> },
              { title: "Problem Solving", description: "Effective solutions for technical and non-technical challenges", icon: <FaBrain /> }
            ].map((skill, index) => (
              <div
                key={index}
                className="group border border-gray-800 p-6 hover:border-gray-700 transition-all duration-500 hover:-translate-y-1"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  animation: visibleSkills ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                  opacity: 0,
                  animationDelay: `${0.3 + index * 0.1}s`
                }}
              >
                <div className="w-10 h-10 flex items-center justify-center mb-4">
                  <div className="text-xl text-gray-500 group-hover:text-gray-300 transition-colors">
                    {skill.icon}
                  </div>
                </div>
                <h4 className="text-lg font-light text-white mb-2">{skill.title}</h4>
                <p className="text-gray-500 text-sm font-light">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey - Simplified */}
        <div className="mt-24 border border-gray-800 p-8 hover:border-gray-700 transition-all duration-500">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-light text-white mb-3">Continuous Learning Journey</h3>
              <p className="text-gray-500 text-sm font-light">
                Constantly growing and staying updated with the latest technologies and best practices.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="text-xs font-mono text-gray-400 border border-gray-800 px-3 py-2 hover:border-gray-600 transition-all">
                Currently: MERN Stack
              </span>
              <span className="text-xs font-mono text-gray-400 border border-gray-800 px-3 py-2 hover:border-gray-600 transition-all">
                Next: React Native
              </span>
              <span className="text-xs font-mono text-gray-400 border border-gray-800 px-3 py-2 hover:border-gray-600 transition-all">
                Exploring: TypeScript
              </span>
            </div>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="mt-16 text-center border-t border-gray-800 pt-12">
          <p className="text-gray-500 mb-6 text-sm font-light tracking-wide">
            READY TO COLLABORATE?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-3 border border-gray-700 text-white hover:border-gray-500 transition-all duration-300 group"
          >
            <span className="font-mono text-sm tracking-wider">LET'S WORK TOGETHER</span>
            <FaRocket className="text-xs group-hover:translate-x-1 transition-transform" />
          </a>
        </div> */}
      </div>

      {/* Add custom animation styles */}
      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(14deg); }
          40% { transform: rotate(-8deg); }
          60% { transform: rotate(14deg); }
          80% { transform: rotate(-4deg); }
          100% { transform: rotate(0deg); }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
        
        .animate-wave:hover {
          animation: wave 0.8s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Skills;