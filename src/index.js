import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // for navbar toggle
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';


import ScrollToTop from './components/ScrollToTop.js';
// import Header from './components/Header1.js';
// import Footer from './components/Footer1.js';
import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

import HomePage from './pages/home/HomePage.js';
import ContactPage from './pages/contactUs/ContactPage.js';
import ServicePage from './pages/service/ServicePage.js';
import AboutPage from './pages/about/AboutPage.js';

// Service 
import WebdevelopmentService from './pages/service/WebdevelopmentService.js';
import WebDesignService from './pages/service/WebDesignService.js';
import SeoService from './pages/service/SeoService.js';
import SmoService from './pages/service/SmoService.js';
import GoogleAdService from './pages/service/GoogleAdService.js';
import MetaAdService from './pages/service/MetaAdService.js';
import Googleworkspace from './pages/service/Googleworkspace.js';
import MSOffice365 from './pages/service/MSOffice365.js';

// blog pages 
import BlogPage from './pages/Blog/BlogPage.js';
import BlogDetauls from './pages/Blog/BlogDetails.js';

// Admin blog pages
import Login from './pages/admin/Login.js';
import Dashboard from './pages/admin/Dashboard.js';
import ProtectedRoute from './components/admin/ProtectedRoute.js';
import BlogList from './pages/admin/BlogList.js';
import CreateBlog from "./pages/admin/CreateBlog.js";
import EditBlog from "./pages/admin/EditBlog.js";


// Page Not Found 
import NotFound from "./pages/NotFound";

// landing page 
import WebsiteDevelopment from './pages/landingPage/WebsiteDevelopment.js';
import GoogleworkspaceLending from './pages/landingPage/GoogleworkspaceLending.js';

//Privacy Policy & term&condition Pages
import PrivacyPolicyPage from './pages/PrivacyPolicyPage.js';
import TermsConditionsPage from './pages/TermsConditionsPage.js';







// Fix ResizeObserver error (add this ABOVE createRoot)
const resizeObserverErr = window.ResizeObserver;
window.ResizeObserver = class extends resizeObserverErr {
  constructor(callback) {
    super((entries, observer) => {
      requestAnimationFrame(() => {
        callback(entries, observer);
      });
    });
  }
};


// ResizeObserver loop completed with undelivered notifications
const originalError = console.error;

console.error = (...args) => {
  if (
    args[0]?.includes?.("ResizeObserver loop completed with undelivered notifications")
  ) {
    return;
  }
  originalError(...args);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Public Website */}
        <Route element={<PublicLayout />}>

          <Route path='/' element={<HomePage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/service' element={<ServicePage />} />

          <Route path="/service/website-development" element={<WebdevelopmentService />} />
          <Route path="/service/web-design" element={<WebDesignService />} />
          <Route path="/service/seo" element={<SeoService />} />
          <Route path="/service/smo" element={<SmoService />} />
          <Route path="/service/google-ad" element={<GoogleAdService />} />
          <Route path="/service/meta-ad" element={<MetaAdService />} />
          <Route path="/service/google-workspace" element={<Googleworkspace />} />
          <Route path="/service/ms-office-365" element={<MSOffice365 />} />

          <Route path='/about' element={<AboutPage />} />

          {/* Blog pages */}
          <Route path='/blog' element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogDetauls />} />

          {/* Landing Pages */}
          <Route path="/website-development" element={<WebsiteDevelopment />} />
          <Route path='/google-workspace' element={<GoogleworkspaceLending />} />

          {/* Privacy Policy & Term & Condition Pages */}
          <Route path='/privacy-policy' element={<PrivacyPolicyPage />} />
          <Route path='/term-condition' element={<TermsConditionsPage />} />

          {/* page not found */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Admin Login */}
        <Route path="/admin/login" element={<Login />} />

        {/* Protected Admin */}
        <Route
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/blogs" element={<BlogList />} />
          <Route path="/admin/blogs/create" element={<CreateBlog />} />
          <Route path="/admin/blogs/edit/:id" element={<EditBlog />} />

        </Route>



      </Routes>
    </BrowserRouter>

    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      pauseOnHover
      theme="colored"
    />
  </HelmetProvider>
);
