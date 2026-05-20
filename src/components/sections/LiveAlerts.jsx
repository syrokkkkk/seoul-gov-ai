import { useState } from "react";

import {
  AlertTriangle,
  Factory,
  Wind,
  TrafficCone,
  Shield,
  Activity,
} from "lucide-react";

const initialAlerts = [
  {
    id: 1,
    title: "PM2.5 Surge Detected",
    district: "Gangnam",
    time: "2 min ago",
    level: "Critical",
    description:
      "AI sensors detected elevated PM2.5 concentration near central traffic corridors.",
    icon: AlertTriangle,
    color: "#FF7B72",
    resolved: false,
  },

  {
    id: 2,
    title: "Industrial Emission Event",
    district: "Yongsan",
    time: "11 min ago",
    level: "High",
    description:
      "Industrial particulate emissions exceeded predictive environmental thresholds.",
    icon: Factory,
    color: "#FFB86B",
    resolved: false,
  },

  {
    id: 3,
    title: "Atmospheric Shift",
    district: "Mapo",
    time: "18 min ago",
    level: "Moderate",
    description:
      "Western airflow conditions improving pollution dispersion efficiency.",
    icon: Wind,
    color: "#67C587",
    resolved: false,
  },

  {
    id: 4,
    title: "Traffic Congestion Increase",
    district: "Jongno",
    time: "24 min ago",
    level: "Warning",
    description:
      "AI predicts elevated commuter emissions during peak urban mobility cycle.",
    icon: TrafficCone,
    color: "#7BC7FF",
    resolved: false,
  },
];

export default function LiveAlerts() {

  const [alerts, setAlerts] =
    useState(initialAlerts);

  const [mitigation, setMitigation] =
    useState(82);

  const [stability, setStability] =
    useState(71);

  const [exposure, setExposure] =
    useState(64);

  const [systemLogs, setSystemLogs] =
    useState([]);

  const investigateAlert = (id, title) => {

    setAlerts((prev) =>
      prev.map((alert) =>
        alert.id === id
          ? {
              ...alert,
              resolved: true,
              level: "Resolved",
            }
          : alert
      )
    );

    setMitigation((prev) =>
      Math.min(100, prev + 4)
    );

    setStability((prev) =>
      Math.min(100, prev + 6)
    );

    setExposure((prev) =>
      Math.min(100, prev + 3)
    );

    setSystemLogs((prev) => [

      {
        id: Date.now(),

        text:
          `[AI RESPONSE] ${title} mitigation protocol activated successfully.`,

      },

      ...prev,

    ]);
  };

  return (

    <section className="relative py-32 overflow-hidden">

      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="section-container relative z-10">

        <div className="max-w-5xl">

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A]/70 text-[#90B9A4] text-sm uppercase tracking-[0.2em]">
            LIVE ENVIRONMENTAL INCIDENT FEED
          </div>

          <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em] leading-tight">
            Real-Time AI Pollution Monitoring
          </h2>

          <p className="text-[#80998D] text-xl max-w-4xl mt-8 leading-relaxed">
            Government AI systems continuously monitor environmental instability,
            traffic emissions, industrial pollution events,
            and vulnerable population exposure across Seoul.
          </p>

        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10 mt-20">

          {/* LEFT */}

          <div className="space-y-6">

            {alerts.map((alert) => {

              const Icon = alert.icon;

              return (

                <div
                  key={alert.id}
                  className="rounded-[32px] border border-[#29463A] bg-[#08110D] p-8"
                >

                  <div className="flex items-start justify-between gap-6">

                    <div className="flex gap-5">

                      <div
                        className="w-14 h-14 rounded-2xl border flex items-center justify-center"
                        style={{
                          borderColor: `${alert.color}55`,
                          background: `${alert.color}10`,
                        }}
                      >
                        <Icon
                          size={24}
                          style={{
                            color: alert.color,
                          }}
                        />
                      </div>

                      <div>

                        <div className="flex items-center gap-4 flex-wrap">

                          <h3 className="text-2xl font-bold">
                            {alert.title}
                          </h3>

                          <div
                            className="px-4 py-2 rounded-full text-xs uppercase tracking-[0.15em]"
                            style={{
                              background: `${alert.color}15`,
                              color: alert.color,
                              border: `1px solid ${alert.color}55`,
                            }}
                          >
                            {alert.level}
                          </div>

                        </div>

                        <div className="flex gap-6 mt-4 text-sm text-[#8DAA9C]">

                          <span>
                            District:
                            {" "}
                            {alert.district}
                          </span>

                          <span>
                            Time:
                            {" "}
                            {alert.time}
                          </span>

                        </div>

                        <p className="text-[#8DAA9C] mt-6 leading-relaxed">
                          {alert.description}
                        </p>

                      </div>

                    </div>

                    <button
                      disabled={alert.resolved}
                      onClick={() =>
                        investigateAlert(
                          alert.id,
                          alert.title
                        )
                      }
                      className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                        alert.resolved
                          ? "bg-[#173127] text-[#67C587]"
                          : "bg-[#A8F5C5] text-[#07110D] hover:scale-105"
                      }`}
                    >

                      {alert.resolved
                        ? "Resolved"
                        : "Investigate"}

                    </button>

                  </div>

                </div>

              );

            })}

          </div>

          {/* RIGHT */}

          <div className="space-y-8">

            {/* STATUS */}

            <div className="rounded-[32px] border border-[#29463A] bg-[#08110D] p-8">

              <div className="flex items-center gap-3">

                <Shield className="text-[#8FD6A9]" />

                <h3 className="text-2xl font-bold">
                  AI Protection Status
                </h3>

              </div>

              <div className="space-y-8 mt-10">

                <div>

                  <div className="flex justify-between mb-3">
                    <span className="text-[#8DAA9C]">
                      Vulnerable Zone Protection
                    </span>

                    <span>
                      {mitigation}%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-[#10211A] overflow-hidden">

                    <div
                      className="h-full bg-[#8FD6A9]"
                      style={{
                        width: `${mitigation}%`,
                      }}
                    />

                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-3">
                    <span className="text-[#8DAA9C]">
                      Emergency Response Readiness
                    </span>

                    <span>
                      {stability}%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-[#10211A] overflow-hidden">

                    <div
                      className="h-full bg-[#6AA8FF]"
                      style={{
                        width: `${stability}%`,
                      }}
                    />

                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-3">
                    <span className="text-[#8DAA9C]">
                      District Monitoring Stability
                    </span>

                    <span>
                      {exposure}%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-[#10211A] overflow-hidden">

                    <div
                      className="h-full bg-[#FF8A72]"
                      style={{
                        width: `${exposure}%`,
                      }}
                    />

                  </div>

                </div>

              </div>

            </div>

            {/* AI LOGS */}

            <div className="rounded-[32px] border border-[#29463A] bg-[#08110D] p-8">

              <div className="flex items-center gap-3">

                <Activity className="text-[#67C587]" />

                <h3 className="text-2xl font-bold">
                  AI Response Logs
                </h3>

              </div>

              <div className="space-y-4 mt-8">

                {systemLogs.length === 0 && (

                  <div className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5 text-[#8DAA9C]">
                    No active mitigation logs yet.
                  </div>

                )}

                {systemLogs.map((log) => (

                  <div
                    key={log.id}
                    className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5 text-[#8FD6A9]"
                  >
                    {log.text}
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