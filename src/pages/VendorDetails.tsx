import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Search, ChevronDown, Clock, Plus, Trash2, ShoppingBasket, Minus, ChevronLeft, X, UtensilsCrossed } from 'lucide-react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { useCart } from '../context/CartContext';
import pinIcon from '../assets/location-pin-red.svg';
import { VendorStore, getMenuItemsForStore, MenuItem } from '../lib/mockBackend';



const VendorDetails: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems, addToCart, removeFromCart, updateQuantity, cartTotal } = useCart();
  const [isMobileCartOpen, setIsMobileCartOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const storeState = location.state as VendorStore | undefined;
  const store: VendorStore = storeState || {
    id: 'default-store',
    vendorId: 'default-vendor',
    name: 'Amala Central Foods',
    description: 'Authentic african cuisine with a modern twist',
    address: '123 Main Street, Downtown',
    openingTime: '8:00 am - 8:00 pm',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop',
    businessType: 'Food',
    categories: [],
    createdAt: new Date().toISOString(),
    closingTime: '',
  };

  // Fetch real menu items for this store
  const menuItems = useMemo(() => getMenuItemsForStore(store.id), [store.id]);

  // Get unique categories from menu items and store categories
  const displayCategories = useMemo(() => {
    const menuCategories = menuItems.flatMap((item) => item.categories);
    const allCategories = [...store.categories, ...menuCategories];
    const uniqueCategories = [...new Set(allCategories)].filter(Boolean);
    return ['All', ...uniqueCategories];
  }, [menuItems, store.categories]);

  // Filter menu items by selected category
  const filteredMenuItems = useMemo(() => {
    if (activeCategory === 'All') return menuItems;
    return menuItems.filter((item) => item.categories.includes(activeCategory));
  }, [menuItems, activeCategory]);

  const handleAddToCart = (item: MenuItem) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.imageUrl
    });
  };

  const incrementCartItem = (id: string | number) => {
    const item = cartItems.find(i => i.id === id);
    if (item) updateQuantity(id, item.quantity + 1);
  };

  const decrementItem = (id: string | number) => {
    const item = cartItems.find(i => i.id === id);
    if (item && item.quantity > 1) {
      updateQuantity(id, item.quantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col font-poppins relative overflow-x-hidden">
      <Header onCartClick={() => setIsMobileCartOpen(true)} />

      {/* Main Content */}
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-[24px] md:px-[60px] pt-[0px] pb-[100px]">

        {/* Top Navigation Row: Search and Location */}
        <div className="flex flex-row items-center justify-between gap-[10px] md:gap-[20px] mb-[20px] sm:mb-[24px] mt-[20px] sm:mt-[24px]">
          <div className="flex-1 flex items-center h-[36px] sm:h-[40px] border border-[#D0D5DD] rounded-[6px] sm:rounded-[8px] overflow-hidden bg-white max-w-[400px]">
            <input
              type="text"
              placeholder="Search here"
              className="flex-grow h-full px-[12px] sm:px-[16px] text-[12px] sm:text-[13px] text-[#667085] bg-transparent outline-none placeholder:text-[#98A2B3]"
            />
            <button className="w-[36px] sm:w-[40px] h-full bg-[#C62222] flex items-center justify-center text-white hover:bg-[#A01B1B] transition-colors">
              <Search size={16} className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
            </button>
          </div>
          <div className="flex items-center gap-[3px] sm:gap-[4px]">
            <img src={pinIcon} alt="Location" className="w-4 h-4" />
            <span className="text-[#222222] text-[13px] sm:text-[15px] font-semibold hidden sm:inline">Nmdpra HQ</span>
            <span className="text-[#222222] text-[13px] sm:text-[15px] font-semibold sm:hidden">Address</span>
            <ChevronDown className="text-[#222222]" size={14} />
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center gap-[3px] sm:gap-[4px] text-[#667085] text-[12px] sm:text-[14px] mb-[20px] sm:mb-[24px]">
          <ChevronLeft size={12} />
          <span className="text-[#667085] font-medium cursor-pointer hover:text-[#C62222]">{store.businessType}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-[40px]">
          {/* Left Column (Banner, Info, Menu) */}
          <div className="flex-grow w-full lg:w-3/4">

            {/* Vendor Banner */}
            <div className="w-full h-[200px] sm:h-[240px] md:h-[280px] rounded-[12px] sm:rounded-[16px] overflow-hidden mb-[20px] sm:mb-[24px] relative">
              <img
                src={store.imageUrl}
                alt={store.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Vendor Info */}
            {/* Vendor Info */}
            <div className="flex flex-col gap-4 mb-[24px] sm:mb-[32px]">
              {/* Top Row: Name and Opening Time */}
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold text-[#222222] leading-tight">{store.name}</h1>
                  <p className="text-[#667085] text-[12px] sm:text-[13px] mt-1">{store.address}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="block text-[#667085] text-[10px] sm:text-[12px] mb-0.5">Opening & Closing Time</span>
                  <span className="block text-[#222222] text-[11px] sm:text-[13px] font-medium">
                    {store.closingTime ? `${store.openingTime} - ${store.closingTime}` : store.openingTime}
                  </span>
                </div>
              </div>

              {/* Bottom Row: Icons */}
              <div className="flex items-center gap-[32px] sm:gap-[40px]">
                <div className="flex flex-col items-center gap-1">
                  <Clock size={20} className="text-[#C62222] stroke-[1.5]" />
                  <span className="text-[#667085] text-[10px] sm:text-[12px]">30-45 mins</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  {/* Using a custom SVG for the scooter if possible, or a Lucide icon as fallback */}
                  <div className="text-[#C62222]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5.5 17a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm13 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                      <path d="M8 14.5h8" />
                      <path d="M16.5 14.5 14 5h-3" />
                      <path d="M6 10h1.5" />
                      <path d="M2.5 14.5H5" />
                    </svg>
                  </div>
                  <span className="text-[#667085] text-[10px] sm:text-[12px]">₦ 800</span>
                </div>
              </div>
            </div>

            {/* Menu Categories */}
            {displayCategories.length > 1 && (
              <div className="flex flex-nowrap overflow-x-auto sm:flex-wrap items-center justify-between gap-[16px] border-b border-[#EAECF0] mb-[32px] sm:mb-[40px] pb-[12px] sm:pb-[16px] scrollbar-hide">
                {displayCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-[12px] sm:text-[14px] font-medium transition-colors px-[12px] sm:px-[16px] py-[4px] sm:py-[6px] rounded-[4px] whitespace-nowrap min-w-fit text-center flex-shrink-0 ${activeCategory === cat ? 'text-[#C62222] bg-[#FEE4E2]' : 'text-[#667085] hover:text-[#222222]'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}

            {/* Menu Grid */}
            {filteredMenuItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-[60px] px-[24px] text-center">
                <div className="w-[80px] h-[80px] bg-[#FEECEC] rounded-full flex items-center justify-center mb-[16px]">
                  <UtensilsCrossed size={32} className="text-[#C62222]" />
                </div>
                <h3 className="text-[18px] font-semibold text-[#222222] mb-[8px]">
                  {menuItems.length === 0 ? 'No menu items yet' : 'No items in this category'}
                </h3>
                <p className="text-[#667085] text-[14px] max-w-[300px]">
                  {menuItems.length === 0
                    ? "This vendor hasn't added any items to their menu. Check back later!"
                    : "Try selecting a different category or 'All' to see all items."}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:gap-[20px] md:gap-[24px]">
                {filteredMenuItems.map((item) => (
                  <div key={item.id} className="flex gap-[12px] sm:gap-[16px] p-[12px] sm:p-[16px] border border-[#EAECF0] rounded-[8px] sm:rounded-[12px] bg-white hover:shadow-sm transition-shadow">
                    <img src={item.imageUrl} alt={item.name} className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] object-cover rounded-[6px] sm:rounded-[8px]" />
                    <div className="flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="text-[14px] sm:text-[16px] font-bold text-[#222222] mb-[3px] sm:mb-[4px]">{item.name}</h3>
                        <p className="text-[#667085] text-[10px] sm:text-[12px] leading-[14px] sm:leading-[18px] line-clamp-2">{item.description}</p>
                      </div>
                      <div className="flex items-center justify-between mt-[8px] sm:mt-[12px]">
                        <span className="text-[#222222] text-[12px] sm:text-[14px] font-bold">₦ {item.price.toLocaleString()}</span>
                        <button
                          onClick={() => handleAddToCart(item)}
                          className="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] bg-[#F9FAFB] rounded-full flex items-center justify-center hover:bg-[#EAECF0] transition-colors"
                        >
                          <Plus size={14} className="text-[#667085]" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Right Column: Your Order (Persistent) */}
          <div className="hidden lg:block w-full lg:w-1/4 min-w-[280px] sm:min-w-[320px]">
            <div className="bg-[#FAFAFA] rounded-[12px] sm:rounded-[16px] p-[16px] sm:p-[24px] sticky top-[100px] sm:top-[120px] flex flex-col min-h-[280px] sm:min-h-[300px] border border-[#EAECF0]">
              <div className="mb-[16px] sm:mb-[24px]">
                <h2 className="text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#222222]">Your Order</h2>
                {cartItems.length > 0 && (
                  <p className="text-[#667085] text-[12px] sm:text-[14px] mt-1">{cartItems.length} items</p>
                )}
              </div>

              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-start w-full text-center pt-4 pb-4">
                  <ShoppingBasket size={42} className="text-[#C62222] mb-[10px]" />
                  <p className="text-[#667085] text-[12px] sm:text-[13px]">Your Cart is empty</p>
                </div>
              ) : (
                <div className="w-full flex flex-col gap-[16px] sm:gap-[20px] md:gap-[24px]">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-[10px] sm:gap-[12px] w-full">
                      {/* Item Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-[48px] h-[48px] sm:w-[60px] sm:h-[60px] object-cover rounded-[6px] sm:rounded-[8px]"
                      />

                      {/* Item Details */}
                      <div className="flex-grow flex flex-col justify-between">
                        <div className="flex justify-between items-start">
                          <h3 className="text-[#222222] text-[12px] sm:text-[14px] font-bold truncate w-[100px] sm:w-[140px]">{item.name}</h3>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-[#C62222] hover:text-[#A01B1B] transition-colors"
                          >
                            <Trash2 size={12} />
                          </button>
                        </div>

                        <div className="flex flex-col gap-[6px] sm:gap-[8px]">
                          <span className="text-[#667085] text-[10px] sm:text-[12px]">₦ {item.price.toLocaleString()}</span>

                          {/* Quantity Controls */}
                          <div className="flex items-center gap-[8px] sm:gap-[12px]">
                            <button
                              onClick={() => decrementItem(item.id)}
                              className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] bg-[#F2F4F7] rounded-[3px] sm:rounded-[4px] flex items-center justify-center text-[#667085] hover:bg-[#EAECF0] transition-colors"
                            >
                              <Minus size={10} />
                            </button>
                            <span className="text-[#222222] text-[10px] sm:text-[12px] font-medium min-w-[14px] sm:min-w-[16px] text-center">{item.quantity}</span>
                            <button
                              onClick={() => incrementCartItem(item.id)}
                              className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] bg-[#F2F4F7] rounded-[3px] sm:rounded-[4px] flex items-center justify-center text-[#667085] hover:bg-[#EAECF0] transition-colors"
                            >
                              <Plus size={10} />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Footer Section */}
                  <div className="mt-[20px] sm:mt-[24px] pt-[16px] sm:pt-[24px] border-t border-[#EAECF0] w-full">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="text-[#667085] text-[10px] sm:text-[11px]">Total:</span>
                        <span className="text-[#222222] text-[12px] sm:text-[14px] font-bold">₦{cartTotal.toLocaleString()}</span>
                      </div>
                      <button
                        onClick={() => navigate('/order-summary')}
                        className="h-[28px] sm:h-[32px] px-[12px] sm:px-[16px] bg-[#C62222] text-white text-[10px] sm:text-[12px] font-medium rounded-[3px] hover:bg-[#A01B1B] transition-colors"
                      >
                        Proceed to Checkout
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Mobile Cart Drawer */}
      {isMobileCartOpen && (
        <div className="fixed inset-0 z-[80] bg-black/20 backdrop-blur-sm lg:hidden">
          <div className="absolute inset-y-0 right-0 w-full max-w-[360px] sm:max-w-[420px] bg-white shadow-[-6px_0_18px_rgba(0,0,0,0.12)]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#EAECF0]">
              <div className="flex items-center gap-2 text-[#C62222] text-[15px] font-semibold">
                Cart
                <div className="w-[18px] h-[18px] bg-[#C62222] text-white text-[11px] rounded-full flex items-center justify-center">
                  {cartItems.length}
                </div>
              </div>
              <button onClick={() => setIsMobileCartOpen(false)} className="text-[#667085] hover:text-[#222222]">
                <X size={18} />
              </button>
            </div>

            <div className="flex flex-col h-[calc(100%-52px)] px-4 py-4 overflow-y-auto">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-start h-full text-center pt-6">
                  <ShoppingBasket size={48} className="text-[#C62222] mb-2" />
                  <p className="text-[#667085] text-[12px]">Your Cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="flex flex-col gap-4">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3 border border-[#EAECF0] rounded-[8px] p-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-[52px] h-[52px] object-cover rounded-[6px]"
                        />
                        <div className="flex-1 flex flex-col gap-2">
                          <div className="flex justify-between items-start">
                            <h3 className="text-[13px] font-semibold text-[#222222] leading-tight">{item.name}</h3>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-[#C62222] hover:text-[#A01B1B]"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                          <p className="text-[#667085] text-[11px]">ƒ,İ {item.price.toLocaleString()}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <button
                                onClick={() => decrementItem(item.id)}
                                className="w-[22px] h-[22px] bg-[#F2F4F7] rounded-[4px] flex items-center justify-center text-[#667085] hover:bg-[#EAECF0]"
                              >
                                <Minus size={10} />
                              </button>
                              <span className="text-[12px] font-medium text-[#222222]">{item.quantity}</span>
                              <button
                                onClick={() => incrementCartItem(item.id)}
                                className="w-[22px] h-[22px] bg-[#F2F4F7] rounded-[4px] flex items-center justify-center text-[#667085] hover:bg-[#EAECF0]"
                              >
                                <Plus size={10} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 border-t border-[#EAECF0] pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[#667085] text-[13px]">Total:</span>
                      <span className="text-[#222222] text-[16px] font-bold">ƒ,İ{cartTotal.toLocaleString()}</span>
                    </div>
                    <button
                      onClick={() => navigate('/order-summary')}
                      className="w-full h-[40px] bg-[#C62222] text-white text-[13px] font-semibold rounded-[6px] hover:bg-[#A01B1B] transition-colors"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorDetails;
