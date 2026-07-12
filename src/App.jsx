import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout.jsx";
import PageLoader from "./components/ui/PageLoader.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";

// Route-level code splitting — each page is only downloaded when visited.
const Home = lazy(() => import("./pages/Home.jsx"));
const ServicesOverview = lazy(() => import("./pages/ServicesOverview.jsx"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail.jsx"));
const AuditPlatform = lazy(() => import("./pages/AuditPlatform.jsx"));
const Insights = lazy(() => import("./pages/Insights.jsx"));
const InsightDetail = lazy(() => import("./pages/InsightDetail.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const TermsOfService = lazy(() => import("./pages/TermsOfService.jsx"));
const Login = lazy(() => import("./pages/ClientPortal/Login.jsx"));
const Dashboard = lazy(() => import("./pages/ClientPortal/Dashboard.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesOverview />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/business-visibility-audit" element={<AuditPlatform />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<InsightDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* Client Portal — authentication-ready, see src/auth */}
          <Route path="/portal/login" element={<Login />} />
          <Route
            path="/portal/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
