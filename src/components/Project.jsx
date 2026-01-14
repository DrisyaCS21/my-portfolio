import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaStar, FaCode, FaEye } from 'react-icons/fa';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
  // {
  //   id: 1,
  //   title: "Courier Service System",
  //   description:
  //     "A comprehensive courier management system that enables customers to book deliveries, track packages in real-time, and manage shipping logistics. Includes admin dashboard for managing orders, delivery personnel, and shipment tracking.",
  //   technologies: [
  //     "React",
  //     "Node.js",
  //     "Express",
  //     "MongoDB",
  //     "JWT",
  //     "Socket.io",
  //     "Tailwind CSS",
  //     "Google Maps API"
  //   ],
  //   github: "https://github.com/Karkisuman73/Project1",
  //   live: "https://courier-frontend-theta.vercel.app",
  //   icon: "📦",
  //   featured: true,
  //   category: "fullstack",
  //   highlights: [
  //     "Real-time Package Tracking",
  //     "Delivery Personnel Management",
  //     "Customer Booking System",
  //     "Admin Dashboard Analytics"
  //   ]
  // },
  {
    id: 2,
    title: "QR Generator",
    description:
      "A versatile QR code generator application that creates customizable QR codes for URLs, text, contact information, and WiFi credentials. Includes download options and history tracking for generated codes.",
    technologies: [
      "React",
      "JavaScript",
      "QR Code API",
      "Tailwind CSS",
      "Local Storage"
    ],
    github: "https://github.com/DrisyaCS21/Test-Qr-generator",
    live: "https://test-qr-generator-six.vercel.app",
    icon: "🔗",
    featured: false,
    category: "frontend",
    highlights: [
      "Multiple QR Code Types",
      "Customizable Design Options",
      "Download in Multiple Formats",
      "Generation History"
    ]
  },
  {
    id: 3,
    title: "Stack-Food E-commerce Website",
    description:
      "A comprehensive restaurant management system with admin panel for menu management, order tracking, and sales analytics. Features multilingual support and real-time order status updates.",
    technologies: [
      "React",
      "JavaScript",
      "Bootstrap",
      "React-Bootstrap",
      "React Router",
      "Chart.js",
      "React-ChartJS2",
      "i18next / react-i18next"
    ],
    github: null,
    live: "https://stack-food-admin-panel-qusa.vercel.app",
    icon: "🍽️",
    featured: false,
    category: "ecommerce",
    highlights: [
      "Admin Dashboard for Menu Management",
      "Sales Analytics with Charts",
      "Multilingual Support (i18n)",
      "Order Tracking System"
    ]
  },
  {
    id: 4,
    title: "Gym Business Website",
    description:
      "A fitness center website showcasing gym facilities, membership plans, and trainer profiles. Features integrated appointment booking and direct communication with trainers through WhatsApp.",
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
      "Trainer Profile Showcase",
      "Membership Plan Comparison",
      "Direct WhatsApp Integration",
      "Online Class Booking"
    ]
  },
  {
    id: 5,
    title: "Khaja Ghar – Full Stack Restaurant Website",
    description:
      "A complete restaurant ordering platform featuring QR code digital menus, online ordering with payment integration, and an admin dashboard for managing orders, menu items, and customer data.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "QR Code Generation",
      "Socket.io"
    ],
    github: "https://github.com/DrisyaCS21/khajaghar",
    live: "https://khajaghar.vercel.app",
    icon: "🥘",
    featured: false,
    category: "fullstack",
    highlights: [
      "QR Code Digital Menu",
      "Online Payment Integration",
      "Real-time Order Updates",
      "Admin Order Management"
    ]
  },
];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'featured', label: 'Featured' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : activeFilter === 'featured'
    ? projects.filter(p => p.featured)
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative min-h-screen py-24 overflow-hidden bg-gradient-to-b from-white to-gray-50/50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-6">
            <FaCode className="text-blue-600" />
            <span className="text-sm font-medium text-blue-700">My Work Portfolio</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my recent work, highlighting technical skills and problem-solving abilities
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:text-blue-600 border border-gray-200 hover:border-blue-300 hover:shadow-md'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative"
            >
              {/* Project Card */}
              <div className="relative h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold">
                      <FaStar className="text-xs" /> Featured
                    </span>
                  </div>
                )}

                {/* Project Image/Icon Area */}
                <div className="relative h-48 bg-gradient-to-br from-blue-50 to-purple-50 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-7xl opacity-20 group-hover:scale-110 transition-transform duration-500">
                      {project.icon}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-gray-700">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.highlights.map((highlight, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-3">Built with:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    <a
                      href={project.github}
                      className="flex-1 group/github relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-700 opacity-0 group-hover/github:opacity-100 transition-opacity duration-300"></div>
                      <button className="relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg group-hover:text-white transition-all duration-300">
                        <FaGithub />
                        <span className="font-medium">Code</span>
                      </button>
                    </a>
                    
                    <a
                      href={project.live}
                      className="flex-1 group/live relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/live:opacity-100 transition-opacity duration-300"></div>
                      <button className="relative w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg transition-all duration-300">
                        <FaEye />
                        <span className="font-medium">Live Demo</span>
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Interested in working together? I'm always open to discussing new opportunities and challenging projects.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            <span>Let's Build Something Amazing</span>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;