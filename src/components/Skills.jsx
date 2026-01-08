import React, { useState } from 'react';
import { FaCode, FaServer, FaTools, FaRocket, FaBrain, FaLightbulb, FaSync, FaUsers, FaTruck, FaStepForward } from 'react-icons/fa';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: <FaCode className="text-blue-500" />,
      description: "Creating beautiful, responsive user interfaces",
      skills: [
        { name: "React", level: 70, color: "from-blue-400 to-cyan-400", icon: "⚛️" },
        { name: "JavaScript", level: 73, color: "from-yellow-400 to-orange-400", icon: "📜" },
        { name: "HTML5/CSS3", level: 95, color: "from-orange-400 to-red-400", icon: "🎨" },
        { name: "Tailwind CSS", level: 80, color: "from-teal-400 to-blue-400", icon: "🌀" },
        { name: "Responsive Design", level: 82, color: "from-green-400 to-emerald-400", icon: "📱" }
        // { name: "UI/UX Principles", level: 88, color: "from-purple-400 to-pink-400", icon: "✨" }
      ]
    },
    backend: {
      title: "Backend Development",
      icon: <FaServer className="text-green-500" />,
      description: "Building robust APIs and server-side logic",
      skills: [
        { name: "Node.js/Express", level: 78, color: "from-green-500 to-emerald-500", icon: "🟢" },
        { name: "MongoDB", level: 80, color: "from-green-600 to-lime-500", icon: "🍃" },
        { name: "RESTful APIs", level: 80, color: "from-purple-500 to-indigo-500", icon: "🔗" },
        { name: "Authentication/JWT", level: 82, color: "from-red-500 to-orange-500", icon: "🔐" },
        { name: "API Integration", level: 90, color: "from-blue-500 to-purple-500", icon: "🔄" },
        { name: "Database Design", level: 76, color: "from-gray-600 to-gray-800", icon: "🗄️" }
      ]
    },
    tools: {
      title: "DevOps & Tools",
      icon: <FaTools className="text-purple-500" />,
      description: "Development workflow and deployment",
      skills: [
        { name: "Git & GitHub", level: 88, color: "from-gray-700 to-black", icon: "🐙" },
        { name: "VS Code", level: 96, color: "from-blue-400 to-blue-600", icon: "💻" },
        { name: "Postman", level: 91, color: "from-orange-500 to-red-500", icon: "📬" },
        { name: "Vercel", level: 86, color: "from-black to-gray-700", icon: "☁️" },
        { name: "AWS Basics", level: 45, color: "from-orange-400 to-yellow-400", icon: "☁️" },
        // { name: "Docker", level: 75, color: "from-blue-500 to-cyan-500", icon: "🐳" }
      ]
    }
  };

  const softSkills = [
    { 
      title: "Consistent", 
      description: "Never giving up until I find a solution to fix it",
      icon: <FaTools className="text-yellow-500" />,
      color: "from-yellow-50 to-orange-50"
    },
    { 
      title: "Quick Learning", 
      description: "Rapidly adapting to new technologies and frameworks",
      icon: <FaLightbulb className="text-red-500" />,
      color: "from-red-50 to-pink-50"
    },
    { 
      title: "Strategic Thinking", 
      description: "Planning scalable and maintainable solutions",
      icon: <FaBrain className="text-purple-500" />,
      color: "from-purple-50 to-indigo-50"
    },
    { 
      title: "Adaptability", 
      description: "Thriving in dynamic and changing environments",
      icon: <FaSync className="text-green-500" />,
      color: "from-green-50 to-teal-50"
    },
    { 
      title: "Team Collaboration", 
      description: "Working effectively in team settings",
      icon: <FaUsers className="text-blue-500" />,
      color: "from-blue-50 to-cyan-50"
    },
    { 
      title: "Problem Solving", 
      description: "Working effectively for different problems either technical or non-tech",
      icon: <FaBrain className="text-red-400" />,
      color: "from-blue-50 to-cyan-50"
    }
  ];

  const currentCategory = skillCategories[activeCategory];

  return (
    <section id="skills" className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50/30">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/30 via-transparent to-transparent"></div>
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-blue-700">Technical Expertise</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Technical Stack</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, tools, and methodologies
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:text-blue-600 border border-gray-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Main Skills Display */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Column - Progress Bars */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-8">
              {currentCategory.icon}
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{currentCategory.title}</h3>
                <p className="text-gray-600">{currentCategory.description}</p>
              </div>
            </div>

            <div className="space-y-8">
              {currentCategory.skills.map((skill, index) => (
                <div key={index} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{skill.icon}</span>
                      <span className="font-semibold text-gray-800">{skill.name}</span>
                    </div>
                    <span className="font-bold text-gray-700">{skill.level}%</span>
                  </div>
                  
                  <div className="relative">
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 h-3 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Skill Visualizations */}
          <div className="grid grid-cols-2 gap-4">
            {currentCategory.skills.slice(0, 4).map((skill, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{skill.icon}</span>
                    <span className="text-2xl font-bold text-gray-800">{skill.level}%</span>
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{skill.name}</h4>
                  <p className="text-sm text-gray-600">
                    {skill.name.includes('React') && 'Component architecture, hooks, state management'}
                    {skill.name.includes('JavaScript') && 'ES6+, async programming, DOM manipulation'}
                    {skill.name.includes('HTML5/CSS3') && 'Semantic HTML, CSS Grid, Flexbox'}
                    {skill.name.includes('Tailwind') && 'Utility-first CSS, responsive design'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Professional Attributes</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beyond technical expertise, these qualities help me deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white to-gray-50 flex items-center justify-center mb-4 shadow-sm">
                    <div className="text-2xl">
                      {skill.icon}
                    </div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{skill.title}</h4>
                  <p className="text-gray-600 text-sm">{skill.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-blue-200/50">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Continuous Learning Journey</h3>
              <p className="text-gray-600 mb-6">
                I believe in constant growth and stay updated with the latest technologies and best practices in web development.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-blue-500/20 text-blue-700 rounded-lg font-medium">Currently Learning</span>
                <span className="px-4 py-2 bg-purple-500/20 text-purple-700 rounded-lg font-medium">MERN</span>
                <span className="px-4 py-2 bg-green-500/20 text-green-700 rounded-lg font-medium">React native</span>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600">Technologies</div>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl">
                <div className="text-3xl font-bold text-purple-600 mb-2">6+</div>
                <div className="text-gray-600">Months Experience</div>
              </div>
              <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl">
                <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-gray-600">Hours Learning</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Need a developer with these skills? Let's discuss how I can contribute to your project.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Discuss Your Project</span>
            <FaRocket />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;