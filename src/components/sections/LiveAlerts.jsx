import {
  AlertTriangle,
  Factory,
  Wind,
  TrafficCone,
  ShieldAlert,
  Activity,
} from "lucide-react";

const alerts = [
  {
    icon: <AlertTriangle size={26} />,
    title: "PM2.5 Surge Detected",
    district: "Gangnam",
    severity: "Critical",
    time: "2 min ago",
    description:
      "AI sensors detected elevated PM2.5 concentration near central traffic corridors.",
    color: "border-[#5A2D2D]",
  },
  {
    icon: <Factory size={26} />,
    title: "Industrial Emission Event",
    district: "Yongsan",
    severity: "High",
    time: "11 min ago",
    description:
      "Industrial particulate emissions exceeded predictive environmental thresholds.",
    color: "border-[#5A4030]",
  },
  {
    icon: <Wind size={26} />,
    title: "Atmospheric Shift",
    district: "Mapo",
    severity: "Moderate",
    time: "18 min ago",
    description:
      "Western airflow conditions improving pollution dispersion efficiency.",
    color: "border-[#29463A]",
  },
  {
    icon: <TrafficCone size={26} />,
    title: "Traffic Congestion Increase",
    district: "Jongno",
    severity: "Warning",
    time: "24 min ago",
    description:
      "AI predicts elevated commuter emissions during peak urban mobility cycle.",
    color: "border-[#5A4030]",
  },
];

export default function LiveAlerts() {
  return (
    <section className="relative py-32 overflow-hidden">

      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="section-container relative z-10">

        <div className="flex items-center justify-between flex-wrap gap-8">

          <div>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A]/70 text-[#90B9A4] text-sm uppercase tracking-[0.2em]">
              Live Environmental Incident Feed
            </div>

            <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em] max-w-5xl">
              Real-Time AI Monitoring & Emergency Response
            </h2>

            <p className="text-[#80998D] text-xl leading-relaxed mt-8 max-w-4xl">
              Continuous environmental surveillance system tracking
              pollution spikes, industrial events, atmospheric changes,
              and vulnerable population exposure across Seoul.
            </p>
          </div>

          <div className="glass-panel rounded-[30px] px-8 py-6 border border-[#29463A]">

            <div className="flex items-center gap-5">

              <div className="w-4 h-4 rounded-full bg-[#69D98A] animate-pulse" />

              <div>
                <p className="text-[#DDF5E8] font-semibold">
                  Seoul Incident Grid Online
                </p>

                <p className="text-[#80998D] text-sm mt-1">
                  284 Sensors Connected
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 mt-20">

          {/* LEFT FEED */}

          <div className="space-y-8">

            {alerts.map((alert) => (
              <div
                key={alert.title}
                className={`glass-panel rounded-[34px] p-8 border ${alert.color}`}
              >

                <div className="flex items-start justify-between gap-8">

                  <div className="flex gap-6">

                    <div className="w-16 h-16 rounded-2xl bg-[#10211A] border border-[#29463A] flex items-center justify-center text-[#9ED8B6]">
                      {alert.icon}
                    </div>

                    <div>

                      <div className="flex items-center gap-4 flex-wrap">

                        <h3 className="text-2xl font-bold">
                          {alert.title}
                        </h3>

                        <span className="px-4 py-2 rounded-full bg-[#13261E] border border-[#315847] text-[#8FD8AF] text-sm">
                          {alert.severity}
                        </span>
                      </div>

                      <div className="flex items-center gap-6 mt-5 text-[#80998D]">

                        <div>
                          District:
                          <span className="text-[#DDF5E8] ml-2">
                            {alert.district}
                          </span>
                        </div>

                        <div>
                          Time:
                          <span className="text-[#DDF5E8] ml-2">
                            {alert.time}
                          </span>
                        </div>
                      </div>

                      <p className="text-[#80998D] leading-relaxed mt-6 text-lg">
                        {alert.description}
                      </p>
                    </div>
                  </div>

                  <button className="px-6 py-3 rounded-2xl bg-[#8FD8AF] text-[#07110D] font-semibold hover:scale-105 transition-all duration-300">
                    Investigate
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT STATUS */}

          <div className="space-y-8">

            <div className="glass-panel rounded-[34px] p-8 border border-[#22372E]">

              <div className="flex items-center gap-4">

                <ShieldAlert className="text-[#8FD8AF]" />

                <h3 className="text-2xl font-bold">
                  AI Protection Status
                </h3>
              </div>

              <div className="space-y-7 mt-10">

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#80998D]">
                      Vulnerable Zone Protection
                    </span>

                    <span className="text-[#DDF5E8]">
                      89%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-[#13211B] overflow-hidden">
                    <div className="h-full w-[89%] bg-[#8FD8AF]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#80998D]">
                      Emergency Response Readiness
                    </span>

                    <span className="text-[#DDF5E8]">
                      93%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-[#13211B] overflow-hidden">
                    <div className="h-full w-[93%] bg-[#5EA4FF]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#80998D]">
                      District Monitoring Stability
                    </span>

                    <span className="text-[#DDF5E8]">
                      77%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-[#13211B] overflow-hidden">
                    <div className="h-full w-[77%] bg-[#D96C5C]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[34px] p-8 border border-[#22372E]">

              <div className="flex items-center gap-4">

                <Activity className="text-[#8FD8AF]" />

                <h3 className="text-2xl font-bold">
                  Active Monitoring Layers
                </h3>
              </div>

              <div className="space-y-5 mt-10">

                {[
                  "PM2.5 Atmospheric Grid",
                  "Urban Traffic Density",
                  "Industrial Emission Layer",
                  "School Protection Network",
                  "Hospital Exposure Forecast",
                  "AI Airflow Simulation",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-between p-4 rounded-2xl border border-[#29463A] bg-[#0D1814]"
                  >
                    <span className="text-[#DDF5E8]">
                      {item}
                    </span>

                    <span className="text-[#8FD8AF]">
                      Online
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}