"use client";
export default function Loading() {
  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4">
      <div className="text-center">
        {/* Logo with pulse effect */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 sm:mb-8">
            Dev
            <span style={{ color: "#ffc107" }} className="animate-pulse">
              Stroy
            </span>
          </h1>
        </div>

        {/* Spinner Container */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-6 sm:mb-8">
          {/* Outer spinning ring */}
          <div className="absolute inset-0 rounded-full border-4 border-slate-700 opacity-20"></div>

          {/* Main spinning ring */}
          <div
            className="absolute inset-0 rounded-full border-4 border-transparent animate-spin"
            style={{
              borderTopColor: "#ffc107",
              borderRightColor: "#ffc107",
              animationDuration: "1s",
            }}
          ></div>

          {/* Inner spinning ring (opposite direction) */}
          <div
            className="absolute inset-3 sm:inset-4 rounded-full border-4 border-transparent animate-spin"
            style={{
              borderBottomColor: "#ffc107",
              borderLeftColor: "#ffc107",
              animationDuration: "1.5s",
              animationDirection: "reverse",
            }}
          ></div>

          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full animate-pulse"
              style={{ backgroundColor: "#ffc107" }}
            ></div>
          </div>

          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-30 animate-pulse"
            style={{ backgroundColor: "#ffc107" }}
          ></div>
        </div>

        {/* Loading text */}
        <div className="space-y-3 sm:space-y-4">
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
            Loading
            <span className="inline-flex ml-1">
              <span
                className="animate-bounce"
                style={{ animationDelay: "0ms" }}
              >
                .
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "150ms" }}
              >
                .
              </span>
              <span
                className="animate-bounce"
                style={{ animationDelay: "300ms" }}
              >
                .
              </span>
            </span>
          </p>
          <p className="text-sm sm:text-base text-slate-400 max-w-md mx-auto px-4">
            Please wait while we prepare your experience
          </p>
        </div>

        {/* Progress bar */}
        <div className="mt-8 sm:mt-12 max-w-xs sm:max-w-sm md:max-w-md mx-auto px-4">
          <div className="h-1.5 sm:h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full animate-pulse"
              style={{
                backgroundColor: "#ffc107",
                width: "60%",
                animation: "loading-progress 2s ease-in-out infinite",
              }}
            ></div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="mt-12 sm:mt-16 flex justify-center gap-2">
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
      </div>

      {/* Custom animation for progress bar */}
      <style jsx>{`
        @keyframes loading-progress {
          0% {
            width: 0%;
            margin-left: 0%;
          }
          50% {
            width: 70%;
            margin-left: 15%;
          }
          100% {
            width: 0%;
            margin-left: 100%;
          }
        }
      `}</style>
    </div>
  );
}
