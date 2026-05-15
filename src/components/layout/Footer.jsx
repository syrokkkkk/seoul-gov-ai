import {
  ShieldCheck,
  Database,
  Satellite,
  Lock,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-32 pb-16 overflow-hidden border-t border-[#1B2E26]">

      <div className="absolute inset-0 grid-overlay opacity-10" />

      <div className="section-container relative z-10">

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-20">

          {/* LEFT */}

          <div>

            <div className="flex items-center gap-5">

              <div className="w-16 h-16 rounded-3xl bg-gradient-to-br from-[#315847] to-[#173229] flex items-center justify-center text-[#A8D9BF] text-2xl font-bold shadow-2xl">
                S
              </div>

              <div>

                <h3 className="text-3xl font-bold">
                  Seoul Metropolitan AI Platform
                </h3>

                <p className="text-[#7E988C] mt-2">
                  Environmental Intelligence & Urban Mitigation Infrastructure
                </p>
              </div>
            </div>

            <p className="text-[#80998D] text-lg leading-relaxed mt-10 max-w-4xl">
              Government-level AI infrastructure platform for
              environmental intelligence, pollution forecasting,
              urban planning optimization,
              and vulnerable population protection across Seoul.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-14">

              <div className="glass-panel rounded-[28px] p-6 border border-[#22372E]">

                <div className="flex items-center gap-4">

                  <ShieldCheck className="text-[#8FD8AF]" />

                  <div>
                    <p className="text-[#DDF5E8] font-semibold">
                      PIPA Compliance
                    </p>

                    <p className="text-[#7E988C] text-sm mt-1">
                      Government-grade data governance
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-[28px] p-6 border border-[#22372E]">

                <div className="flex items-center gap-4">

                  <Database className="text-[#8FD8AF]" />

                  <div>
                    <p className="text-[#DDF5E8] font-semibold">
                      Secure Environmental Data Layer
                    </p>

                    <p className="text-[#7E988C] text-sm mt-1">
                      AI-integrated geospatial infrastructure
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-[28px] p-6 border border-[#22372E]">

                <div className="flex items-center gap-4">

                  <Satellite className="text-[#8FD8AF]" />

                  <div>
                    <p className="text-[#DDF5E8] font-semibold">
                      Live Monitoring Systems
                    </p>

                    <p className="text-[#7E988C] text-sm mt-1">
                      Atmospheric and urban sensor networks
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-[28px] p-6 border border-[#22372E]">

                <div className="flex items-center gap-4">

                  <Lock className="text-[#8FD8AF]" />

                  <div>
                    <p className="text-[#DDF5E8] font-semibold">
                      Encrypted Infrastructure
                    </p>

                    <p className="text-[#7E988C] text-sm mt-1">
                      Secure government cloud architecture
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="space-y-8">

            <div className="glass-panel rounded-[34px] p-8 border border-[#22372E]">

              <p className="uppercase tracking-[0.18em] text-[#8FB6A2] text-sm">
                Active Intelligence Layers
              </p>

              <div className="space-y-5 mt-10">

                {[
                  "PM2.5 Environmental Forecasting",
                  "Urban Mobility Optimization",
                  "Infrastructure Suitability Analysis",
                  "Vulnerable Population Protection",
                  "Atmospheric Airflow Simulation",
                  "Policy Intervention Modeling",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between p-4 rounded-2xl border border-[#29463A] bg-[#0D1814]"
                  >
                    <span className="text-[#DDF5E8]">
                      {item}
                    </span>

                    <span className="text-[#8FD8AF]">
                      Active
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[34px] p-8 border border-[#22372E]">

              <p className="uppercase tracking-[0.18em] text-[#8FB6A2] text-sm">
                Government Environmental AI Division
              </p>

              <div className="mt-8 space-y-4 text-[#80998D] leading-relaxed">

                <p>
                  Seoul Metropolitan Government
                </p>

                <p>
                  Environmental Intelligence Operations Center
                </p>

                <p>
                  Smart City Climate Infrastructure Initiative
                </p>

                <p>
                  AI Urban Sustainability Program
                </p>
              </div>

              <div className="mt-10 pt-8 border-t border-[#22372E]">

                <p className="text-[#60786D] text-sm">
                  © 2026 Seoul Metropolitan AI Environmental Platform.
                  Advanced government climate intelligence infrastructure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}