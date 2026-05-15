import {
  MapContainer,
  TileLayer,
  Circle,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import {
  Factory,
  Building2,
  Trees,
  Construction,
  ShieldAlert,
  MapPinned,
  School,
  Hospital,
} from "lucide-react";

const restrictedZones = [
  {
    name: "Gangnam High Exposure Zone",
    position: [37.4979, 127.0276],
    color: "#D96C5C",
    radius: 1200,
    status: "Restricted",
    recommendation: "Avoid dense residential expansion",
    planningScore: "22/100",
    buildType: "Avoid residential towers",
  },
  {
    name: "Jongno Traffic Corridor",
    position: [37.5729, 126.9794],
    color: "#D96C5C",
    radius: 950,
    status: "High Emissions",
    recommendation: "Reduce commercial traffic load",
    planningScore: "31/100",
    buildType: "Limited redevelopment only",
  },
  {
    name: "Yongsan Construction Pressure",
    position: [37.5311, 126.981],
    color: "#E2B55D",
    radius: 850,
    status: "Moderate",
    recommendation: "Limited mixed-use construction",
    planningScore: "54/100",
    buildType: "Controlled mixed-use zoning",
  },
  {
    name: "Yeouido Financial District",
    position: [37.5219, 126.9245],
    color: "#E2B55D",
    radius: 700,
    status: "Monitoring",
    recommendation: "Expand pedestrian corridors",
    planningScore: "63/100",
    buildType: "Transit-oriented offices",
  },
  {
    name: "Mapo Green Development",
    position: [37.5637, 126.9084],
    color: "#5FA57B",
    radius: 1300,
    status: "Recommended",
    recommendation: "Priority eco-development zone",
    planningScore: "88/100",
    buildType: "Eco-residential development",
  },
  {
    name: "Seoul Forest Airflow Corridor",
    position: [37.5444, 127.0374],
    color: "#5FA57B",
    radius: 1100,
    status: "Optimal",
    recommendation: "Green corridor preservation",
    planningScore: "94/100",
    buildType: "Low-density sustainable housing",
  },
];

const aiRoutes = [
  [37.5665, 126.978],
  [37.558, 126.99],
  [37.548, 127.01],
  [37.538, 127.03],
  [37.53, 127.05],
];

const planningPoints = [
  {
    title: "High-Density Residential",
    type: "Restricted",
    position: [37.4979, 127.0276],
    impact: "High population density + pollution trapping risk",
  },
  {
    title: "Green Mobility Corridor",
    type: "Recommended",
    position: [37.5637, 126.9084],
    impact: "Optimal for airflow and low-emission transport",
  },
  {
    title: "Hospital Protection Zone",
    type: "Protected",
    position: [37.5796, 126.977],
    impact: "Construction restrictions required near hospitals",
  },
  {
    title: "Commercial Redevelopment",
    type: "Moderate",
    position: [37.5219, 126.9245],
    impact: "Suitable for moderate office expansion",
  },
  {
    title: "Industrial Expansion",
    type: "Restricted",
    position: [37.5311, 126.981],
    impact: "Industrial growth may increase PM2.5 concentration",
  },
  {
    title: "Eco Residential Zone",
    type: "Optimal",
    position: [37.5444, 127.0374],
    impact: "Best low-density housing development zone",
  },
  {
    title: "Transit-Oriented Development",
    type: "Recommended",
    position: [37.5651, 127.0011],
    impact: "Supports reduced car dependency and cleaner mobility",
  },
  {
    title: "School Safety Buffer",
    type: "Protected",
    position: [37.5512, 126.9882],
    impact: "Prioritize parks and green barriers around schools",
  },
];

export default function UrbanPlanningAI() {
  return (
    <section className="relative py-32 overflow-hidden">

      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="absolute left-[10%] top-[20%] w-[460px] h-[460px] rounded-full bg-[#1B3A2F] blur-[160px] opacity-20" />

      <div className="section-container relative z-10">

        <div className="mb-16">

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A]/70 text-[#90B9A4] text-sm uppercase tracking-[0.2em]">
            AI Urban Planning Engine
          </div>

          <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em]">
            Smart Infrastructure & Construction Planning
          </h2>

          <p className="text-[#80998D] text-xl max-w-4xl mt-8 leading-relaxed">
            AI-driven spatial planning system for evaluating
            construction viability, pollution impact,
            vulnerable population exposure,
            and environmental sustainability across Seoul.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-10">

          {/* LIVE MAP */}

          <div className="glass-panel rounded-[40px] p-8 overflow-hidden">

            <div className="flex items-center justify-between mb-8">

              <div>
                <p className="uppercase tracking-[0.18em] text-[#8AA79A] text-sm">
                  Seoul Planning Intelligence Grid
                </p>

                <h3 className="text-4xl font-bold mt-3">
                  Real-Time Construction Suitability Map
                </h3>
              </div>

              <div className="px-5 py-3 rounded-full border border-[#315847] bg-[#12211A] text-[#A7D1BA] text-sm">
                LIVE GEO-AI MODEL
              </div>
            </div>

            <div className="rounded-[32px] overflow-hidden border border-[#1E352B] h-[760px]">

              <MapContainer
                center={[37.5665, 126.978]}
                zoom={11}
                scrollWheelZoom={false}
                className="h-full w-full"
              >
                <TileLayer
                  attribution='&copy; OpenStreetMap contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {restrictedZones.map((zone) => (
                  <Circle
                    key={zone.name}
                    center={zone.position}
                    radius={zone.radius}
                    pathOptions={{
                      color: zone.color,
                      fillColor: zone.color,
                      fillOpacity: 0.35,
                    }}
                  >
                    <Popup>
                      <div>
                        <strong>{zone.name}</strong>

                        <br />

                        Status: {zone.status}

                        <br />

                        Planning Score: {zone.planningScore}

                        <br />

                        Recommended Development:

                        <br />

                        {zone.buildType}

                        <br />

                        {zone.recommendation}
                      </div>
                    </Popup>
                  </Circle>
                ))}

                <Polyline
                  positions={aiRoutes}
                  pathOptions={{
                    color: "#5FA57B",
                    weight: 8,
                    dashArray: "16 12",
                  }}
                />

                {planningPoints.map((point) => (
                  <Marker
                    key={point.title}
                    position={point.position}
                  >
                    <Popup>
                      <div>
                        <strong>{point.title}</strong>

                        <br />

                        Zone Type: {point.type}

                        <br />

                        {point.impact}
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>

          {/* RIGHT PANEL */}

          <div className="space-y-8">

            <div className="glass-panel rounded-[32px] p-8">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#183126] flex items-center justify-center">
                  <MapPinned className="text-[#8ED6AE]" size={30} />
                </div>

                <div>
                  <p className="uppercase tracking-[0.18em] text-[#89A699] text-sm">
                    Planning Recommendation
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    AI Planning Suitability Analysis
                  </h3>
                </div>
              </div>

              <p className="text-[#80998D] mt-8 leading-relaxed text-lg">
                AI evaluates Seoul districts based on pollution accumulation,
                atmospheric airflow, transportation density,
                and vulnerable population exposure to determine
                optimal infrastructure planning zones.
              </p>
            </div>

            <div className="glass-panel rounded-[32px] p-8">

              <div className="grid grid-cols-2 gap-5">

                <div className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5">
                  <School className="text-[#9DD7B7]" />

                  <h4 className="text-xl font-semibold mt-4">
                    Schools
                  </h4>

                  <p className="text-[#7F998C] mt-3 text-sm">
                    Protected low-emission education zones.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5">
                  <Hospital className="text-[#8DBFFF]" />

                  <h4 className="text-xl font-semibold mt-4">
                    Hospitals
                  </h4>

                  <p className="text-[#7F998C] mt-3 text-sm">
                    AI respiratory burden monitoring.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5">
                  <Factory className="text-[#FF9B86]" />

                  <h4 className="text-xl font-semibold mt-4">
                    Industrial Zones
                  </h4>

                  <p className="text-[#7F998C] mt-3 text-sm">
                    Emission-sensitive infrastructure areas.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#29463A] bg-[#10211A] p-5">
                  <Trees className="text-[#8FD8AF]" />

                  <h4 className="text-xl font-semibold mt-4">
                    Green Corridors
                  </h4>

                  <p className="text-[#7F998C] mt-3 text-sm">
                    Urban airflow stabilization regions.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[32px] p-8">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#321B1B] flex items-center justify-center">
                  <ShieldAlert className="text-[#FF9A84]" size={30} />
                </div>

                <div>
                  <p className="uppercase tracking-[0.18em] text-[#C19185] text-sm">
                    Construction Risk
                  </p>

                  <h3 className="text-3xl font-bold mt-2">
                    High Exposure Zone
                  </h3>
                </div>
              </div>

              <p className="text-[#A28A84] mt-8 leading-relaxed text-lg">
                Avoid high-density residential development
                near elevated traffic emissions in central Gangnam.
              </p>
            </div>

            <div className="glass-panel rounded-[32px] p-8">

              <p className="uppercase tracking-[0.18em] text-[#8CA99B] text-sm">
                AI Planning Metrics
              </p>

              <div className="mt-10 space-y-6">

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#80998D]">
                      Environmental Suitability
                    </span>

                    <span className="text-[#DDF5E8]">
                      84%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-[#13211B] overflow-hidden">
                    <div className="h-full w-[84%] bg-[#67C587]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#80998D]">
                      Airflow Stability
                    </span>

                    <span className="text-[#DDF5E8]">
                      69%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-[#13211B] overflow-hidden">
                    <div className="h-full w-[69%] bg-[#5EA4FF]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#80998D]">
                      Population Exposure Risk
                    </span>

                    <span className="text-[#DDF5E8]">
                      76%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-[#13211B] overflow-hidden">
                    <div className="h-full w-[76%] bg-[#D96C5C]" />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[#80998D]">
                      Infrastructure Sustainability
                    </span>

                    <span className="text-[#DDF5E8]">
                      91%
                    </span>
                  </div>

                  <div className="h-3 rounded-full bg-[#13211B] overflow-hidden">
                    <div className="h-full w-[91%] bg-[#8FD8AF]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[32px] p-8 border border-[#315847]">

              <p className="uppercase tracking-[0.18em] text-[#8FB6A2] text-sm">
                AI Urban Planning Decision
              </p>

              <h3 className="text-3xl font-bold mt-6 leading-snug">
                AI recommends low-density eco-residential expansion
                in Mapo and Seoul Forest districts,
                while restricting high-density development
                in central Gangnam and Jongno corridors.
              </h3>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-[#7F988B]">
                  Decision Confidence
                </span>

                <span className="text-[#98E1B9] text-2xl font-bold">
                  95%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}