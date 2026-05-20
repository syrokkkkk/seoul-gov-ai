export default function Hero() {

  return (
    <section className="relative min-h-screen overflow-hidden pt-32">

      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-[#1B3B30] blur-[160px] opacity-25" />

      <div className="absolute bottom-[10%] right-[5%] w-[500px] h-[500px] rounded-full bg-[#143026] blur-[160px] opacity-25" />

      <div className="section-container relative z-10">

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-20 items-center">

          <div>

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A]/70 text-[#90B9A4] text-sm uppercase tracking-[0.2em]">
              Seoul Metropolitan Environmental AI Network
            </div>

            <h1 className="text-[88px] leading-[0.92] tracking-[-0.06em] font-bold mt-10 max-w-5xl">

              AI Urban Planning &

              <span className="block text-[#8FD6A9]">
                Pollution Mitigation
              </span>

              Platform

            </h1>

            <p className="text-[#8AA398] text-2xl leading-relaxed max-w-3xl mt-10">

              Government-grade environmental intelligence platform
              for PM2.5 forecasting, vulnerable population protection,
              infrastructure optimization, and AI-driven urban policy
              simulation across Seoul.

            </p>

            <div className="flex flex-wrap gap-5 mt-14">

              <a
                href="#live-map"
                className="inline-flex items-center justify-center px-10 py-5 rounded-[22px] bg-[#5FA57B] hover:bg-[#74BC91] transition-all duration-300 text-white font-semibold text-lg shadow-[0_10px_40px_rgba(95,165,123,0.35)]"
              >
                Open Live Seoul Map
              </a>

              <a
                href="#government-planning"
                className="inline-flex items-center justify-center px-10 py-5 rounded-[22px] border border-[#29463A] bg-[#10211A] hover:bg-[#163126] transition-all duration-300 text-white font-semibold text-lg"
              >
                Open AI Planning Engine
              </a>

            </div>

            <div className="grid grid-cols-3 gap-6 mt-20">

              <div className="glass-panel rounded-[30px] p-8">

                <p className="uppercase tracking-[0.18em] text-[#7F9D8F] text-sm">
                  PM2.5 Alerts
                </p>

                <h3 className="text-6xl font-bold mt-6">
                  48
                </h3>

                <p className="text-[#7E988C] mt-5 text-lg leading-relaxed">
                  Live pollution alerts across Seoul
                </p>

              </div>

              <div className="glass-panel rounded-[30px] p-8">

                <p className="uppercase tracking-[0.18em] text-[#7F9D8F] text-sm">
                  AI Models
                </p>

                <h3 className="text-6xl font-bold mt-6">
                  112
                </h3>

                <p className="text-[#7E988C] mt-5 text-lg leading-relaxed">
                  Government AI forecasting systems
                </p>

              </div>

              <div className="glass-panel rounded-[30px] p-8">

                <p className="uppercase tracking-[0.18em] text-[#7F9D8F] text-sm">
                  Districts
                </p>

                <h3 className="text-6xl font-bold mt-6">
                  76
                </h3>

                <p className="text-[#7E988C] mt-5 text-lg leading-relaxed">
                  Infrastructure and mobility zones
                </p>

              </div>

            </div>

          </div>

          {/* right visualization */}

          <div className="relative">

            <div className="glass-panel rounded-[50px] p-10 relative overflow-hidden">

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(95,165,123,0.15),transparent_70%)]" />

              <div className="flex items-center justify-between">

                <div>

                  <p className="uppercase tracking-[0.18em] text-[#82A796] text-sm">
                    Seoul AI Monitoring Grid
                  </p>

                  <h3 className="text-5xl font-bold mt-5">
                    Real-Time Urban Intelligence
                  </h3>

                </div>

                <div className="px-5 py-3 rounded-full border border-[#355847] bg-[#12211A] text-[#A4D1B8] text-sm">
                  LIVE
                </div>

              </div>

              <div className="relative h-[580px] mt-12 rounded-[36px] overflow-hidden border border-[#21382E] bg-[#08110D]">

                <div className="absolute inset-0 grid-overlay opacity-20" />

                {/* glowing zones */}

                <div className="absolute top-[120px] left-[140px] w-44 h-44 rounded-full bg-[#D75E52]/70 blur-[50px]" />

                <div className="absolute bottom-[120px] left-[300px] w-52 h-52 rounded-full bg-[#4F8E69]/70 blur-[50px]" />

                <div className="absolute top-[240px] right-[120px] w-40 h-40 rounded-full bg-[#D75E52]/70 blur-[50px]" />

                <div className="absolute top-[320px] left-[360px] w-40 h-40 rounded-full bg-[#8FD6A9]/70 blur-[50px]" />

                {/* connection line */}

                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 1000 580"
                >

                  <path
                    d="M160 500 C300 400, 420 320, 520 260 C650 180, 780 120, 900 60"
                    stroke="#A7D8BE"
                    strokeWidth="10"
                    fill="none"
                    strokeDasharray="18 18"
                    strokeLinecap="round"
                  />

                </svg>

                {/* floating cards */}

                <div className="absolute top-[60px] left-[60px] glass-panel px-8 py-6 rounded-[26px]">

                  <p className="uppercase tracking-[0.18em] text-[#88A89A] text-sm">
                    Gangnam
                  </p>

                  <h4 className="text-4xl font-bold mt-4">
                    High Exposure
                  </h4>

                </div>

                <div className="absolute bottom-[50px] left-[60px] glass-panel px-8 py-6 rounded-[26px]">

                  <p className="uppercase tracking-[0.18em] text-[#88A89A] text-sm">
                    AI Forecast
                  </p>

                  <h4 className="text-4xl font-bold mt-4 text-[#8FD6A9]">
                    Stable Airflow
                  </h4>

                </div>

                <div className="absolute bottom-[50px] right-[50px] glass-panel px-8 py-6 rounded-[26px]">

                  <p className="uppercase tracking-[0.18em] text-[#88A89A] text-sm">
                    Vulnerable Layer
                  </p>

                  <h4 className="text-4xl font-bold mt-4">
                    Schools + Hospitals
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