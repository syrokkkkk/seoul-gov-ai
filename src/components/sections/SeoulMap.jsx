import {
  Building2,
  School,
  Hospital,
  Trees,
  Factory,
} from "lucide-react";

export default function SeoulMap() {
  return (
    <section
      id="live-map"
      className="relative py-32 overflow-hidden"
    >

      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="absolute left-[10%] top-[20%] w-[400px] h-[400px] rounded-full bg-[#1B3B30] blur-[140px] opacity-20" />

      <div className="section-container relative z-10">

        <div className="mb-16">

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A]/70 text-[#90B9A4] text-sm uppercase tracking-[0.2em]">
            Seoul Urban Intelligence Map
          </div>

          <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em]">
            Real-Time PM2.5 Spatial Analysis
          </h2>

          <p className="text-[#80998D] text-xl max-w-4xl mt-8 leading-relaxed">
            AI-powered environmental monitoring system visualizing
            pollution intensity, vulnerable population exposure,
            transportation corridors, and urban mitigation zones
            across Seoul districts.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_420px] gap-10">

          <div className="glass-panel rounded-[40px] p-8 relative overflow-hidden">

            <div className="flex items-center justify-between mb-8">

              <div>
                <p className="uppercase tracking-[0.18em] text-[#82A796] text-sm">
                  AI Spatial Monitoring
                </p>

                <h3 className="text-3xl font-bold mt-3">
                  Seoul Environmental Grid
                </h3>
              </div>

              <div className="px-5 py-3 rounded-full border border-[#315847] bg-[#12211A] text-[#A4D1B8] text-sm">
                LIVE SATELLITE FEED
              </div>
            </div>

            <div className="relative h-[760px] rounded-[32px] overflow-hidden bg-[#091410] border border-[#1E352B]">

              <div className="absolute inset-0 grid-overlay opacity-20" />

              {/* heat zones */}

              <div className="absolute top-[100px] left-[180px] w-44 h-44 rounded-full bg-[#D75E52]/60 blur-[40px]" />

              <div className="absolute top-[320px] right-[180px] w-52 h-52 rounded-full bg-[#D75E52]/60 blur-[40px]" />

              <div className="absolute bottom-[180px] left-[280px] w-40 h-40 rounded-full bg-[#E5B95E]/50 blur-[40px]" />

              <div className="absolute bottom-[140px] right-[280px] w-56 h-56 rounded-full bg-[#4F8E69]/50 blur-[50px]" />

              {/* subway lines */}

              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1000 760"
              >
                <path
                  d="M120 640 C260 520, 320 460, 420 420 C560 360, 660 300, 820 160"
                  stroke="#67C587"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="18 16"
                  strokeLinecap="round"
                />

                <path
                  d="M160 180 C260 240, 340 280, 480 340 C620 400, 760 480, 900 620"
                  stroke="#5EA4FF"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="12 12"
                  strokeLinecap="round"
                />
              </svg>

              {/* districts */}

              <div className="absolute top-[120px] left-[160px] glass-panel px-5 py-4 rounded-2xl">
                <p className="text-[#8FB7A3] text-sm uppercase">
                  Gangnam
                </p>

                <h4 className="text-2xl font-bold mt-2 text-[#FF9B86]">
                  Severe PM2.5
                </h4>
              </div>

              <div className="absolute top-[280px] right-[140px] glass-panel px-5 py-4 rounded-2xl">
                <p className="text-[#8FB7A3] text-sm uppercase">
                  Yongsan
                </p>

                <h4 className="text-2xl font-bold mt-2 text-[#F2C66F]">
                  Traffic Exposure
                </h4>
              </div>

              <div className="absolute bottom-[160px] left-[260px] glass-panel px-5 py-4 rounded-2xl">
                <p className="text-[#8FB7A3] text-sm uppercase">
                  Mapo
                </p>

                <h4 className="text-2xl font-bold mt-2 text-[#82D8A8]">
                  Green Recovery
                </h4>
              </div>

              {/* protected zones */}

              <div className="absolute top-[260px] left-[360px] w-16 h-16 rounded-full bg-[#0D1A15] border border-[#355B4A] flex items-center justify-center">
                <School className="text-[#9DD7B7]" />
              </div>

              <div className="absolute bottom-[220px] right-[240px] w-16 h-16 rounded-full bg-[#0D1A15] border border-[#355B4A] flex items-center justify-center">
                <Hospital className="text-[#9DD7B7]" />
              </div>

              <div className="absolute top-[420px] left-[200px] w-16 h-16 rounded-full bg-[#0D1A15] border border-[#355B4A] flex items-center justify-center">
                <Trees className="text-[#9DD7B7]" />
              </div>

              <div className="absolute top-[420px] right-[200px] w-16 h-16 rounded-full bg-[#0D1A15] border border-[#5C4136] flex items-center justify-center">
                <Factory className="text-[#FF9B86]" />
              </div>
            </div>
          </div>

          {/* right analytics */}

          <div className="space-y-8">

            <div className="glass-panel rounded-[32px] p-8">

              <div className="flex items-center gap-4">

                <div className="w-16 h-16 rounded-2xl bg-[#183126] flex items-center justify-center">
                  <Building2 className="text-[#8DD3AE]" size={30} />
                </div>

                <div>
                  <p className="text-[#7E9B8E] uppercase tracking-[0.18em] text-sm">
                    District Exposure
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    Gangnam +18%
                  </h3>
                </div>
              </div>

              <div className="mt-10 space-y-6">

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#769084]">
                      Traffic Density
                    </span>

                    <span className="text-[#D8EFE3]">
                      82%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-[#13211B] overflow-hidden">
                    <div className="h-full w-[82%] bg-[#67C587]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#769084]">
                      Construction Activity
                    </span>

                    <span className="text-[#D8EFE3]">
                      64%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-[#13211B] overflow-hidden">
                    <div className="h-full w-[64%] bg-[#D8B05C]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#769084]">
                      Vulnerable Population
                    </span>

                    <span className="text-[#D8EFE3]">
                      91%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-[#13211B] overflow-hidden">
                    <div className="h-full w-[91%] bg-[#D36B61]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[32px] p-8">

              <p className="uppercase tracking-[0.18em] text-[#8DAA9C] text-sm">
                AI Mitigation Recommendations
              </p>

              <div className="mt-8 space-y-5">

                <div className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5">
                  <h4 className="text-xl font-semibold">
                    Reduce vehicle access in Jongno by 20%
                  </h4>

                  <p className="text-[#789486] mt-3">
                    Predicted PM2.5 reduction: 14%
                  </p>
                </div>

                <div className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5">
                  <h4 className="text-xl font-semibold">
                    Add green buffer near school zones
                  </h4>

                  <p className="text-[#789486] mt-3">
                    Vulnerable exposure reduction: 21%
                  </p>
                </div>

                <div className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5">
                  <h4 className="text-xl font-semibold">
                    Delay industrial operations during peak hours
                  </h4>

                  <p className="text-[#789486] mt-3">
                    Respiratory burden reduction: 9%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}