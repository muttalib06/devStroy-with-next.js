"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Home,
  RefreshCw,
  Mail,
  ChevronDown,
} from "lucide-react";

export default function Error({ error, reset }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full">
        {/* Error Icon */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="relative">
            <div
              className="absolute inset-0 blur-2xl opacity-50"
              style={{ backgroundColor: "#ffc107" }}
            ></div>
            <div className="relative bg-slate-800 rounded-full p-4 sm:p-6 border-2 border-slate-700">
              <AlertTriangle
                className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20"
                style={{ color: "#ffc107" }}
              />
            </div>
          </div>
        </div>

        {/* Brand */}
        <div className="text-center mb-4 sm:mb-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Dev<span style={{ color: "#ffc107" }}>Stroy</span>
          </h2>
        </div>

        {/* Error Message */}
        <div className="text-center mb-6 sm:mb-8 px-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4">
            Oops! Something Went Wrong
          </h1>
          <p className="text-slate-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We encountered an unexpected error. Don't worry, our team has been
            notified and we're working on fixing it.
          </p>
        </div>

        {/* Error Details (Collapsible) */}
        <div className="mb-6 sm:mb-8 px-4">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full sm:w-auto mx-auto flex items-center justify-center gap-2 text-slate-400 hover:text-slate-300 text-sm sm:text-base transition-colors"
          >
            <span>Technical Details</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${
                showDetails ? "rotate-180" : ""
              }`}
            />
          </button>

          {showDetails && (
            <div className="mt-4 bg-slate-800/50 border border-slate-700 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
              <p className="text-slate-300 font-mono text-xs sm:text-sm break-all">
                {error?.message || "An unexpected error occurred"}
              </p>
              {error?.digest && (
                <p className="text-slate-500 font-mono text-xs mt-2">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 px-4 mb-6 sm:mb-8">
          <button
            onClick={reset}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-lg font-medium text-sm sm:text-base transition-all duration-200 group"
            style={{
              backgroundColor: "#ffc107",
              color: "#1e293b",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#ffb300")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#ffc107")
            }
          >
            <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-180 transition-transform duration-500" />
            Try Again
          </button>

          <a
            href="/"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 sm:py-3.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm sm:text-base transition-all duration-200 border border-slate-700 hover:border-slate-600 group"
          >
            <Home className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            Go Home
          </a>
        </div>

        {/* Support Contact */}
        <div className="text-center px-4">
          <p className="text-slate-500 text-xs sm:text-sm mb-3">
            Need help? Our support team is here for you.
          </p>
          <a
            href="mailto:support@devstroy.com"
            className="inline-flex items-center gap-2 text-sm sm:text-base hover:text-white transition-colors group"
            style={{ color: "#ffc107" }}
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            support@devstroy.com
          </a>
        </div>

        {/* Decorative Elements */}
        <div className="mt-8 sm:mt-12 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-slate-700 animate-pulse"></div>
          <div
            className="w-2 h-2 rounded-full bg-slate-700 animate-pulse"
            style={{ animationDelay: "0.15s" }}
          ></div>
          <div
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: "#ffc107", animationDelay: "0.3s" }}
          ></div>
        </div>

        {/* Bottom spacing for very small devices */}
        <div className="h-4 sm:h-0"></div>
      </div>
    </div>
  );
}
