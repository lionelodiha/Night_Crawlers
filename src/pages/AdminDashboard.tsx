import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Store, Package, TrendingUp, ShieldAlert, Activity, Bike, LogOut, Search, CheckCircle, X, Check, XCircle, Truck, Clock, Phone, MapPin } from 'lucide-react';
import { getCurrentAdmin, AdminAccount, getPlatformStats, PlatformStats, getSystemActivity, getPendingActions, ActivityItem, PendingItem, verifyUser, getOrderStats, getOnlineRiders, RiderAccount, getAllRiders } from '../lib/mockBackend';
import Footer from '../components/layout/Footer';

import Loader from '../components/ui/Loader';

const formatCurrency = (amount: number): string => {
    if (amount >= 1000000) {
        return `₦${(amount / 1000000).toFixed(2)}M`;
    } else if (amount >= 1000) {
        return `₦${(amount / 1000).toFixed(1)}K`;
    }
    return `₦${amount.toLocaleString()}`;
};

const AdminDashboard: React.FC = () => {
    const navigate = useNavigate();
    const [admin, setAdmin] = useState<AdminAccount | null>(null);
    const [stats, setStats] = useState<PlatformStats | null>(null);
    const [activity, setActivity] = useState<ActivityItem[]>([]);
    const [pending, setPending] = useState<PendingItem[]>([]);
    const [orderStats, setOrderStats] = useState<ReturnType<typeof getOrderStats> | null>(null);
    const [onlineRiders, setOnlineRiders] = useState<RiderAccount[]>([]);

    // Modal State
    const [selectedAction, setSelectedAction] = useState<PendingItem | null>(null);
    const [showRidersModal, setShowRidersModal] = useState(false);
    const [allRiders, setAllRiders] = useState<RiderAccount[]>([]);

    const fetchData = () => {
        setStats(getPlatformStats());
        setActivity(getSystemActivity());
        setPending(getPendingActions());
        setOrderStats(getOrderStats());
        setOnlineRiders(getOnlineRiders());
        setAllRiders(getAllRiders());
    };

    useEffect(() => {
        const currentAdmin = getCurrentAdmin();
        if (!currentAdmin) {
            navigate('/admin-login');
            return;
        }
        setAdmin(currentAdmin);
        fetchData();
    }, [navigate]);

    // Refresh stats every 5 seconds for "real-time" feel
    useEffect(() => {
        const interval = setInterval(() => {
            fetchData();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const handleLogout = () => {
        // In a real app we would clear session here
        navigate('/admin-login');
    };

    const handleProcessAction = (action: 'approve' | 'reject') => {
        if (!selectedAction) return;
        verifyUser(selectedAction.id, selectedAction.type, action);

        // Optimistic update
        setPending(prev => prev.filter(p => p.id !== selectedAction.id));
        setSelectedAction(null);
        fetchData();
    };

    if (!admin || !stats) {
        return <Loader fullScreen />;
    }

    return (
        <div className="min-h-screen bg-white flex flex-col font-poppins relative">

            {/* Admin Header */}
            <header className="bg-white border-b border-gray-100 sticky top-0 z-30">
                <div className="max-w-[1400px] mx-auto px-3 md:px-6 h-16 md:h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2 md:gap-3">
                        <div className="h-7 w-7 md:h-10 md:w-10 bg-[#C62222] text-white rounded-xl flex items-center justify-center shadow-lg shadow-gray-200">
                            <ShieldAlert size={14} className="md:hidden" />
                            <ShieldAlert size={20} className="hidden md:block" />
                        </div>
                        <div>
                            <h1 className="font-bold text-gray-900 leading-none text-xs md:text-base">Admin Console</h1>
                            <span className="text-[7px] md:text-[10px] font-semibold text-[#C62222] uppercase tracking-widest">Night Crawlers</span>
                        </div>
                    </div>

                    {/* Mobile Controls */}
                    <div className="flex items-center gap-1.5 md:hidden">
                        <div className="text-right mr-1">
                            <p className="text-[10px] font-bold text-gray-900">{admin.username}</p>
                            <p className="text-[8px] text-[#C62222] font-medium">Online</p>
                        </div>
                        <div className="h-7 w-7 bg-[#C62222] rounded-full flex items-center justify-center text-white text-[10px] font-bold border border-gray-200">
                            {admin.username.substring(0, 2).toUpperCase()}
                        </div>
                        <button
                            onClick={handleLogout}
                            className="p-1.5 bg-gray-100 rounded-lg text-gray-600 hover:bg-gray-200 transition-colors"
                        >
                            <LogOut size={16} />
                        </button>
                    </div>

                    {/* Desktop Controls */}
                    <div className="items-center gap-6 hidden md:flex">
                        <div className="relative">
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search system..."
                                className="w-64 h-10 pl-9 pr-4 bg-gray-50 border border-gray-100 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#C62222]/20 transition-all font-medium"
                            />
                        </div>

                        <div className="h-6 w-[1px] bg-gray-100"></div>

                        <div className="flex items-center gap-3">
                            <div className="text-right">
                                <p className="text-sm font-bold text-gray-900">{admin.username}</p>
                                <p className="text-[10px] text-[#C62222] font-medium bg-red-50 px-2 rounded-full inline-block">Online</p>
                            </div>
                            <div className="h-10 w-10 bg-[#C62222] rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-md">
                                {admin.username.substring(0, 2).toUpperCase()}
                            </div>
                        </div>

                        <button
                            onClick={handleLogout}
                            className="p-2 hover:bg-gray-50 rounded-lg text-gray-400 hover:text-[#C62222] transition-colors"
                        >
                            <LogOut size={20} />
                        </button>
                    </div>
                </div>
            </header>

            <main className="flex-grow w-full max-w-[1400px] mx-auto px-4 md:px-6 py-6 md:py-10">

                <div className="mb-6 md:mb-10 flex items-end justify-between">
                    <div>
                        <h2 className="text-xl md:text-2xl font-bold text-gray-900">Platform Overview</h2>
                        <p className="text-gray-500 mt-1 text-xs md:text-sm">Real-time metrics & ongoing activity</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-[10px] md:text-xs font-semibold text-gray-500 uppercase tracking-wide">Live</span>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-10">

                    {/* Revenue Card */}
                    <div className="group bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 hover:border-[#C62222]/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
                        <div className="flex justify-between items-start mb-2 md:mb-4">
                            <div className="p-2 md:p-3 bg-red-50 text-[#C62222] rounded-lg md:rounded-xl group-hover:scale-110 transition-transform">
                                <TrendingUp size={18} className="md:hidden" />
                                <TrendingUp size={24} className="hidden md:block" />
                            </div>
                            <span className="text-[10px] md:text-xs font-semibold text-gray-600 bg-gray-100 px-1.5 md:px-2 py-0.5 md:py-1 rounded-md">+12.5%</span>
                        </div>
                        <h3 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight mb-0.5 md:mb-1">{formatCurrency(stats.totalRevenue)}</h3>
                        <p className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-wider">Total Revenue</p>
                    </div>

                    {/* Vendors Card */}
                    <div className="group bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 hover:border-[#C62222]/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
                        <div className="flex justify-between items-start mb-2 md:mb-4">
                            <div className="p-2 md:p-3 bg-red-50 text-[#C62222] rounded-lg md:rounded-xl group-hover:scale-110 transition-transform">
                                <Store size={18} className="md:hidden" />
                                <Store size={24} className="hidden md:block" />
                            </div>
                        </div>
                        <div className="flex items-baseline gap-1 md:gap-2 mb-0.5 md:mb-1">
                            <h3 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight">{stats.totalVendors}</h3>
                            <span className="text-xs md:text-sm font-medium text-gray-400">/ {stats.totalStores}</span>
                        </div>
                        <p className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-wider">Vendors / Stores</p>
                    </div>

                    {/* Riders Card - With Online Status - CLICKABLE */}
                    <div
                        onClick={() => setShowRidersModal(true)}
                        className="group bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 hover:border-[#C62222]/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 cursor-pointer"
                    >
                        <div className="flex justify-between items-start mb-2 md:mb-4">
                            <div className="p-2 md:p-3 bg-red-50 text-[#C62222] rounded-lg md:rounded-xl group-hover:scale-110 transition-transform">
                                <Bike size={18} className="md:hidden" />
                                <Bike size={24} className="hidden md:block" />
                            </div>
                            {orderStats && (
                                <span className={`text-[10px] md:text-xs font-semibold px-1.5 md:px-2 py-0.5 md:py-1 rounded-md flex items-center gap-1 ${orderStats.onlineRiders > 0 ? 'text-[#C62222] bg-red-50' : 'text-gray-500 bg-gray-100'}`}>
                                    <span className={`w-1.5 h-1.5 rounded-full ${orderStats.onlineRiders > 0 ? 'bg-[#C62222] animate-pulse' : 'bg-gray-400'}`}></span>
                                    <span className="hidden sm:inline">{orderStats.onlineRiders} Online</span>
                                    <span className="sm:hidden">{orderStats.onlineRiders}</span>
                                </span>
                            )}
                        </div>
                        <div className="flex items-baseline gap-1 md:gap-2 mb-0.5 md:mb-1">
                            <h3 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight">{stats.totalRiders}</h3>
                            <span className="text-xs md:text-sm font-medium text-gray-400">riders</span>
                        </div>
                        <p className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-wider">Delivery Fleet</p>
                        <p className="text-[10px] md:text-xs text-[#C62222] mt-1 md:mt-2 opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">Click to view all riders →</p>
                    </div>

                    {/* Orders Card - With Active Orders */}
                    <div className="group bg-white p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 hover:border-[#C62222]/20 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
                        <div className="flex justify-between items-start mb-2 md:mb-4">
                            <div className="p-2 md:p-3 bg-red-50 text-[#C62222] rounded-lg md:rounded-xl group-hover:scale-110 transition-transform">
                                <Package size={18} className="md:hidden" />
                                <Package size={24} className="hidden md:block" />
                            </div>
                            {orderStats && orderStats.activeOrders > 0 && (
                                <span className="text-[10px] md:text-xs font-semibold text-white bg-[#C62222] px-1.5 md:px-2 py-0.5 md:py-1 rounded-md flex items-center gap-1">
                                    <Truck size={10} className="md:hidden" />
                                    <Truck size={12} className="hidden md:block" />
                                    <span className="hidden sm:inline">{orderStats.activeOrders} Active</span>
                                    <span className="sm:hidden">{orderStats.activeOrders}</span>
                                </span>
                            )}
                        </div>
                        <div className="flex items-baseline gap-1 md:gap-2 mb-0.5 md:mb-1">
                            <h3 className="text-xl md:text-3xl font-bold text-gray-900 tracking-tight">{orderStats?.totalOrders || stats.totalOrders}</h3>
                            {orderStats && orderStats.pendingOrders > 0 && (
                                <span className="text-[10px] md:text-sm font-medium text-gray-500">({orderStats.pendingOrders})</span>
                            )}
                        </div>
                        <p className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-wider">Total Orders</p>
                    </div>
                </div>

                {/* Order Stats Row */}
                {orderStats && (orderStats.todayOrders > 0 || orderStats.activeOrders > 0) && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-6 md:mb-10">
                        <div className="bg-[#C62222] p-3 md:p-4 rounded-lg md:rounded-xl text-white">
                            <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2">
                                <Clock size={14} className="md:hidden" />
                                <Clock size={16} className="hidden md:block" />
                                <span className="text-[10px] md:text-xs font-medium text-white/70">Today</span>
                            </div>
                            <p className="text-lg md:text-2xl font-bold">{orderStats.todayOrders}</p>
                            <p className="text-[10px] md:text-xs text-white/70">Orders</p>
                        </div>
                        <div className="bg-[#C62222] p-3 md:p-4 rounded-lg md:rounded-xl text-white border border-red-700">
                            <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2">
                                <Package size={14} className="md:hidden" />
                                <Package size={16} className="hidden md:block" />
                                <span className="text-[10px] md:text-xs font-medium text-white/90">Pending</span>
                            </div>
                            <p className="text-lg md:text-2xl font-bold">{orderStats.pendingOrders}</p>
                            <p className="text-[10px] md:text-xs text-white/90">Awaiting</p>
                        </div>
                        <div className="bg-gray-900 p-3 md:p-4 rounded-lg md:rounded-xl text-white">
                            <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2">
                                <Truck size={14} className="md:hidden" />
                                <Truck size={16} className="hidden md:block" />
                                <span className="text-[10px] md:text-xs font-medium text-white/70">Transit</span>
                            </div>
                            <p className="text-lg md:text-2xl font-bold">{orderStats.activeOrders}</p>
                            <p className="text-[10px] md:text-xs text-white/70">Delivering</p>
                        </div>
                        <div className="bg-white border border-gray-200 p-3 md:p-4 rounded-lg md:rounded-xl text-gray-600">
                            <div className="flex items-center gap-1.5 md:gap-2 mb-1 md:mb-2 text-[#C62222]">
                                <CheckCircle size={14} className="md:hidden" />
                                <CheckCircle size={16} className="hidden md:block" />
                                <span className="text-[10px] md:text-xs font-medium text-gray-500">Done</span>
                            </div>
                            <p className="text-lg md:text-2xl font-bold text-gray-900">{orderStats.completedOrders}</p>
                            <p className="text-[10px] md:text-xs text-gray-500">Delivered</p>
                        </div>
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-8">
                    {/* System Activity Feed */}
                    <div className="lg:col-span-2 bg-white rounded-xl md:rounded-2xl border border-gray-100 p-4 md:p-6 overflow-hidden relative">
                        <div className="flex justify-between items-center mb-4 md:mb-6">
                            <h3 className="font-bold text-gray-900 text-base md:text-lg">System Activity</h3>
                            <button className="text-xs md:text-sm font-medium text-[#C62222] hover:text-[#a01b1b] transition-colors">View Logs</button>
                        </div>

                        {/* Real Activity List */}
                        <div className="space-y-4 md:space-y-6 relative before:absolute before:left-[15px] md:before:left-[19px] before:top-2 before:bottom-0 before:w-[2px] before:bg-gray-100">
                            {activity.length > 0 ? (
                                activity.map((item, i) => (
                                    <div key={i} className="flex gap-3 md:gap-4 relative">
                                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full ${item.type === 'vendor' ? 'bg-[#C62222]' : item.type === 'rider' ? 'bg-black' : 'bg-gray-600'} flex items-center justify-center text-white shadow-sm flex-shrink-0 z-10 border-2 md:border-4 border-white`}>
                                            {item.type === 'vendor' && <Store size={12} className="md:hidden" />}
                                            {item.type === 'vendor' && <Store size={14} className="hidden md:block" />}
                                            {item.type === 'rider' && <Bike size={12} className="md:hidden" />}
                                            {item.type === 'rider' && <Bike size={14} className="hidden md:block" />}
                                            {item.type === 'store' && <Activity size={12} className="md:hidden" />}
                                            {item.type === 'store' && <Activity size={14} className="hidden md:block" />}
                                        </div>
                                        <div className="pt-0.5 md:pt-1 flex-1 min-w-0">
                                            <p className="font-semibold text-gray-900 text-sm md:text-base truncate">{item.message}</p>
                                            <p className="text-[10px] md:text-xs text-gray-400 mt-0.5">{item.timeAgo}</p>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="pl-10 md:pl-12 text-gray-500 text-xs md:text-sm italic py-4">
                                    No recent activity recorded.
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Pending Actions - UPDATED STYLING */}
                    <div className="bg-gradient-to-br from-[#C62222] to-[#991b1b] rounded-xl md:rounded-2xl p-4 md:p-6 text-white relative overflow-hidden flex flex-col shadow-lg shadow-red-900/20">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-5 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-black opacity-10 rounded-full -ml-10 -mb-10 blur-2xl"></div>

                        <div className="flex items-center justify-between mb-4 md:mb-6 relative z-10">
                            <div>
                                <h3 className="font-bold text-base md:text-lg leading-tight">Pending Actions</h3>
                                <p className="text-xs md:text-sm text-red-100">Requires attention</p>
                            </div>
                            <div className="bg-white/20 p-1.5 rounded-lg backdrop-blur-sm">
                                <ShieldAlert size={18} className="text-white" />
                            </div>
                        </div>

                        <div className="space-y-2 md:space-y-3 relative z-10 flex-grow">
                            {pending.length > 0 ? (
                                pending.map((item, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setSelectedAction(item)}
                                        className="bg-white border border-gray-100 flex items-center p-3 md:p-4 rounded-xl shadow-sm hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer group"
                                    >
                                        <div className={`w-10 h-10 rounded-full ${item.type === 'vendor' ? 'bg-red-50 text-[#C62222]' : 'bg-orange-50 text-orange-600'} flex items-center justify-center flex-shrink-0 mr-3`}>
                                            {item.type === 'vendor' ? <Store size={18} /> : <Bike size={18} />}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-gray-900 text-xs md:text-sm truncate">{item.title}</p>
                                            <p className="text-[10px] text-gray-500 truncate font-medium">Tap to review application</p>
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#C62222] group-hover:text-white transition-colors">
                                            <div className="md:hidden"><Check size={14} /></div>
                                            <div className="hidden md:block"><Check size={16} /></div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/20 text-center h-full flex flex-col items-center justify-center min-h-[150px]">
                                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                                        <CheckCircle size={24} className="text-white" />
                                    </div>
                                    <span className="text-sm font-bold text-white">All Caught Up!</span>
                                    <span className="text-xs text-red-100 mt-1 opacity-80">No pending approvals found.</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </main>

            {/* Action Popup Modal */}
            {selectedAction && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedAction(null)} />
                    <div className="bg-white w-full max-w-sm rounded-2xl shadow-2xl p-6 relative z-50 animate-in fade-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setSelectedAction(null)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1"
                        >
                            <X size={20} />
                        </button>

                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-1">Process Application</h3>
                            <p className="text-sm text-gray-500">{selectedAction.title}</p>
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => handleProcessAction('reject')}
                                className="flex-1 py-3 px-4 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-red-50 hover:text-[#C62222] transition-colors flex items-center justify-center gap-2"
                            >
                                <XCircle size={18} /> Reject
                            </button>
                            <button
                                onClick={() => handleProcessAction('approve')}
                                className="flex-1 py-3 px-4 bg-[#C62222] text-white font-bold rounded-xl hover:bg-[#a01b1b] transition-colors shadow-lg shadow-red-200 flex items-center justify-center gap-2"
                            >
                                <Check size={18} /> Approve
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Riders Modal */}
            {showRidersModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowRidersModal(false)} />
                    <div className="bg-white w-full max-w-2xl max-h-[80vh] rounded-2xl shadow-2xl relative z-50 animate-in fade-in zoom-in-95 duration-200 overflow-hidden flex flex-col">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Delivery Fleet</h3>
                                <p className="text-sm text-gray-500 mt-1">{allRiders.length} riders registered • <span className="text-[#C62222] font-medium">{onlineRiders.length} online</span></p>
                            </div>
                            <button
                                onClick={() => setShowRidersModal(false)}
                                className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-200 rounded-lg transition-colors"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        <div className="overflow-y-auto flex-1 p-4">
                            {allRiders.length === 0 ? (
                                <div className="text-center py-12 text-gray-500">
                                    <Bike size={48} className="mx-auto mb-4 opacity-30" />
                                    <p>No riders registered yet</p>
                                </div>
                            ) : (
                                <div className="space-y-3">
                                    {allRiders.map((rider) => (
                                        <div
                                            key={rider.id}
                                            className={`p-4 rounded-xl border ${rider.isOnline ? 'border-red-200 bg-red-50/30' : 'border-gray-100 bg-white'} transition-all`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${rider.isOnline ? 'bg-[#C62222]' : 'bg-gray-800'}`}>
                                                    {rider.firstName.charAt(0)}{rider.lastName.charAt(0)}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2">
                                                        <h4 className="font-bold text-gray-900">{rider.firstName} {rider.lastName}</h4>
                                                        {rider.isOnline && (
                                                            <span className="text-[10px] font-bold text-[#C62222] bg-red-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                                                                <span className="w-1.5 h-1.5 bg-[#C62222] rounded-full animate-pulse"></span>
                                                                ONLINE
                                                            </span>
                                                        )}
                                                        {!rider.verified && (
                                                            <span className="text-[10px] font-bold text-gray-600 bg-gray-200 px-2 py-0.5 rounded-full">
                                                                PENDING
                                                            </span>
                                                        )}
                                                        {rider.verified && (
                                                            <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                                                                <CheckCircle size={10} />
                                                                VERIFIED
                                                            </span>
                                                        )}
                                                    </div>
                                                    <div className="flex items-center gap-4 mt-1 text-sm text-gray-500">
                                                        <span className="flex items-center gap-1">
                                                            <Bike size={14} />
                                                            {rider.vehicleType}
                                                        </span>
                                                        <span className="flex items-center gap-1">
                                                            <MapPin size={14} />
                                                            {rider.location}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-4 mt-1 text-xs text-gray-400">
                                                        <span className="flex items-center gap-1">
                                                            <Phone size={12} />
                                                            {rider.phoneNumber}
                                                        </span>
                                                        <span>{rider.email}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default AdminDashboard;
