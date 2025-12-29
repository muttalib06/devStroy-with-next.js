"use client"
import { Home, Search, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Text */}
        <div className="relative mb-8">
          <h1 className="text-[180px] md:text-[240px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-slate-700 to-slate-900 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-amber-400/10 blur-3xl"></div>
          </div>
        </div>

        {/* Logo/Brand */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Dev<span style={{ color: '#ffc107' }}>Stroy</span>
          </h2>
        </div>

        {/* Message */}
        <div className="mb-8">
          <h3 className="text-xl md:text-2xl font-semibold text-slate-300 mb-3">
            Page Not Found
          </h3>
          <p className="text-slate-400 text-base md:text-lg max-w-md mx-auto">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-all duration-200 border border-slate-700 hover:border-slate-600 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </button>
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 group"
            style={{ 
              backgroundColor: '#ffc107',
              color: '#1e293b'
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ffb300'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ffc107'}
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Home Page
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-slate-700 animate-pulse"></div>
          <div className="w-2 h-2 rounded-full bg-slate-700 animate-pulse delay-75" style={{ animationDelay: '0.15s' }}></div>
          <div className="w-2 h-2 rounded-full animate-pulse delay-150" style={{ backgroundColor: '#ffc107', animationDelay: '0.3s' }}></div>
        </div>
      </div>
    </div>
  );
}