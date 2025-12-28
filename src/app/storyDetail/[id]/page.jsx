"use client";

import React, { useEffect, useState } from "react";
import {
  Briefcase,
  MapPin,
  Calendar,
  Heart,
  Share2,
  Bookmark,
  ArrowLeft,
  MessageCircle,
  Twitter,
  Linkedin,
  Github,
  TrendingUp,
} from "lucide-react";
import { useParams } from "next/navigation";

export default function StoryDetailPage() {
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [story, setStory] = useState(null);
  const params = useParams();
  const id = params.id;

  // Story data
  const stories = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "Senior Frontend Developer",
      company: "Google",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      location: "San Francisco, CA",
      joinedDate: "Jan 2024",
      tags: ["React", "TypeScript", "UI/UX"],
      likes: 1247,
      comments: 89,
      shares: 156,
      story: `My journey into tech started in the most unexpected way. I was 19, working at a coffee shop, and had no idea what I wanted to do with my life. One day, a customer left behind a programming book - "JavaScript: The Good Parts". Out of curiosity, I picked it up during my break.

That book changed everything. I was fascinated by how a few lines of code could create something interactive and beautiful. I started learning online, spending every free moment coding. My first website was terrible - broken layouts, mismatched colors, and bugs everywhere. But I was hooked.

The hardest part wasn't learning to code; it was believing I could actually become a developer. I had no computer science degree, no tech background, and lived in a small town with no tech community. Imposter syndrome hit hard. Every time I applied for a job, I thought, "Why would they hire me?"

After 200+ rejections, I finally got my first junior developer role at a small startup. The salary was low, but I didn't care. I was finally a professional developer. I worked 12-hour days, not because I had to, but because I loved it. Every bug I fixed, every feature I shipped, made me better.

Three years later, I got an offer from Google. When I received the call, I cried. Not just because it was Google, but because it proved that anyone, regardless of their background, can make it in tech if they're willing to put in the work.

Now, I mentor aspiring developers and tell them the same thing that kept me going: Your background doesn't determine your future. Your dedication does. Every expert was once a beginner who refused to give up.`,
      achievements: [
        { title: "Apps Built", count: "50+", icon: "Code" },
        { title: "Years Experience", count: "8", icon: "Calendar" },
        { title: "Mentees", count: "200+", icon: "Award" },
        { title: "Open Source", count: "1.2K", icon: "Github" },
      ],
      timeline: [
        {
          year: "2016",
          event: "Started Learning to Code",
          description: "Self-taught HTML, CSS, JavaScript",
        },
        {
          year: "2017",
          event: "First Developer Job",
          description: "Junior Developer at StartupXYZ",
        },
        {
          year: "2019",
          event: "Mid-Level Promotion",
          description: "Frontend Developer at TechCorp",
        },
        {
          year: "2021",
          event: "Joined Google",
          description: "Senior Frontend Developer",
        },
        {
          year: "2024",
          event: "Tech Lead",
          description: "Leading a team of 12 developers",
        },
      ],
      skills: [
        "React.js",
        "TypeScript",
        "Next.js",
        "Node.js",
        "GraphQL",
        "Tailwind CSS",
        "Redux",
        "Jest",
        "Webpack",
        "Git",
      ],
      socialLinks: {
        twitter: "https://twitter.com/sarahjohnson",
        linkedin: "https://linkedin.com/in/sarahjohnson",
        github: "https://github.com/sarahjohnson",
      },
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "Full Stack Engineer",
      company: "Microsoft",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      location: "Seattle, WA",
      joinedDate: "Mar 2024",
      tags: ["Node.js", "Azure", "Python"],
      likes: 982,
      comments: 67,
      shares: 124,
      story: `I failed my first coding interview so badly that the interviewer felt sorry for me. I couldn't answer a single technical question. I went home that day and cried, thinking maybe I wasn't cut out for this. But something inside me refused to give up.

I was a self-taught developer working two jobs to support my family. Every night after my shifts, I'd study until 2 AM. I built projects, contributed to open source, and practiced algorithms until my eyes burned. My family thought I was crazy, sacrificing sleep and social life for what seemed like an impossible dream.

The rejections kept coming. Over 300 applications, countless automated rejections, and about 50 interviews where I failed. Each rejection hurt, but I learned from every single one. I kept a journal of every interview question I couldn't answer and made sure I could solve it the next day.

After 18 months of relentless effort, I finally got an offer from a startup. It wasn't a big name, but it was my shot. I poured everything into that job, learning from senior developers and taking on challenges others avoided. Within two years, I was promoted to senior developer.

Then Microsoft reached out. The interview process was grueling, but this time I was ready. When I got the offer, I thought about that first interview where I failed so miserably. The difference wasn't talent - it was 18 months of never giving up.

Now when I mentor junior developers, I share my story of failure because success isn't about not falling down. It's about getting back up every single time. Those 300 rejections weren't failures - they were lessons that led me here.`,
      achievements: [
        { title: "Projects Completed", count: "75+", icon: "Code" },
        { title: "Years Experience", count: "6", icon: "Calendar" },
        { title: "Students Mentored", count: "150+", icon: "Award" },
        { title: "GitHub Stars", count: "3.5K", icon: "Github" },
      ],
      timeline: [
        {
          year: "2018",
          event: "Started Self-Learning",
          description: "Began learning Python and JavaScript",
        },
        {
          year: "2020",
          event: "First Tech Job",
          description: "Junior Developer at TechStart Inc",
        },
        {
          year: "2021",
          event: "Senior Developer",
          description: "Promoted to Senior Full Stack Developer",
        },
        {
          year: "2023",
          event: "Joined Microsoft",
          description: "Full Stack Engineer at Azure Team",
        },
        {
          year: "2024",
          event: "Technical Mentor",
          description: "Started mentoring program for junior devs",
        },
      ],
      skills: [
        "Node.js",
        "Python",
        "Azure",
        "Docker",
        "MongoDB",
        "Express.js",
        "React",
        "PostgreSQL",
        "Redis",
        "CI/CD",
      ],
      socialLinks: {
        twitter: "https://twitter.com/michaelchen",
        linkedin: "https://linkedin.com/in/michaelchen",
        github: "https://github.com/michaelchen",
      },
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      designation: "Lead Backend Developer",
      company: "Amazon",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
      location: "Austin, TX",
      joinedDate: "Feb 2024",
      tags: ["Java", "AWS", "Microservices"],
      likes: 1456,
      comments: 103,
      shares: 189,
      story: `At 35, I was a high school math teacher with a stable career, pension, and summers off. Everyone thought I was crazy when I said I wanted to become a software developer. "You're too old," they said. "Tech is for young people." But I knew if I didn't try, I'd regret it forever.

I started learning to code at night after teaching all day. My students would joke about seeing my classroom lights on at 10 PM. I'd be there, laptop open, working through coding tutorials and building small projects. It was exhausting, but for the first time in years, I felt genuinely excited about learning something new.

The transition wasn't easy. I took a massive pay cut for my first junior developer role. I was the oldest person on my team by 10 years. During standup meetings, I'd hear references to technologies and concepts I'd never heard of. Imposter syndrome was real, but so was my determination.

What I lacked in experience, I made up for with problem-solving skills from years of teaching. I knew how to break down complex problems, explain technical concepts clearly, and stay patient when debugging. These "soft skills" turned out to be incredibly valuable in tech.

Five years later, I'm a Lead Backend Developer at Amazon, managing a team and architecting systems that handle millions of requests. Age was never the barrier - fear was. The best time to start was 10 years ago. The second best time is now.

To anyone thinking they're "too old" or "too late" to switch careers: your previous experience is an asset, not a liability. You bring perspective and skills that fresh graduates don't have. It's never too late to reinvent yourself.`,
      achievements: [
        { title: "Systems Built", count: "40+", icon: "Code" },
        { title: "Years Experience", count: "5", icon: "Calendar" },
        { title: "Team Members", count: "15", icon: "Award" },
        { title: "Contributions", count: "2.1K", icon: "Github" },
      ],
      timeline: [
        {
          year: "2019",
          event: "Career Change Decision",
          description: "Left teaching to pursue software development",
        },
        {
          year: "2020",
          event: "First Developer Role",
          description: "Junior Backend Developer at CloudTech",
        },
        {
          year: "2021",
          event: "Mid-Level Developer",
          description: "Backend Developer at DataSystems Corp",
        },
        {
          year: "2023",
          event: "Joined Amazon",
          description: "Senior Backend Developer at AWS",
        },
        {
          year: "2024",
          event: "Lead Developer",
          description: "Lead Backend Developer managing 15 engineers",
        },
      ],
      skills: [
        "Java",
        "Spring Boot",
        "AWS",
        "Microservices",
        "Kafka",
        "PostgreSQL",
        "Docker",
        "Kubernetes",
        "Redis",
        "REST APIs",
      ],
      socialLinks: {
        twitter: "https://twitter.com/emilyrodriguez",
        linkedin: "https://linkedin.com/in/emilyrodriguez",
        github: "https://github.com/emilyrodriguez",
      },
    },
    {
      id: 4,
      name: "David Kim",
      designation: "Mobile Developer",
      company: "Meta",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      location: "Menlo Park, CA",
      joinedDate: "Apr 2024",
      tags: ["React Native", "iOS", "Android"],
      likes: 1823,
      comments: 145,
      shares: 267,
      story: `I built my first app when I was 16 years old in my parents' garage. It was a simple to-do list app, but seeing it run on my phone felt like magic. I was hooked. I spent every free moment learning mobile development, watching tutorials, and building apps that nobody would ever use.

By 17, I had published 5 apps on the App Store. They had maybe 100 downloads combined, but I didn't care. I was learning, iterating, and improving with each one. My parents wanted me to focus on school and go to college like a "normal" kid, but I knew my path was different.

At 18, I made the hardest decision of my life - I dropped out of college to work on my apps full-time. My parents were devastated. My friends thought I was throwing my life away. But I believed in myself and my vision. I moved into a tiny apartment and lived on ramen noodles while building my dream app.

Six months later, my app hit 100,000 downloads. Then 500,000. Then it went viral - 10 million downloads in three months. I was 19 years old, and my app was featured on the App Store. Tech blogs wrote about me. Investors reached out. It was surreal.

But success brought new challenges. I had to learn business, team management, and scaling - all while trying to keep improving as a developer. Eventually, Meta acquired my company, and I joined their mobile team. Now I work on apps used by billions of people worldwide.

The lesson? Trust your instincts. The traditional path works for many, but if you have a different vision, have the courage to pursue it. Not everyone needs to follow the same roadmap to success.`,
      achievements: [
        { title: "Apps Published", count: "25+", icon: "Code" },
        { title: "Years Experience", count: "7", icon: "Calendar" },
        { title: "Total Downloads", count: "50M+", icon: "Award" },
        { title: "GitHub Projects", count: "890", icon: "Github" },
      ],
      timeline: [
        {
          year: "2017",
          event: "First App Published",
          description: "Released first iOS app at age 16",
        },
        {
          year: "2018",
          event: "Dropped Out of College",
          description: "Pursued app development full-time",
        },
        {
          year: "2019",
          event: "Viral App Launch",
          description: "App reached 10M downloads",
        },
        {
          year: "2022",
          event: "Company Acquired",
          description: "Startup acquired by Meta",
        },
        {
          year: "2024",
          event: "Mobile Lead",
          description: "Lead Mobile Developer at Meta",
        },
      ],
      skills: [
        "React Native",
        "Swift",
        "Kotlin",
        "iOS",
        "Android",
        "Firebase",
        "Redux",
        "GraphQL",
        "Jest",
        "XCode",
      ],
      socialLinks: {
        twitter: "https://twitter.com/davidkim",
        linkedin: "https://linkedin.com/in/davidkim",
        github: "https://github.com/davidkim",
      },
    },
    {
      id: 5,
      name: "Jessica Taylor",
      designation: "DevOps Engineer",
      company: "Netflix",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica",
      location: "Los Angeles, CA",
      joinedDate: "May 2024",
      tags: ["Kubernetes", "Docker", "CI/CD"],
      likes: 1134,
      comments: 78,
      shares: 142,
      story: `My first day as a DevOps engineer, I accidentally took down production. Not just a small service - the entire production environment. Thousands of users affected. My stomach dropped as alerts flooded in. I thought my career was over before it really began.

My manager called me into a meeting, and I prepared for the worst. Instead of firing me, she said, "Welcome to DevOps. Everyone breaks production at least once. What matters is how you fix it and what you learn." That day changed my perspective on failure forever.

I came from a background in system administration, thinking I knew everything about servers. But DevOps was different - it required coding, automation, cloud architecture, and a completely different mindset. I had to unlearn old habits and embrace infrastructure as code, CI/CD pipelines, and containerization.

The learning curve was steep. I spent nights reading documentation, experimenting in test environments, and slowly building my confidence. Each incident I handled, each automation script I wrote, and each deployment I orchestrated made me better. I learned to embrace chaos and turn it into opportunity.

Years later, that production incident became my greatest teacher. It taught me the importance of proper testing, rollback strategies, and incident response procedures. Now at Netflix, I help design systems that handle billions of streaming requests, ensuring users can binge-watch without interruption.

The tech industry loves to celebrate those who "never make mistakes," but that's a myth. The best engineers I know have broken things spectacularly. The difference is they learned, documented, and implemented safeguards so it wouldn't happen again. Fail fast, learn faster.`,
      achievements: [
        { title: "Deployments", count: "5000+", icon: "Code" },
        { title: "Years Experience", count: "6", icon: "Calendar" },
        { title: "Uptime", count: "99.9%", icon: "Award" },
        { title: "Automation Scripts", count: "500+", icon: "Github" },
      ],
      timeline: [
        {
          year: "2018",
          event: "System Administrator",
          description: "IT Support and Server Management",
        },
        {
          year: "2019",
          event: "DevOps Engineer",
          description: "First DevOps role at StartupCloud",
        },
        {
          year: "2020",
          event: "Senior DevOps",
          description: "Senior DevOps Engineer at TechScale",
        },
        {
          year: "2023",
          event: "Joined Netflix",
          description: "DevOps Engineer at Netflix Streaming",
        },
        {
          year: "2024",
          event: "Platform Lead",
          description: "Leading infrastructure and deployment teams",
        },
      ],
      skills: [
        "Kubernetes",
        "Docker",
        "Jenkins",
        "Terraform",
        "AWS",
        "Python",
        "Bash",
        "Prometheus",
        "Grafana",
        "GitOps",
      ],
      socialLinks: {
        twitter: "https://twitter.com/jessicataylor",
        linkedin: "https://linkedin.com/in/jessicataylor",
        github: "https://github.com/jessicataylor",
      },
    },
    {
      id: 6,
      name: "James Anderson",
      designation: "Machine Learning Engineer",
      company: "Tesla",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      location: "Palo Alto, CA",
      joinedDate: "Jun 2024",
      tags: ["PyTorch", "TensorFlow", "ML"],
      likes: 2145,
      comments: 198,
      shares: 334,
      story: `As a kid, I was obsessed with sci-fi movies featuring AI. I dreamed of building intelligent systems that could learn and adapt. When I started my Computer Science degree, machine learning was still a niche field. Most of my classmates were interested in web development or mobile apps, but I was captivated by neural networks and algorithms.

My first ML project was a disaster. I tried to build a image classifier that could barely distinguish between a cat and a dog. The accuracy was 52% - barely better than random guessing. I spent three months on it, reading papers I didn't fully understand, tweaking hyperparameters without knowing why, and questioning if I was smart enough for this field.

But I persisted. I took every ML course available, completed online specializations, and participated in Kaggle competitions. Most importantly, I failed repeatedly and learned from each failure. I learned that machine learning isn't magic - it's mathematics, data, and lots of experimentation.

My breakthrough came during a university research project on autonomous vehicle perception. I developed a novel approach to object detection that improved accuracy by 15%. That research paper opened doors - internships at top tech companies, conference presentations, and eventually a PhD offer.

Today at Tesla, I work on the AI systems that power self-driving cars. The models I build process data from millions of vehicles, making split-second decisions that keep people safe. It's the childhood dream I never thought I'd achieve.

Machine learning can seem intimidating, with complex math and dense research papers. But at its core, it's about curiosity, persistence, and a willingness to fail. Start small, stay consistent, and never stop learning. The future of technology is being built by people who once struggled with their first neural network, just like I did.`,
      achievements: [
        { title: "Models Deployed", count: "30+", icon: "Code" },
        { title: "Years Experience", count: "7", icon: "Calendar" },
        { title: "Research Papers", count: "12", icon: "Award" },
        { title: "GitHub Stars", count: "8.5K", icon: "Github" },
      ],
      timeline: [
        {
          year: "2017",
          event: "ML Research Assistant",
          description: "University research in computer vision",
        },
        {
          year: "2019",
          event: "ML Intern",
          description: "Summer internship at Google AI",
        },
        {
          year: "2020",
          event: "PhD Started",
          description: "PhD in Machine Learning at Stanford",
        },
        {
          year: "2023",
          event: "Joined Tesla",
          description: "ML Engineer for Autopilot team",
        },
        {
          year: "2024",
          event: "Senior ML Engineer",
          description: "Leading autonomous driving AI projects",
        },
      ],
      skills: [
        "PyTorch",
        "TensorFlow",
        "Python",
        "Computer Vision",
        "Deep Learning",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "CUDA",
        "MLOps",
      ],
      socialLinks: {
        twitter: "https://twitter.com/jamesanderson",
        linkedin: "https://linkedin.com/in/jamesanderson",
        github: "https://github.com/jamesanderson",
      },
    },
  ];

  const numericId = Number(id);

  useEffect(() => {
    if (!numericId) return;

    const loadStory = () => {
      const foundStory = stories.find((s) => s.id === numericId);
      setStory(foundStory || null);
    };

    loadStory();
  }, [numericId]);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <div className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button className="flex items-center space-x-2 text-gray-300 hover:text-[#ffc107] transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Stories</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Story Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Author Card */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-20 h-20 rounded-full border-4 border-[#ffc107]/30"
                  />
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
                      {story.name}
                    </h1>
                    <p className="text-gray-300 font-medium">
                      {story.designation}
                    </p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Briefcase className="w-4 h-4 text-[#ffc107]" />
                      <span className="text-sm text-gray-400">
                        {story.company}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2 w-full sm:w-auto">
                  <button
                    onClick={() => setLiked(!liked)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      liked
                        ? "bg-[#ffc107] text-slate-900"
                        : "bg-slate-700/50 text-gray-300 hover:bg-slate-700"
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 ${liked ? "fill-current" : ""}`}
                    />
                    <span className="hidden sm:inline">Like</span>
                  </button>
                  <button
                    onClick={() => setBookmarked(!bookmarked)}
                    className={`p-2 rounded-lg transition-all ${
                      bookmarked
                        ? "bg-[#ffc107] text-slate-900"
                        : "bg-slate-700/50 text-gray-300 hover:bg-slate-700"
                    }`}
                  >
                    <Bookmark
                      className={`w-4 h-4 ${bookmarked ? "fill-current" : ""}`}
                    />
                  </button>
                  <button className="p-2 rounded-lg bg-slate-700/50 text-gray-300 hover:bg-slate-700 transition-all">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 pb-6 border-b border-slate-700/50">
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4 text-[#ffc107]" />
                  <span>{story.location}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Calendar className="w-4 h-4 text-[#ffc107]" />
                  <span>Joined {story.joinedDate}</span>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400 ml-auto">
                  <span className="flex items-center space-x-1">
                    <Heart className="w-4 h-4" />
                    <span>{story.likes}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <MessageCircle className="w-4 h-4" />
                    <span>{story.comments}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Share2 className="w-4 h-4" />
                    <span>{story.shares}</span>
                  </span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-6">
                {story.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#ffc107]/10 text-[#ffc107] text-sm font-medium rounded-full border border-[#ffc107]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Story Content */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-6">My Journey</h2>
              <div className="prose prose-invert max-w-none">
                {story.story.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-gray-300 leading-relaxed mb-4 text-base sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <TrendingUp className="w-6 h-6 text-[#ffc107]" />
                <span>Career Timeline</span>
              </h2>
              <div className="space-y-6">
                {story.timeline.map((item, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-[#ffc107] flex items-center justify-center text-slate-900 font-bold text-sm">
                        {item.year.slice(-2)}
                      </div>
                      {index < story.timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-slate-700 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="bg-slate-700/30 rounded-lg p-4 hover:bg-slate-700/50 transition-colors">
                        <p className="text-[#ffc107] text-sm font-semibold mb-1">
                          {item.year}
                        </p>
                        <h3 className="text-white font-bold mb-1">
                          {item.event}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Comments Section */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <MessageCircle className="w-6 h-6 text-[#ffc107]" />
                <span>Comments ({story.comments})</span>
              </h2>
              <div className="space-y-4">
                <textarea
                  placeholder="Share your thoughts..."
                  rows="3"
                  className="w-full bg-slate-700/30 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#ffc107] transition-colors"
                ></textarea>
                <button className="px-6 py-2 bg-[#ffc107] text-slate-900 font-semibold rounded-lg hover:bg-[#ffca28] transition-all">
                  Post Comment
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 sticky top-24">
              <h3 className="text-xl font-bold text-white mb-6">
                Achievements
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {story.achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={index}
                      className="bg-slate-700/30 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-colors"
                    >
                      {/* <Icon className="w-6 h-6 text-[#ffc107] mx-auto mb-2" /> */}
                      <p className="text-2xl font-bold text-white mb-1">
                        {achievement.count}
                      </p>
                      <p className="text-xs text-gray-400">
                        {achievement.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {story.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs font-medium rounded-full hover:bg-[#ffc107]/10 hover:text-[#ffc107] transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Connect</h3>
              <div className="space-y-3">
                <a
                  href={story.socialLinks.twitter}
                  className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors group"
                >
                  <Twitter className="w-5 h-5 text-gray-400 group-hover:text-[#ffc107]" />
                  <span className="text-gray-300 group-hover:text-white">
                    Twitter
                  </span>
                </a>
                <a
                  href={story.socialLinks.linkedin}
                  className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors group"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-[#ffc107]" />
                  <span className="text-gray-300 group-hover:text-white">
                    LinkedIn
                  </span>
                </a>
                <a
                  href={story.socialLinks.github}
                  className="flex items-center space-x-3 p-3 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors group"
                >
                  <Github className="w-5 h-5 text-gray-400 group-hover:text-[#ffc107]" />
                  <span className="text-gray-300 group-hover:text-white">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
