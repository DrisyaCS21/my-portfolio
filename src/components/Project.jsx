import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode, FaEye } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState([]);
  const projectRefs = useRef([]);

  const projects = [
  {
    id: 1,
    title: "QR Restaurant Menu Generator",
    description:
      "A versatile QR code generator application that creates customizable QR codes for URLs, text, contact information, and WiFi credentials. Includes download options and history tracking.",
    technologies: [
      "React",
      "JavaScript",
      "QR Code API",
      "Tailwind CSS",
      "Local Storage"
    ],
    github: "https://github.com/DrisyaCS21/restaurant",
    live: "https://hoteldrisya.vercel.app",
    icon: "🔗",
    featured: false,
    category: "frontend",
    highlights: [
      "Multiple QR Code Types",
      "Customizable Design",
      "Multiple Formats",
      "Generation History"
    ]
  },
  {
    id: 2,
    title: "Stack-Food E-commerce",
    description:
      "A comprehensive restaurant management system with admin panel for menu management, order tracking, and sales analytics. Features multilingual support and real-time order status updates.",
    technologies: [
      "React",
      "JavaScript",
      "Bootstrap",
      "Chart.js",
      "i18next"
    ],
    github: null,
    live: "https://stack-food-admin-panel-qusa.vercel.app",
    icon: "🍽️",
    featured: false,
    category: "ecommerce",
    highlights: [
      "Admin Dashboard",
      "Sales Analytics",
      "Multilingual Support",
      "Order Tracking"
    ]
  },
  {
    id: 3,
    title: "Gym Business Website",
    description:
      "A fitness center website showcasing gym facilities, membership plans, and trainer profiles. Features integrated appointment booking and direct communication with trainers.",
    technologies: [
      "React",
      "Tailwind CSS",
      "JavaScript",
      "WhatsApp API"
    ],
    github: "https://github.com/DrisyaCS21/gym-website",
    live: "https://www.sastogadget.com/",
    icon: "🏋️",
    featured: true,
    category: "frontend",
    highlights: [
      "Trainer Profiles",
      "Membership Plans",
      "WhatsApp Integration",
      "Class Booking"
    ]
  },
  {
    id: 4,
    title: "Khaja Ghar – Restaurant",
    description:
      "A complete restaurant ordering platform featuring QR code digital menus, online ordering with payment integration, and an admin dashboard for managing orders and menu items.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Socket.io"
    ],
    github: "https://github.com/DrisyaCS21/khajaghar",
    live: "https://khajaghar.vercel.app",
    icon: "🥘",
    featured: true,
    category: "fullstack",
    highlights: [
      "QR Digital Menu",
      "Payment Integration",
      "Real-time Updates",
      "Order Management"
    ]
  },
];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'featured', label: 'Featured' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured'
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.category === activeFilter);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setVisibleProjects(prev => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredProjects]);

  useEffect(() => {
    setVisibleProjects([]);
    projectRefs.current = [];
  }, [activeFilter]);

  return (
    <section id="projects" className="relative min-h-screen py-24 bg-black">
      {/* Minimal Background - Solid Black */}
      <div className="absolute inset-0 bg-black"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Minimal Style */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-gray-600"></span>
            <span className="text-sm font-mono text-gray-500 tracking-wider">PROJECTS</span>
            <span className="w-8 h-px bg-gray-600"></span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
            Featured Work
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            A selection of my recent projects
          </p>
        </div>

        {/* Filter Buttons - Minimal Style */}
        <div className="flex flex-wrap justify-center gap-2 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 text-sm font-mono transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'text-white border-b-2 border-white'
                  : 'text-gray-500 hover:text-gray-300 border-b-2 border-transparent hover:border-gray-600'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              ref={el => projectRefs.current[idx] = el}
              className={`transform transition-all duration-700 ease-out ${
                visibleProjects.includes(idx)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Project Card - Minimal Design */}
              <div className="group relative bg-black border border-gray-800 hover:border-gray-600 transition-all duration-500">
                {/* Featured Badge - Minimal */}
                {project.featured && (
                  <div className="absolute top-6 left-6 z-10">
                    <span className="inline-flex items-center gap-1 text-xs font-mono text-gray-500">
                      <FaStar className="text-xs" /> FEATURED
                    </span>
                  </div>
                )}

                {/* Project Content */}
                <div className="p-8 md:p-10">
                  {/* Icon and Category */}
                  <div className="mb-6">
                    <span className="text-4xl opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                      {project.icon}
                    </span>
                    <span className="block text-xs font-mono text-gray-600 mt-3 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-light text-white mb-4 group-hover:text-gray-300 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Highlights - Minimal Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="text-xs font-mono text-gray-500 border border-gray-800 px-3 py-1"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="text-xs font-mono text-gray-600"
                        >
                          {tech}{index < project.technologies.length - 1 && ' /'}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons - Minimal Style */}
                  <div className="flex gap-4 pt-6 border-t border-gray-800">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/github flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors duration-300"
                      >
                        <FaGithub className="text-sm" />
                        <span className="font-mono">code</span>
                      </a>
                    )}
                    
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/live flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors duration-300"
                    >
                      <FaEye className="text-sm" />
                      <span className="font-mono">demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Minimal */}
        <div className="mt-24 text-center border-t border-gray-800 pt-16">
          <p className="text-gray-500 mb-6 font-light text-sm tracking-wide">
            HAVE A PROJECT IN MIND?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-3 border border-gray-700 text-white hover:border-gray-500 transition-all duration-300 group"
          >
            <span className="font-mono text-sm tracking-wider">GET IN TOUCH</span>
            <FaExternalLinkAlt className="text-xs group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      <style jsx>{`
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
      `}</style>
    </section>
  );
};

export default Projects;