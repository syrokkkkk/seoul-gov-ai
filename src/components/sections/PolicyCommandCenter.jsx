import {
  ShieldAlert,
  Building2,
  TrafficCone,
  Trees,
  Activity,
  Siren,
} from "lucide-react";

const actions = [
  {
    icon: <TrafficCone size={28} />,
    title: "Reduce Gangnam Traffic Volume",
    status: "Recommended",
    impact: "-18% PM2.5",
    priority: "High",
  },
  {
    icon: <Trees size={28} />,
    title: "Expand Green Corridor Network",
    status: "Approved",
    impact: "-11% Exposure",
    priority: "Medium",
  },
  {
    icon: <Building2 size={28} />,
    title: "Delay Central Construction Activity",
    status: "Critical",
    impact: "-9% Pollution",
    priority: "High",
  },
  {
    icon: <ShieldAlert size={28} />,
    title: "Activate School Protection Protocol",
    status: "Active",
    impact: "42 Schools Protected",
    priority: "Critical",
  },
];

const alerts = [
  {
    district: "Jongno",
    message: "PM2.5 spike detected near hospital corridor.",
    level: "Critical",
  },
  {
    district: "Mapo",
    message: "Optimal airflow conditions for eco-development.",
    level: "Stable",
  },
  {
    district: "Gangnam",
    message: "Traffic emissions exceeded AI threshold.",
    level: "Warning",
  },
];

export default function PolicyCommandCenter() {
  return (
    <section className="relative py-32">

      <div className="section-container">

        <div className="flex items-center justify-between flex-wrap gap-8">

          <div>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A]/70 text-[#90B9A4] text-sm uppercase tracking-[0.2em]">
              AI Policy Command Center
            </div>

            <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em] max-w-4xl">
              Real-Time Government Pollution Response Infrastructure
            </h2>
          </div>

          <div className="glass-panel rounded-[28px] px-8 py-6 border border-[#29463A]">

            <div className="flex items-center gap-4">

              <div className="w-4 h-4 rounded-full bg-[#6DDB8B] animate-pulse" />

              <div>
                <p className="text-[#DDF5E8] font-semibold">
                  AI Decision Engine Online
                </p>

                <p className="text-[#7C968A] text-sm mt-1">
                  Seoul Metropolitan Environmental Network
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.3fr_0.7fr] gap-10 mt-20">

          <div className="space-y-8">

            {actions.map((action) => (
              <div
                key={action.title}
                className="glass-panel rounded-[34px] p-8 border border-[#22372E]"
              >
                <div className="flex items-start justify-between gap-8">

                  <div className="flex gap-6">

                    <div className="w-16 h-16 rounded-2xl bg-[#10211A] border border-[#29463A] flex items-center justify-center text-[#9ED8B6]">
                      {action.icon}
                    </div>

                    <div>

                      <div className="flex items-center gap-3 flex-wrap">

                        <h3 className="text-2xl font-bold">
                          {action.title}
                        </h3>

                        <span className="px-3 py-1 rounded-full bg-[#13261E] border border-[#315847] text-[#8FD8AF] text-sm">
                          {action.status}
                        </span>
                      </div>

                      <div className="flex gap-6 mt-5 text-[#80998D]">

                        <div>
                          Impact:
                          <span className="text-[#DDF5E8] ml-2">
                            {action.impact}
                          </span>
                        </div>

                        <div>
                          Priority:
                          <span className="text-[#DDF5E8] ml-2">
                            {action.priority}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="px-6 py-3 rounded-2xl bg-[#8FD8AF] text-[#07110D] font-semibold hover:scale-105 transition-all duration-300">
                    Execute
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">

            <div className="glass-panel rounded-[34px] p-8 border border-[#22372E]">

              <div className="flex items-center gap-4">

                <Siren className="text-[#D96C5C]" />

                <h3 className="text-2xl font-bold">
                  Live Incident Feed
                </h3>
              </div>

              <div className="space-y-6 mt-10">

                {alerts.map((alert) => (
                  <div
                    key={alert.message}
                    className="p-5 rounded-2xl border border-[#29463A] bg-[#0C1713]"
                  >
                    <div className="flex items-center justify-between">

                      <p className="font-semibold text-[#DDF5E8]">
                        {alert.district}
                      </p>

                      <span className="text-sm text-[#8FB6A2]">
                        {alert.level}
                      </span>
                    </div>

                    <p className="text-[#7F998D] mt-3 leading-relaxed">
                      {alert.message}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel rounded-[34px] p-8 border border-[#22372E]">

              <div className="flex items-center gap-4">

                <Activity className="text-[#8FD8AF]" />

                <h3 className="text-2xl font-bold">
                  AI Response Status
                </h3>
              </div>

              <div className="space-y-7 mt-10">

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#80998D]">
                      Mitigation Efficiency
                    </span>

                    <span className="text-[#DDF5E8]">
                      82%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-[#13211B] overflow-hidden">
                    <div className="h-full w-[82%] bg-[#8FD8AF]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#80998D]">
                      District Stability
                    </span>

                    <span className="text-[#DDF5E8]">
                      71%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-[#13211B] overflow-hidden">
                    <div className="h-full w-[71%] bg-[#5EA4FF]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#80998D]">
                      Exposure Reduction
                    </span>

                    <span className="text-[#DDF5E8]">
                      64%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-[#13211B] overflow-hidden">
                    <div className="h-full w-[64%] bg-[#D96C5C]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}