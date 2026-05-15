import {
  SlidersHorizontal,
  TrendingDown,
  ShieldCheck,
  Landmark,
} from "lucide-react";

export default function PolicySimulator() {
  return (
    <section className="relative py-32 overflow-hidden">

      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="section-container relative z-10">

        <div className="mb-16">

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A]/70 text-[#90B9A4] text-sm uppercase tracking-[0.2em]">
            AI Policy Simulation Engine
          </div>

          <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em]">
            Urban Mitigation Scenario Modeling
          </h2>

          <p className="text-[#80998D] text-xl max-w-4xl mt-8 leading-relaxed">
            AI-driven policy simulations for reducing PM2.5 exposure,
            protecting vulnerable populations, and optimizing
            Seoul-wide environmental interventions.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">

          {/* left controls */}

          <div className="glass-panel rounded-[40px] p-10">

            <div className="flex items-center gap-5 mb-10">

              <div className="w-16 h-16 rounded-2xl bg-[#183126] flex items-center justify-center">
                <SlidersHorizontal
                  className="text-[#8FD5B0]"
                  size={30}
                />
              </div>

              <div>
                <p className="uppercase tracking-[0.18em] text-[#8CA99B] text-sm">
                  Live Policy Controls
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  AI Urban Intervention Engine
                </h3>
              </div>
            </div>

            <div className="space-y-10">

              {[
                {
                  title: "Traffic Reduction",
                  value: "68%",
                },

                {
                  title: "Green Corridor Expansion",
                  value: "54%",
                },

                {
                  title: "Industrial Regulation",
                  value: "73%",
                },

                {
                  title: "Construction Restrictions",
                  value: "39%",
                },

                {
                  title: "Public Transport Optimization",
                  value: "81%",
                },
              ].map((item) => (
                <div key={item.title}>

                  <div className="flex items-center justify-between mb-4">

                    <span className="text-[#DDEEE5] text-lg">
                      {item.title}
                    </span>

                    <span className="text-[#8FCDB0] text-lg">
                      {item.value}
                    </span>
                  </div>

                  <div className="h-4 rounded-full bg-[#13211B] overflow-hidden">

                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#3E7A5E] to-[#88D6AE]"
                      style={{
                        width: item.value,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* right outputs */}

          <div className="space-y-8">

            <div className="glass-panel rounded-[32px] p-8">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#1C3429] flex items-center justify-center">
                  <TrendingDown
                    className="text-[#8FD4AE]"
                    size={30}
                  />
                </div>

                <div>
                  <p className="uppercase tracking-[0.18em] text-[#89A598] text-sm">
                    Predicted Reduction
                  </p>

                  <h3 className="text-5xl font-bold mt-2">
                    -21%
                  </h3>
                </div>
              </div>

              <p className="text-[#7F998C] mt-8 text-lg leading-relaxed">
                AI predicts a 21% decrease in PM2.5 concentration
                under current mitigation parameters.
              </p>
            </div>

            <div className="glass-panel rounded-[32px] p-8">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#1D2B22] flex items-center justify-center">
                  <ShieldCheck
                    className="text-[#A8E0BF]"
                    size={30}
                  />
                </div>

                <div>
                  <p className="uppercase tracking-[0.18em] text-[#89A598] text-sm">
                    Health Benefit
                  </p>

                  <h3 className="text-5xl font-bold mt-2">
                    +142K
                  </h3>
                </div>
              </div>

              <p className="text-[#7F998C] mt-8 text-lg leading-relaxed">
                Estimated reduction in annual vulnerable population exposure.
              </p>
            </div>

            <div className="glass-panel rounded-[32px] p-8">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#33281C] flex items-center justify-center">
                  <Landmark
                    className="text-[#F0C36C]"
                    size={30}
                  />
                </div>

                <div>
                  <p className="uppercase tracking-[0.18em] text-[#89A598] text-sm">
                    Economic Tradeoff
                  </p>

                  <h3 className="text-5xl font-bold mt-2">
                    Moderate
                  </h3>
                </div>
              </div>

              <p className="text-[#7F998C] mt-8 text-lg leading-relaxed">
                AI estimates moderate short-term economic adjustment
                with long-term public health gains.
              </p>
            </div>

            <div className="glass-panel rounded-[32px] p-8 border border-[#315847]">

              <p className="uppercase tracking-[0.18em] text-[#8FB6A2] text-sm">
                AI Recommendation
              </p>

              <h3 className="text-3xl font-bold mt-6 leading-snug">
                Prioritize low-emission corridors around
                hospitals and educational districts.
              </h3>

              <div className="mt-8 flex items-center justify-between">

                <span className="text-[#7E998B]">
                  Confidence Score
                </span>

                <span className="text-[#98E1B9] text-2xl font-bold">
                  92%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}