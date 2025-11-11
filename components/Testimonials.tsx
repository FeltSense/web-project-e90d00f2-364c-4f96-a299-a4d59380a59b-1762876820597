export default function Testimonials() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950 py-24 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-500 rounded-full blur-3xl animate-pulse delay-700"></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Section Header */}
    <div className="text-center mb-16">
      <div className="inline-block mb-4">
        <span className="text-orange-500 font-black text-sm tracking-[0.3em] uppercase">Real Transformations</span>
      </div>
      <h2 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
        Success <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Stories</span>
      </h2>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto">
        Real people. Real results. Join thousands who&apos;ve transformed their lives.
      </p>
    </div>

    {/* Testimonials Grid */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      
      {/* Testimonial 1 - Weight Loss Journey */}
      <div className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105">
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/50 group-hover:rotate-12 transition-transform duration-500">
          <span className="text-white font-black text-2xl">-42</span>
        </div>
        
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" 
              width={64} 
              height={64} 
              alt="Sarah Martinez" 
              className="rounded-full border-4 border-orange-500/30 group-hover:border-orange-500 transition-colors duration-300"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900"></div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Sarah Martinez</h3>
            <p className="text-orange-400 text-sm font-semibold">Premium Member</p>
            <p className="text-slate-500 text-xs">6 months active</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-orange-500 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          
          <p className="text-slate-300 leading-relaxed text-sm">
            "Lost <span className="text-orange-400 font-bold">42 pounds in 5 months</span> through HIIT classes and nutrition coaching. The trainers didn&apos;t just show me exercises—they taught me sustainable habits. My energy levels are through the roof, and I finally completed my first 5K!"
          </p>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-700/50">
            <div className="text-center">
              <p className="text-orange-400 font-black text-xl">42</p>
              <p className="text-slate-500 text-xs uppercase tracking-wide">lbs lost</p>
            </div>
            <div className="text-center">
              <p className="text-orange-400 font-black text-xl">5x</p>
              <p className="text-slate-500 text-xs uppercase tracking-wide">weekly</p>
            </div>
            <div className="text-center">
              <p className="text-orange-400 font-black text-xl">18</p>
              <p className="text-slate-500 text-xs uppercase tracking-wide">classes</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 2 - Strength Training */}
      <div className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105">
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-2xl shadow-red-500/50 group-hover:rotate-12 transition-transform duration-500">
          <span className="text-white font-black text-2xl">+35</span>
        </div>
        
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
              width={64} 
              height={64} 
              alt="Marcus Thompson" 
              className="rounded-full border-4 border-orange-500/30 group-hover:border-orange-500 transition-colors duration-300"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900"></div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Marcus Thompson</h3>
            <p className="text-orange-400 text-sm font-semibold">VIP Member</p>
            <p className="text-slate-500 text-xs">8 months active</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-orange-500 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          
          <p className="text-slate-300 leading-relaxed text-sm">
            "Increased my bench press by <span className="text-orange-400 font-bold">35 pounds in 4 months</span> working with Coach Mike. The personal training sessions were game-changing—proper form, progressive overload, and accountability. Best investment in myself I&apos;ve ever made."
          </p>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-700/50">
            <div className="text-center">
              <p className="text-orange-400 font-black text-xl">315</p>
              <p className="text-slate-500 text-xs uppercase tracking-wide">max lift</p>
            </div>
            <div className="text-center">
              <p className="text-orange-400 font-black text-xl">6x</p>
              <p className="text-slate-500 text-xs uppercase tracking-wide">weekly</p>
            </div>
            <div className="text-center">
              <p className="text-orange-400 font-black text-xl">12</p>
              <p className="text-slate-500 text-xs uppercase tracking-wide">sessions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonial 3 - Complete Lifestyle Change */}
      <div className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-500 hover:transform hover:scale-105">
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-orange-600 to-red-500 rounded-full flex items-center justify-center shadow-2xl shadow-orange-500/50 group-hover:rotate-12 transition-transform duration-500">
          <span className="text-white font-black text-lg">100%</span>
        </div>
        
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <Image 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop" 
              width={64} 
              height={64} 
              alt="Jennifer Park" 
              className="rounded-full border-4 border-orange-500/30 group-hover:border-orange-500 transition-colors duration-300"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-slate-900"></div>
          </div>
          <div>
            <h3 className="text-white font-bold text-lg">Jennifer Park</h3>
            <p className="text-orange-400 text-sm font-semibold">Premium Member</p>
            <p className="text-slate-500 text-xs">1 year active</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex gap-2 mb-4">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-orange-500 fill-current" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
              </svg>
            ))}
          </div>
          
          <p className="text-slate-300 leading-relaxed text-sm">
            "From couch to completing a <span className="text-orange-400 font-bold">marathon in 12 months</span>! The combination of cycling classes, yoga for recovery, and nutrition coaching transformed everything. I&apos;ve never felt this confident or strong. This place changed my life."
          </p>

          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-700/50">
            <div className="text-center">
              <p className="text-orange-400 font-black text-xl">26</p>
              <p className="text-slate-500 text-xs uppercase tracking-wide">miles</p>
            </div>
            <div className="text-center">
              <p className="text-orange-400 font-black text-xl">7x</p>
              <p className="text-slate-500 text-xs uppercase tracking-wide">weekly</p>
            </div>
            <div className="text-center">
              <p className="text-orange-400 font-black text-xl">365</p>
              <p className="text-slate-500 text-xs uppercase tracking-wide">days</p>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* Bottom CTA */}
    <div className="text-center mt-16">
      <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
        <span>Start Your Transformation</span>
        <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </div>
      <p className="text-slate-400 text-sm mt-4">Join <span className="text-orange-400 font-bold">2,847+</span> members who&apos;ve achieved their goals</p>
    </div>
  </div>
</section>
  );
}