import React, { useState, useEffect } from 'react';
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaPaperPlane, 
  FaGithub, 
  FaLinkedin, 
  FaWhatsapp,
  FaClock,
  FaGlobe,
  FaRocket,
  FaChevronDown,
  FaStar,
  FaHeart,
  FaInstagram
} from 'react-icons/fa';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeMethod, setActiveMethod] = useState('whatsapp');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    window.scrollTo(0, 0);
  }, []);

  const whatsappNumber = "9779862175661";

  const socialLinks = [
    { 
      platform: 'GitHub', 
      icon: <FaGithub />, 
      link: 'https://github.com/DrisyaCS21', 
      color: 'from-gray-800 to-gray-900',
      hover: 'hover:scale-110 hover:shadow-xl hover:from-gray-900 hover:to-black'
    },
    { 
      platform: 'LinkedIn', 
      icon: <FaLinkedin />, 
      link: 'https://www.linkedin.com/in/drisya-giri-0a63a824a/', 
      color: 'from-blue-300 to-blue-600',
      hover: 'hover:scale-110 hover:shadow-xl hover:from-blue-700 hover:to-blue-800'
    },
    { 
      platform: 'WhatsApp', 
      icon: <FaWhatsapp />, 
      link: `https://wa.me/${whatsappNumber}`, 
      color: 'from-green-400 to-green-400',
      hover: 'hover:scale-110 hover:shadow-xl hover:from-green-600 hover:to-green-700'
    },
    { 
      platform: 'Instagram', 
      icon: <FaInstagram />, 
      link: `https://www.instagram.com/drisya_giri/`, 
      color: 'from-purple-500 to-pink-600',
      hover: 'hover:scale-110 hover:shadow-xl hover:from-purple-600 hover:to-pink-700'
    },
  ];

  const contactMethods = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: <FaWhatsapp />,
      description: 'Instant messaging',
      activeColor: 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg',
      inactiveColor: 'bg-white text-gray-600 hover:bg-gray-50',
      iconColor: 'text-green-500'
    },
    {
      id: 'email',
      name: 'Email',
      icon: <FaEnvelope />,
      description: 'Direct email',
      activeColor: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg',
      inactiveColor: 'bg-white text-gray-600 hover:bg-gray-50',
      iconColor: 'text-blue-500'
    }
  ];

  const sendToWhatsApp = (data) => {
    const message = `Hello Drisya Giri!

*Contact Inquiry From Portfolio*

*Name:* ${data.name}
*Email:* ${data.email}

*Message:*
${data.message}

---
Sent from DRISYA GIRI'S portfolio website`;

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
    <section id="contact" className="min-h-screen py-8 md:py-16 bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <FaPaperPlane className="text-4xl text-pink-300 opacity-50" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float animation-delay-1000">
        <FaHeart className="text-3xl text-red-300 opacity-40" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-gray-700 text-sm font-medium mb-6 shadow-sm"
          >
            <FaPaperPlane className="text-pink-500 animate-pulse" />
            <span className="tracking-wider">CONTACT ME</span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Let's <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Connect</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            Have a project in mind? Let's bring your ideas to life together. 
            I'm just a message away!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 mb-20">
          {/* Contact Info - Left Panel */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-300 to-purple-200 flex items-center justify-center shadow-lg">
                  <FaRocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Quick Contact
                </h3>
              </div>
              
              <div className="space-y-6">
                {/* Email */}
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="mailto:drisyagiri6@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white to-pink-50 border border-pink-100 hover:border-pink-300 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-100 to-pink-200 flex items-center justify-center flex-shrink-0 group-hover:from-pink-200 group-hover:to-pink-300 transition-all duration-300">
                    <FaEnvelope className="w-5 h-5 text-pink-300 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-gray-500 mb-1 tracking-wider">EMAIL</p>
                    <p className="text-gray-800 font-semibold group-hover:text-pink-400 transition-colors">
                      drisyagiri6@gmail.com
                    </p>
                  </div>
                  <FaChevronDown className="text-gray-400 group-hover:text-pink-400 transform -rotate-90 transition-colors" />
                </motion.a>

                {/* Phone */}
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:9779862175661"
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white to-green-50 border border-green-100 hover:border-green-300 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center flex-shrink-0 group-hover:from-green-200 group-hover:to-green-300 transition-all duration-300">
                    <FaPhone className="w-5 h-5 text-green-300 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-gray-500 mb-1 tracking-wider">PHONE</p>
                    <p className="text-gray-800 font-semibold group-hover:text-green-400 transition-colors">
                      +977 9862175661
                    </p>
                  </div>
                  <FaChevronDown className="text-gray-400 group-hover:text-green-400 transform -rotate-90 transition-colors" />
                </motion.a>

                {/* Location */}
                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-white to-blue-50 border border-blue-100"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-medium text-gray-500 mb-1 tracking-wider">LOCATION</p>
                    <p className="text-gray-800 font-semibold">Itahari, Nepal</p>
                  </div>
                </motion.div>
              </div>

              {/* Social Links */}
              <div className="mt-10 pt-8 border-t border-gray-200/50">
                <p className="text-sm font-semibold text-gray-600 mb-6 tracking-wider text-center">FOLLOW ME</p>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.platform}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-14 h-14 rounded-4xl bg-gradient-to-br ${social.color} ${social.hover} shadow-lg flex items-center justify-center transition-all duration-300`}
                    >
                      <div className="text-2xl text-white">
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Right Panel */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-white/50 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h3>
            <p className="text-gray-600 mb-8">Choose your preferred contact method</p>

            {/* Contact Method Selector */}
            <div className="flex gap-3 mb-8">
              {contactMethods.map((method) => (
                <button
                  key={method.id}
                  onClick={() => setActiveMethod(method.id)}
                  className={`flex-1 flex flex-col items-center justify-center p-4 rounded-xl border transition-all duration-300 ${
                    activeMethod === method.id 
                      ? method.activeColor + ' border-transparent transform scale-[1.02]' 
                      : method.inactiveColor + ' border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className={`text-2xl mb-2 ${activeMethod === method.id ? 'text-white' : method.iconColor}`}>
                    {method.icon}
                  </div>
                  <span className="font-semibold">{method.name}</span>
                  <span className="text-xs mt-1 opacity-75">{method.description}</span>
                </button>
              ))}
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="relative"
                >
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                  />
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500 rounded-l-xl"></div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="relative"
                >
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300"
                  />
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500 rounded-l-xl"></div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="relative"
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message..."
                    rows="5"
                    className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all duration-300 resize-none"
                  />
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-pink-500 to-purple-500 rounded-l-xl"></div>
                </motion.div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 px-6 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:from-pink-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="animate-pulse" />
                    Send Message
                    <span className="ml-2 text-sm opacity-90">
                      via {activeMethod === 'whatsapp' ? 'WhatsApp' : 'Email'}
                    </span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Additional Info */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 pt-6 border-t border-gray-200/50"
            >
              <p className="text-sm text-gray-600 text-center">
                Your information is secure and will only be used to respond to your inquiry.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="text-center mt-16 mb-8"
        >
          <p className="text-gray-600 text-lg max-w-2xl mx-auto italic mb-4">
            "Great things in business are never done by one person. They're done by a team of people."
          </p>
          <p className="text-gray-500 text-sm font-medium">
            Let's collaborate and create something extraordinary together.
          </p>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center z-50"
          aria-label="Scroll to top"
        >
          <FaChevronDown className="transform rotate-180" />
        </motion.button>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        input, textarea {
          backdrop-filter: blur(10px);
        }
      `}</style>
    </section>
  );
};

export default Contact;