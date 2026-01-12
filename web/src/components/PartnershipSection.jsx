"use client";

export default function PartnershipSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a1a] to-[#252525]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="relative h-[500px] sm:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-transparent to-transparent z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&h=600&fit=crop"
              alt="McLaren Racing"
              className="w-full h-full object-cover"
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 sm:p-12">
              {/* Logos */}
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <div className="text-white font-bold text-lg">
                      UNITED AUTOSPORTS
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg inline-block">
                  <div className="text-white font-bold text-2xl">McLaren</div>
                </div>
              </div>

              {/* Quote */}
              <div className="max-w-2xl">
                <div className="bg-[#1a1a1a]/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10">
                  <p className="text-white text-lg sm:text-xl mb-6 leading-relaxed">
                    Success in endurance racing — and for United Autosports as a
                    company — comes from strategy, reliability, and people.
                    These are the same values we see in IQ Option
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#ff6b35] to-[#ff8c42] overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                        alt="Richard Dean"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="text-white font-bold">Richard Dean</div>
                      <div className="text-[#ff6b35] text-sm">
                        CEO and Team Principal
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm max-w-3xl mx-auto">
            IQ Option is proud to partner with United Autosports and McLaren,
            bringing the same precision and performance from the racetrack to
            your trading experience.
          </p>
        </div>
      </div>
    </section>
  );
}
