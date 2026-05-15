import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const pollutionTrend = [
  { day: "Mon", value: 42 },
  { day: "Tue", value: 58 },
  { day: "Wed", value: 49 },
  { day: "Thu", value: 72 },
  { day: "Fri", value: 61 },
  { day: "Sat", value: 44 },
  { day: "Sun", value: 38 },
];

const districtData = [
  { district: "Gangnam", exposure: 82 },
  { district: "Mapo", exposure: 68 },
  { district: "Jongno", exposure: 73 },
  { district: "Yongsan", exposure: 61 },
  { district: "Yeouido", exposure: 52 },
];

export default function AnalyticsCharts() {
  return (
    <section className="relative py-32 overflow-hidden">

      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="absolute right-[10%] top-[20%] w-[420px] h-[420px] rounded-full bg-[#1D3B30] blur-[140px] opacity-20" />

      <div className="section-container relative z-10">

        <div className="mb-16">

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A]/70 text-[#90B9A4] text-sm uppercase tracking-[0.2em]">
            AI Environmental Analytics
          </div>

          <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em]">
            Pollution Forecast & Urban Exposure Trends
          </h2>

          <p className="text-[#80998D] text-xl max-w-4xl mt-8 leading-relaxed">
            Real-time AI forecasting and environmental analytics
            across Seoul districts, vulnerable populations,
            and urban mobility systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LINE CHART */}

          <div className="glass-panel rounded-[40px] p-10">

            <div className="mb-10">

              <p className="uppercase tracking-[0.18em] text-[#89A69A] text-sm">
                Weekly PM2.5 Forecast
              </p>

              <h3 className="text-4xl font-bold mt-3">
                Exposure Trend Analysis
              </h3>
            </div>

            <div className="h-[360px]">

              <ResponsiveContainer width="100%" height="100%">

                <LineChart data={pollutionTrend}>

                  <XAxis
                    dataKey="day"
                    stroke="#6D887C"
                  />

                  <YAxis
                    stroke="#6D887C"
                  />

                  <Tooltip
                    contentStyle={{
                      background: "#11201A",
                      border: "1px solid #315847",
                      borderRadius: "20px",
                      color: "#fff",
                    }}
                  />

                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#8ED7B1"
                    strokeWidth={4}
                    dot={{
                      r: 6,
                      fill: "#8ED7B1",
                    }}
                  />
                </LineChart>

              </ResponsiveContainer>
            </div>
          </div>

          {/* BAR CHART */}

          <div className="glass-panel rounded-[40px] p-10">

            <div className="mb-10">

              <p className="uppercase tracking-[0.18em] text-[#89A69A] text-sm">
                District Exposure Comparison
              </p>

              <h3 className="text-4xl font-bold mt-3">
                Seoul Risk Distribution
              </h3>
            </div>

            <div className="h-[360px]">

              <ResponsiveContainer width="100%" height="100%">

                <BarChart data={districtData}>

                  <XAxis
                    dataKey="district"
                    stroke="#6D887C"
                  />

                  <YAxis
                    stroke="#6D887C"
                  />

                  <Tooltip
                    contentStyle={{
                      background: "#11201A",
                      border: "1px solid #315847",
                      borderRadius: "20px",
                      color: "#fff",
                    }}
                  />

                  <Bar
                    dataKey="exposure"
                    fill="#5EA57C"
                    radius={[12, 12, 0, 0]}
                  />
                </BarChart>

              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* KPI ROW */}

        <div className="grid lg:grid-cols-4 gap-8 mt-10">

          <div className="glass-panel rounded-[32px] p-8">

            <p className="uppercase tracking-[0.18em] text-[#89A69A] text-sm">
              Respiratory Burden
            </p>

            <h3 className="text-5xl font-bold mt-6">
              +14%
            </h3>

            <p className="text-[#7E998C] mt-5 leading-relaxed">
              Predicted hospital respiratory cases during peak PM2.5 events.
            </p>
          </div>

          <div className="glass-panel rounded-[32px] p-8">

            <p className="uppercase tracking-[0.18em] text-[#89A69A] text-sm">
              Airflow Shift
            </p>

            <h3 className="text-5xl font-bold mt-6">
              West
            </h3>

            <p className="text-[#7E998C] mt-5 leading-relaxed">
              AI-detected atmospheric transport direction.
            </p>
          </div>

          <div className="glass-panel rounded-[32px] p-8">

            <p className="uppercase tracking-[0.18em] text-[#89A69A] text-sm">
              AI Confidence
            </p>

            <h3 className="text-5xl font-bold mt-6">
              93%
            </h3>

            <p className="text-[#7E998C] mt-5 leading-relaxed">
              Forecasting confidence based on environmental data streams.
            </p>
          </div>

          <div className="glass-panel rounded-[32px] p-8">

            <p className="uppercase tracking-[0.18em] text-[#89A69A] text-sm">
              Active Sensors
            </p>

            <h3 className="text-5xl font-bold mt-6">
              284
            </h3>

            <p className="text-[#7E998C] mt-5 leading-relaxed">
              Real-time monitoring systems operating across Seoul.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}