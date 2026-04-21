import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Command as CommandIcon } from 'lucide-react';
import React from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active section detection
    useEffect(() => {
    const path = location.pathname;
    if (path === '/') {
      setActiveLink('home');
    } else if (path === '/projects') {
      setActiveLink('projects');
    } else if (path === '/skills') {
      setActiveLink('skills');
    } else if (path === '/contact') {
      setActiveLink('contact');
    }
  }, [location]);

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false);
    
    if (link === 'home') {
      navigate('/');
    } else if (link === 'projects') {
      navigate('/projects');
    } else if (link === 'skills') {
      navigate('/skills');
    } else if (link === 'contact') {
      navigate('/contact');
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed cursor-pointer top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
      {/* Floating Capsule Container */}
      <div
        className={`flex items-center justify-between px-5 py-3 rounded-full border shadow-lg transition-all duration-300
        ${scrolled
          ? "bg-white/80 backdrop-blur-xl border-gray-200"
          : "bg-white/50 backdrop-blur-lg border-white/40"
        }`}
      >
        {/* Logo */}
        <div className="flex-shrink-0 pr-3 cursor-pointer">
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center cursor-pointer"
          >
            <p className="italic font-mono text-sm sm:text-base text-gray-900 whitespace-nowrap gap-3">
              &lt; Drisya /&gt;
            </p> 
            <span 
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/terminal")}
            > 
            <CommandIcon size={15}/></span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap
                ${
                  activeLink === link.id
                    ? "bg-white text-gray-900 shadow"
                    : "text-gray-700 hover:bg-white/60"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden pl-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-6 h-6 cursor-pointer focus:outline-none"
          >
            <span
              className={`absolute left-0 top-1 w-6 h-0.5 bg-gray-800 transition ${
                isOpen ? "rotate-45 top-2.5" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-2.5 w-6 h-0.5 bg-gray-800 transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-4 w-6 h-0.5 bg-gray-800 transition ${
                isOpen ? "-rotate-45 top-2.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="md:hidden mt-3 bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border p-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className={`block w-full text-left px-4 py-3 rounded-xl text-sm transition
                ${
                  activeLink === link.id
                    ? "bg-gray-100 text-gray-900"
                    : "hover:bg-gray-50"
                }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;