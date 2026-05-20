import {
  Activity,
  AlertTriangle,
  Shield,
  Satellite,
  Wind,
  School,
  Hospital,
} from "lucide-react";

import { useState, useEffect } from "react";

const liveAlerts = [

  {
    title: "Mapo Wind Shift Detected",
    description:
      "Western airflow simulation predicts pollution transport movement toward central Seoul transportation corridors.",
    status: "Monitoring",
  },

  {
    title: "Gangnam PM2.5 Spike",
    description:
      "High-density traffic emissions detected near southern business districts.",
    status: "Critical",
  },

  {
    title: "Hospital Protection Activated",
    description:
      "AI automatically restricted heavy transport near vulnerable medical infrastructure.",
    status: "Protected",
  },

  {
    title: "School Safety Response",
    description:
      "Temporary low-emission corridor activated around education zones.",
    status: "Active",
  },

  {
    title: "Industrial Airflow Alert",
    description:
      "Eastern industrial wind movement increasing particulate accumulation.",
    status: "Elevated",
  },

];

export default function OperationsCenter() {

  const [alertIndex, setAlertIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      setAlertIndex((prev) =>
        prev === liveAlerts.length - 1
          ? 0
          : prev + 1
      );

    }, 2500);

    return () => clearInterval(interval);

  }, []);

  const currentAlert = liveAlerts[alertIndex];

  return (
    <section
      id="operations-center"
      className="relative py-32 overflow-hidden"
    >

      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="section-container relative z-10">

        <div className="max-w-5xl">

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A]/70 text-[#90B9A4] text-sm uppercase tracking-[0.2em]">
            Seoul Environmental Operations Center
          </div>

          <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em] leading-tight">
            Live Environmental Incident Monitoring
          </h2>

          <p className="text-[#80998D] text-xl max-w-4xl mt-8 leading-relaxed">
            Real-time operational intelligence for pollution events,
            vulnerable population protection, atmospheric forecasting,
            and emergency mitigation response coordination.
          </p>

        </div>

        <div className="grid lg:grid-cols-[1.4fr_320px] gap-10 mt-20">

          {/* LEFT PANEL */}

          <div className="glass-panel rounded-[40px] p-8 relative overflow-hidden">

            <div className="flex items-center justify-between">

              <div>

                <p className="uppercase tracking-[0.18em] text-[#82A796] text-sm">
                  Live Incident Feed
                </p>

                <h3 className="text-4xl font-bold mt-4">
                  Environmental Alert System
                </h3>

              </div>

              <div className="px-5 py-3 rounded-full border border-[#315847] bg-[#12211A] text-[#A4D1B8] text-sm">
                LIVE RESPONSE GRID
              </div>

            </div>

            {/* MAP */}

            <div className="relative h-[620px] rounded-[36px] overflow-hidden border border-[#29463A] mt-10">

              <img
                src="https://a.tile.openstreetmap.org/11/1758/806.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover scale-[2.1] opacity-40"
                style={{
                  objectPosition: "center center",
                }}
              />

              <div className="absolute inset-0 bg-[#07110D]/35" />

              <div className="absolute inset-0 grid-overlay opacity-20" />

              {/* HEAT ZONES */}

              <div className="absolute top-[14%] left-[18%] w-44 h-44 rounded-full bg-[#FF7B72]/30 blur-[60px]" />

              <div className="absolute top-[36%] left-[52%] w-52 h-52 rounded-full bg-[#FFB86B]/30 blur-[70px]" />

              <div className="absolute bottom-[18%] left-[26%] w-56 h-56 rounded-full bg-[#67C587]/25 blur-[70px]" />

              <div className="absolute bottom-[12%] right-[12%] w-52 h-52 rounded-full bg-[#7BC7FF]/25 blur-[70px]" />

              {/* FLOW LINES */}

              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1000 620"
              >

                <path
                  d="M90 120 C260 180, 420 360, 640 420 C820 470, 920 520, 980 620"
                  stroke="#7BC7FF"
                  strokeWidth="7"
                  fill="none"
                  strokeDasharray="18 16"
                  strokeLinecap="round"
                />

                <path
                  d="M120 520 C320 360, 460 260, 640 280 C760 290, 860 250, 980 120"
                  stroke="#8FD6A9"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="22 16"
                  strokeLinecap="round"
                />

              </svg>

              {/* ICONS */}

              {[
                ["10%", "18%", <School size={16} />, "#7BC7FF"],
                ["14%", "32%", <Hospital size={16} />, "#8FD6A9"],
                ["18%", "48%", <Wind size={16} />, "#FFB86B"],
                ["22%", "64%", <Activity size={16} />, "#8FD6A9"],
                ["28%", "78%", <Shield size={16} />, "#7BC7FF"],

                ["34%", "22%", <School size={16} />, "#67C587"],
                ["38%", "36%", <Hospital size={16} />, "#7BC7FF"],
                ["42%", "52%", <Wind size={16} />, "#FF7B72"],
                ["46%", "68%", <Activity size={16} />, "#FFB86B"],
                ["50%", "84%", <Shield size={16} />, "#8FD6A9"],

                ["56%", "18%", <Satellite size={16} />, "#7BC7FF"],
                ["60%", "34%", <School size={16} />, "#67C587"],

                ["22%", "86%", <Wind size={16} />, "#8FD6A9"],
                ["30%", "90%", <Shield size={16} />, "#FF7B72"],

                ["76%", "26%", <Shield size={16} />, "#7BC7FF"],
                ["80%", "42%", <School size={16} />, "#67C587"],

              ].map((node, i) => {

                const topValue = parseInt(node[0]);

                return (
                  <div
                    key={i}
                    className="absolute"
                    style={{
                      top: node[0],
                      left: node[1],
                      transform:
                        topValue > 58
                          ? "translateY(-120px)"
                          : "translateY(0px)",
                    }}
                  >

                    <div
                      className="absolute rounded-full blur-2xl opacity-50 animate-pulse"
                      style={{
                        background: node[3],
                        width: "70px",
                        height: "70px",
                        transform: "translate(-18px, -18px)",
                      }}
                    />

                    <div
                      className="relative z-10 w-12 h-12 rounded-full bg-[#07110D] border border-[#29463A] flex items-center justify-center shadow-2xl"
                      style={{
                        color: node[3],
                      }}
                    >
                      {node[2]}
                    </div>

                  </div>
                );
              })}

              {/* ALERT BLOCK */}

              <div className="absolute left-6 right-6 bottom-6 rounded-[30px] border border-[#4B2727] bg-[#07110D]/92 backdrop-blur-xl p-6 z-20">

                <div className="flex items-center justify-between gap-8">

                  <div className="flex items-start gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-[#3A1717] flex items-center justify-center text-[#FF7B72]">
                      <AlertTriangle size={30} />
                    </div>

                    <div>

                      <p className="uppercase tracking-[0.18em] text-[#D68B84] text-sm">
                        Live Environmental Alert
                      </p>

                      <h4 className="text-4xl font-bold mt-3">
                        {currentAlert.title}
                      </h4>

                      <p className="text-[#93AA9D] mt-4 text-lg leading-relaxed max-w-3xl">
                        {currentAlert.description}
                      </p>

                    </div>

                  </div>

                  <div className="text-right">

                    <p className="text-[#9CB5A8] uppercase text-sm tracking-[0.18em]">
                      Status
                    </p>

                    <h3 className="text-5xl font-bold mt-4 text-[#FF7B72]">
                      {currentAlert.status}
                    </h3>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-8">

            <div className="glass-panel rounded-[32px] p-8">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#173127] flex items-center justify-center">
                  <Satellite className="text-[#8FD6A9]" size={28} />
                </div>

                <div>

                  <p className="uppercase tracking-[0.18em] text-[#8DAA9C] text-sm">
                    Satellite Systems
                  </p>

                  <h3 className="text-5xl font-bold mt-2">
                    Online
                  </h3>

                </div>

              </div>

            </div>

            <div className="glass-panel rounded-[32px] p-8">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#173127] flex items-center justify-center">
                  <Activity className="text-[#8FD6A9]" size={28} />
                </div>

                <div>

                  <p className="uppercase tracking-[0.18em] text-[#8DAA9C] text-sm">
                    AI Systems
                  </p>

                  <h3 className="text-5xl font-bold mt-2">
                    28 Models Active
                  </h3>

                </div>

              </div>

            </div>

            <div className="glass-panel rounded-[32px] p-8 border border-[#4B2727]">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#3A1717] flex items-center justify-center text-[#FF7B72]">
                  <AlertTriangle size={28} />
                </div>

                <div>

                  <p className="uppercase tracking-[0.18em] text-[#D68B84] text-sm">
                    Emergency Response
                  </p>

                  <h3 className="text-5xl font-bold mt-2">
                    Elevated Risk
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}