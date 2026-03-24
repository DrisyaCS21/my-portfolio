import React, { useState, useEffect, useRef } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp,
  FaInstagram,
  FaChevronDown,
  FaRegClock
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeMethod, setActiveMethod] = useState('whatsapp');
  const [visibleSection, setVisibleSection] = useState({
    header: false,
    leftPanel: false,
    rightPanel: false
  });
  
  const headerRef = useRef(null);
  const leftPanelRef = useRef(null);
  const rightPanelRef = useRef(null);

  const whatsappNumber = "9779800000000";

  const socialLinks = [
    { 
      platform: 'GitHub', 
      icon: <FaGithub />, 
      link: 'https://github.com/DrisyaCS21'
    },
    { 
      platform: 'LinkedIn', 
      icon: <FaLinkedin />, 
      link: 'https://www.linkedin.com/in/drisya-giri-0a63a824a/'
    },
    { 
      platform: 'WhatsApp', 
      icon: <FaWhatsapp />, 
      link: `https://wa.me/${whatsappNumber}`
    },
    { 
      platform: 'Instagram', 
      icon: <FaInstagram />, 
      link: `https://www.instagram.com/drisya_giri/`
    },
  ];

  const contactMethods = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      description: 'Instant messaging'
    },
    {
      id: 'email',
      name: 'Email',
      icon: <FaEnvelope />,
      description: 'Direct email'
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setVisibleSection(prev => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.2, rootMargin: '50px' }
    );

    const refs = { header: headerRef, leftPanel: leftPanelRef, rightPanel: rightPanelRef };
    Object.keys(refs).forEach(key => {
      if (refs[key].current) {
        observer.observe(refs[key].current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const sendToWhatsApp = (data) => {
    const message = `Hello Drisya Giri!

Contact Inquiry From Portfolio

Name: ${data.name}
Email: ${data.email}

Message:
${data.message}

---
Sent from portfolio website`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }
    
    if (activeMethod === 'whatsapp') {
      sendToWhatsApp(formData);
    } else {
      const subject = `Contact from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:drisyagiri6@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
    }
    
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="relative min-h-screen py-24 bg-black">
      {/* Minimal Background */}
      <div className="absolute inset-0 bg-black"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Waving Rabbit */}
        <div 
          ref={headerRef}
          id="header"
          className={`text-center mb-20 transition-all duration-700 transform ${
            visibleSection.header
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-8 h-px bg-gray-600"></span>
            <span className="text-sm font-mono text-gray-500 tracking-wider">GET IN TOUCH</span>
            <span className="w-8 h-px bg-gray-600"></span>
          </div>
          
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
              Let's Connect
            </h2>
            {/* Waving Rabbit Icon */}
            <div className="relative group">
              <span className="text-4xl inline-block animate-wave cursor-pointer">
                🐰
              </span>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-gray-800 text-white text-xs font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                Let's talk! 👋
              </div>
            </div>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Have a project in mind? I'm just a message away.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Info - Left Panel */}
          <div 
            ref={leftPanelRef}
            id="leftPanel"
            className={`transition-all duration-700 delay-100 transform ${
              visibleSection.leftPanel
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="border border-gray-800 p-8 hover:border-gray-700 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="text-2xl text-gray-500">
                  <FaPaperPlane />
                </div>
                <h3 className="text-xl font-light text-white">
                  Quick Contact
                </h3>
              </div>
              
              <div className="space-y-6">
                {/* Email */}
                <a 
                  href="mailto:drisyagiri6@gmail.com"
                  className="block group p-4 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <FaEnvelope className="text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-mono text-gray-600 mb-1">EMAIL</p>
                      <p className="text-gray-400 font-light group-hover:text-white transition-colors text-sm">
                        drisyagiri6@gmail.com
                      </p>
                    </div>
                  </div>
                </a>

                {/* Phone */}
                <a 
                  href="tel:9779862175661"
                  className="block group p-4 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <FaPhone className="text-gray-500 group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-mono text-gray-600 mb-1">PHONE</p>
                      <p className="text-gray-400 font-light group-hover:text-white transition-colors text-sm">
                        +977 9804203443
                      </p>
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="block p-4 border border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <FaMapMarkerAlt className="text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-mono text-gray-600 mb-1">LOCATION</p>
                      <p className="text-gray-400 font-light text-sm">Itahari, Nepal</p>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="block p-4 border border-gray-800">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <FaRegClock className="text-gray-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-mono text-gray-600 mb-1">RESPONSE TIME</p>
                      <p className="text-gray-400 font-light text-sm">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-gray-800">
                <p className="text-xs font-mono text-gray-500 mb-6 text-center tracking-wider">FOLLOW ME</p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.platform}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                      style={{
                        transitionDelay: `${index * 50}ms`
                      }}
                    >
                      <div className="w-10 h-10 border border-gray-800 hover:border-gray-600 flex items-center justify-center transition-all duration-300 hover:-translate-y-1">
                        <div className="text-gray-500 group-hover:text-white transition-colors text-lg">
                          {social.icon}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Panel */}
          <div 
            ref={rightPanelRef}
            id="rightPanel"
            className={`transition-all duration-700 delay-200 transform ${
              visibleSection.rightPanel
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-8'
            }`}
          >
            {/* <div className="border border-gray-800 p-8 hover:border-gray-700 transition-all duration-500">
              <h3 className="text-xl font-light text-white mb-2">Send a Message</h3>
              <p className="text-gray-500 text-sm font-light mb-8">Choose your preferred contact method</p>

              
              <div className="flex gap-3 mb-8">
                {contactMethods.map((method) => (
                  <button
                    key={method.id}
                    onClick={() => setActiveMethod(method.id)}
                    className={`flex-1 flex items-center justify-center gap-2 p-3 border transition-all duration-300 ${
                      activeMethod === method.id 
                        ? 'border-white bg-white/5' 
                        : 'border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    <div className={`text-lg ${activeMethod === method.id ? 'text-white' : 'text-gray-500'}`}>
                      {method.icon}
                    </div>
                    <span className={`text-sm font-mono ${activeMethod === method.id ? 'text-white' : 'text-gray-500'}`}>
                      {method.name}
                    </span>
                  </button>
                ))}
              </div>

              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-transparent border border-gray-800 focus:border-gray-600 text-white placeholder-gray-600 outline-none transition-all duration-300 font-light"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="w-full px-4 py-3 bg-transparent border border-gray-800 focus:border-gray-600 text-white placeholder-gray-600 outline-none transition-all duration-300 font-light"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      rows="5"
                      className="w-full px-4 py-3 bg-transparent border border-gray-800 focus:border-gray-600 text-white placeholder-gray-600 outline-none transition-all duration-300 resize-none font-light"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 border border-gray-700 text-white hover:border-gray-500 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm font-mono">SENDING...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-xs group-hover:translate-x-1 transition-transform" />
                      <span className="text-sm font-mono tracking-wider">
                        SEND VIA {activeMethod === 'whatsapp' ? 'WHATSAPP' : 'EMAIL'}
                      </span>
                    </>
                  )}
                </button>
              </form>

              
              <div className="mt-8 pt-6 border-t border-gray-800">
                <p className="text-xs text-gray-600 text-center font-light">
                  Your information is secure and will only be used to respond to your inquiry.
                </p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center border-t border-gray-800 pt-12">
          <p className="text-gray-500 text-sm font-light italic max-w-2xl mx-auto mb-3">
            "Great things are never done by one person. They're done by a team of people."
          </p>
          <p className="text-gray-600 text-xs font-mono">
            Let's collaborate and create something extraordinary together.
          </p>
        </div>

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-10 h-10 border border-gray-700 hover:border-gray-500 text-gray-500 hover:text-white transition-all duration-300 flex items-center justify-center z-50 group"
          aria-label="Scroll to top"
        >
          <FaChevronDown className="transform rotate-180 text-sm group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          20% { transform: rotate(14deg); }
          40% { transform: rotate(-8deg); }
          60% { transform: rotate(14deg); }
          80% { transform: rotate(-4deg); }
          100% { transform: rotate(0deg); }
        }
        
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
          transform-origin: 70% 70%;
          display: inline-block;
        }
        
        .animate-wave:hover {
          animation: wave 0.8s ease-in-out;
        }
        
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin {
          animation: spin 0.8s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Contact;