import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-black py-20 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          About <span className="text-indigo-400">Me</span>
        </h2>

        {/* Main card */}
        <div className="bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
          {/* Intro paragraph */}
          <p className="text-xl leading-relaxed mb-10 text-center text-gray-200">
            I am a dedicated Full Stack Developer with 6+ months of experience building web applications. 
            Known for my <span className="font-semibold text-indigo-400">problem-solving</span> and{' '}
            <span className="font-semibold text-indigo-400">strategic thinking</span>, I specialize in building 
            responsive websites and backend systems with the MERN stack. Currently working as a freelancer with 
            a team on various projects.
          </p>

          {/* Grid of cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="bg-gray-800 p-6 rounded-xl border-l-4 border-indigo-400 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-indigo-400 mb-3 flex items-center">
                <span className="mr-2">🎯</span> Focus
              </h3>
              <p className="text-gray-300">
                Building responsive websites, backend development, and full-stack solutions with MERN
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border-l-4 border-green-400 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-green-400 mb-3 flex items-center">
                <span className="mr-2">🚀</span> Experience
              </h3>
              <p className="text-gray-300">
                6+ months working as a freelancer with collaborative teams on real-world projects
              </p>
            </div>

            <div className="bg-gray-800 p-6 rounded-xl border-l-4 border-purple-400 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-purple-400 mb-3 flex items-center">
                <span className="mr-2">💪</span> Strengths
              </h3>
              <p className="text-gray-300">
                Problem solving, strategic thinking, rapid learning, and effective collaboration
              </p>
            </div>
          </div>

          {/* Note box */}
          <div className="bg-gray-800 border-l-4 border-indigo-500 p-4 rounded-lg mt-8">
            <p className="text-gray-300 italic flex items-center">
              <span className="mr-2">💡</span>
              For the best experience viewing my projects, I recommend using a desktop browser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;