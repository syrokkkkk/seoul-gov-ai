import {
  Building2,
  School,
  Hospital,
  Trees,
  Factory,
  Plane,
  Train,
  Truck,
  ShieldAlert,
} from "lucide-react";

const liveLocations = [

  { name: "Gangnam Station", top: "18%", left: "34%", color: "bg-[#FF7B72]", icon: <Factory size={18} /> },
  { name: "Seocho Medical", top: "22%", left: "42%", color: "bg-[#8FD6A9]", icon: <Hospital size={18} /> },
  { name: "Mapo Green Zone", top: "68%", left: "24%", color: "bg-[#8FD6A9]", icon: <Trees size={18} /> },
  { name: "Yongsan Logistics", top: "40%", left: "58%", color: "bg-[#FFB86B]", icon: <Truck size={18} /> },
  { name: "Songpa Residential", top: "74%", left: "66%", color: "bg-[#7BC7FF]", icon: <Building2 size={18} /> },
  { name: "Hongdae Education", top: "28%", left: "20%", color: "bg-[#7BC7FF]", icon: <School size={18} /> },
  { name: "Airport Corridor", top: "82%", left: "44%", color: "bg-[#FF7B72]", icon: <Plane size={18} /> },
  { name: "Jongno Subway Hub", top: "50%", left: "46%", color: "bg-[#8FD6A9]", icon: <Train size={18} /> },

  { name: "Gangseo Industrial", top: "72%", left: "12%", color: "bg-[#FF7B72]", icon: <Factory size={16} /> },
  { name: "Dongdaemun Market", top: "46%", left: "56%", color: "bg-[#FFB86B]", icon: <Building2 size={16} /> },
  { name: "Itaewon Mobility", top: "52%", left: "38%", color: "bg-[#7BC7FF]", icon: <Truck size={16} /> },
  { name: "Seoul Forest", top: "58%", left: "70%", color: "bg-[#8FD6A9]", icon: <Trees size={16} /> },
  { name: "Gangbuk Schools", top: "16%", left: "52%", color: "bg-[#7BC7FF]", icon: <School size={16} /> },
  { name: "Nowon Hospital", top: "12%", left: "66%", color: "bg-[#8FD6A9]", icon: <Hospital size={16} /> },
  { name: "Guro Digital Hub", top: "74%", left: "30%", color: "bg-[#FFB86B]", icon: <Building2 size={16} /> },
  { name: "Han River Corridor", top: "54%", left: "48%", color: "bg-[#8FD6A9]", icon: <Trees size={16} /> },

  { name: "Yeouido Finance", top: "50%", left: "28%", color: "bg-[#7BC7FF]", icon: <Building2 size={16} /> },
  { name: "Jamsil Stadium", top: "66%", left: "72%", color: "bg-[#FFB86B]", icon: <Building2 size={16} /> },
  { name: "University Cluster", top: "38%", left: "24%", color: "bg-[#7BC7FF]", icon: <School size={16} /> },
  { name: "Bukchon Airflow", top: "36%", left: "50%", color: "bg-[#8FD6A9]", icon: <Trees size={16} /> },

  { name: "Smart Traffic AI", top: "62%", left: "40%", color: "bg-[#FF7B72]", icon: <Truck size={16} /> },
  { name: "Industrial Monitoring", top: "64%", left: "58%", color: "bg-[#FF7B72]", icon: <Factory size={16} /> },
  { name: "Emergency Medical", top: "30%", left: "72%", color: "bg-[#8FD6A9]", icon: <Hospital size={16} /> },
  { name: "Green Recovery", top: "78%", left: "54%", color: "bg-[#8FD6A9]", icon: <Trees size={16} /> },

  { name: "Transit Monitoring", top: "42%", left: "44%", color: "bg-[#7BC7FF]", icon: <Train size={16} /> },
  { name: "AI School Protection", top: "58%", left: "18%", color: "bg-[#7BC7FF]", icon: <School size={16} /> },
  { name: "Urban Heat Cluster", top: "48%", left: "64%", color: "bg-[#FF7B72]", icon: <Factory size={16} /> },
  { name: "Respiratory Center", top: "24%", left: "58%", color: "bg-[#8FD6A9]", icon: <Hospital size={16} /> },

];

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
            AI Environmental Command Center
          </h2>

          <p className="text-[#80998D] text-xl max-w-4xl mt-8 leading-relaxed">
            Real-time PM2.5 forecasting, vulnerable population monitoring,
            atmospheric flow simulation, and government mitigation response
            systems across Seoul metropolitan districts.
          </p>

        </div>

        <div className="grid lg:grid-cols-[1.2fr_420px] gap-10">

          {/* MAP */}

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

              <div className="px-5 py-3 rounded-full border border-[#315847] bg-[#12211A] text-[#A4D1B8] text-sm animate-pulse">
                LIVE SATELLITE FEED
              </div>

            </div>

            {/* MAP */}

            <div className="relative h-[950px] rounded-[32px] overflow-hidden border border-[#1E352B]">

              <img
                src="https://a.tile.openstreetmap.org/11/1758/806.png"
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-40 scale-125"
              />

              <div className="absolute inset-0 bg-[#07110D]/20" />

              {/* GRID */}

              <div className="absolute inset-0 grid-overlay opacity-20" />

              {/* HEAT ZONES */}

              <div className="absolute top-[120px] left-[180px] w-72 h-72 rounded-full bg-[#FF5E57]/50 blur-[90px] animate-pulse" />

              <div className="absolute top-[380px] right-[160px] w-80 h-80 rounded-full bg-[#FF5E57]/50 blur-[90px] animate-pulse" />

              <div className="absolute bottom-[160px] left-[220px] w-80 h-80 rounded-full bg-[#67C587]/40 blur-[90px]" />

              <div className="absolute bottom-[120px] right-[220px] w-72 h-72 rounded-full bg-[#E5B95E]/40 blur-[90px]" />

              {/* AIRFLOW */}

              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 1000 950"
              >

                <path
                  d="M100 760 C300 660, 400 540, 580 440 C700 360, 820 240, 940 120"
                  stroke="#8FD6A9"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray="20 18"
                  strokeLinecap="round"
                />

                <path
                  d="M120 200 C300 260, 420 320, 600 420 C740 500, 820 620, 920 860"
                  stroke="#7BC7FF"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray="16 16"
                  strokeLinecap="round"
                />

              </svg>

              {/* LIVE LOCATIONS */}

              {liveLocations.map((location, index) => (

                <div
                  key={index}
                  className="absolute group"
                  style={{
                    top: location.top,
                    left: location.left,
                  }}
                >

                  <div className={`absolute -inset-4 rounded-full opacity-40 blur-xl ${location.color} animate-ping`} />

                  <div className="relative z-10 w-12 h-12 rounded-full bg-[#08110D] border border-[#28463B] flex items-center justify-center text-white shadow-2xl">

                    {location.icon}

                  </div>

                  <div className="absolute left-14 top-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-20">

                    <div className="bg-[#08110D] border border-[#28463B] rounded-2xl px-5 py-4 w-[220px] shadow-2xl">

                      <p className="text-[#8AA398] text-xs uppercase tracking-[0.18em]">
                        Live Zone
                      </p>

                      <h4 className="text-lg font-bold mt-2">
                        {location.name}
                      </h4>

                      <p className="text-[#FFB86B] mt-2 text-sm">
                        AI monitoring active
                      </p>

                    </div>

                  </div>

                </div>

              ))}

              {/* ALERT */}

              <div className="absolute bottom-8 left-8 right-8 bg-[#08110D]/90 border border-[#28463B] rounded-[28px] px-8 py-6 backdrop-blur-xl flex items-center justify-between">

                <div className="flex items-center gap-5">

                  <div className="w-16 h-16 rounded-2xl bg-[#3A1717] flex items-center justify-center text-[#FF7B72] animate-pulse">

                    <ShieldAlert size={32} />

                  </div>

                  <div>

                    <p className="uppercase tracking-[0.18em] text-[#80998D] text-sm">
                      Government Alert
                    </p>

                    <h4 className="text-2xl font-bold mt-2">
                      Elevated PM2.5 detected near Gangnam transport corridor
                    </h4>

                  </div>

                </div>

                <div className="text-right">

                  <p className="text-[#80998D] text-sm">
                    AI Confidence
                  </p>

                  <h4 className="text-4xl font-bold text-[#8FD6A9] mt-2">
                    96%
                  </h4>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="space-y-8">

            <div className="glass-panel rounded-[32px] p-8">

              <p className="uppercase tracking-[0.18em] text-[#8DAA9C] text-sm">
                LIVE AI STATUS
              </p>

              <div className="mt-8 space-y-6">

                <div className="flex items-center justify-between">
                  <span className="text-[#8AA398]">
                    PM2.5 Index
                  </span>

                  <span className="text-3xl font-bold text-[#FF7B72]">
                    312 AQI
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#8AA398]">
                    Live Sensors
                  </span>

                  <span className="text-3xl font-bold">
                    12,482
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#8AA398]">
                    Wind Direction
                  </span>

                  <span className="text-2xl font-bold text-[#8FD6A9]">
                    South-West
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#8AA398]">
                    Forecast Accuracy
                  </span>

                  <span className="text-2xl font-bold text-[#7BC7FF]">
                    96%
                  </span>
                </div>

              </div>

            </div>

            <div className="glass-panel rounded-[32px] p-8">

              <p className="uppercase tracking-[0.18em] text-[#8DAA9C] text-sm">
                GOVERNMENT RESPONSE LAYER
              </p>

              <div className="mt-8 space-y-5">

                <div className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5">
                  Vehicle restriction protocol activated
                </div>

                <div className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5">
                  AI traffic rerouting in Gangnam district
                </div>

                <div className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5">
                  School exposure protection enabled
                </div>

                <div className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5">
                  Atmospheric airflow optimization active
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}