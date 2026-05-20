import { useState } from "react";

const datasets = {
  day: {
    line: [42, 46, 58, 61, 55, 49, 44],
    bars: [82, 68, 73, 61, 52],
    burden: "+6%",
    airflow: "South-East",
    confidence: "96%",
    sensors: "12,842",
  },

  week: {
    line: [38, 44, 52, 66, 71, 63, 54],
    bars: [88, 74, 79, 67, 59],
    burden: "+12%",
    airflow: "West",
    confidence: "94%",
    sensors: "12,842",
  },

  month: {
    line: [30, 42, 48, 70, 82, 68, 58],
    bars: [92, 78, 84, 72, 61],
    burden: "+18%",
    airflow: "North-West",
    confidence: "91%",
    sensors: "12,842",
  },

  quarter: {
    line: [26, 34, 44, 62, 76, 69, 63],
    bars: [96, 82, 88, 79, 70],
    burden: "+23%",
    airflow: "West",
    confidence: "89%",
    sensors: "12,842",
  },

  year: {
    line: [22, 30, 41, 58, 74, 71, 66],
    bars: [98, 88, 91, 84, 79],
    burden: "+31%",
    airflow: "North-West",
    confidence: "87%",
    sensors: "12,842",
  },
};

export default function AnalyticsCharts() {

  const [activeTab, setActiveTab] = useState("day");

  const current = datasets[activeTab];

  return (
    <section className="relative py-32 overflow-hidden">

      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="section-container relative z-10">

        <div className="max-w-5xl">

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A]/70 text-[#90B9A4] text-sm uppercase tracking-[0.2em]">
            AI Environmental Analytics
          </div>

          <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em] leading-tight">
            Pollution Forecast & Urban Exposure Trends
          </h2>

          <p className="text-[#80998D] text-xl max-w-4xl mt-8 leading-relaxed">
            Real-time AI forecasting and environmental analytics across Seoul districts,
            vulnerable populations, and urban mobility systems.
          </p>

        </div>

        {/* TIME FILTERS */}

        <div className="flex flex-wrap gap-4 mt-12">

          {[
            ["day", "DAY"],
            ["week", "WEEK"],
            ["month", "MONTH"],
            ["quarter", "3 MONTHS"],
            ["year", "YEAR"],
          ].map(([key, label]) => (

            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-full border transition-all duration-300 text-sm tracking-[0.15em]
              ${
                activeTab === key
                  ? "bg-[#67C587] text-black border-[#67C587]"
                  : "border-[#29463A] bg-[#091410] text-[#8DAA9C] hover:border-[#67C587]"
              }`}
            >
              {label}
            </button>

          ))}

        </div>

        {/* MAIN GRID */}

        <div className="grid lg:grid-cols-[1.5fr_0.8fr] gap-8 mt-10">

          {/* BIG CHART */}

          <div className="glass-panel rounded-[36px] p-8">

            <p className="uppercase tracking-[0.18em] text-[#8DAA9C] text-sm">
              Predictive Exposure Forecast
            </p>

            <h3 className="text-4xl font-bold mt-4">
              AI Temporal Analysis
            </h3>

            <div className="relative h-[320px] mt-10">

              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 700 320"
                preserveAspectRatio="none"
              >

                <defs>
                  <linearGradient id="lineGradient" x1="0" x2="1">
                    <stop offset="0%" stopColor="#67C587" />
                    <stop offset="100%" stopColor="#9CE7B8" />
                  </linearGradient>
                </defs>

                <path
                  d={`
                    M40 ${260 - current.line[0] * 2}
                    C90 ${250 - current.line[1] * 2}, 120 ${240 - current.line[1] * 2}, 160 ${260 - current.line[1] * 2}
                    S240 ${260 - current.line[2] * 2}, 280 ${260 - current.line[2] * 2}
                    S360 ${260 - current.line[3] * 2}, 400 ${260 - current.line[3] * 2}
                    S480 ${260 - current.line[4] * 2}, 520 ${260 - current.line[4] * 2}
                    S600 ${260 - current.line[5] * 2}, 640 ${260 - current.line[6] * 2}
                  `}
                  fill="none"
                  stroke="url(#lineGradient)"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                {current.line.map((value, index) => (

                  <circle
                    key={index}
                    cx={40 + index * 100}
                    cy={260 - value * 2}
                    r="6"
                    fill="#9CE7B8"
                  />

                ))}

              </svg>

            </div>

          </div>

          {/* SIDE PANEL */}

          <div className="space-y-6">

            <div className="glass-panel rounded-[32px] p-8">

              <p className="uppercase tracking-[0.18em] text-[#8DAA9C] text-sm">
                District Exposure Comparison
              </p>

              <h3 className="text-3xl font-bold mt-4">
                Seoul Risk Distribution
              </h3>

              <div className="flex items-end gap-4 h-[240px] mt-10">

                {current.bars.map((bar, index) => (

                  <div
                    key={index}
                    className="flex-1 rounded-t-3xl bg-[#7FB88F]"
                    style={{
                      height: `${bar}%`,
                    }}
                  />

                ))}

              </div>

            </div>

          </div>

        </div>

        {/* LIVE METRICS */}

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="glass-panel rounded-[28px] p-6">

            <p className="text-[#7E9D8C] uppercase tracking-[0.15em] text-xs">
              Respiratory Burden
            </p>

            <h3 className="text-5xl font-bold mt-4">
              {current.burden}
            </h3>

            <p className="text-[#7E9D8C] mt-5 text-sm leading-relaxed">
              Predicted hospital respiratory increase during PM2.5 events.
            </p>

          </div>

          <div className="glass-panel rounded-[28px] p-6">

            <p className="text-[#7E9D8C] uppercase tracking-[0.15em] text-xs">
              Airflow Shift
            </p>

            <h3 className="text-5xl font-bold mt-4">
              {current.airflow}
            </h3>

            <p className="text-[#7E9D8C] mt-5 text-sm leading-relaxed">
              AI-detected atmospheric transport direction.
            </p>

          </div>

          <div className="glass-panel rounded-[28px] p-6">

            <p className="text-[#7E9D8C] uppercase tracking-[0.15em] text-xs">
              AI Confidence
            </p>

            <h3 className="text-5xl font-bold mt-4">
              {current.confidence}
            </h3>

            <p className="text-[#7E9D8C] mt-5 text-sm leading-relaxed">
              Forecasting confidence based on environmental data streams.
            </p>

          </div>

          <div className="glass-panel rounded-[28px] p-6">

            <p className="text-[#7E9D8C] uppercase tracking-[0.15em] text-xs">
              Active Sensors
            </p>

            <h3 className="text-5xl font-bold mt-4">
              {current.sensors}
            </h3>

            <p className="text-[#7E9D8C] mt-5 text-sm leading-relaxed">
              Real-time monitoring systems operating across Seoul.
            </p>

          </div>

        </div>

        {/* GOVERNMENT FEED */}

        <div className="glass-panel rounded-[36px] p-8 mt-10">

          <div className="flex items-center justify-between">

            <div>

              <p className="uppercase tracking-[0.18em] text-[#8DAA9C] text-sm">
                Government AI Recommendation Feed
              </p>

              <h3 className="text-4xl font-bold mt-4">
                Live Predictive Response System
              </h3>

            </div>

            <div className="px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A] text-[#8FD6A9] text-sm">
              LIVE
            </div>

          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">

            <div className="rounded-3xl border border-[#29463A] bg-[#10211A] p-6">
              Restrict heavy vehicle access in central Gangnam during peak PM2.5 accumulation window.
            </div>

            <div className="rounded-3xl border border-[#29463A] bg-[#10211A] p-6">
              Expand green airflow corridor near Han River transport intersections.
            </div>

            <div className="rounded-3xl border border-[#29463A] bg-[#10211A] p-6">
              Delay industrial logistics activity by 2 hours to reduce exposure spike.
            </div>

            <div className="rounded-3xl border border-[#29463A] bg-[#10211A] p-6">
              AI predicts elevated respiratory exposure near western education districts.
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}