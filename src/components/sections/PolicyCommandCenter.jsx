import { useState } from "react";

import {
  Shield,
  Trees,
  Building2,
  Siren,
} from "lucide-react";

const initialPolicies = [
  {
    id: 1,
    title: "Reduce Gangnam Traffic Volume",
    impact: "-18% PM2.5",
    priority: "High",
    status: "Recommended",
    icon: <Building2 size={18} />,
  },

  {
    id: 2,
    title: "Expand Green Corridor Network",
    impact: "-11% Exposure",
    priority: "Medium",
    status: "Approved",
    icon: <Trees size={18} />,
  },

  {
    id: 3,
    title: "Delay Central Construction Activity",
    impact: "-9% Pollution",
    priority: "High",
    status: "Critical",
    icon: <Shield size={18} />,
  },

  {
    id: 4,
    title: "Activate School Protection Protocol",
    impact: "42 Schools Protected",
    priority: "Critical",
    status: "Active",
    icon: <Siren size={18} />,
  },
];

export default function PolicyCommandCenter() {

  const [policies, setPolicies] =
    useState(initialPolicies);

  const [logs, setLogs] =
    useState([
      "[AI SYSTEM] Seoul environmental network initialized.",
    ]);

  const [metrics, setMetrics] =
    useState({
      mitigation: 82,
      stability: 71,
      exposure: 64,
    });

  const executePolicy = (id, title) => {

    setPolicies((prev) =>
      prev.map((policy) =>
        policy.id === id
          ? {
              ...policy,
              deployed: true,
            }
          : policy
      )
    );

    setMetrics((prev) => ({
      mitigation: Math.min(
        100,
        prev.mitigation + 4
      ),

      stability: Math.min(
        100,
        prev.stability + 3
      ),

      exposure: Math.min(
        100,
        prev.exposure + 5
      ),
    }));

    setLogs((prev) => [
      `[AI SYSTEM] ${title} deployed successfully.`,
      ...prev,
    ]);
  };

  return (

    <section className="relative py-32 overflow-hidden">

      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="section-container relative z-10">

        <div className="grid lg:grid-cols-[1fr_420px] gap-12">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A]/70 text-[#90B9A4] text-sm uppercase tracking-[0.2em]">
              AI Policy Command Center
            </div>

            <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em] leading-tight max-w-5xl">
              Real-Time Government Pollution
              Response Infrastructure
            </h2>

            <p className="text-[#80998D] text-xl max-w-3xl mt-8 leading-relaxed">
              AI-driven environmental response system
              for urban mitigation, sustainability stabilization,
              and vulnerable population protection.
            </p>

            {/* POLICIES */}

            <div className="space-y-6 mt-16">

              {policies.map((policy) => (

                <div
                  key={policy.id}
                  className={`rounded-[30px] border p-6 transition-all duration-500 ${
                    policy.deployed
                      ? "border-[#67C587] bg-[#0E1B14]"
                      : "border-[#29463A] bg-[#08110D]"
                  }`}
                >

                  <div className="flex items-center justify-between gap-6">

                    <div className="flex items-center gap-5">

                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${
                          policy.deployed
                            ? "border-[#67C587] text-[#67C587]"
                            : "border-[#29463A] text-[#8FD6A9]"
                        }`}
                      >
                        {policy.icon}
                      </div>

                      <div>

                        <div className="flex items-center gap-3 flex-wrap">

                          <h3 className="text-2xl font-bold">
                            {policy.title}
                          </h3>

                          <div
                            className={`px-3 py-1 rounded-full text-xs uppercase tracking-[0.14em] border ${
                              policy.deployed
                                ? "border-[#67C587] text-[#67C587]"
                                : "border-[#29463A] text-[#8FD6A9]"
                            }`}
                          >
                            {policy.deployed
                              ? "DEPLOYED"
                              : policy.status}
                          </div>

                        </div>

                        <div className="flex gap-6 mt-4 text-sm text-[#8DAA9C]">

                          <span>
                            Impact:
                            {" "}
                            {policy.impact}
                          </span>

                          <span>
                            Priority:
                            {" "}
                            {policy.priority}
                          </span>

                        </div>

                      </div>

                    </div>

                    <button
                      disabled={policy.deployed}
                      onClick={() =>
                        executePolicy(
                          policy.id,
                          policy.title
                        )
                      }
                      className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                        policy.deployed
                          ? "bg-[#173127] text-[#67C587] cursor-default"
                          : "bg-[#8FD6A9] text-[#07110D] hover:scale-105"
                      }`}
                    >
                      {policy.deployed
                        ? "Deployed"
                        : "Execute"}
                    </button>

                  </div>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}

          <div className="space-y-8">

            {/* AI STATUS */}

            <div className="rounded-[32px] border border-[#29463A] bg-[#08110D] p-8">

              <div className="flex items-center gap-3">

                <div className="w-3 h-3 rounded-full bg-[#67FFB3] animate-pulse" />

                <p className="text-[#8FD6A9] font-semibold">
                  AI Decision Engine Online
                </p>

              </div>

              <p className="text-[#8DAA9C] mt-4">
                Seoul Metropolitan Environmental Network
              </p>

            </div>

            {/* LIVE INCIDENT FEED */}

            <div className="rounded-[32px] border border-[#29463A] bg-[#08110D] p-8">

              <h3 className="text-2xl font-bold">
                Live AI Deployment Feed
              </h3>

              <div className="space-y-4 mt-8 max-h-[320px] overflow-y-auto">

                {logs.map((log, index) => (

                  <div
                    key={index}
                    className="rounded-2xl border border-[#29463A] bg-[#10211A] p-4 text-[#8FD6A9] text-sm"
                  >
                    {log}
                  </div>

                ))}

              </div>

            </div>

            {/* METRICS */}

            <div className="rounded-[32px] border border-[#29463A] bg-[#08110D] p-8">

              <h3 className="text-2xl font-bold">
                AI Response Status
              </h3>

              <div className="space-y-8 mt-10">

                <div>

                  <div className="flex justify-between mb-3">

                    <span className="text-[#8DAA9C]">
                      Mitigation Efficiency
                    </span>

                    <span>
                      {metrics.mitigation}%
                    </span>

                  </div>

                  <div className="h-3 rounded-full bg-[#10211A] overflow-hidden">

                    <div
                      className="h-full bg-[#8FD6A9] transition-all duration-700"
                      style={{
                        width: `${metrics.mitigation}%`,
                      }}
                    />

                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-3">

                    <span className="text-[#8DAA9C]">
                      District Stability
                    </span>

                    <span>
                      {metrics.stability}%
                    </span>

                  </div>

                  <div className="h-3 rounded-full bg-[#10211A] overflow-hidden">

                    <div
                      className="h-full bg-[#7BC7FF] transition-all duration-700"
                      style={{
                        width: `${metrics.stability}%`,
                      }}
                    />

                  </div>

                </div>

                <div>

                  <div className="flex justify-between mb-3">

                    <span className="text-[#8DAA9C]">
                      Exposure Reduction
                    </span>

                    <span>
                      {metrics.exposure}%
                    </span>

                  </div>

                  <div className="h-3 rounded-full bg-[#10211A] overflow-hidden">

                    <div
                      className="h-full bg-[#FF7B72] transition-all duration-700"
                      style={{
                        width: `${metrics.exposure}%`,
                      }}
                    />

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