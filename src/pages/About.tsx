import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Heart, Target, Eye, Users, Truck, Store, ShieldCheck, MapPin } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-poppins overflow-x-hidden">
            <Header />

            <main className="flex-grow w-full px-4 sm:px-6 md:px-[40px] pt-[1%] pb-[60px] sm:pb-[80px]">
                <div className="max-w-[1440px] mx-auto">

                    {/* Hero */}
                    <div className="flex flex-col items-center justify-center gap-[20px] sm:gap-[25px] md:gap-[30px] text-center mb-[60px] sm:mb-[80px]">
                        <div className="inline-flex items-center justify-center gap-[8px] sm:gap-[10px] border border-[#EAECF0] rounded-[50px] bg-[rgba(46,61,134,0.05)] px-[12px] sm:px-[16px] py-[8px] sm:py-[10px]">
                            <p className="leading-[22px] sm:leading-[25px] md:leading-[27px] text-[#363838] text-[14px] sm:text-[16px] md:text-[18px]">About Us</p>
                        </div>
                        <h1 className="leading-[120%] tracking-[-0.02em] text-[#222222] text-[28px] sm:text-[36px] md:text-[48px] font-semibold max-w-[800px]">
                            Delivering More Than Just Packages
                        </h1>
                        <p className="leading-[22px] sm:leading-[26px] md:leading-[30px] text-[#667085] text-[14px] sm:text-[17px] md:text-[20px] max-w-[650px]">
                            We're building the future of on-demand delivery in Nigeria — connecting communities with the businesses they love, one delivery at a time.
                        </p>
                    </div>

                    {/* Mission, Vision, Values */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-[80px] sm:mb-[100px]">
                        {[
                            { icon: <Target size={28} />, title: 'Our Mission', desc: 'To make everyday essentials accessible to everyone by creating a seamless bridge between local businesses and their customers through fast, reliable delivery.' },
                            { icon: <Eye size={28} />, title: 'Our Vision', desc: 'To become the leading on-demand delivery platform in Africa, empowering local vendors and creating thousands of rider opportunities across the continent.' },
                            { icon: <Heart size={28} />, title: 'Our Values', desc: 'Speed, trust, and community. We believe in supporting local businesses, caring for our riders, and delighting every customer with exceptional service.' },
                        ].map((item) => (
                            <div key={item.title} className="bg-white border border-[#EAECF0] rounded-[12px] p-6 sm:p-8 text-center hover:shadow-md hover:border-[#C62222]/20 transition-all">
                                <div className="w-14 h-14 rounded-full bg-[#FFF0F0] text-[#C62222] flex items-center justify-center mx-auto mb-5">
                                    {item.icon}
                                </div>
                                <h3 className="text-[#222222] text-[18px] sm:text-[20px] font-semibold mb-3">{item.title}</h3>
                                <p className="text-[#667085] text-[14px] sm:text-[15px] leading-[22px]">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* Our Story */}
                    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-[80px] sm:mb-[100px]">
                        <div className="flex-1">
                            <p className="text-[#C62222] text-[14px] sm:text-[16px] font-semibold mb-3">Our Story</p>
                            <h2 className="text-[#222222] text-[24px] sm:text-[32px] font-semibold leading-tight tracking-[-0.02em] mb-5">
                                Born from a Simple Question
                            </h2>
                            <div className="space-y-4 text-[#667085] text-[14px] sm:text-[15px] leading-[24px]">
                                <p>
                                    Night Crawlers started with a simple question: <em>"Why is it so hard to get things delivered quickly and reliably?"</em>
                                </p>
                                <p>
                                    Founded in 2025 in Lagos, Nigeria, we set out to build a platform that puts local businesses at the forefront. We noticed that small vendors — restaurants, pharmacies, grocery stores — were struggling to reach customers beyond their immediate neighborhoods.
                                </p>
                                <p>
                                    Today, Night Crawlers connects hundreds of vendors with thousands of customers, powered by a growing fleet of verified riders who ensure every order arrives safely and on time.
                                </p>
                                <p>
                                    We're not just a delivery app. We're a community that supports local entrepreneurship, creates flexible earning opportunities for riders, and brings convenience to every doorstep.
                                </p>
                            </div>
                        </div>
                        <div className="flex-1 w-full">
                            <div className="bg-gradient-to-br from-[#C62222] to-[#991b1b] rounded-[16px] p-8 sm:p-10 text-white relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                                <div className="space-y-6">
                                    {[
                                        { icon: <Store size={20} />, value: '500+', label: 'Vendor Partners' },
                                        { icon: <Users size={20} />, value: '10,000+', label: 'Active Customers' },
                                        { icon: <Truck size={20} />, value: '200+', label: 'Verified Riders' },
                                        { icon: <MapPin size={20} />, value: '15+', label: 'Cities Covered' },
                                    ].map((stat) => (
                                        <div key={stat.label} className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-white/15 flex items-center justify-center flex-shrink-0">
                                                {stat.icon}
                                            </div>
                                            <div>
                                                <p className="text-[20px] sm:text-[24px] font-bold leading-tight">{stat.value}</p>
                                                <p className="text-red-200 text-[13px]">{stat.label}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Team Values */}
                    <div className="mb-[80px] sm:mb-[100px]">
                        <div className="text-center mb-[40px]">
                            <p className="text-[#C62222] text-[14px] sm:text-[16px] font-semibold mb-2">What Drives Us</p>
                            <h2 className="text-[#222222] text-[24px] sm:text-[32px] font-semibold leading-tight tracking-[-0.02em]">Our Core Principles</h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            {[
                                { icon: <ShieldCheck size={22} />, title: 'Trust & Safety', desc: 'Every rider is verified and every transaction is secured.' },
                                { icon: <Heart size={22} />, title: 'Community First', desc: 'We prioritize local businesses and the communities they serve.' },
                                { icon: <Truck size={22} />, title: 'Speed Matters', desc: 'We obsess over delivery times so you never have to wait long.' },
                                { icon: <Users size={22} />, title: 'Inclusive Growth', desc: 'Creating opportunities for vendors, riders, and customers alike.' },
                            ].map((val) => (
                                <div key={val.title} className="bg-[rgba(234,236,240,0.42)] rounded-[10px] p-5 sm:p-6 hover:bg-white hover:border hover:border-[#EAECF0] hover:shadow-sm transition-all">
                                    <div className="w-10 h-10 rounded-lg bg-[#FFF0F0] text-[#C62222] flex items-center justify-center mb-4">
                                        {val.icon}
                                    </div>
                                    <h4 className="text-[#222222] text-[16px] font-semibold mb-1">{val.title}</h4>
                                    <p className="text-[#667085] text-[13px] leading-[20px]">{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col items-center text-center gap-5">
                        <h2 className="text-[#222222] text-[24px] sm:text-[32px] font-semibold leading-tight">Join the Night Crawlers Family</h2>
                        <p className="text-[#667085] text-[15px] sm:text-[17px] max-w-[500px]">Whether you're a customer, vendor, or rider — there's a place for you.</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link to="/signup" className="inline-flex items-center justify-center gap-2 bg-[#C62222] text-white text-[15px] font-semibold rounded-[6px] px-6 py-3 hover:bg-[#A01B1B] transition-colors shadow-sm">
                                Get Started
                            </Link>
                            <Link to="/contact" className="inline-flex items-center justify-center gap-2 border border-[#EAECF0] text-[#222222] text-[15px] font-semibold rounded-[6px] px-6 py-3 hover:bg-gray-50 transition-colors">
                                Contact Us
                            </Link>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default About;
