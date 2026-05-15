export default function SystemCapabilities() {
  return (
    <section className="relative py-32">

      <div className="section-container">

        <div className="glass-panel rounded-[40px] p-14 border border-[#22372E]">

          <div className="max-w-4xl">

            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A]/70 text-[#90B9A4] text-sm uppercase tracking-[0.2em]">
              AI System Capabilities
            </div>

            <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em]">
              Government Environmental Intelligence Infrastructure
            </h2>

            <p className="text-[#80998D] text-xl leading-relaxed mt-8">
              Advanced AI-driven environmental monitoring,
              pollution forecasting,
              urban infrastructure optimization,
              and vulnerable population protection systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-20">

            <div className="rounded-[32px] border border-[#29463A] bg-[#0E1915] p-10">
              <h3 className="text-3xl font-bold">
                Pollution Forecasting
              </h3>

              <p className="text-[#80998D] text-lg leading-relaxed mt-6">
                AI models predict PM2.5 dispersion,
                traffic emissions,
                and atmospheric pollution accumulation.
              </p>
            </div>

            <div className="rounded-[32px] border border-[#29463A] bg-[#0E1915] p-10">
              <h3 className="text-3xl font-bold">
                Infrastructure Planning
              </h3>

              <p className="text-[#80998D] text-lg leading-relaxed mt-6">
                Smart zoning analysis for construction,
                housing density,
                and sustainable urban expansion.
              </p>
            </div>

            <div className="rounded-[32px] border border-[#29463A] bg-[#0E1915] p-10">
              <h3 className="text-3xl font-bold">
                Vulnerable Population Protection
              </h3>

              <p className="text-[#80998D] text-lg leading-relaxed mt-6">
                AI prioritizes schools,
                hospitals,
                elderly centers,
                and residential exposure reduction.
              </p>
            </div>

            <div className="rounded-[32px] border border-[#29463A] bg-[#0E1915] p-10">
              <h3 className="text-3xl font-bold">
                Policy Simulation Engine
              </h3>

              <p className="text-[#80998D] text-lg leading-relaxed mt-6">
                Evaluate low-emission zones,
                green corridors,
                traffic restrictions,
                and urban mitigation strategies.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}