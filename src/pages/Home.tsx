import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import IntroSection from '../components/home/IntroSection';
import VendorShowcase from '../components/home/VendorShowcase';
import FeaturesSection from '../components/home/FeaturesSection';
import PromotionalBanner from '../components/home/PromotionalBanner';
import NewsletterSection from '../components/home/NewsletterSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroSection />
        <IntroSection />
        <VendorShowcase />
        <FeaturesSection />
        <PromotionalBanner />
        <NewsletterSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;