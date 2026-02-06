import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/ui/Loader';

// Lazy load all pages for global transition effect
const Home = lazy(() => import('./pages/Home'));
const SignIn = lazy(() => import('./pages/SignIn'));
const SignUp = lazy(() => import('./pages/SignUp'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Vendors = lazy(() => import('./pages/Vendors'));
const VendorSignUp = lazy(() => import('./pages/VendorSignUp'));
const VendorSignIn = lazy(() => import('./pages/VendorSignIn'));
const VendorDashboard = lazy(() => import('./pages/VendorDashboard'));
const VendorRestaurant = lazy(() => import('./pages/VendorRestaurant'));
const VendorAddMenuItem = lazy(() => import('./pages/VendorAddMenuItem'));
const RiderDashboard = lazy(() => import('./pages/RiderDashboard'));
const AdminLogin = lazy(() => import('./pages/AdminLogin'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));
const UserProfile = lazy(() => import('./pages/UserProfile'));
const Explore = lazy(() => import('./pages/Explore'));
const VendorDetails = lazy(() => import('./pages/VendorDetails'));
const OrderSummary = lazy(() => import('./pages/OrderSummary'));

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<Loader fullScreen />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/vendor-signup" element={<VendorSignUp />} />
          <Route path="/vendor-signin" element={<VendorSignIn />} />
          <Route path="/vendor-dashboard" element={<VendorDashboard />} />
          <Route path="/vendor-dashboard/restaurant/:id" element={<VendorRestaurant />} />
          <Route path="/vendor-dashboard/restaurant/:id/add-item" element={<VendorAddMenuItem />} />

          {/* New Pages */}
          <Route path="/rider-dashboard" element={<RiderDashboard />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user-profile" element={<UserProfile />} />

          <Route path="/explore" element={<Explore />} />
          <Route path="/vendor-details" element={<VendorDetails />} />
          <Route path="/order-summary" element={<OrderSummary />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
