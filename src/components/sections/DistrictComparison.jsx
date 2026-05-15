const districts = [
  {
    name: "Mapo",
    pollution: "Low",
    suitability: "92%",
    airflow: "Excellent",
    exposure: "Low",
    color: "bg-[#8FD8AF]",
  },
  {
    name: "Seoul Forest",
    pollution: "Low",
    suitability: "94%",
    airflow: "Optimal",
    exposure: "Low",
    color: "bg-[#8FD8AF]",
  },
  {
    name: "Yeouido",
    pollution: "Moderate",
    suitability: "71%",
    airflow: "Stable",
    exposure: "Moderate",
    color: "bg-[#E2B55D]",
  },
  {
    name: "Yongsan",
    pollution: "Moderate",
    suitability: "58%",
    airflow: "Variable",
    exposure: "Elevated",
    color: "bg-[#E2B55D]",
  },
  {
    name: "Gangnam",
    pollution: "High",
    suitability: "22%",
    airflow: "Poor",
    exposure: "High",
    color: "bg-[#D96C5C]",
  },
  {
    name: "Jongno",
    pollution: "High",
    suitability: "31%",
    airflow: "Congested",
    exposure: "Critical",
    color: "bg-[#D96C5C]",
  },
];

export default function DistrictComparison() {
  return (
    <section className="relative py-32">

      <div className="section-container">

        <div className="max-w-5xl">

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A]/70 text-[#90B9A4] text-sm uppercase tracking-[0.2em]">
            District Intelligence Comparison
          </div>

          <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em]">
            Seoul Urban Suitability Analysis
          </h2>

          <p className="text-[#80998D] text-xl leading-relaxed mt-8">
            AI-driven district comparison based on pollution concentration,
            airflow stability, vulnerable population exposure,
            and sustainable infrastructure viability.
          </p>
        </div>

        <div className="glass-panel rounded-[40px] border border-[#22372E] overflow-hidden mt-20">

          <div className="grid grid-cols-6 gap-4 px-10 py-6 border-b border-[#22372E] bg-[#0F1C17]">

            <div className="text-[#8FB6A2] uppercase text-sm tracking-[0.18em]">
              District
            </div>

            <div className="text-[#8FB6A2] uppercase text-sm tracking-[0.18em]">
              Pollution
            </div>

            <div className="text-[#8FB6A2] uppercase text-sm tracking-[0.18em]">
              Suitability
            </div>

            <div className="text-[#8FB6A2] uppercase text-sm tracking-[0.18em]">
              Airflow
            </div>

            <div className="text-[#8FB6A2] uppercase text-sm tracking-[0.18em]">
              Exposure
            </div>

            <div className="text-[#8FB6A2] uppercase text-sm tracking-[0.18em]">
              AI Rank
            </div>
          </div>

          {districts.map((district, index) => (
            <div
              key={district.name}
              className="grid grid-cols-6 gap-4 px-10 py-8 border-b border-[#1A2B24] items-center hover:bg-[#0D1814] transition-all duration-300"
            >

              <div className="text-2xl font-bold">
                {district.name}
              </div>

              <div>
                <span className={`px-4 py-2 rounded-full text-sm text-black font-semibold ${district.color}`}>
                  {district.pollution}
                </span>
              </div>

              <div className="text-[#DDF5E8] text-lg">
                {district.suitability}
              </div>

              <div className="text-[#8FB6A2] text-lg">
                {district.airflow}
              </div>

              <div className="text-[#DDF5E8] text-lg">
                {district.exposure}
              </div>

              <div className="flex items-center gap-4">

                <div className="w-full h-3 rounded-full bg-[#13211B] overflow-hidden">

                  <div
                    className={`h-full ${district.color}`}
                    style={{
                      width: district.suitability,
                    }}
                  />
                </div>

                <span className="text-[#DDF5E8] font-semibold">
                  #{index + 1}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}