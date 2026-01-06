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

import Explore from './pages/Explore';
import VendorDetails from './pages/VendorDetails';

function App() {
  return (
    <Router>
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
        <Route path="/explore" element={<Explore />} />
        <Route path="/vendor-details" element={<VendorDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
