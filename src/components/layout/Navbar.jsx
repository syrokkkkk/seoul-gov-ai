export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[#1D352C] bg-[#07110D]/80 backdrop-blur-xl">

      <div className="section-container">

        <div className="h-[88px] flex items-center justify-between">

          <div className="flex items-center gap-5">

            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#315847] to-[#173229] flex items-center justify-center text-[#9FD2B7] font-bold text-xl shadow-2xl">
              S
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-wide">
                Seoul Metropolitan AI Platform
              </h1>

              <p className="text-[#6E8E80] text-sm mt-1">
                Urban Pollution Intelligence System
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-10 text-[#8DAA9C]">

            <a href="#" className="hover:text-white transition">
              Dashboard
            </a>

            <a href="#" className="hover:text-white transition">
              Analytics
            </a>

            <a href="#" className="hover:text-white transition">
              Simulations
            </a>

            <a href="#" className="hover:text-white transition">
              Vulnerability Layer
            </a>

            <a href="#" className="hover:text-white transition">
              Policy Engine
            </a>
          </nav>

          <div className="flex items-center gap-4">

            <div className="hidden md:flex items-center gap-3 px-5 py-3 rounded-full border border-[#29463A] bg-[#10211A]">
              
              <div className="w-3 h-3 rounded-full bg-[#67C587] animate-pulse" />

              <span className="text-[#A7C7B8] text-sm">
                LIVE SEOUL NETWORK
              </span>
            </div>

            <button className="px-5 py-3 rounded-full bg-[#173229] border border-[#315847] text-[#CBE6D9] hover:bg-[#1F4637] transition">
              Government Access
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}