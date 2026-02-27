import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import Footer from '../../components/layout/Footer';
import { Truck, Clock, ShieldCheck, MapPin, Smartphone, Star, CreditCard, Users, Store, Headphones } from 'lucide-react';

const Features: React.FC = () => {
    const features = [
        { icon: <Truck size={24} />, title: 'Lightning-Fast Delivery', desc: 'Our riders are strategically positioned across the city to ensure your orders arrive in record time — hot, fresh, and intact.' },
        { icon: <Store size={24} />, title: 'Multi-Vendor Marketplace', desc: 'From restaurants to pharmacies, grocery stores to beauty shops — browse and order from hundreds of vendors in one app.' },
        { icon: <MapPin size={24} />, title: 'Real-Time Tracking', desc: 'Track your rider on a live map from the moment they pick up your order to the second it arrives at your door.' },
        { icon: <ShieldCheck size={24} />, title: 'Verified Riders', desc: 'Every rider goes through a rigorous verification process by our admin team before they can accept deliveries.' },
        { icon: <CreditCard size={24} />, title: 'Secure Payments', desc: 'Multiple payment options including card, mobile money, and cash on delivery — all secured with industry-standard encryption.' },
        { icon: <Clock size={24} />, title: 'Scheduled Orders', desc: 'Plan ahead and schedule your orders for a specific time. Perfect for meal planning and special occasions.' },
        { icon: <Smartphone size={24} />, title: 'Easy-to-Use Interface', desc: 'A clean, intuitive design that makes browsing, ordering, and tracking effortless on any device.' },
        { icon: <Users size={24} />, title: 'Vendor Dashboard', desc: 'Partners get a powerful dashboard to manage their stores, menu items, track orders, and view earnings analytics.' },
        { icon: <Headphones size={24} />, title: '24/7 Support', desc: 'Our support team is always available to help with any issues — via chat, email, or phone.' },
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col font-poppins overflow-x-hidden">
            <Header />

            <main className="flex-grow w-full px-4 sm:px-6 md:px-[40px] pt-[1%] pb-[60px] sm:pb-[80px]">
                <div className="max-w-[1440px] mx-auto">

                    {/* Hero */}
                    <div className="flex flex-col items-center justify-center gap-[20px] sm:gap-[25px] md:gap-[30px] text-center mb-[60px] sm:mb-[80px]">
                        <div className="inline-flex items-center justify-center gap-[8px] sm:gap-[10px] border border-[#EAECF0] rounded-[50px] bg-[rgba(46,61,134,0.05)] px-[12px] sm:px-[16px] py-[8px] sm:py-[10px]">
                            <p className="leading-[22px] sm:leading-[25px] md:leading-[27px] text-[#363838] text-[14px] sm:text-[16px] md:text-[18px]">Features</p>
                        </div>
                        <h1 className="leading-[120%] tracking-[-0.02em] text-[#222222] text-[28px] sm:text-[36px] md:text-[48px] font-semibold max-w-[800px]">
                            Everything You Need, Built In
                        </h1>
                        <p className="leading-[22px] sm:leading-[26px] md:leading-[30px] text-[#667085] text-[14px] sm:text-[17px] md:text-[20px] max-w-[650px]">
                            Night Crawlers is packed with features designed to make ordering, delivering, and selling seamless for everyone.
                        </p>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-[80px] sm:mb-[100px]">
                        {features.map((feature) => (
                            <div key={feature.title} className="bg-white border border-[#EAECF0] rounded-[12px] p-6 sm:p-8 hover:shadow-md hover:border-[#C62222]/20 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-[#FFF0F0] text-[#C62222] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                                    {feature.icon}
                                </div>
                                <h3 className="text-[#222222] text-[18px] sm:text-[20px] font-semibold mb-2">{feature.title}</h3>
                                <p className="text-[#667085] text-[14px] sm:text-[15px] leading-[22px]">{feature.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Highlight Banner */}
                    <div className="bg-gradient-to-br from-[#C62222] to-[#991b1b] rounded-[16px] p-8 sm:p-12 mb-[80px] sm:mb-[100px] relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-black opacity-10 rounded-full -ml-12 -mb-12 blur-3xl"></div>
                        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                            <div className="text-center lg:text-left">
                                <h2 className="text-white text-[24px] sm:text-[32px] font-bold mb-3">Want to become a vendor?</h2>
                                <p className="text-red-100 text-[14px] sm:text-[16px] max-w-[500px]">Join our growing network of partners and reach thousands of new customers in your area.</p>
                            </div>
                            <Link to="/vendor-signup" className="inline-flex items-center justify-center gap-2 bg-white text-[#C62222] text-[15px] font-bold rounded-[8px] px-8 py-3.5 hover:bg-gray-50 transition-colors shadow-lg flex-shrink-0">
                                Sign Up as Vendor
                            </Link>
                        </div>
                    </div>

                    {/* For Everyone Section */}
                    <div className="mb-[60px]">
                        <div className="text-center mb-[40px]">
                            <p className="text-[#C62222] text-[14px] sm:text-[16px] font-semibold mb-2">Built for Everyone</p>
                            <h2 className="text-[#222222] text-[24px] sm:text-[32px] font-semibold leading-tight tracking-[-0.02em]">Three Platforms, One Ecosystem</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
                            {[
                                { title: 'For Customers', items: ['Browse & order from any vendor', 'Real-time order tracking', 'Saved addresses & favorites', 'Order history & reorder'], accent: '#C62222' },
                                { title: 'For Vendors', items: ['Full store management', 'Menu & item control', 'Order notifications', 'Earnings analytics'], accent: '#222222' },
                                { title: 'For Riders', items: ['Accept orders nearby', 'Turn-by-turn navigation', 'Earnings tracking', 'Flexible schedule'], accent: '#C62222' },
                            ].map((role) => (
                                <div key={role.title} className="border border-[#EAECF0] rounded-[12px] p-6 sm:p-8 hover:shadow-md transition-shadow">
                                    <h3 className="text-[18px] sm:text-[20px] font-bold mb-4" style={{ color: role.accent }}>{role.title}</h3>
                                    <ul className="space-y-3">
                                        {role.items.map((item) => (
                                            <li key={item} className="flex items-start gap-3 text-[#667085] text-[14px] sm:text-[15px]">
                                                <Star size={14} className="text-[#C62222] mt-1 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Features;
