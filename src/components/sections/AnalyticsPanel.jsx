import {
  Activity,
  AlertTriangle,
  Brain,
  ShieldAlert,
} from "lucide-react";

export default function AnalyticsPanel() {
  return (
    <section
      id="analytics"
      className="relative py-32"
    >

      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="absolute left-[10%] top-[10%] w-[420px] h-[420px] rounded-full bg-[#214437] blur-[160px] opacity-20" />

      <div className="section-container relative z-10">

        <div className="mb-20 flex items-end justify-between gap-10 flex-wrap">

          <div>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#26463A] bg-[#10211A]/70 text-[#8FB6A2] text-sm uppercase tracking-[0.2em]">
              AI Analytics Layer
            </div>

            <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em] leading-none max-w-5xl">
              Real-Time Environmental Intelligence
            </h2>

            <p className="text-[#7F988C] text-xl max-w-4xl mt-8 leading-relaxed">
              AI-powered forecasting and exposure analytics for
              pollution mitigation, urban planning, and vulnerable
              population protection across Seoul.
            </p>
          </div>

          <div className="glass-panel px-6 py-5 rounded-3xl border border-[#29463A] min-w-[260px]">
            <p className="text-[#8FB6A2] uppercase tracking-[0.18em] text-sm">
              Live Seoul Status
            </p>

            <div className="flex items-center gap-3 mt-5">
              <div className="w-3 h-3 rounded-full bg-[#74E89A] animate-pulse" />

              <span className="text-[#DDF5E8] text-lg">
                AI Monitoring Active
              </span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">

          <div className="glass-panel rounded-[36px] p-8 card-hover border border-[#29463A] relative overflow-hidden">

            <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#2B5A46] blur-[90px] opacity-20" />

            <div className="relative z-10">

              <div className="flex items-center justify-between">

                <div className="w-16 h-16 rounded-2xl bg-[#163127] flex items-center justify-center shadow-2xl">
                  <Activity size={30} className="text-[#89D1AB]" />
                </div>

                <span className="text-[#76B690] text-sm font-medium">
                  LIVE
                </span>
              </div>

              <h3 className="text-6xl font-bold mt-10 tracking-tight">
                47
              </h3>

              <p className="text-[#89A296] mt-3 text-lg">
                PM2.5 Exposure Index
              </p>

              <div className="mt-8 h-3 rounded-full bg-[#13241D] overflow-hidden">
                <div className="w-[72%] h-full bg-gradient-to-r from-[#3D7A5C] via-[#83C08D] to-[#D28C58]" />
              </div>

              <div className="mt-8 flex items-center justify-between text-sm">
                <span className="text-[#71897D]">
                  Forecast Confidence
                </span>

                <span className="text-[#E6F7EF]">
                  94%
                </span>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[36px] p-8 card-hover border border-[#3A2925] relative overflow-hidden">

            <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full bg-[#6B2E25] blur-[90px] opacity-20" />

            <div className="relative z-10">

              <div className="flex items-center justify-between">

                <div className="w-16 h-16 rounded-2xl bg-[#311F1F] flex items-center justify-center shadow-2xl">
                  <AlertTriangle size={30} className="text-[#FF9271]" />
                </div>

                <span className="text-[#FF9271] text-sm font-medium">
                  ALERT
                </span>
              </div>

              <h3 className="text-6xl font-bold mt-10 tracking-tight">
                5
              </h3>

              <p className="text-[#89A296] mt-3 text-lg">
                High-Risk Districts
              </p>

              <div className="mt-8 flex gap-3 flex-wrap">
                <span className="px-4 py-2 rounded-full bg-[#291A1A] text-[#FF9E84] text-sm border border-[#4B2A2A]">
                  Gangnam
                </span>

                <span className="px-4 py-2 rounded-full bg-[#291A1A] text-[#FF9E84] text-sm border border-[#4B2A2A]">
                  Mapo
                </span>

                <span className="px-4 py-2 rounded-full bg-[#291A1A] text-[#FF9E84] text-sm border border-[#4B2A2A]">
                  Yongsan
                </span>
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[36px] p-8 card-hover border border-[#293546] relative overflow-hidden">

            <div className="absolute top-0 left-0 w-40 h-40 rounded-full bg-[#294A75] blur-[90px] opacity-20" />

            <div className="relative z-10">

              <div className="flex items-center justify-between">

                <div className="w-16 h-16 rounded-2xl bg-[#1A2431] flex items-center justify-center shadow-2xl">
                  <Brain size={30} className="text-[#8DBDFF]" />
                </div>

                <span className="text-[#8DBDFF] text-sm font-medium">
                  AI MODEL
                </span>
              </div>

              <h3 className="text-6xl font-bold mt-10 tracking-tight">
                +18%
              </h3>

              <p className="text-[#89A296] mt-3 text-lg">
                Predicted PM2.5 Increase
              </p>

              <div className="mt-10 flex items-end gap-3 h-28">

                <div className="w-8 h-10 rounded-t-xl bg-[#355E94]" />
                <div className="w-8 h-14 rounded-t-xl bg-[#3C6BA8]" />
                <div className="w-8 h-20 rounded-t-xl bg-[#4A82C9]" />
                <div className="w-8 h-24 rounded-t-xl bg-[#65A0EC]" />
                <div className="w-8 h-16 rounded-t-xl bg-[#3D6FAE]" />
              </div>

              <div className="mt-6 text-sm text-[#7F998C]">
                AI aerosol dispersion forecasting engine active.
              </div>
            </div>
          </div>

          <div className="glass-panel rounded-[36px] p-8 card-hover border border-[#3F3420] relative overflow-hidden">

            <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-[#7A6430] blur-[90px] opacity-20" />

            <div className="relative z-10">

              <div className="flex items-center justify-between">

                <div className="w-16 h-16 rounded-2xl bg-[#312918] flex items-center justify-center shadow-2xl">
                  <ShieldAlert size={30} className="text-[#F3C26B]" />
                </div>

                <span className="text-[#F3C26B] text-sm font-medium">
                  PRIORITY
                </span>
              </div>

              <h3 className="text-6xl font-bold mt-10 tracking-tight">
                142K
              </h3>

              <p className="text-[#89A296] mt-3 text-lg">
                Vulnerable Population Exposure
              </p>

              <div className="mt-8 space-y-4">

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#71897D]">
                    Schools
                  </span>

                  <span className="text-[#E6F7EF]">
                    38%
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#71897D]">
                    Hospitals
                  </span>

                  <span className="text-[#E6F7EF]">
                    24%
                  </span>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#71897D]">
                    Elderly Centers
                  </span>

                  <span className="text-[#E6F7EF]">
                    17%
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}