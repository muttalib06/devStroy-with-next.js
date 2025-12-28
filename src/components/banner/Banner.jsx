import React from 'react';
import { Code, Rocket, Users, Zap } from 'lucide-react';

const Banner = () =>  {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">

      {/* Hero Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-block">
              <span className="bg-[#ffc107]/10 text-[#ffc107] px-4 py-2 rounded-full text-sm font-semibold border border-[#ffc107]/20">
                ✨ Welcome to the Future
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Tell Your
              <span className="text-[#ffc107]"> Developer Journey</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Share your coding adventures, document your projects, and connect with developers worldwide. DevStory makes it easy to showcase your growth as a developer.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-[#ffc107] text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#ffca28] transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-[#ffc107]/20">
                Start Your Story
              </button>
              <button className="border-2 border-[#ffc107] text-[#ffc107] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#ffc107]/10 transition-all">
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#ffc107]">10K+</div>
                <div className="text-sm text-gray-400">Developers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#ffc107]">50K+</div>
                <div className="text-sm text-gray-400">Stories</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-[#ffc107]">100+</div>
                <div className="text-sm text-gray-400">Countries</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative z-10 bg-slate-800/50 backdrop-blur-sm border border-[#ffc107]/20 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-slate-700 rounded px-3 py-1 text-sm text-gray-400">
                    ~/devstory/project
                  </div>
                </div>
                
                <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
                  <div className="text-purple-400">const <span className="text-blue-400">myStory</span> = {`{`}</div>
                  <div className="ml-4 text-green-400">  name: <span className="text-[#ffc107]">'Your Journey'</span>,</div>
                  <div className="ml-4 text-green-400">  skills: <span className="text-blue-400">['React', 'Node', 'Next.js']</span>,</div>
                  <div className="ml-4 text-green-400">  progress: <span className="text-[#ffc107]">'Growing'</span></div>
                  <div className="text-purple-400">{`}`};</div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-700/50 rounded-lg p-3 border border-[#ffc107]/10 hover:border-[#ffc107]/30 transition-colors">
                    <Rocket className="w-6 h-6 text-[#ffc107] mb-2" />
                    <div className="text-white font-semibold text-sm">Fast Setup</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-3 border border-[#ffc107]/10 hover:border-[#ffc107]/30 transition-colors">
                    <Users className="w-6 h-6 text-[#ffc107] mb-2" />
                    <div className="text-white font-semibold text-sm">Community</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-3 border border-[#ffc107]/10 hover:border-[#ffc107]/30 transition-colors">
                    <Zap className="w-6 h-6 text-[#ffc107] mb-2" />
                    <div className="text-white font-semibold text-sm">Real-time</div>
                  </div>
                  <div className="bg-slate-700/50 rounded-lg p-3 border border-[#ffc107]/10 hover:border-[#ffc107]/30 transition-colors">
                    <Code className="w-6 h-6 text-[#ffc107] mb-2" />
                    <div className="text-white font-semibold text-sm">Code Friendly</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-[#ffc107]/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;