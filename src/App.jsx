import Navbar from "./components/layout/Navbar";

import Hero from "./components/sections/Hero";

import AnalyticsPanel from "./components/sections/AnalyticsPanel";

import SeoulMap from "./components/sections/SeoulMap";

import PolicySimulator from "./components/sections/PolicySimulator";

import VulnerableLayer from "./components/sections/VulnerableLayer";

import OperationsCenter from "./components/sections/OperationsCenter";

import AnalyticsCharts from "./components/sections/AnalyticsCharts";

import PolicyCommandCenter from "./components/sections/PolicyCommandCenter";

import LiveAlerts from "./components/sections/LiveAlerts";

import Footer from "./components/layout/Footer";

import FadeInSection from "./components/ui/FadeInSection";

/* ВАЖНО:
   оставляем только ОДИН import UrbanPlanningAI
*/

import UrbanPlanningAI from "./components/sections/UrbanPlanningAI";
export default function App() {

  return (

    <div className="bg-[#07110D] text-white min-h-screen overflow-x-hidden">

      <Navbar />

      {/* HERO */}

      <FadeInSection>
        <Hero />
      </FadeInSection>

      {/* ANALYTICS */}

      <FadeInSection delay={0.05}>
        <AnalyticsPanel />
      </FadeInSection>

      {/* LIVE MAP */}

      <FadeInSection delay={0.08}>
        <SeoulMap />
      </FadeInSection>

      {/* POLICY */}

      <FadeInSection delay={0.1}>
        <PolicySimulator />
      </FadeInSection>

      {/* VULNERABLE POPULATION */}

      <FadeInSection delay={0.12}>
        <VulnerableLayer />
      </FadeInSection>

      {/* OPERATIONS */}

      <FadeInSection delay={0.14}>
        <OperationsCenter />
      </FadeInSection>

      {/* AI ANALYTICS */}

      <FadeInSection delay={0.16}>
        <AnalyticsCharts />
      </FadeInSection>

      {/* MAIN AI URBAN ENGINE */}

      <FadeInSection delay={0.18}>
        <UrbanPlanningAI />
      </FadeInSection>


      {/* GOVERNMENT */}

      <FadeInSection delay={0.22}>
        <PolicyCommandCenter />
      </FadeInSection>

      {/* ALERTS */}

      <FadeInSection delay={0.26}>
        <LiveAlerts />
      </FadeInSection>

      {/* FOOTER */}

      <FadeInSection delay={0.28}>
        <Footer />
      </FadeInSection>

    </div>

  );

}