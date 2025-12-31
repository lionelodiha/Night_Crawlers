import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import VendorsHeroSection from '../components/vendors/VendorsHeroSection';

const Vendors: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="w-full">
        <VendorsHeroSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Vendors;
