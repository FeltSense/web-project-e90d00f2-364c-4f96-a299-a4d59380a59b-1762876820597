export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
  {/* Animated gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-red-600/20 to-orange-600/20 animate-pulse"></div>
  
  {/* Dynamic grid pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
  
  {/* Hero image with overlay */}
  <div className="absolute inset-0 opacity-40">
    <Image 
      src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop" 
      width={1920} 
      height={1080} 
      alt="Athlete training with intensity in modern gym"
      className="object-cover w-full h-full"
      priority
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-24">
    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[calc(100vh-10rem)]">
      
      {/* Left column - Content */}
      <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
        {/* Energy badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-full backdrop-blur-sm">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          <span className="text-orange-400 text-sm font-semibold uppercase tracking-wider">Transform Your Life Today</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[0.95] tracking-tight">
          <span className="block">UNLEASH</span>
          <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-orange-500 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
            YOUR POWER
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
          Join the elite fitness revolution. World-class trainers, cutting-edge equipment, and proven programs designed to push your limits and deliver{&apos; &apos;}
          <span className="text-orange-400 font-semibold">real results</span>.
        </p>

        {/* Stats bar */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-6 sm:gap-8 py-4">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-orange-500">500+</div>
            <div className="text-sm text-slate-400 uppercase tracking-wide">Members</div>
          </div>
          <div className="w-px bg-slate-700"></div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-orange-500">50+</div>
            <div className="text-sm text-slate-400 uppercase tracking-wide">Classes Weekly</div>
          </div>
          <div className="w-px bg-slate-700"></div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-black text-orange-500">24/7</div>
            <div className="text-sm text-slate-400 uppercase tracking-wide">Access</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]">
            <span className="relative z-10 flex items-center justify-center gap-2">
              START FREE TRIAL
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <button className="px-8 py-4 bg-white/5 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white/20 hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300">
            VIEW CLASSES
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-6 text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No commitment</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Cancel anytime</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Personal training included</span>
          </div>
        </div>
      </div>

      {/* Right column - Feature cards */}
      <div className="hidden lg:block space-y-4">
        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:translate-x-2">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">HIIT & Strength</h3>
              <p className="text-slate-400 text-sm leading-relaxed">High-intensity interval training and strength programs that torch calories and build lean muscle.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:translate-x-2">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Elite Trainers</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Certified professionals with specialized expertise in every fitness discipline.</p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:translate-x-2">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-2">Track Progress</h3>
              <p className="text-slate-400 text-sm leading-relaxed">Advanced metrics and personalized insights to measure your transformation journey.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Scroll indicator */}
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
    <div className="flex flex-col items-center gap-2 animate-bounce">
      <span className="text-slate-500 text-xs uppercase tracking-wider">Scroll to explore</span>
      <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </div>
</div>
  );
}