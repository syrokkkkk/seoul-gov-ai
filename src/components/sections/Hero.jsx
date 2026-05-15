export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-[140px]">

      <div className="absolute inset-0 grid-overlay opacity-40" />

      <div className="absolute top-[120px] left-[10%] w-[420px] h-[420px] rounded-full bg-[#214437] blur-[120px] opacity-20" />

      <div className="absolute bottom-[120px] right-[10%] w-[520px] h-[520px] rounded-full bg-[#2A5644] blur-[140px] opacity-20" />

      <div className="section-container relative z-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center min-h-[85vh]">

          {/* LEFT */}

          <div>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#274539] bg-[#10211A]/70 text-[#9FCDB6] text-sm tracking-[0.2em] uppercase">

              <div className="w-3 h-3 rounded-full bg-[#69C88A] animate-pulse" />

              Seoul Metropolitan Environmental AI Network
            </div>

            <h1 className="text-7xl leading-[1.02] font-bold mt-10 tracking-[-0.05em] max-w-5xl">
              AI Urban Planning &
              <span className="text-[#8FD8AF]">
                {" "}Pollution Mitigation
              </span>
              {" "}Platform
            </h1>

            <p className="mt-10 text-2xl leading-relaxed text-[#8AA497] max-w-3xl">
              Government-grade environmental intelligence platform
              for PM2.5 forecasting, vulnerable population protection,
              infrastructure optimization, and AI-driven urban policy
              simulation across Seoul.
            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-5 mt-14">

              <button
                onClick={() => {
                  document
                    .getElementById("analytics")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="px-10 py-5 rounded-[28px] bg-[#2A5A45] border border-[#3F7259] text-[#E4F7ED] text-lg font-medium transition-all duration-300 hover:scale-[1.03] hover:bg-[#336B53] shadow-[0_0_50px_rgba(69,140,101,0.18)]"
              >
                Open Command Dashboard
              </button>

              <button
                onClick={() => {
                  document
                    .getElementById("live-map")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    });
                }}
                className="px-10 py-5 rounded-[28px] border border-[#29463A] bg-[#0E1915]/80 text-[#B6D5C5] text-lg font-medium transition-all duration-300 hover:bg-[#14231D] hover:border-[#3B6450]"
              >
                View Live Seoul Heatmap
              </button>
            </div>

            {/* STATS */}

            <div className="grid grid-cols-3 gap-6 mt-20">

              <div className="glass-panel rounded-[28px] p-6 card-hover">

                <p className="text-[#729283] uppercase tracking-[0.18em] text-sm">
                  PM2.5 ALERTS
                </p>

                <h3 className="text-5xl font-bold mt-5 text-[#E4F7ED]">
                  12
                </h3>

                <p className="mt-4 text-[#6E8E80]">
                  Active district warnings
                </p>
              </div>

              <div className="glass-panel rounded-[28px] p-6 card-hover">

                <p className="text-[#729283] uppercase tracking-[0.18em] text-sm">
                  AI MODELS
                </p>

                <h3 className="text-5xl font-bold mt-5 text-[#E4F7ED]">
                  28
                </h3>

                <p className="mt-4 text-[#6E8E80]">
                  Predictive systems running
                </p>
              </div>

              <div className="glass-panel rounded-[28px] p-6 card-hover">

                <p className="text-[#729283] uppercase tracking-[0.18em] text-sm">
                  DISTRICTS
                </p>

                <h3 className="text-5xl font-bold mt-5 text-[#E4F7ED]">
                  25
                </h3>

                <p className="mt-4 text-[#6E8E80]">
                  Seoul districts monitored
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="glass-panel rounded-[40px] p-8 command-glow">

              <div className="flex items-center justify-between mb-8">

                <div>
                  <p className="uppercase tracking-[0.18em] text-sm text-[#7FA892]">
                    Seoul AI Monitoring Grid
                  </p>

                  <h3 className="text-3xl font-bold mt-3">
                    Real-Time Urban Intelligence
                  </h3>
                </div>

                <div className="px-4 py-2 rounded-full bg-[#173229] border border-[#315847] text-[#A8D1BB] text-sm">
                  LIVE
                </div>
              </div>

              <div className="relative h-[620px] rounded-[32px] overflow-hidden bg-[#0B1612] border border-[#1E352B]">

                <div className="absolute inset-0 grid-overlay opacity-20" />

                {/* HEAT ZONES */}

                <div className="absolute top-[100px] left-[140px] w-28 h-28 rounded-full bg-[#D96C5C]/70 blur-xl" />

                <div className="absolute top-[240px] right-[160px] w-24 h-24 rounded-full bg-[#D96C5C]/70 blur-xl" />

                <div className="absolute bottom-[140px] left-[240px] w-32 h-32 rounded-full bg-[#6FA58C]/70 blur-xl" />

                {/* AI ROUTE */}

                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 800 620"
                >
                  <path
                    d="M100 520 C240 420, 320 380, 450 280 C580 180, 660 140, 760 80"
                    stroke="#6FA58C"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="20 18"
                    strokeLinecap="round"
                  />
                </svg>

                {/* TOP CARD */}

                <div className="absolute top-12 left-12 glass-panel rounded-2xl px-5 py-4">

                  <p className="text-[#8FB6A2] text-sm uppercase tracking-[0.18em]">
                    Gangnam
                  </p>

                  <h4 className="text-2xl font-bold mt-2">
                    High Exposure
                  </h4>
                </div>

                {/* RIGHT CARD */}

                <div className="absolute bottom-12 right-12 glass-panel rounded-2xl px-5 py-4">

                  <p className="text-[#8FB6A2] text-sm uppercase tracking-[0.18em]">
                    Vulnerable Layer
                  </p>

                  <h4 className="text-2xl font-bold mt-2">
                    Schools + Hospitals
                  </h4>
                </div>

                {/* LEFT CARD */}

                <div className="absolute bottom-12 left-12 glass-panel rounded-2xl px-5 py-4">

                  <p className="text-[#8FB6A2] text-sm uppercase tracking-[0.18em]">
                    AI Forecast
                  </p>

                  <h4 className="text-2xl font-bold mt-2 text-[#8FD8AF]">
                    Stable Airflow
                  </h4>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}