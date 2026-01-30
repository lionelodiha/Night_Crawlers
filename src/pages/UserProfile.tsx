import React, { useState } from 'react';
import Footer from '../components/layout/Footer';
import { User, Mail, MapPin, Phone, Edit2, ShoppingBag, CreditCard, Bell, LogOut } from 'lucide-react';

// Mock user data since we don't have a full auth context for regular users yet
const MOCK_USER = {
    firstName: 'Chidubem',
    lastName: 'User',
    email: 'chidubem@example.com',
    phone: '+234 812 345 6789',
    location: 'Lagos, Nigeria',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=1000'
};

const UserProfile: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'settings'>('profile');

    // We need a Navbar component or similar context? 
    // For now I'll check if a Navbar exists, if not I'll just build the page.
    // The context mentions 'Navbar' isn't explicitly in the file list but Home.tsx usually uses one.
    // I'll assume Home uses a Navbar I can import, or I will just omit it if I can't find it.
    // Checking file list... no explicit Navbar.tsx in src/pages or shown in list_dir of src/components... 
    // Wait, step 4 showed `VendorSignIn` imports `Input` from `../components/ui/Input`.
    // I'll skip Navbar import for now and just make a layout.

    return (
        <div className="min-h-screen bg-gray-50 font-poppins flex flex-col">
            {/* Mock Nav for visual consistency if real one isn't available easily */}
            <header className="bg-white px-6 py-4 border-b border-gray-100 flex items-center justify-between sticky top-0 z-20">
                <div className="text-xl font-bold text-[#C62222]">Night Crawlers</div>
                <div className="h-8 w-8 rounded-full overflow-hidden border border-gray-200">
                    <img src={MOCK_USER.avatar} alt="Profile" className="w-full h-full object-cover" />
                </div>
            </header>

            <main className="flex-grow w-full max-w-5xl mx-auto px-4 sm:px-6 py-8">

                <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-8">
                    {/* Sidebar */}
                    <aside className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-fit">
                        <div className="flex flex-col items-center mb-8">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 relative">
                                <img src={MOCK_USER.avatar} alt="Profile" className="w-full h-full object-cover" />
                                <button className="absolute bottom-0 right-0 bg-[#C62222] text-white p-1.5 rounded-full shadow-sm hover:bg-[#A01B1B] transition">
                                    <Edit2 size={12} />
                                </button>
                            </div>
                            <h2 className="text-lg font-bold text-gray-900">{MOCK_USER.firstName} {MOCK_USER.lastName}</h2>
                            <p className="text-sm text-gray-500">{MOCK_USER.location}</p>
                        </div>

                        <nav className="space-y-1">
                            <button
                                onClick={() => setActiveTab('profile')}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'profile' ? 'bg-[#FFF0F0] text-[#C62222]' : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <User size={18} />
                                My Profile
                            </button>
                            <button
                                onClick={() => setActiveTab('orders')}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'orders' ? 'bg-[#FFF0F0] text-[#C62222]' : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <ShoppingBag size={18} />
                                Orders
                            </button>
                            <button
                                onClick={() => setActiveTab('settings')}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-colors ${activeTab === 'settings' ? 'bg-[#FFF0F0] text-[#C62222]' : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <CreditCard size={18} />
                                Payments & Settings
                            </button>
                        </nav>

                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
                                <LogOut size={18} />
                                Sign Out
                            </button>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                        {activeTab === 'profile' && (
                            <div className="space-y-8">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
                                    <button className="text-sm text-[#C62222] font-medium hover:underline">Edit</button>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">First Name</label>
                                        <div className="p-3 bg-gray-50 rounded-lg text-gray-900 font-medium">{MOCK_USER.firstName}</div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Last Name</label>
                                        <div className="p-3 bg-gray-50 rounded-lg text-gray-900 font-medium">{MOCK_USER.lastName}</div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</label>
                                        <div className="p-3 bg-gray-50 rounded-lg text-gray-900 flex items-center gap-2">
                                            <Mail size={16} className="text-gray-400" />
                                            {MOCK_USER.email}
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone Number</label>
                                        <div className="p-3 bg-gray-50 rounded-lg text-gray-900 flex items-center gap-2">
                                            <Phone size={16} className="text-gray-400" />
                                            {MOCK_USER.phone}
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-gray-100">
                                    <h2 className="text-xl font-bold text-gray-900 mb-6">Address Book</h2>
                                    <div className="flex items-start gap-4 p-4 border border-[#C62222] bg-[#FFFafa] rounded-lg relative">
                                        <div className="p-2 bg-white rounded-full border border-gray-100 text-[#C62222]">
                                            <MapPin size={20} />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-gray-900">Home</p>
                                            <p className="text-sm text-gray-600 mt-1">Block 4, Flat 2, Admiralty Way, Lekki Phase 1</p>
                                            <p className="text-xs text-gray-400 mt-2">{MOCK_USER.location}</p>
                                        </div>
                                        <span className="absolute top-4 right-4 text-xs font-bold text-[#C62222] bg-[#ffeaea] px-2 py-1 rounded">
                                            Default
                                        </span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'orders' && (
                            <div>
                                <h2 className="text-xl font-bold text-gray-900 mb-6">Order History</h2>
                                <div className="space-y-4">
                                    {[1].map(i => (
                                        <div key={i} className="border border-gray-100 rounded-xl p-4 hover:border-gray-200 transition-colors">
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <p className="text-sm font-bold text-gray-900">Order #22491</p>
                                                    <p className="text-xs text-gray-500">Placed on Jan 24, 2026</p>
                                                </div>
                                                <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">Delivered</span>
                                            </div>
                                            <div className="flex items-center gap-4 py-4 border-t border-b border-gray-50 border-dashed">
                                                <div className="h-12 w-12 bg-gray-100 rounded-md"></div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-900">Spicy Chicken Wings x 2</p>
                                                    <p className="text-xs text-gray-500">Chicken Republic</p>
                                                </div>
                                            </div>
                                            <div className="flex justify-between items-center mt-4">
                                                <button className="text-sm font-medium text-[#C62222] hover:underline">Reorder</button>
                                                <p className="text-sm font-bold text-gray-900">Total: ₦ 4,500</p>
                                            </div>
                                        </div>
                                    ))}
                                    {/* Empty state placeholder if needed */}
                                    <div className="text-center py-10">
                                        <ShoppingBag className="mx-auto h-12 w-12 text-gray-200 mb-3" />
                                        <p className="text-gray-500 text-sm">No more orders to show</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === 'settings' && (
                            <div className="space-y-6">
                                <h2 className="text-xl font-bold text-gray-900">Settings</h2>

                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                                    <div className="flex items-center gap-3">
                                        <Bell className="text-gray-500" />
                                        <div>
                                            <p className="font-medium text-gray-900">Notifications</p>
                                            <p className="text-xs text-gray-500">Receive email updates on orders</p>
                                        </div>
                                    </div>
                                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                                        <input type="checkbox" defaultChecked className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-[#C62222] right-0" style={{ right: 0 }} />
                                        <label className="toggle-label block overflow-hidden h-5 rounded-full bg-[#C62222] cursor-pointer"></label>
                                    </div>
                                </div>
                            </div>
                        )}
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default UserProfile;
