import React from "react";
import { Briefcase, MapPin, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";

const Story = () => {
  const stories = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "Senior Frontend Developer",
      company: "Google",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      story:
        "From learning HTML in my bedroom to building products used by millions. My journey taught me that consistency beats talent every time.",
      location: "San Francisco, CA",
      joinedDate: "Jan 2024",
      tags: ["React", "TypeScript", "UI/UX"],
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "Full Stack Engineer",
      company: "Microsoft",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      story:
        "Started as a self-taught developer, failed multiple interviews, but never gave up. Now I mentor others on their coding journey.",
      location: "Seattle, WA",
      joinedDate: "Mar 2024",
      tags: ["Node.js", "Azure", "Python"],
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      designation: "Lead Backend Developer",
      company: "Amazon",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      story:
        "Transitioned from teaching to tech at 35. Proof that it's never too late to follow your passion and reinvent yourself.",
      location: "Austin, TX",
      joinedDate: "Feb 2024",
      tags: ["Java", "AWS", "Microservices"],
    },
    {
      id: 4,
      name: "David Kim",
      designation: "Mobile Developer",
      company: "Meta",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      story:
        "Built my first app at 16, dropped out of college to pursue my dream. Today, my apps have 10M+ downloads worldwide.",
      location: "Menlo Park, CA",
      joinedDate: "Apr 2024",
      tags: ["React Native", "iOS", "Android"],
    },
    {
      id: 5,
      name: "Jessica Taylor",
      designation: "DevOps Engineer",
      company: "Netflix",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
      story:
        "From breaking production to fixing it in minutes. Every mistake became a lesson that shaped me into who I am today.",
      location: "Los Angeles, CA",
      joinedDate: "May 2024",
      tags: ["Kubernetes", "Docker", "CI/CD"],
    },
    {
      id: 6,
      name: "James Anderson",
      designation: "Machine Learning Engineer",
      company: "Tesla",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      story:
        "Fascinated by AI since childhood. Now I'm building the algorithms that power autonomous vehicles of tomorrow.",
      location: "Palo Alto, CA",
      joinedDate: "Jun 2024",
      tags: ["PyTorch", "TensorFlow", "ML"],
    },
  ];

  return (
    <section className=" bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="bg-[#ffc107]/10 text-[#ffc107] px-4 py-2 rounded-full text-sm font-semibold border border-[#ffc107]/20">
              ✨ Developer Stories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Inspiring <span className="text-[#ffc107]">Dev Journeys</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real stories from real developers who turned their passion into
            successful careers
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {stories.map((story) => (
            <div
              key={story.id}
              className="group bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-[#ffc107]/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#ffc107]/10"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="w-16 h-16 rounded-full border-2 border-[#ffc107]/30 group-hover:border-[#ffc107] transition-colors"
                    />
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-slate-800"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-[#ffc107] transition-colors">
                      {story.name}
                    </h3>
                    <p className="text-sm text-gray-400">{story.designation}</p>
                  </div>
                </div>
                <button className="p-2 rounded-lg bg-slate-700/50 hover:bg-[#ffc107]/10 hover:text-[#ffc107] text-gray-400 transition-all">
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>

              {/* Company Badge */}
              <div className="flex items-center space-x-2 mb-4">
                <Briefcase className="w-4 h-4 text-[#ffc107]" />
                <span className="text-sm font-semibold text-white">
                  {story.company}
                </span>
              </div>

              {/* Story Content */}
              <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                {story.story}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {story.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#ffc107]/10 text-[#ffc107] text-xs font-medium rounded-full border border-[#ffc107]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Card Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <MapPin className="w-3 h-3" />
                  <span>{story.location}</span>
                </div>
                <div className="flex items-center space-x-1 text-xs text-gray-400">
                  <Calendar className="w-3 h-3" />
                  <span>{story.joinedDate}</span>
                </div>
              </div>

              {/* Read More Button */}
              <Link href={`/storyDetail/${story.id}`}>
                <button className="w-full mt-4 py-2 bg-slate-700/30 hover:bg-[#ffc107] text-gray-300 hover:text-slate-900 rounded-lg font-medium text-sm transition-all duration-300 group-hover:shadow-lg">
                  Read Full Story
                </button>
              </Link>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-[#ffc107] text-slate-900 font-semibold rounded-lg hover:bg-[#ffca28] transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-[#ffc107]/20">
            Load More Stories
          </button>
        </div>
      </div>
    </section>
  );
};

export default Story;
