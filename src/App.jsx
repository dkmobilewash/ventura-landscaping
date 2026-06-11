import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';

// Main pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Testimonials from './pages/Testimonials';
import JobOpportunities from './pages/JobOpportunities';
import NotFound from './pages/NotFound';

// Custom-layout service pages
import MonthlyCalendar from './pages/MonthlyCalendar';
import Critters from './pages/Critters';

// Templated service pages
import ServiceYardCareAndLawnMaintenance from './pages/ServiceYardCareAndLawnMaintenance';
import ServiceTreeRemovalAndInstallation from './pages/ServiceTreeRemovalAndInstallation';
import ServiceTreeTrimmingAndPruning from './pages/ServiceTreeTrimmingAndPruning';
import ServiceAdditionalLandscapeServices from './pages/ServiceAdditionalLandscapeServices';
import ServiceDiseaseEnvironmentalPestAnimalDamagePrevention from './pages/ServiceDiseaseEnvironmentalPestAnimalDamagePrevention';
import ServiceHoaLandscapeServices from './pages/ServiceHoaLandscapeServices';
import ServiceLandscapeDesignAndInstallation from './pages/ServiceLandscapeDesignAndInstallation';
import ServiceArtificialTurfAndPuttingGreens from './pages/ServiceArtificialTurfAndPuttingGreens';
import ServiceBarbequesAndOutdoorKitchens from './pages/ServiceBarbequesAndOutdoorKitchens';
import ServiceFireplacesAndFirepits from './pages/ServiceFireplacesAndFirepits';
import ServiceOutdoorLighting from './pages/ServiceOutdoorLighting';
import ServiceBouldersAndRock from './pages/ServiceBouldersAndRock';
import ServicePotsAndFlowerBeds from './pages/ServicePotsAndFlowerBeds';
import ServiceMoreHardscapeElements from './pages/ServiceMoreHardscapeElements';
import ServiceMatureLandscapes from './pages/ServiceMatureLandscapes';
import ServiceIrrigationServices from './pages/ServiceIrrigationServices';
import ServiceLightingServices from './pages/ServiceLightingServices';

// Location pages
import LocationVentura from './pages/LocationVentura';
import LocationOxnard from './pages/LocationOxnard';
import LocationChannelIslands from './pages/LocationChannelIslands';
import LocationCamarillo from './pages/LocationCamarillo';
import LocationSaticoy from './pages/LocationSaticoy';
import LocationSantaPaula from './pages/LocationSantaPaula';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          {/* Main */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/job-opportunities" element={<JobOpportunities />} />

          {/* Yard Care & Maintenance */}
          <Route path="/yard-care-and-lawn-maintenance" element={<ServiceYardCareAndLawnMaintenance />} />
          <Route path="/tree-removal-and-installation" element={<ServiceTreeRemovalAndInstallation />} />
          <Route path="/tree-trimming-and-pruning" element={<ServiceTreeTrimmingAndPruning />} />
          <Route path="/monthly-landscaping-to-do-calendar" element={<MonthlyCalendar />} />
          <Route path="/additional-landscape-services" element={<ServiceAdditionalLandscapeServices />} />
          <Route path="/critters-we-encounter" element={<Critters />} />
          <Route path="/disease-environmental-pest-animal-damage-prevention" element={<ServiceDiseaseEnvironmentalPestAnimalDamagePrevention />} />

          {/* Landscape Design & Installation */}
          <Route path="/hoa-landscape-services" element={<ServiceHoaLandscapeServices />} />
          <Route path="/landscape-design-and-installation" element={<ServiceLandscapeDesignAndInstallation />} />
          <Route path="/artificial-turf-and-putting-greens" element={<ServiceArtificialTurfAndPuttingGreens />} />
          <Route path="/barbeques-and-outdoor-kitchens" element={<ServiceBarbequesAndOutdoorKitchens />} />
          <Route path="/fireplaces-and-firepits" element={<ServiceFireplacesAndFirepits />} />
          <Route path="/outdoor-lighting" element={<ServiceOutdoorLighting />} />
          <Route path="/boulders-and-rock" element={<ServiceBouldersAndRock />} />
          <Route path="/pots-and-flower-beds" element={<ServicePotsAndFlowerBeds />} />
          <Route path="/more-hardscape-elements" element={<ServiceMoreHardscapeElements />} />
          <Route path="/mature-landscapes" element={<ServiceMatureLandscapes />} />

          {/* Irrigation & Lighting */}
          <Route path="/irrigation-services" element={<ServiceIrrigationServices />} />
          <Route path="/lighting-services" element={<ServiceLightingServices />} />

          {/* Locations */}
          <Route path="/ventura" element={<LocationVentura />} />
          <Route path="/oxnard" element={<LocationOxnard />} />
          <Route path="/channel-islands" element={<LocationChannelIslands />} />
          <Route path="/camarillo" element={<LocationCamarillo />} />
          <Route path="/saticoy" element={<LocationSaticoy />} />
          <Route path="/santa-paula" element={<LocationSantaPaula />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
