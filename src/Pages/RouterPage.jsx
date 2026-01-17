import React from "react";
import { Route, Routes } from "react-router-dom";

import HomePage from "./HomePage";
import AboutUsPage from "./AboutUsPage";
import ContactPage from "./ContactPage";
import Services from "./Servic";
import NetworkingServices from "./NetworkingServices";
import ServiceDetail from "./ServiceDetail";
import GetQuote from "./GetQuote";
import Testimonials from "./Testimonials";
import ScrollToTop from "./ScrollToTop";
import ManagedITServices from "./ManagedITServices";
import CybersecurityServices from "./CybersecurityServices";
import CloudBackupServices from "./CloudBackupServices";
import ITConsultingServices from "./ITConsultingServices";
import TestimonialsPage from "./TestimonialsPage";

const RouterPage = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* HOME */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/networking-services" element={<NetworkingServices />} />
        <Route path="/managed-it-services" element={<ManagedITServices />} />
        <Route
          path="/cybersecurity-services"
          element={<CybersecurityServices />}
        />
        <Route
          path="/cloud-backup-solutions"
          element={<CloudBackupServices />}
        />
        <Route
          path="it-consulting-services"
          element={<ITConsultingServices />}
        />

        <Route path="/service/:slug" element={<ServiceDetail />} />
        <Route path="/get-quote" element={<GetQuote />} />
        <Route path="/testimonials" element={<Testimonials />} />
      </Routes>
    </>
  );
};

export default RouterPage;
