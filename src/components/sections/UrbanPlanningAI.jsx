import { useState } from "react";

import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
  Polyline,
  Circle,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

import {
  Trees,
  Wind,
  ShieldAlert,
} from "lucide-react";

import { seoulZones } from "../../data/seoulZones";
import { analyzeInfrastructure } from "../../utils/planningEngine";

const infrastructureTypes = [
  "Hospital",
  "School",
  "Factory",
  "Shopping Mall",
  "Residential Tower",
  "Subway Station",
  "Public Park",
  "Data Center",
  "Logistics Hub",
  "EV Charging Network",
];

export default function UrbanPlanningAI() {

  const [selectedType, setSelectedType] =
    useState("Hospital");

  const [visitors, setVisitors] =
    useState(15000);

  const [energy, setEnergy] =
    useState(240);

  const [greenCoverage, setGreenCoverage] =
    useState(35);

  const [trafficTolerance, setTrafficTolerance] =
    useState(50);

  const [analysisVersion, setAnalysisVersion] =
    useState(0);

  const [isAnalyzing, setIsAnalyzing] =
    useState(false);

  /*
  ---------------------------------------
  AI ANALYSIS
  ---------------------------------------
  */

  const analysis =
    analyzeInfrastructure(
      selectedType,
      seoulZones,
      {
        visitors,
        energy,
        greenCoverage,
        trafficTolerance,
        randomness: analysisVersion,
      }
    );

  const bestZone = { ...analysis.best };
  const worstZone = analysis.worst;

  /*
  ---------------------------------------
  REALISTIC SCORE
  ---------------------------------------
  */

  bestZone.score =
    Math.max(
      18,
      Math.min(
        100,

        bestZone.score

        - Math.floor(visitors / 4000)

        - Math.floor(energy / 22)

        - Math.floor((100 - greenCoverage) / 3)

        + Math.floor(trafficTolerance / 5)

        + Math.floor(Math.random() * 12 - 6)
      )
    );

  /*
  ---------------------------------------
  LIVE MAP ZONES
  ---------------------------------------
  */

  const liveZones =
    Array.from({ length: 40 }).map((_, index) => {

      const baseZone =
        analysis.all[
          index % analysis.all.length
        ];

      const randomScore =
        Math.max(
          20,
          Math.min(
            100,
            baseZone.score +
            Math.floor(Math.random() * 35 - 18)
          )
        );

      return {

        ...baseZone,

        lat:
          baseZone.lat +
          (Math.random() - 0.5) * 0.08,

        lng:
          baseZone.lng +
          (Math.random() - 0.5) * 0.08,

        score: randomScore,

      };

    });

  /*
  ---------------------------------------
  BEFORE / AFTER
  ---------------------------------------
  */

  const beforePollution =
    bestZone.pollution;

  const afterPollution =
    Math.max(
      12,
      bestZone.pollution -
      Math.round(greenCoverage * 0.35)
    );

  const beforeTraffic =
    bestZone.traffic;

  const afterTraffic =
    Math.max(
      10,
      bestZone.traffic -
      Math.round(trafficTolerance * 0.3)
    );

  const beforeAirflow =
    bestZone.airflow;

  const afterAirflow =
    Math.min(
      100,
      bestZone.airflow +
      Math.round(greenCoverage * 0.25)
    );

  /*
  ---------------------------------------
  GOVERNMENT DECISION
  ---------------------------------------
  */

  let decisionStatus = "APPROVED";
  let decisionColor = "#67C587";

  if (bestZone.score < 75) {
    decisionStatus = "REVIEW REQUIRED";
    decisionColor = "#FFB86B";
  }

  if (bestZone.score < 55) {
    decisionStatus = "HIGH RISK";
    decisionColor = "#FF7B72";
  }

  if (bestZone.score < 40) {
    decisionStatus = "REJECTED";
    decisionColor = "#FF5C5C";
  }

  /*
  ---------------------------------------
  AIRFLOW
  ---------------------------------------
  */

  const airflowPath = [
    [37.51, 126.87],
    [37.53, 126.92],
    [37.55, 126.97],
    [37.57, 127.02],
    [37.58, 127.08],
  ];

  return (

    <section className="relative py-32 overflow-hidden">

      <div className="absolute inset-0 grid-overlay opacity-20" />

      {[...Array(16)].map((_, index) => (

        <div
          key={index}
          className="absolute rounded-full bg-[#FF7B72]/20 blur-xl animate-pulse"
          style={{
            width: `${50 + index * 4}px`,
            height: `${50 + index * 4}px`,
            top: `${10 + index * 5}%`,
            left: `${5 + index * 4}%`,
            animationDelay: `${index * 0.5}s`,
          }}
        />

      ))}

      <div className="section-container relative z-10">

        <div className="max-w-5xl">

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A]/70 text-[#90B9A4] text-sm uppercase tracking-[0.2em]">
            AI Urban Planning Engine
          </div>

          <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em] leading-tight">
            Smart Infrastructure & Construction Planning
          </h2>

        </div>

        <div className="grid lg:grid-cols-[420px_1fr] gap-10 mt-20">

          {/* LEFT PANEL */}

          <div className="rounded-[40px] bg-[#F4F5F1] p-8 sticky top-10 h-fit">

            <p className="uppercase tracking-[0.18em] text-[#7E8B84] text-sm">
              Infrastructure Type
            </p>

            <div className="space-y-4 mt-8">

              {infrastructureTypes.map((item, index) => (

                <button
                  key={index}
                  onClick={() => setSelectedType(item)}
                  className={`w-full text-left px-5 py-4 rounded-2xl border transition-all duration-300 ${
                    selectedType === item
                      ? "bg-[#173127] text-white border-[#173127]"
                      : "bg-transparent text-[#355046] border-[#D7DDD8]"
                  }`}
                >
                  {item}
                </button>

              ))}

            </div>

            {/* PARAMETERS */}

            <div className="space-y-8 mt-10">

              <div>

                <div className="flex justify-between">
                  <span className="text-sm text-[#355046]">
                    Expected Daily Visitors
                  </span>

                  <span className="font-semibold text-[#173127]">
                    {visitors.toLocaleString()}
                  </span>
                </div>

                <input
                  type="range"
                  min="1000"
                  max="50000"
                  value={visitors}
                  onChange={(e) =>
                    setVisitors(Number(e.target.value))
                  }
                  className="w-full mt-4"
                />

              </div>

              <div>

                <div className="flex justify-between">
                  <span className="text-sm text-[#355046]">
                    Estimated Energy Usage
                  </span>

                  <span className="font-semibold text-[#173127]">
                    {energy} MWh
                  </span>
                </div>

                <input
                  type="range"
                  min="50"
                  max="700"
                  value={energy}
                  onChange={(e) =>
                    setEnergy(Number(e.target.value))
                  }
                  className="w-full mt-4"
                />

              </div>

              <div>

                <div className="flex justify-between">
                  <span className="text-sm text-[#355046]">
                    Green Coverage
                  </span>

                  <span className="font-semibold text-[#173127]">
                    {greenCoverage}%
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={greenCoverage}
                  onChange={(e) =>
                    setGreenCoverage(Number(e.target.value))
                  }
                  className="w-full mt-4"
                />

              </div>

              <div>

                <div className="flex justify-between">
                  <span className="text-sm text-[#355046]">
                    Traffic Impact Tolerance
                  </span>

                  <span className="font-semibold text-[#173127]">
                    {trafficTolerance}%
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  value={trafficTolerance}
                  onChange={(e) =>
                    setTrafficTolerance(Number(e.target.value))
                  }
                  className="w-full mt-4"
                />

              </div>

            </div>

            <button
              onClick={() => {

                setIsAnalyzing(true);

                setTimeout(() => {

                  setAnalysisVersion(prev => prev + 1);

                  setIsAnalyzing(false);

                }, 1400);

              }}
              className="w-full mt-10 py-4 rounded-2xl bg-[#173127] text-white font-semibold"
            >

              {isAnalyzing
                ? "Analyzing Seoul Infrastructure..."
                : "Run AI Infrastructure Analysis"}

            </button>

          </div>

          {/* RIGHT */}

          <div className="space-y-10">

            {/* MAP */}

            <div className="rounded-[40px] border border-[#29463A] bg-[#08110D] p-8">

              <div className="flex items-center justify-between">

                <div>

                  <p className="uppercase tracking-[0.18em] text-[#8DAA9C] text-sm">
                    Live Construction Intelligence Map
                  </p>

                  <h3 className="text-4xl font-bold mt-4">
                    AI Planning Suitability Analysis
                  </h3>

                </div>

                <div className="px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A] text-[#8FD6A9] text-sm">
                  LIVE AI MODEL
                </div>

              </div>

              <div className="mt-10 rounded-[32px] overflow-hidden border border-[#29463A]">

                <MapContainer
                  center={[37.5665, 126.9780]}
                  zoom={11}
                  style={{
                    height: "620px",
                    width: "100%",
                  }}
                >

                  <TileLayer
                    attribution="OpenStreetMap"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />

                  <Polyline
                    positions={airflowPath}
                    pathOptions={{
                      color: "#7BC7FF",
                      weight: 6,
                      dashArray: "14 14",
                    }}
                  />

                  {liveZones.map((zone, index) => (

                    <>
                      <Circle
                        key={`circle-${index}`}
                        center={[zone.lat, zone.lng]}
                        radius={2200}
                        pathOptions={{
                          color:
                            zone.score >= 75
                              ? "#67C587"
                              : zone.score >= 50
                              ? "#FFB86B"
                              : "#FF7B72",

                          fillColor:
                            zone.score >= 75
                              ? "#67C587"
                              : zone.score >= 50
                              ? "#FFB86B"
                              : "#FF7B72",

                          fillOpacity: 0.12,
                          weight: 1,
                        }}
                      />

                      <CircleMarker
                        key={`marker-${index}`}
                        center={[zone.lat, zone.lng]}
                        radius={14 + zone.score / 10}
                        pathOptions={{
                          color:
                            zone.score >= 75
                              ? "#67C587"
                              : zone.score >= 50
                              ? "#FFB86B"
                              : "#FF7B72",

                          fillColor:
                            zone.score >= 75
                              ? "#67C587"
                              : zone.score >= 50
                              ? "#FFB86B"
                              : "#FF7B72",

                          fillOpacity: 0.7,
                          weight: 2,
                        }}
                      >

                        <Popup>

                          <div className="space-y-2">

                            <h3 className="font-bold">
                              {zone.district}
                            </h3>

                            <p>
                              Score: {zone.score}/100
                            </p>

                            <p>
                              Pollution: {zone.pollution}
                            </p>

                            <p>
                              Airflow: {zone.airflow}%
                            </p>

                          </div>

                        </Popup>

                      </CircleMarker>
                    </>

                  ))}

                </MapContainer>

              </div>

              {/* RESULT */}

              <div className="mt-6 rounded-[30px] border border-[#29463A] bg-[#07110D]/92 p-6">

                <div className="flex items-center justify-between">

                  <div>

                    <p className="uppercase tracking-[0.18em] text-[#8DAA9C] text-xs">
                      AI Construction Recommendation
                    </p>

                    <h3 className="text-3xl font-bold mt-3">
                      {selectedType} Planning Analysis
                    </h3>

                    <p className="text-[#8DAA9C] mt-4 leading-relaxed">
                      Best district for infrastructure deployment:
                      {" "}

                      <span className="text-[#8FD6A9] font-semibold">
                        {bestZone.district}
                      </span>

                      . AI models detected improved airflow stability,
                      lower pollution accumulation,
                      and reduced transportation burden.
                    </p>

                  </div>

                  <div className="text-right">

                    <p className="text-[#8DAA9C] text-sm">
                      Sustainability Score
                    </p>

                    <h3
                      className="text-5xl font-bold mt-3"
                      style={{
                        color: decisionColor,
                      }}
                    >
                      {bestZone.score}/100
                    </h3>

                    <div
                      className="mt-4 px-5 py-3 rounded-full border text-sm"
                      style={{
                        borderColor: decisionColor,
                        color: decisionColor,
                      }}
                    >
                      {decisionStatus}
                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* BEFORE AFTER */}

            <div className="rounded-[40px] border border-[#29463A] bg-[#08110D] p-8">

              <h3 className="text-4xl font-bold">
                Before / After Infrastructure Optimization
              </h3>

              <div className="grid md:grid-cols-3 gap-8 mt-12">

                <div className="rounded-[30px] border border-[#29463A] bg-[#10211A] p-7">

                  <p className="uppercase text-xs tracking-[0.18em] text-[#8DAA9C]">
                    PM2.5 Exposure
                  </p>

                  <div className="flex items-end gap-4 mt-6">

                    <h3 className="text-5xl font-bold text-[#FF7B72]">
                      {beforePollution}
                    </h3>

                    <span className="text-3xl">→</span>

                    <h3 className="text-5xl font-bold text-[#67C587]">
                      {afterPollution}
                    </h3>

                  </div>

                </div>

                <div className="rounded-[30px] border border-[#29463A] bg-[#10211A] p-7">

                  <p className="uppercase text-xs tracking-[0.18em] text-[#8DAA9C]">
                    Traffic Burden
                  </p>

                  <div className="flex items-end gap-4 mt-6">

                    <h3 className="text-5xl font-bold text-[#FFB86B]">
                      {beforeTraffic}%
                    </h3>

                    <span className="text-3xl">→</span>

                    <h3 className="text-5xl font-bold text-[#67C587]">
                      {afterTraffic}%
                    </h3>

                  </div>

                </div>

                <div className="rounded-[30px] border border-[#29463A] bg-[#10211A] p-7">

                  <p className="uppercase text-xs tracking-[0.18em] text-[#8DAA9C]">
                    Airflow Stability
                  </p>

                  <div className="flex items-end gap-4 mt-6">

                    <h3 className="text-5xl font-bold text-[#7BC7FF]">
                      {beforeAirflow}%
                    </h3>

                    <span className="text-3xl">→</span>

                    <h3 className="text-5xl font-bold text-[#67C587]">
                      {afterAirflow}%
                    </h3>

                  </div>

                </div>

              </div>

            </div>

            {/* GOVERNMENT AI */}

            <div
              className="rounded-[40px] p-10 border"
              style={{
                borderColor: decisionColor,
                background:
                  decisionStatus === "APPROVED"
                    ? "#08150F"
                    : decisionStatus === "REVIEW REQUIRED"
                    ? "#151109"
                    : "#180B0B",
              }}
            >

              <div className="flex items-center justify-between">

                <div>

                  <p className="uppercase tracking-[0.18em] text-[#8DAA9C] text-sm">
                    Government AI Decision
                  </p>

                  <h3
                    className="text-6xl font-bold mt-5"
                    style={{
                      color: decisionColor,
                    }}
                  >
                    {decisionStatus}
                  </h3>

                </div>

                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center text-5xl font-bold border"
                  style={{
                    borderColor: decisionColor,
                    color: decisionColor,
                  }}
                >
                  {bestZone.score}
                </div>

              </div>

            </div>

            {/* ANALYTICS */}

            <div className="grid lg:grid-cols-2 gap-10">

              <div className="rounded-[40px] border border-[#29463A] bg-[#08110D] p-10">

                <p className="uppercase tracking-[0.18em] text-[#8DAA9C] text-sm">
                  AI Sustainability Metrics
                </p>

                <div className="space-y-8 mt-10">

                  <div>

                    <div className="flex justify-between mb-3">

                      <span className="text-[#8DAA9C]">
                        Environmental Stability
                      </span>

                      <span>
                        {bestZone.airflow}%
                      </span>

                    </div>

                    <div className="h-3 rounded-full bg-[#10211A] overflow-hidden">

                      <div
                        className="h-full bg-[#67C587]"
                        style={{
                          width: `${bestZone.airflow}%`,
                        }}
                      />

                    </div>

                  </div>

                  <div>

                    <div className="flex justify-between mb-3">

                      <span className="text-[#8DAA9C]">
                        Traffic Burden
                      </span>

                      <span>
                        {bestZone.traffic}%
                      </span>

                    </div>

                    <div className="h-3 rounded-full bg-[#10211A] overflow-hidden">

                      <div
                        className="h-full bg-[#FFB86B]"
                        style={{
                          width: `${bestZone.traffic}%`,
                        }}
                      />

                    </div>

                  </div>

                  <div>

                    <div className="flex justify-between mb-3">

                      <span className="text-[#8DAA9C]">
                        Population Exposure
                      </span>

                      <span>
                        {bestZone.populationRisk}%
                      </span>

                    </div>

                    <div className="h-3 rounded-full bg-[#10211A] overflow-hidden">

                      <div
                        className="h-full bg-[#7BC7FF]"
                        style={{
                          width: `${bestZone.populationRisk}%`,
                        }}
                      />

                    </div>

                  </div>

                </div>

              </div>

              {/* ACTIONS */}

              <div className="rounded-[40px] border border-[#29463A] bg-[#08110D] p-10">

                <p className="uppercase tracking-[0.18em] text-[#8DAA9C] text-sm">
                  Government AI Actions
                </p>

                <div className="space-y-5 mt-10">

                  <div className="rounded-3xl border border-[#5A2323] bg-[#1A0E0E] p-6">

                    <p className="uppercase tracking-[0.18em] text-[#D68B84] text-xs">
                      Restricted Construction Zone
                    </p>

                    <h4 className="text-3xl font-bold mt-4">
                      {worstZone.district}
                    </h4>

                    <p className="text-[#BFA8A3] mt-5 leading-relaxed">
                      AI detected elevated pollution exposure,
                      transportation burden,
                      and vulnerable population risk levels.
                    </p>

                  </div>

                  <div className="rounded-3xl border border-[#29463A] bg-[#10211A] p-6">
                    Restrict heavy logistics traffic near educational corridors.
                  </div>

                  <div className="rounded-3xl border border-[#29463A] bg-[#10211A] p-6">
                    Expand rooftop vegetation requirements.
                  </div>

                  <div className="rounded-3xl border border-[#29463A] bg-[#10211A] p-6">
                    Increase airflow stabilization systems near Han River districts.
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