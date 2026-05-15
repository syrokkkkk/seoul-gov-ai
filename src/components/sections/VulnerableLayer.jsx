import {
  School,
  Hospital,
  Home,
  Shield,
  Users,
} from "lucide-react";

export default function VulnerableLayer() {
  return (
    <section className="relative py-32 overflow-hidden">

      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="absolute right-[10%] top-[20%] w-[420px] h-[420px] rounded-full bg-[#1B3A2F] blur-[140px] opacity-20" />

      <div className="section-container relative z-10">

        <div className="mb-16">

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A]/70 text-[#90B9A4] text-sm uppercase tracking-[0.2em]">
            Vulnerable Population Protection Layer
          </div>

          <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em]">
            Exposure Prioritization Intelligence
          </h2>

          <p className="text-[#80998D] text-xl max-w-4xl mt-8 leading-relaxed">
            AI-driven environmental protection system prioritizing
            schools, hospitals, elderly populations,
            and residential communities during high PM2.5 events.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10">

          {/* LEFT */}

          <div className="glass-panel rounded-[40px] p-10">

            <div className="flex items-center justify-between mb-12">

              <div>
                <p className="uppercase tracking-[0.18em] text-[#89A79A] text-sm">
                  Seoul Protection Grid
                </p>

                <h3 className="text-4xl font-bold mt-3">
                  High-Priority Exposure Zones
                </h3>
              </div>

              <div className="px-5 py-3 rounded-full border border-[#315847] bg-[#11211A] text-[#A8D2BB] text-sm">
                LIVE PRIORITY ENGINE
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">

              <div className="glass-panel rounded-[28px] p-8 card-hover">

                <div className="w-16 h-16 rounded-2xl bg-[#183126] flex items-center justify-center">
                  <School className="text-[#8ED7B1]" size={30} />
                </div>

                <h4 className="text-3xl font-bold mt-8">
                  Schools
                </h4>

                <p className="text-[#80998D] mt-5 leading-relaxed">
                  AI identifies elevated pollution exposure
                  around elementary and middle school districts.
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-[#7A9588]">
                    Protected Zones
                  </span>

                  <span className="text-[#DDF5E9] text-2xl font-bold">
                    214
                  </span>
                </div>
              </div>

              <div className="glass-panel rounded-[28px] p-8 card-hover">

                <div className="w-16 h-16 rounded-2xl bg-[#1A2B26] flex items-center justify-center">
                  <Hospital className="text-[#9CD8FF]" size={30} />
                </div>

                <h4 className="text-3xl font-bold mt-8">
                  Hospitals
                </h4>

                <p className="text-[#80998D] mt-5 leading-relaxed">
                  Respiratory burden forecasting across
                  Seoul hospital infrastructure.
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-[#7A9588]">
                    Active Monitoring
                  </span>

                  <span className="text-[#DDF5E9] text-2xl font-bold">
                    78
                  </span>
                </div>
              </div>

              <div className="glass-panel rounded-[28px] p-8 card-hover">

                <div className="w-16 h-16 rounded-2xl bg-[#1A2B24] flex items-center justify-center">
                  <Home className="text-[#A7D9B7]" size={30} />
                </div>

                <h4 className="text-3xl font-bold mt-8">
                  Residential Areas
                </h4>

                <p className="text-[#80998D] mt-5 leading-relaxed">
                  Population-density exposure optimization
                  across Seoul districts.
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-[#7A9588]">
                    High Density Zones
                  </span>

                  <span className="text-[#DDF5E9] text-2xl font-bold">
                    142
                  </span>
                </div>
              </div>

              <div className="glass-panel rounded-[28px] p-8 card-hover">

                <div className="w-16 h-16 rounded-2xl bg-[#2B2417] flex items-center justify-center">
                  <Users className="text-[#F0C46D]" size={30} />
                </div>

                <h4 className="text-3xl font-bold mt-8">
                  Elderly Centers
                </h4>

                <p className="text-[#80998D] mt-5 leading-relaxed">
                  AI prioritization of high-risk
                  aging population communities.
                </p>

                <div className="mt-8 flex items-center justify-between">

                  <span className="text-[#7A9588]">
                    Critical Protection
                  </span>

                  <span className="text-[#DDF5E9] text-2xl font-bold">
                    96
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="space-y-8">

            <div className="glass-panel rounded-[32px] p-8">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#183126] flex items-center justify-center">
                  <Shield className="text-[#8ED6AE]" size={30} />
                </div>

                <div>
                  <p className="uppercase tracking-[0.18em] text-[#88A598] text-sm">
                    AI Protection Score
                  </p>

                  <h3 className="text-5xl font-bold mt-2">
                    91%
                  </h3>
                </div>
              </div>

              <p className="text-[#80998D] mt-8 text-lg leading-relaxed">
                Real-time optimization of pollution mitigation
                around vulnerable population infrastructure.
              </p>
            </div>

            <div className="glass-panel rounded-[32px] p-8">

              <p className="uppercase tracking-[0.18em] text-[#89A699] text-sm">
                AI Recommendations
              </p>

              <div className="mt-8 space-y-5">

                <div className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5">
                  <h4 className="text-xl font-semibold">
                    Expand green buffers near schools
                  </h4>

                  <p className="text-[#7B9689] mt-3">
                    Exposure reduction estimate: 17%
                  </p>
                </div>

                <div className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5">
                  <h4 className="text-xl font-semibold">
                    Restrict heavy traffic near hospitals
                  </h4>

                  <p className="text-[#7B9689] mt-3">
                    Respiratory burden reduction: 12%
                  </p>
                </div>

                <div className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5">
                  <h4 className="text-xl font-semibold">
                    Delay construction near elderly centers
                  </h4>

                  <p className="text-[#7B9689] mt-3">
                    High-risk exposure reduction: 9%
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[32px] p-8 border border-[#315847]">

              <p className="uppercase tracking-[0.18em] text-[#8EB6A3] text-sm">
                Vulnerability Alert
              </p>

              <h3 className="text-3xl font-bold mt-6 leading-snug">
                Elevated PM2.5 exposure predicted
                near western Seoul school districts.
              </h3>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-[#7D988B]">
                  AI Confidence
                </span>

                <span className="text-[#98E1B9] text-2xl font-bold">
                  94%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}