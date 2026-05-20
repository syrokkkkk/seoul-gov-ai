import {
  Shield,
  School,
  Hospital,
  Home,
  Users,
  AlertTriangle,
  Factory,
  Trees,
  Car,
} from "lucide-react";

import { useState } from "react";

const mapLocations = [
  {
    id: 1,
    name: "Gangnam School District",
    top: "22%",
    left: "34%",
    risk: "Critical",
    pollution: "92 AQI",
    description:
      "Heavy traffic congestion detected near elementary education corridor.",
    icon: "school",
    color: "#FF7B72",
  },

  {
    id: 2,
    name: "Yongsan Medical Zone",
    top: "48%",
    left: "56%",
    risk: "Elevated",
    pollution: "74 AQI",
    description:
      "Respiratory burden increase detected around hospital infrastructure.",
    icon: "hospital",
    color: "#7BC7FF",
  },

  {
    id: 3,
    name: "Mapo Residential Sector",
    top: "72%",
    left: "28%",
    risk: "Moderate",
    pollution: "48 AQI",
    description:
      "AI detected stable airflow and reduced PM2.5 accumulation.",
    icon: "home",
    color: "#67C587",
  },

  {
    id: 4,
    name: "Industrial East Corridor",
    top: "30%",
    left: "68%",
    risk: "High",
    pollution: "88 AQI",
    description:
      "Industrial emissions rising during peak manufacturing hours.",
    icon: "factory",
    color: "#FFB86B",
  },

  {
    id: 5,
    name: "Han River Green Buffer",
    top: "66%",
    left: "62%",
    risk: "Protected",
    pollution: "32 AQI",
    description:
      "Green airflow corridor actively reducing pollution accumulation.",
    icon: "trees",
    color: "#8FD6A9",
  },
];

const protectionZones = [
  {
    title: "Schools",
    description:
      "AI identifies elevated pollution exposure around elementary and middle school districts.",
    value: "214",
    label: "Protected Zones",
    risk: "82%",
    color: "bg-[#67C587]",
    icon: <School size={22} />,
  },

  {
    title: "Hospitals",
    description:
      "Respiratory burden forecasting across Seoul hospital infrastructure.",
    value: "78",
    label: "Active Monitoring",
    risk: "67%",
    color: "bg-[#7BC7FF]",
    icon: <Hospital size={22} />,
  },

  {
    title: "Residential Areas",
    description:
      "Population-density exposure optimization across Seoul districts.",
    value: "142",
    label: "High Density Zones",
    risk: "74%",
    color: "bg-[#8FD6A9]",
    icon: <Home size={22} />,
  },

  {
    title: "Elderly Centers",
    description:
      "AI prioritization of high-risk aging population communities.",
    value: "96",
    label: "Critical Protection",
    risk: "91%",
    color: "bg-[#FFB86B]",
    icon: <Users size={22} />,
  },
];

export default function VulnerableLayer() {
  const [activeLocation, setActiveLocation] = useState(mapLocations[0]);

  const renderIcon = (icon) => {
    switch (icon) {
      case "school":
        return <School size={18} className="text-[#7BC7FF]" />;

      case "hospital":
        return <Hospital size={18} className="text-[#8FD6A9]" />;

      case "home":
        return <Home size={18} className="text-[#67C587]" />;

      case "factory":
        return <Factory size={18} className="text-[#FFB86B]" />;

      case "trees":
        return <Trees size={18} className="text-[#9CE7B8]" />;

      default:
        return <Car size={18} className="text-white" />;
    }
  };

  return (
    <section
      id="vulnerable-layer"
      className="relative py-32 overflow-hidden"
    >
      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="section-container relative z-10">
        <div className="max-w-5xl">
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A]/70 text-[#90B9A4] text-sm uppercase tracking-[0.2em]">
            Vulnerable Population Protection Layer
          </div>

          <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em] leading-tight">
            Exposure Prioritization Intelligence
          </h2>

          <p className="text-[#80998D] text-xl max-w-4xl mt-8 leading-relaxed">
            AI-driven environmental protection system prioritizing schools,
            hospitals, elderly populations, and residential communities
            during high PM2.5 events.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_420px] gap-10 mt-20">
          {/* LEFT */}

          <div className="glass-panel rounded-[40px] p-8 relative overflow-hidden">
            {/* LIVE STATUS */}

            <div className="absolute top-8 right-8 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#67FFB3] animate-pulse" />

              <span className="text-[#9AB7A8] text-sm uppercase tracking-[0.18em]">
                LIVE PROTECTION ACTIVE
              </span>
            </div>

            <div>
              <p className="uppercase tracking-[0.18em] text-[#82A796] text-sm">
                Seoul Protection Grid
              </p>

              <h3 className="text-4xl font-bold mt-4">
                High-Priority Exposure Zones
              </h3>
            </div>

            {/* MAP */}

            <div className="relative h-[320px] rounded-[32px] overflow-hidden border border-[#29463A] mt-10">
              <img
                src="https://a.tile.openstreetmap.org/11/1758/806.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-40 scale-125"
              />

              <div className="absolute inset-0 bg-[#07110D]/20" />

              <div className="absolute inset-0 grid-overlay opacity-20" />

              {/* LOCATION PINS */}

              {mapLocations.map((location) => (
                <div
                  key={location.id}
                  onClick={() => setActiveLocation(location)}
                  className="absolute cursor-pointer transition-all duration-300 hover:scale-125"
                  style={{
                    top: location.top,
                    left: location.left,
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-full blur-2xl opacity-60 animate-pulse"
                    style={{
                      background: location.color,
                      width: "90px",
                      height: "90px",
                      transform: "translate(-25px, -25px)",
                    }}
                  />

                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#08110D] border border-[#28463B] flex items-center justify-center shadow-2xl">
                    {renderIcon(location.icon)}
                  </div>
                </div>
              ))}

              {/* SMALL FLOATING INFO PANEL */}

              <div className="absolute left-4 top-4 w-[320px] rounded-3xl border border-[#29463A] bg-[#07110D]/92 backdrop-blur-xl p-4 z-30">
                <p className="uppercase tracking-[0.18em] text-[#7E9D8C] text-[10px]">
                  Selected District
                </p>

                <div className="flex items-start justify-between gap-4 mt-2">
                  <div>
                    <h4 className="text-lg font-bold leading-tight max-w-[180px]">
                      {activeLocation.name}
                    </h4>

                    <p className="text-[#8AA798] mt-2 text-xs leading-relaxed max-w-[180px]">
                      {activeLocation.description}
                    </p>
                  </div>

                  <div className="text-right shrink-0">
                    <p className="text-[#7E9D8C] text-[10px] uppercase">
                      AQI
                    </p>

                    <h3 className="text-2xl font-bold mt-1 text-[#FF7B72] leading-none">
                      {activeLocation.pollution}
                    </h3>

                    <div className="mt-2 inline-flex px-3 py-1 rounded-full border border-[#355546] bg-[#10211A] text-[#9CE7B8] text-xs">
                      {activeLocation.risk}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CARDS */}

            <div className="grid md:grid-cols-2 gap-6 mt-10">
              {protectionZones.map((zone, index) => (
                <div
                  key={index}
                  className="rounded-[28px] border border-[#29463A] bg-[#091410]/80 p-7"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${zone.color} bg-opacity-20 flex items-center justify-center`}
                  >
                    {zone.icon}
                  </div>

                  <h4 className="text-2xl font-bold mt-6">
                    {zone.title}
                  </h4>

                  <p className="text-[#7F998D] mt-4 leading-relaxed">
                    {zone.description}
                  </p>

                  {/* RISK BAR */}

                  <div className="mt-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-[#7E9D8C]">
                        Exposure Risk
                      </span>

                      <span>
                        {zone.risk}
                      </span>
                    </div>

                    <div className="h-2 rounded-full bg-[#10211A] overflow-hidden">
                      <div
                        className="h-full bg-[#FF7B72]"
                        style={{
                          width: zone.risk,
                        }}
                      />
                    </div>
                  </div>

                  <div className="flex justify-between items-end mt-8">
                    <span className="text-[#7E9D8C]">
                      {zone.label}
                    </span>

                    <span className="text-3xl font-bold">
                      {zone.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-8">
            {/* AI SCORE */}

            <div className="glass-panel rounded-[32px] p-8">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-[#173127] flex items-center justify-center">
                  <Shield className="text-[#8FD6A9]" size={28} />
                </div>

                <div>
                  <p className="uppercase tracking-[0.18em] text-[#8DAA9C] text-sm">
                    AI Protection Score
                  </p>

                  <h3 className="text-5xl font-bold mt-2">
                    91%
                  </h3>
                </div>
              </div>

              <p className="text-[#7F998D] leading-relaxed mt-8">
                Real-time optimization of pollution mitigation around vulnerable
                population infrastructure.
              </p>
            </div>

            {/* RECOMMENDATIONS */}

            <div className="glass-panel rounded-[32px] p-8">
              <p className="uppercase tracking-[0.18em] text-[#8DAA9C] text-sm">
                AI Recommendations
              </p>

              <div className="mt-8 space-y-5">
                <div className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5">
                  <h4 className="font-semibold">
                    Expand green buffers near schools
                  </h4>

                  <p className="text-[#7F998D] mt-2 text-sm">
                    Exposure reduction estimate: 17%
                  </p>
                </div>

                <div className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5">
                  <h4 className="font-semibold">
                    Restrict heavy traffic near hospitals
                  </h4>

                  <p className="text-[#7F998D] mt-2 text-sm">
                    Respiratory burden reduction: 12%
                  </p>
                </div>

                <div className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5">
                  <h4 className="font-semibold">
                    Delay construction near elderly centers
                  </h4>

                  <p className="text-[#7F998D] mt-2 text-sm">
                    High-risk exposure reduction: 9%
                  </p>
                </div>
              </div>
            </div>

            {/* ALERT */}

            <div className="glass-panel rounded-[32px] p-8 border border-[#4B2727]">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#3A1717] flex items-center justify-center text-[#FF7B72] animate-pulse">
                  <AlertTriangle size={26} />
                </div>

                <div>
                  <p className="uppercase tracking-[0.18em] text-[#8DAA9C] text-sm">
                    Vulnerability Alert
                  </p>

                  <h3 className="text-2xl font-bold mt-2">
                    Elevated PM2.5 exposure predicted near western Seoul school districts.
                  </h3>
                </div>
              </div>

              <div className="flex justify-between items-center mt-8">
                <span className="text-[#7F998D]">
                  AI Confidence
                </span>

                <span className="text-3xl font-bold text-[#8FD6A9]">
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