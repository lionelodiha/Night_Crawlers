import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Trash2, Plus, Minus, CreditCard, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useCart } from '../context/CartContext';
import { createOrder } from '../lib/mockBackend';

const OrderSummary: React.FC = () => {
    const navigate = useNavigate();
    const { cartItems, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const [orderId, setOrderId] = useState<string | null>(null);
    const [deliveryAddress, setDeliveryAddress] = useState('Nmdpra HQ, 123 Main Street, Downtown');
    const [customerName, setCustomerName] = useState('Customer');
    const [customerPhone, setCustomerPhone] = useState('+234 801 234 5678');

    const deliveryFee = 800; // Mock delivery fee
    const serviceFee = Math.round(cartTotal * 0.05); // 5% service fee
    const finalTotal = cartTotal + deliveryFee + serviceFee;

    const incrementItem = (id: string | number) => {
        const item = cartItems.find(i => i.id === id);
        if (item) updateQuantity(id, item.quantity + 1);
    };

    const decrementItem = (id: string | number) => {
        const item = cartItems.find(i => i.id === id);
        if (item && item.quantity > 1) {
            updateQuantity(id, item.quantity - 1);
        }
    };

    const handlePlaceOrder = () => {
        if (cartItems.length === 0) return;

        setIsSubmitting(true);

        // Simulate payment processing delay
        setTimeout(() => {
            // Get store info from first cart item (assuming all items from same store)
            const storeId = cartItems[0]?.storeId || 'store-1';
            const storeName = cartItems[0]?.storeName || 'Restaurant';

            const order = createOrder({
                storeId,
                storeName,
                customerName,
                customerPhone,
                customerLocation: 'Lagos',
                customerAddress: deliveryAddress,
                items: cartItems.map(item => ({
                    name: item.name,
                    quantity: item.quantity,
                    price: item.price
                })),
                deliveryFee,
            });

            setOrderId(order.id);
            setOrderPlaced(true);
            setIsSubmitting(false);
            clearCart();
        }, 1500);
    };

    // Order Success Screen
    if (orderPlaced && orderId) {
        return (
            <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-poppins">
                <Header />
                <main className="flex-grow flex flex-col items-center justify-center p-4">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center max-w-md w-full">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="w-10 h-10 text-green-600" />
                        </div>
                        <h1 className="text-2xl font-bold text-[#222222] mb-2">Order Placed!</h1>
                        <p className="text-[#667085] mb-2">Your order has been sent to nearby riders.</p>
                        <p className="text-sm text-gray-500 mb-6">Order ID: <span className="font-mono font-bold">{orderId.slice(-8).toUpperCase()}</span></p>

                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 mb-6">
                            <p className="text-sm text-orange-800 font-medium">
                                🚴 A rider will accept your order soon. You'll be able to track your delivery once accepted.
                            </p>
                        </div>

                        <button
                            onClick={() => navigate('/explore')}
                            className="w-full py-3 bg-[#C62222] text-white font-medium rounded-lg hover:bg-[#A01B1B] transition-colors"
                        >
                            Continue Shopping
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (cartItems.length === 0) {
        return (
            <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-poppins">
                <Header />
                <main className="flex-grow flex flex-col items-center justify-center p-4">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center max-w-md w-full">
                        <div className="w-16 h-16 bg-[#FEECEC] rounded-full flex items-center justify-center mx-auto mb-4">
                            <CreditCard className="w-8 h-8 text-[#C62222]" />
                        </div>
                        <h1 className="text-2xl font-bold text-[#222222] mb-2">Your Cart is Empty</h1>
                        <p className="text-[#667085] mb-6">Looks like you haven't added anything to your order yet.</p>
                        <button
                            onClick={() => navigate('/explore')}
                            className="w-full py-3 bg-[#C62222] text-white font-medium rounded-lg hover:bg-[#A01B1B] transition-colors"
                        >
                            Start Exploring
                        </button>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#F9FAFB] flex flex-col font-poppins">
            <Header />

            <main className="flex-grow w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                {/* Breadcrumb / Back */}
                <button
                    onClick={() => navigate(-1)}
                    className="flex items-center gap-2 text-[#667085] hover:text-[#C62222] transition-colors mb-6 sm:mb-8 font-medium text-sm"
                >
                    <ChevronLeft size={16} />
                    Back to Menu
                </button>

                <h1 className="text-2xl sm:text-3xl font-bold text-[#222222] mb-8">Order Summary</h1>

                <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 xl:gap-24">

                    {/* Left Column: Cart Items */}
                    <div className="flex-grow space-y-6">
                        <div className="bg-white rounded-xl shadow-sm border border-[#EAECF0] overflow-hidden">
                            <div className="p-6 border-b border-[#EAECF0] flex justify-between items-center">
                                <h2 className="text-lg font-semibold text-[#222222]">Items Details</h2>
                                <button
                                    onClick={clearCart}
                                    className="text-sm text-[#C62222] hover:text-[#A01B1B] font-medium"
                                >
                                    Clear Order
                                </button>
                            </div>

                            <div className="divide-y divide-[#EAECF0]">
                                {cartItems.map((item) => (
                                    <div key={item.id} className="p-4 sm:p-6 flex gap-4 sm:gap-6 items-start hover:bg-[#FAFAFA] transition-colors">
                                        {/* Item Image */}
                                        <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="flex-grow flex flex-col justify-between min-h-[80px] sm:min-h-[96px]">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-base sm:text-lg font-bold text-[#222222] mb-1 line-clamp-2">{item.name}</h3>
                                                    <p className="text-[#C62222] font-semibold text-sm sm:text-base">
                                                        ₦ {item.price.toLocaleString()}
                                                    </p>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="text-[#98A2B3] hover:text-[#C62222] p-1 transition-colors"
                                                    aria-label="Remove item"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>

                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={() => decrementItem(item.id)}
                                                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#C62222] hover:text-[#C62222] transition-colors"
                                                    >
                                                        <Minus size={14} />
                                                    </button>
                                                    <span className="text-[#222222] font-semibold text-sm w-6 text-center">{item.quantity}</span>
                                                    <button
                                                        onClick={() => incrementItem(item.id)}
                                                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-[#C62222] hover:text-[#C62222] transition-colors"
                                                    >
                                                        <Plus size={14} />
                                                    </button>
                                                </div>
                                                <p className="text-[#222222] font-bold text-sm sm:text-base">
                                                    ₦ {(item.price * item.quantity).toLocaleString()}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Delivery Details Card */}
                        <div className="bg-white rounded-xl shadow-sm border border-[#EAECF0] p-6">
                            <h2 className="text-lg font-semibold text-[#222222] mb-4">Delivery Details</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4 p-4 bg-[#F9FAFB] rounded-lg border border-[#EAECF0]">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-[#C62222]">
                                        <MapPin size={20} />
                                    </div>
                                    <div className="flex-grow">
                                        <div className="flex justify-between items-center mb-1">
                                            <p className="text-[#222222] font-medium text-sm">Delivery Address</p>
                                            <button className="text-[#C62222] text-xs font-semibold hover:underline">Change</button>
                                        </div>
                                        <p className="text-[#667085] text-sm">
                                            Nmdpra HQ, 123 Main Street, Downtown
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 p-4 bg-[#F9FAFB] rounded-lg border border-[#EAECF0]">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm text-[#C62222]">
                                        <Clock size={20} />
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-[#222222] font-medium text-sm mb-1">Estimated Delivery Time</p>
                                        <p className="text-[#667085] text-sm">
                                            25 - 35 mins
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Checkout Summary */}
                    <div className="w-full lg:w-[380px] flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-sm border border-[#EAECF0] p-6 sticky top-24">
                            <h2 className="text-lg font-semibold text-[#222222] mb-6">Payment Summary</h2>

                            <div className="space-y-4 mb-6 border-b border-[#EAECF0] pb-6">
                                <div className="flex justify-between text-[#667085] text-sm">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-[#222222]">₦ {cartTotal.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-[#667085] text-sm">
                                    <span>Delivery Fee</span>
                                    <span className="font-medium text-[#222222]">₦ {deliveryFee.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-[#667085] text-sm">
                                    <span>Service Fee (5%)</span>
                                    <span className="font-medium text-[#222222]">₦ {serviceFee.toLocaleString()}</span>
                                </div>
                            </div>

                            <div className="flex justify-between items-center mb-8">
                                <span className="text-[#222222] font-bold text-lg">Total</span>
                                <span className="text-[#C62222] font-bold text-xl">₦ {finalTotal.toLocaleString()}</span>
                            </div>

                            <button
                                onClick={handlePlaceOrder}
                                disabled={isSubmitting}
                                className="w-full h-12 bg-[#222222] text-white font-semibold rounded-lg hover:bg-black transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 mb-4 group disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 size={18} className="animate-spin" />
                                        Processing...
                                    </>
                                ) : (
                                    <>
                                        Pay Securely
                                        <ChevronLeft size={16} className="rotate-180 group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>

                            <p className="text-xs text-[#98A2B3] text-center">
                                By processing this order you agree to our Terms and Conditions.
                            </p>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
};

export default OrderSummary;
