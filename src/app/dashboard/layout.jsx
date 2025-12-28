"use client";

import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  Code,
  FolderGit2,
  Users,
  Settings,
  Bell,
  Search,
  User,
  LogOut,
  LayoutDashboard,
  FileCode,
  GitBranch,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import for active state

export default function DevStoryDashboard({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  const menuItems = [
    {
      id: "dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
      label: "Dashboard",
    },
    {
      id: "projects",
      href: "/dashboard/project",
      icon: FolderGit2,
      label: "Projects",
    },
    {
      id: "code",
      href: "/dashboard/code-snippets",
      icon: FileCode,
      label: "Code Snippets",
    },
    {
      id: "repositories",
      href: "/dashboard/repositories",
      icon: GitBranch,
      label: "Repositories",
    },
    {
      id: "team",
      href: "/dashboard/team",
      icon: Users,
      label: "Team",
    },
    {
      id: "settings",
      href: "/dashboard/settings",
      icon: Settings,
      label: "Settings",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="h-full px-4 flex items-center justify-between">
          {/* Logo and Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 hover:bg-slate-800 rounded-lg transition-colors"
            >
              {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link href="/dashboard" className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-900 font-bold"
                style={{ backgroundColor: "#ffc107" }}
              >
                DS
              </div>
              <span className="text-xl font-bold">DevStory</span>
            </Link>
          </div>

          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search projects, code..."
                className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg focus:outline-none focus:border-yellow-500 transition-colors"
              />
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-slate-800 rounded-lg relative transition-colors">
              <Bell size={20} />
              <span
                className="absolute top-1 right-1 w-2 h-2 rounded-full"
                style={{ backgroundColor: "#ffc107" }}
              ></span>
            </button>
            <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
              <User size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed top-16 left-0 bottom-0 w-64 bg-slate-900/95 backdrop-blur-sm border-r border-slate-700 transform transition-transform duration-300 z-40 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href; // Check if current path matches
            return (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setSidebarOpen(false)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? "text-slate-900 font-medium"
                    : "text-slate-300 hover:bg-slate-800"
                }`}
                style={isActive ? { backgroundColor: "#ffc107" } : {}}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-lg transition-colors">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="pt-16 lg:pl-64 min-h-screen">{children}</main>
    </div>
  );
}
