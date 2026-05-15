import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import AnalyticsPanel from "./components/sections/AnalyticsPanel";
import SeoulMap from "./components/sections/SeoulMap";
import PolicySimulator from "./components/sections/PolicySimulator";
import VulnerableLayer from "./components/sections/VulnerableLayer";
import OperationsCenter from "./components/sections/OperationsCenter";
import AnalyticsCharts from "./components/sections/AnalyticsCharts";
import UrbanPlanningAI from "./components/sections/UrbanPlanningAI";
import SystemCapabilities from "./components/sections/SystemCapabilities";
import PolicyCommandCenter from "./components/sections/PolicyCommandCenter";
import DistrictComparison from "./components/sections/DistrictComparison";
import LiveAlerts from "./components/sections/LiveAlerts";
import Footer from "./components/layout/Footer";
import FadeInSection from "./components/ui/FadeInSection";

export default function App() {
  return (
    <div className="bg-[#07110D] text-white min-h-screen overflow-x-hidden">

      <Navbar />

      <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection delay={0.05}>
        <AnalyticsPanel />
      </FadeInSection>

      <FadeInSection delay={0.08}>
        <SeoulMap />
      </FadeInSection>

      <FadeInSection delay={0.1}>
        <PolicySimulator />
      </FadeInSection>

      <FadeInSection delay={0.12}>
        <VulnerableLayer />
      </FadeInSection>

      <FadeInSection delay={0.14}>
        <OperationsCenter />
      </FadeInSection>

      <FadeInSection delay={0.16}>
        <AnalyticsCharts />
      </FadeInSection>

      <FadeInSection delay={0.18}>
        <UrbanPlanningAI />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <SystemCapabilities />
      </FadeInSection>

      <FadeInSection delay={0.22}>
        <PolicyCommandCenter />
      </FadeInSection>

      <FadeInSection delay={0.24}>
        <DistrictComparison />
      </FadeInSection>

      <FadeInSection delay={0.26}>
        <LiveAlerts />
      </FadeInSection>

      <FadeInSection delay={0.28}>
        <Footer />
      </FadeInSection>

    </div>
  );
}