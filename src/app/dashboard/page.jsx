import React from "react";
import {
  Code,
  FolderGit2,
  Users,

 
  GitBranch,
} from "lucide-react";

const page = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8">
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Welcome back, Developer! 👋
        </h1>
        <p className="text-slate-400">
          Here's what's happening with your projects today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {[
          { label: "Total Projects", value: "24", change: "+3 this week" },
          { label: "Code Snippets", value: "156", change: "+12 this week" },
          { label: "Team Members", value: "8", change: "2 active now" },
          { label: "Repositories", value: "42", change: "5 updated" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all"
          >
            <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
            <p className="text-3xl font-bold mb-1">{stat.value}</p>
            <p className="text-sm" style={{ color: "#ffc107" }}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Recent Projects</h2>
          <div className="space-y-3">
            {[
              "E-commerce Platform",
              "Task Manager App",
              "Portfolio Website",
            ].map((project, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: "#ffc107" }}
                  >
                    <FolderGit2 size={20} className="text-slate-900" />
                  </div>
                  <div>
                    <p className="font-medium">{project}</p>
                    <p className="text-sm text-slate-400">
                      Updated 2 hours ago
                    </p>
                  </div>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {[
              { icon: Code, label: "New Snippet" },
              { icon: FolderGit2, label: "New Project" },
              { icon: GitBranch, label: "Clone Repo" },
              { icon: Users, label: "Invite Team" },
            ].map((action, index) => {
              const ActionIcon = action.icon;
              return (
                <button
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-slate-900/50 rounded-lg hover:bg-slate-900 transition-all hover:scale-105"
                >
                  <ActionIcon
                    size={24}
                    className="mb-2"
                    style={{ color: "#ffc107" }}
                  />
                  <span className="text-sm font-medium">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Activity Feed */}
      <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            {
              action: "Created new project",
              project: "E-commerce Platform",
              time: "2 hours ago",
            },
            {
              action: "Updated code snippet",
              project: "React Hooks",
              time: "5 hours ago",
            },
            {
              action: "Pushed to repository",
              project: "API Backend",
              time: "1 day ago",
            },
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-start gap-4 pb-4 border-b border-slate-700 last:border-0"
            >
              <div
                className="w-2 h-2 rounded-full mt-2"
                style={{ backgroundColor: "#ffc107" }}
              ></div>
              <div className="flex-1">
                <p className="font-medium">{activity.action}</p>
                <p className="text-sm text-slate-400">{activity.project}</p>
              </div>
              <p className="text-sm text-slate-500">{activity.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
