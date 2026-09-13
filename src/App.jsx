import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

// Layout & Loading
import Layout from "./components/Layout";
import RouteLoading from "./components/RouteLoading";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Reviews from "./pages/Reviews";
import Blog from "./pages/Blog";

// Other Pages / Components
import HowItWorks from "./components/HowItWorks";
import VoucherSection from "./components/VoucherSection";
import VoucherDetails from "./pages/VaoucherDetails";
import ExamList from "./pages/ExamList";

// Blog Pages
import AzureBlogDetails from "./Blog/AzureBlogDetails";
import AwsBlogDetails from "./Blog/AwsBlogDetails";
import DatabricksVouchers from "./Blog/DatabricksVouchers";
import ComptiaVouchers from "./Blog/ComptiaVouchers";
import FortinetVouchers from "./Blog/FortinetVouchers";
import GoogleCloudVouchers from "./Blog/GoogleCloudVoucher";
import SalesforceVouchers from "./Blog/SalesforceCRM";
import HashiCorpTerraformCertification from "./Blog/HashiCorpTerraformCertification";
import ClaudeCertification from "./Blog/ClaudeCetfification";
function App() {
  const location = useLocation();

  // Route change loading state
  const [isRouteLoading, setIsRouteLoading] = useState(false);

  useEffect(() => {
    setIsRouteLoading(true);

    const timer = setTimeout(() => {
      setIsRouteLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {/* Small loading indicator during route changes */}
      {isRouteLoading && <RouteLoading />}

      <Routes>
        {/* ==============================
            MAIN WEBSITE LAYOUT
        ============================== */}
        <Route path="/" element={<Layout />}>

          {/* Homepage */}
          <Route index element={<Home />} />

          {/* Main Pages */}
          <Route
            path="about"
            element={<About />}
          />

          <Route
            path="how-it-works"
            element={<HowItWorks />}
          />

          <Route
            path="vouchers"
            element={<VoucherSection />}
          />

          <Route
            path="reviews"
            element={<Reviews />}
          />

          <Route
            path="services"
            element={<Services />}
          />

          <Route
            path="contact"
            element={<Contact />}
          />

          {/* ==============================
              VOUCHER ROUTES
          ============================== */}

          <Route
            path="vouchers/:id"
            element={<VoucherDetails />}
          />

          <Route
            path="vouchers/:id/exams"
            element={<ExamList />}
          />

          {/* ==============================
              BLOG MAIN PAGE
          ============================== */}

          <Route
            path="blog"
            element={<Blog />}
          />

          {/* ==============================
              BLOG DETAIL PAGES
          ============================== */}

          <Route
            path="blog/microsoft-azure-exam-vouchers"
            element={<AzureBlogDetails />}
          />

          <Route
            path="blog/aws-exam-vouchers"
            element={<AwsBlogDetails />}
          />

          <Route
            path="blog/databricks-exam-vouchers"
            element={<DatabricksVouchers />}
          />

          <Route
            path="blog/salesforce-exam-vouchers"
            element={<SalesforceVouchers />} />

          <Route
            path="blog/comptia-exam-vouchers"
            element={<ComptiaVouchers />}
          />

          <Route
            path="blog/fortinet-exam-vouchers"
            element={<FortinetVouchers />}
          />

          <Route
            path="blog/google-cloud-exam-vouchers"
            element={<GoogleCloudVouchers />}
          />
          <Route
            path="blog/hashicorp-exam-vouchers"
            element={<HashiCorpTerraformCertification />} />

          <Route
            path="blog/ClaudeCertification-vouchers"
            element={<ClaudeCertification />} />
        </Route>


      </Routes>
    </>
  );
}

export default App;