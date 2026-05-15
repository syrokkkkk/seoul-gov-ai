import {
  AlertTriangle,
  Satellite,
  Activity,
  ShieldCheck,
  Radar,
  Siren,
} from "lucide-react";

export default function OperationsCenter() {
  return (
    <section className="relative py-32 overflow-hidden">

      <div className="absolute inset-0 grid-overlay opacity-20" />

      <div className="absolute left-[10%] top-[20%] w-[420px] h-[420px] rounded-full bg-[#1B3A2F] blur-[140px] opacity-20" />

      <div className="section-container relative z-10">

        <div className="mb-16">

          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A]/70 text-[#90B9A4] text-sm uppercase tracking-[0.2em]">
            Seoul Environmental Operations Center
          </div>

          <h2 className="text-6xl font-bold mt-8 tracking-[-0.04em]">
            Live Environmental Incident Monitoring
          </h2>

          <p className="text-[#80998D] text-xl max-w-4xl mt-8 leading-relaxed">
            Real-time operational intelligence for pollution events,
            vulnerable population protection, atmospheric forecasting,
            and emergency mitigation response coordination.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">

          {/* LEFT */}

          <div className="glass-panel rounded-[40px] p-10">

            <div className="flex items-center justify-between mb-10">

              <div>
                <p className="uppercase tracking-[0.18em] text-[#8CA89B] text-sm">
                  Live Incident Feed
                </p>

                <h3 className="text-4xl font-bold mt-3">
                  Environmental Alert System
                </h3>
              </div>

              <div className="px-5 py-3 rounded-full border border-[#315847] bg-[#12211A] text-[#A8D2BB] text-sm">
                LIVE RESPONSE GRID
              </div>
            </div>

            <div className="space-y-6">

              <div className="rounded-[28px] border border-[#4D2B2B] bg-[#1A1212] p-7">

                <div className="flex items-start justify-between">

                  <div className="flex gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-[#311919] flex items-center justify-center">
                      <AlertTriangle
                        className="text-[#FF8F78]"
                        size={30}
                      />
                    </div>

                    <div>
                      <p className="uppercase tracking-[0.18em] text-[#C98A7D] text-sm">
                        PM2.5 Spike Alert
                      </p>

                      <h4 className="text-2xl font-bold mt-3">
                        Gangnam Exposure Surge
                      </h4>

                      <p className="text-[#9E827C] mt-4 leading-relaxed">
                        AI detected rapid PM2.5 increase near
                        central traffic corridors.
                      </p>
                    </div>
                  </div>

                  <span className="text-[#FF9D88] text-sm">
                    Critical
                  </span>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#2E453B] bg-[#111C18] p-7">

                <div className="flex items-start justify-between">

                  <div className="flex gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-[#183126] flex items-center justify-center">
                      <ShieldCheck
                        className="text-[#8FD7B0]"
                        size={30}
                      />
                    </div>

                    <div>
                      <p className="uppercase tracking-[0.18em] text-[#9AC5B0] text-sm">
                        Mitigation Active
                      </p>

                      <h4 className="text-2xl font-bold mt-3">
                        School Protection Protocol
                      </h4>

                      <p className="text-[#84A092] mt-4 leading-relaxed">
                        Traffic diversion and green buffering
                        activated near western Seoul schools.
                      </p>
                    </div>
                  </div>

                  <span className="text-[#8FD7B0] text-sm">
                    Active
                  </span>
                </div>
              </div>

              <div className="rounded-[28px] border border-[#2A3745] bg-[#101821] p-7">

                <div className="flex items-start justify-between">

                  <div className="flex gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-[#172432] flex items-center justify-center">
                      <Radar
                        className="text-[#8DBFFF]"
                        size={30}
                      />
                    </div>

                    <div>
                      <p className="uppercase tracking-[0.18em] text-[#9AB7D6] text-sm">
                        Atmospheric Forecast
                      </p>

                      <h4 className="text-2xl font-bold mt-3">
                        Western Wind Shift Detected
                      </h4>

                      <p className="text-[#8293A7] mt-4 leading-relaxed">
                        AI airflow simulation predicts increased
                        pollution transport toward Yongsan district.
                      </p>
                    </div>
                  </div>

                  <span className="text-[#8DBFFF] text-sm">
                    Monitoring
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="space-y-8">

            <div className="glass-panel rounded-[32px] p-8">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#183126] flex items-center justify-center">
                  <Satellite className="text-[#8ED7B1]" size={30} />
                </div>

                <div>
                  <p className="uppercase tracking-[0.18em] text-[#89A69A] text-sm">
                    Satellite Systems
                  </p>

                  <h3 className="text-4xl font-bold mt-2">
                    Online
                  </h3>
                </div>
              </div>

              <div className="mt-10 space-y-5">

                <div className="flex items-center justify-between">
                  <span className="text-[#7E998C]">
                    Aerosol Monitoring
                  </span>

                  <span className="text-[#97E0B8]">
                    Connected
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#7E998C]">
                    Urban Heat Layer
                  </span>

                  <span className="text-[#97E0B8]">
                    Active
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#7E998C]">
                    Atmospheric Sensors
                  </span>

                  <span className="text-[#97E0B8]">
                    Operational
                  </span>
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-[32px] p-8">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#182E25] flex items-center justify-center">
                  <Activity className="text-[#8FD7B0]" size={30} />
                </div>

                <div>
                  <p className="uppercase tracking-[0.18em] text-[#89A69A] text-sm">
                    AI Systems
                  </p>

                  <h3 className="text-4xl font-bold mt-2">
                    28 Models Active
                  </h3>
                </div>
              </div>

              <div className="mt-10 flex items-end gap-3 h-32">

                <div className="w-10 h-16 rounded-t-xl bg-[#285140]" />
                <div className="w-10 h-24 rounded-t-xl bg-[#376E58]" />
                <div className="w-10 h-20 rounded-t-xl bg-[#3F7F65]" />
                <div className="w-10 h-28 rounded-t-xl bg-[#58A582]" />
                <div className="w-10 h-14 rounded-t-xl bg-[#2B5B49]" />
              </div>
            </div>

            <div className="glass-panel rounded-[32px] p-8 border border-[#5B3434]">

              <div className="flex items-center gap-5">

                <div className="w-16 h-16 rounded-2xl bg-[#321B1B] flex items-center justify-center">
                  <Siren className="text-[#FF9B85]" size={30} />
                </div>

                <div>
                  <p className="uppercase tracking-[0.18em] text-[#C18E82] text-sm">
                    Emergency Response
                  </p>

                  <h3 className="text-4xl font-bold mt-2">
                    Elevated Risk
                  </h3>
                </div>
              </div>

              <p className="text-[#A18A83] mt-8 leading-relaxed text-lg">
                AI recommends temporary low-emission enforcement
                near vulnerable western Seoul districts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}