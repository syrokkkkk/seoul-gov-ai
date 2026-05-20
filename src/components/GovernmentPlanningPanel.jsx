import { useState } from "react";

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

const districtRecommendations = {

  Hospital: {
    recommended: "Mapo Eco Corridor",
    avoid: "Gangnam Traffic Core",
    score: 91,
    impact: "-12% respiratory exposure",
  },

  School: {
    recommended: "Seoul Forest District",
    avoid: "Yongsan Industrial Belt",
    score: 95,
    impact: "-18% child exposure risk",
  },

  Factory: {
    recommended: "Gangseo Industrial Sector",
    avoid: "Central Seoul",
    score: 44,
    impact: "+21% PM2.5 increase",
  },

  "Shopping Mall": {
    recommended: "Yeouido Commercial Zone",
    avoid: "Jongno Historic Core",
    score: 72,
    impact: "+8% traffic density",
  },

  "Residential Tower": {
    recommended: "Songpa Green Expansion",
    avoid: "Gangnam Traffic Core",
    score: 80,
    impact: "-7% pollution exposure",
  },

  "Subway Station": {
    recommended: "Mapo Mobility Corridor",
    avoid: "Protected Green Zones",
    score: 93,
    impact: "-22% vehicle dependency",
  },

  "Public Park": {
    recommended: "Yongsan Buffer Zone",
    avoid: "None",
    score: 98,
    impact: "-19% PM2.5 accumulation",
  },

  "Data Center": {
    recommended: "Digital Media City",
    avoid: "Residential Clusters",
    score: 71,
    impact: "+4% energy demand",
  },

  "Logistics Hub": {
    recommended: "Gangseo Transport Belt",
    avoid: "School Districts",
    score: 63,
    impact: "+11% traffic activity",
  },

  "EV Charging Network": {
    recommended: "Gangnam Mobility Grid",
    avoid: "None",
    score: 96,
    impact: "-15% combustion emissions",
  },

};

export default function GovernmentPlanningPanel() {

  const [selectedType, setSelectedType] =
    useState("Hospital");

  const result =
    districtRecommendations[selectedType];

  return (
<section id="government-planning" className="section-container pt-32">
      <div className="text-center mb-20">

        <div className="inline-flex px-5 py-2 rounded-full bg-[#DDEDE4] text-[#5F8F7B] tracking-[0.2em] uppercase text-sm font-semibold">
          Government AI Planning System
        </div>

        <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em] text-[#18342B]">
          AI Infrastructure Decision Engine
        </h2>

        <p className="mt-8 text-xl text-[#5E786B] max-w-4xl mx-auto">
          AI-driven environmental and urban planning analysis
          for sustainable infrastructure development across Seoul.
        </p>

      </div>

      <div className="grid lg:grid-cols-[420px_1fr] gap-10">

        <div className="bg-white rounded-[40px] border border-[#DCE9E2] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">

          <p className="uppercase tracking-[0.18em] text-sm text-[#6E8B7C]">
            Infrastructure Type
          </p>

          <div className="mt-8 space-y-4">

            {infrastructureTypes.map((type) => (

              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`w-full text-left px-6 py-5 rounded-2xl border transition-all duration-300 font-semibold ${
                  selectedType === type
                    ? "bg-[#18342B] text-white border-[#18342B]"
                    : "bg-[#F7FAF8] text-[#355847] border-[#DCE9E2]"
                }`}
              >
                {type}
              </button>

            ))}

          </div>
        </div>

        <div className="space-y-8">

          <div className="bg-white rounded-[40px] border border-[#DCE9E2] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">

            <p className="uppercase tracking-[0.18em] text-sm text-[#6E8B7C]">
              AI Planning Recommendation
            </p>

            <h3 className="text-5xl font-bold mt-6 text-[#18342B]">
              {selectedType}
            </h3>

            <div className="grid lg:grid-cols-2 gap-8 mt-10">

              <div className="rounded-[28px] bg-[#F3FBF6] border border-[#D6EEDF] p-8">

                <p className="uppercase tracking-[0.18em] text-sm text-[#5F8F7B]">
                  Recommended District
                </p>

                <h4 className="text-3xl font-bold mt-4 text-[#214637]">
                  {result.recommended}
                </h4>

              </div>

              <div className="rounded-[28px] bg-[#FFF4F1] border border-[#F1D4CB] p-8">

                <p className="uppercase tracking-[0.18em] text-sm text-[#C17663]">
                  Avoid Development
                </p>

                <h4 className="text-3xl font-bold mt-4 text-[#8B3A2A]">
                  {result.avoid}
                </h4>

              </div>

            </div>

            <div className="grid lg:grid-cols-2 gap-8 mt-8">

              <div className="rounded-[28px] bg-[#F7F9FC] border border-[#D9E4F2] p-8">

                <p className="uppercase tracking-[0.18em] text-sm text-[#6480A2]">
                  Sustainability Score
                </p>

                <h4 className="text-5xl font-bold mt-5 text-[#18342B]">
                  {result.score}/100
                </h4>

              </div>

              <div className="rounded-[28px] bg-[#F5F8FA] border border-[#D8E4EA] p-8">

                <p className="uppercase tracking-[0.18em] text-sm text-[#6480A2]">
                  Predicted Environmental Impact
                </p>

                <h4 className="text-3xl font-bold mt-5 text-[#18342B]">
                  {result.impact}
                </h4>

              </div>

            </div>
          </div>

          <div className="bg-white rounded-[40px] border border-[#DCE9E2] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.05)]">

            <p className="uppercase tracking-[0.18em] text-sm text-[#6E8B7C]">
              AI Government Analysis
            </p>

            <div className="mt-8 space-y-5">

              <div className="rounded-2xl bg-[#F7FAF8] border border-[#DCE9E2] p-6">
                High population exposure detected near
                transportation corridors and industrial districts.
              </div>

              <div className="rounded-2xl bg-[#F7FAF8] border border-[#DCE9E2] p-6">
                AI recommends increasing green infrastructure
                within dense PM2.5 accumulation zones.
              </div>

              <div className="rounded-2xl bg-[#F7FAF8] border border-[#DCE9E2] p-6">
                Vulnerable populations include schools,
                hospitals, and elderly residential districts.
              </div>

              <div className="rounded-2xl bg-[#F7FAF8] border border-[#DCE9E2] p-6">
                Smart mobility systems may reduce
                traffic-related emissions by up to 23%.
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}