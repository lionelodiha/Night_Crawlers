import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Vendors from './pages/Vendors';
import VendorSignUp from './pages/VendorSignUp';
import VendorSignIn from './pages/VendorSignIn';
import VendorDashboard from './pages/VendorDashboard';
import VendorRestaurant from './pages/VendorRestaurant';
import VendorAddMenuItem from './pages/VendorAddMenuItem';
import RiderDashboard from './pages/RiderDashboard';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import UserProfile from './pages/UserProfile';

import Explore from './pages/Explore';
import VendorDetails from './pages/VendorDetails';
import OrderSummary from './pages/OrderSummary';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
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
    </Router>
  );
}

export default App;
