import React, { useState } from 'react';
import { MessageCircle, Instagram, Globe } from 'lucide-react';

// Custom TikTok Icon Component
const TikTokIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

function App() {
  const [isFlipped, setIsFlipped] = useState(false);

  const skills = [
    { name: 'HTML', percentage: 90, color: 'from-blue-500 to-blue-600' },
    { name: 'JS', percentage: 87, color: 'from-green-500 to-green-600' },
    { name: 'CSS', percentage: 85, color: 'from-yellow-400 to-yellow-500' },
    { name: 'JSON', percentage: 80, color: 'from-yellow-500 to-orange-400' },
    { name: 'Python', percentage: 75, color: 'from-orange-500 to-orange-600' },
    { name: 'Ruby', percentage: 30, color: 'from-red-500 to-red-600' }
  ];

  const socialLinks = [
    { 
      icon: MessageCircle, 
      url: 'https://whatsapp.com/channel/0029Vay9jnG65yDFJDN6tG1j',
      color: 'text-green-400 hover:text-green-300'
    },
    { 
      icon: Instagram, 
      url: 'https://www.instagram.com/plankton4you.dev',
      color: 'text-pink-400 hover:text-pink-300'
    },
    { 
      icon: TikTokIcon, 
      url: 'https://www.tiktok.com/@plankton_4you?is_from_webapp=1&sender_device=pc',
      color: 'text-purple-400 hover:text-purple-300'
    },
    { 
      icon: Globe, 
      url: 'https://plankdevmodepy.vercel.app',
      color: 'text-blue-400 hover:text-blue-300'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
          poster="https://images.pexels.com/photos/2387793/pexels-photo-2387793.jpeg"
        >
          <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d&profile_id=139&oauth2_token_id=57447761" type="video/mp4" />
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/60 via-blue-900/50 to-indigo-900/60"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Floating Particles Animation */}
      <div className="absolute inset-0 z-0">
        <div className="floating-particles">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 20}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* 3D Card Container */}
      <div className="relative z-10 perspective-1000">
        <div 
          className={`card-container ${isFlipped ? 'flipped' : ''}`}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Front Card */}
          <div className="card-face card-front">
            <div className="metallic-bg">
              <div className="card-content">
                {/* Logo */}
                <div className="mb-6">
                  <img 
                    src="https://files.catbox.moe/98ma2n.jpg" 
                    alt="Logo" 
                    className="w-16 h-16 rounded-full mx-auto border-2 border-white/30 shadow-lg"
                  />
                </div>

                {/* Personal Info */}
                <div className="text-center space-y-3">
                  <h1 className="text-2xl font-bold text-white drop-shadow-lg">
                    PLANKTON4YOU
                  </h1>
                  <p className="text-lg text-gray-200 font-medium">
                    Developer
                  </p>
                  <p className="text-base text-gray-300">
                    INDONESIA
                  </p>
                  <p className="text-sm text-gray-400 font-light">
                    INDOXPLOIT
                  </p>
                </div>

                {/* Flip Button */}
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="mt-8 px-6 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white font-medium hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  View Skills
                </button>
              </div>
            </div>
          </div>

          {/* Back Card */}
          <div className="card-face card-back">
            <div className="metallic-bg">
              <div className="card-content">
                <h2 className="text-xl font-bold text-white mb-4 text-center">
                  Programming Skills
                </h2>

                {/* Skills */}
                <div className="space-y-4 mb-6">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="skill-item">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-white">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-300">
                          {skill.percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-white/20 rounded-full h-3">
                        <div
                          className={`h-3 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: `${skill.percentage}%`,
                            animationDelay: `${index * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center space-x-4 mb-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/30`}
                    >
                      <social.icon size={16} />
                    </a>
                  ))}
                </div>

                {/* Back Button */}
                <button
                  onClick={() => setIsFlipped(!isFlipped)}
                  className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-white text-sm font-medium hover:bg-white/30 transition-all duration-300"
                >
                  Back to Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;