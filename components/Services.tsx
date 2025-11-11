export default function Services() {
  return (
    <section className="relative py-20 md:py-32 bg-black overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-500 to-red-600 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-red-600 to-orange-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
  </div>

  <div className="container mx-auto px-4 relative z-10">
    {/* Section header */}
    <div className="max-w-3xl mx-auto text-center mb-16 md:mb-24">
      <div className="inline-block mb-4 px-6 py-2 bg-gradient-to-r from-amber-500 to-red-600 rounded-full">
        <span className="text-sm font-bold text-black uppercase tracking-wider">Transform Your Body</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
        ELITE TRAINING
        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500">PROGRAMS</span>
      </h2>
      <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
        World-class training methodologies designed to push your limits and deliver real, measurable results
      </p>
    </div>

    {/* Services grid with dynamic layouts */}
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
      {/* HIIT Training - Large feature */}
      <div className="lg:col-span-7 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 to-orange-600 hover:shadow-2xl hover:shadow-red-600/50 transition-all duration-500">
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-500"></div>
        <Image 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=800&fit=crop" 
          width={1200} 
          height={800} 
          alt="High-Intensity Interval Training with battle ropes and explosive movements"
          className="w-full h-[500px] object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
          <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
            <div className="inline-block mb-4 px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
              <span className="text-xs font-bold text-white uppercase tracking-wider">Most Popular</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
              HIGH-INTENSITY<br />INTERVAL TRAINING
            </h3>
            <p className="text-white/90 text-lg mb-6 max-w-xl">
              Torch calories and build explosive power with our signature HIIT sessions. 45-minute metabolic conditioning workouts that keep burning fat for 24+ hours post-training.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/20">⚡ Max Calorie Burn</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/20">🔥 Afterburn Effect</span>
              <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-semibold border border-white/20">💪 Full Body</span>
            </div>
            <button className="px-8 py-4 bg-white text-red-600 rounded-full font-bold text-lg hover:bg-amber-400 hover:text-black transform hover:scale-105 transition-all duration-300 shadow-lg">
              Book Your HIIT Session →
            </button>
          </div>
        </div>
      </div>

      {/* Strength & Conditioning - Vertical */}
      <div className="lg:col-span-5 group relative overflow-hidden rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-500">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
        <Image 
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&h=1000&fit=crop" 
          width={800} 
          height={1000} 
          alt="Strength training with barbells and Olympic weightlifting"
          className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-500">
              <span className="text-3xl">💪</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
              STRENGTH &<br />CONDITIONING
            </h3>
            <p className="text-gray-300 mb-4">
              Build raw power with Olympic lifts, powerlifting protocols, and functional strength training.
            </p>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full w-4/5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></div>
              </div>
              <span className="text-amber-400 font-bold text-sm">85% Strength Gains</span>
            </div>
            <button className="w-full py-3 bg-white/10 backdrop-blur-sm text-white rounded-xl font-bold hover:bg-amber-400 hover:text-black transition-all duration-300 border border-white/20">
              Start Building →
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom row - Three equal cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Yoga & Mobility */}
      <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 hover:shadow-2xl hover:shadow-emerald-500/40 transition-all duration-500">
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500"></div>
        <Image 
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop" 
          width={800} 
          height={600} 
          alt="Yoga and mobility training for flexibility and recovery"
          className="w-full h-[400px] object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
            <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/30 group-hover:rotate-12 transition-transform duration-500">
              <span className="text-2xl">🧘</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
              YOGA &<br />MOBILITY
            </h3>
            <p className="text-white/90 text-sm mb-4">
              Enhance flexibility, prevent injuries, and accelerate recovery with guided mobility flows and yoga sessions.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center gap-2 text-white text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                Injury Prevention
              </li>
              <li className="flex items-center gap-2 text-white text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                Active Recovery
              </li>
              <li className="flex items-center gap-2 text-white text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300"></span>
                Mind-Body Balance
              </li>
            </ul>
            <button className="w-full py-3 bg-white text-emerald-700 rounded-xl font-bold hover:bg-emerald-300 transition-all duration-300">
              Join Class →
            </button>
          </div>
        </div>
      </div>

      {/* Cycling Studio */}
      <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 to-pink-600 hover:shadow-2xl hover:shadow-purple-500/40 transition-all duration-500">
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500"></div>
        <Image 
          src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?w=800&h=600&fit=crop" 
          width={800} 
          height={600} 
          alt="Indoor cycling studio with high-energy spin classes"
          className="w-full h-[400px] object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
            <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 border border-white/30 group-hover:rotate-12 transition-transform duration-500">
              <span className="text-2xl">🚴</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
              CYCLING<br />STUDIO
            </h3>
            <p className="text-white/90 text-sm mb-4">
              Rhythm-based indoor cycling with epic playlists. Low-impact, high-intensity cardio that&apos;s addictively fun.
            </p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="text-center">
                <div className="text-2xl font-black text-white">600+</div>
                <div className="text-xs text-white/80">Calories/Session</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white">45</div>
                <div className="text-xs text-white/80">Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-white">20+</div>
                <div className="text-xs text-white/80">Weekly Classes</div>
              </div>
            </div>
            <button className="w-full py-3 bg-white text-purple-700 rounded-xl font-bold hover:bg-pink-300 transition-all duration-300">
              Reserve Bike →
            </button>
          </div>
        </div>
      </div>

      {/* Personal Training */}
      <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-amber-500 to-orange-600 hover:shadow-2xl hover:shadow-amber-500/40 transition-all duration-500">
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-500"></div>
        <Image 
          src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop" 
          width={800} 
          height={600} 
          alt="One-on-one personal training session with certified trainer"
          className="w-full h-[400px] object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
            <div className="inline-block mb-3 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full border border-white/30">
              <span className="text-xs font-bold text-white uppercase tracking-wider">1-on-1 Coaching</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">
              PERSONAL<br />TRAINING
            </h3>
            <p className="text-white/90 text-sm mb-4">
              Custom programs designed for YOUR goals. Expert coaching, accountability, and guaranteed results.
            </p>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white"></div>
              </div>
              <span className="text-white text-sm font-semibold">12 Certified Trainers</span>
            </div>
            <button className="w-full py-3 bg-black text-white rounded-xl font-bold hover:bg-white hover:text-amber-600 transition-all duration-300">
              Book Consultation →
            </button>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom CTA strip */}
    <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-red-600 via-orange-600 to-amber-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
            Not Sure Where to Start?
          </h3>
          <p className="text-white/90">
            Get a free fitness assessment and personalized program recommendation
          </p>
        </div>
        <button className="px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:bg-white hover:text-black transform hover:scale-105 transition-all duration-300 whitespace-nowrap shadow-xl">
          Free Assessment →
        </button>
      </div>
    </div>
  </div>
</section>
  );
}